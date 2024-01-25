interface props {
  children: string
};

function Header({ children }: props) {
  return (
    <h1 className="header">
        { children }
    </h1>
  );
}

export default Header;