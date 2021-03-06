import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Easy Solution Info Tech LTD.</h1>
      </Link>
      {/* <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="image test" /> */}

      <div className="links">
        {/* <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a
          href="/contact"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Contact
        </a> */}

        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link
          to="/contact"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
