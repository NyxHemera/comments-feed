import './text-display.component.css'

interface props {
  children: string
};

function TextDisplay({ children }: props) {
  return (
    <p className="text-display">
        { children }
    </p>
  );
}

export default TextDisplay;