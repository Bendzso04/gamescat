import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-[20px] py-[10px] bg-[#283347]">
      <nav>
        <ul className="m-0 p-0 list-none flex justify-around">
          <li className="mx-2.5 my-0">
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li className="mx-2.5 my-0">
            <Link href="/wishlist" className="text-white">
              Wishlist
            </Link>
          </li>
<<<<<<< HEAD
          <li style={navItemStyle}>
            <Link href="/form" style={wishlist}>
              Add Game Form
=======
          <li className="mx-2.5 my-0">
            <Link href="/form" className="text-white">
              Form
>>>>>>> main
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
