"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainRoutes = [
  { path: "/", name: "Top Games" },
  {
    path: "/wishlist",
    name: "My Wishlist",
  },
  {
    path: "/form",
    name: "Add Games",
  },
  {
    path: "/admin",
    name: "Admin Page",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="px-[20px] py-[10px] bg-[#283347] rounded-lg">
      <nav>
        <ul className="m-0 p-0 list-none flex justify-around">
          {mainRoutes.map(({ path, name }) => {
            return (
              <li key={path}>
                <Link
                  className={`py-3 px-5 text-center ${
                    pathname === path ? "bg-gray-800" : ""
                  } hover:bg-gray-800 rounded-md w-[90%] transition `}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
