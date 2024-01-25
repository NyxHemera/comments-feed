export interface Comment {
  id?: number;
  name: string;
  message: string;
  created?: string;
};

const SERVER = ``; // Use ENV to pull server in higher environments


const createComment = async (comment: Comment) => { // Needs error handling
  return await fetch(new Request(`${SERVER}/createComment`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: new Headers({
      "Content-Type": "application/json",
    })
  }));
}

const getAllComments = async (): Promise<Comment[]> => { // Needs error handling
  const res = await fetch(new Request(`${SERVER}/getComments`, {
    method: "GET"
  }));

  return await res.json();
}

export {
  createComment,
  getAllComments
};