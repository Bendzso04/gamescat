import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-[20px] py-[10px] bg-[#283347] rounded-lg">
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
          <li className="mx-2.5 my-0">
            <Link href="/form" className="text-white">
              Form
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
