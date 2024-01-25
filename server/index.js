const express = require('express');
const bodyParser = require('body-parser');

const DataAccessObject = require('./dataAccessObject');
const Comment = require('./comment');

const app = express();
const port = process.env.PORT || 3001;

const expressWs = require('express-ws')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataAccessObject = new DataAccessObject('./database.sqlite3');
const comment = new Comment(dataAccessObject);

comment.createTable().catch(error => {
  console.log(`Error: ${JSON.stringify(error)}`);
});

app.post('/createComment', function(request, response) {
  const { body } = request; // We should be doing validation on the request
  comment.createComment(body).then(async result => {
    const savedComment = await comment.getComment(result.id);
    broadcastNewComment(savedComment);
    response.send(savedComment);
  });
});

const broadcastNewComment = (comment) => { // Sends comments to all users
  expressWs.getWss().clients.forEach((client) => { // Given more time, I'd like to filter out the client list to not send this to the person who made the comment
    client.send(JSON.stringify(comment));
  });
}

app.get('/getComment', function(request, response) {
  const { body } = request;
  const { id } = body;
  comment.getComment(id).then(result => {
    response.send(result);
  });
});

app.get('/getComments', function(request, response) {
  comment.getComments().then(result => {
    response.send(result);
  });
});

app.get('/deleteComments', function(request, response) {
  comment.deleteComments().then(result => {
    response.send(result);
  });
});

app.ws('/commentWS', function(ws, req) { // Initializes the websocket endpoint, all communication happens in broadcastNewComment
  console.log('New WS Connection');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  const rootDir = __dirname.replace('/server', '');
  response.sendFile(`${rootDir}/public/index.html`);
});
