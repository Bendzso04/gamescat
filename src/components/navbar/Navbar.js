import Link from "next/link";

const Navbar = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link href="/" style={home}>
              Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/wishlist" style={wishlist}>
              Wishlist
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/addgame" style={wishlist}>
              Add Game
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const wishlist = {
  color: "white",
};

const home = {
  color: "white",
};

const headerStyle = {
  padding: "10px 20px",
  backgroundColor: "#283347",
  color: "black",
};

const navListStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  margin: "0 10px",
};

export default Navbar;
