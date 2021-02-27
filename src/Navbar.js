const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Easy LTD.</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Services">Services</a>
        <a href="/About">About</a>
        <a
          href="/Contact"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
