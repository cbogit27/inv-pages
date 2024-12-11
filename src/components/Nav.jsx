"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeLink = (href) => pathname === href;

  return (
    <nav
      className={`fixed w-full z-10 top-0 transform transition-all duration-400 ease-in-out ${
        navBg ? "bg-slate-50 shadow-md" : "bg-slate-50"
      }`}
    >
      <div className="flex text-start justify-between mx-auto px-4 py-6">
        <div className="text-sm">
          <Link
            href={"/"}
            className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
              activeLink("/") ? "border-b border-emerald-800 w-fit" : ""
            }`}
          >
            Investment
            <br />
            Banking Authority
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4 lg:space-x-8">
            <li>
              <Link
                href={"/"}
                className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
                  activeLink("/")
                    ? "border-b border-emerald-800 w-fit"
                    : ""
                }`}
              >
                The Fund
              </Link>
            </li>
            <li>
              <Link
                href={"/investment"}
                className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
                  activeLink("/investment")
                    ? "border-b border-emerald-800 w-fit"
                    : ""
                }`}
              >
                Responsible Investment
              </Link>
            </li>
            <li>
              <Link
                href={"/publications"}
                className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
                  activeLink("/publications")
                    ? "border-b border-emerald-800 w-fit"
                    : ""
                }`}
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                href={"/organisation"}
                className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
                  activeLink("/organisation")
                    ? "border-b border-emerald-800 w-fit"
                    : ""
                }`}
              >
                Organisation
              </Link>
            </li>
          </ul>

          <div>Searchbar</div>

          <div>
            <h3 className="px-2 border-l border-gray-700">NG</h3>
          </div>
        </div>

        <div
          onClick={toggleNav}
          className="text-sm font-semibold flex md:hidden cursor-pointer active:border border-emerald-800/40 p-4 uppercase transform transition-all duration-500 ease-out"
        >
          menu
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`fixed flex-col shadow-sm md:hidden top-0 right-0 h-96 w-full bg-slate-50 border-b-2 py-4 text-black transition-transform duration-500 transform ${
          openNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <div className="text-sm">
          <Link
            href={"/"}
            onClick={toggleNav}
            className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
              activeLink("/") ? "border-b border-emerald-800 w-fit" : ""
            }`}
          >
            Investment<br/>Banking Authority
          </Link>
          </div>

          <div
            onClick={toggleNav}
            className="text-sm font-semibold active:border border-emerald-800/40 cursor-pointer p-4 uppercase transition-all duration-500 ease-out"
          >
            close
          </div>
        </div>

        <ul className="flex flex-col space-y-8 px-4 mt-8">
          <li>
            <Link
              href={"/"}
              onClick={toggleNav}
              className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
                activeLink("/")
                  ? "border-b border-emerald-800 w-fit"
                  : ""
              }`}
            >
              The Fund
            </Link>
          </li>
          <li>
            <Link
              href={"/investment"}
              onClick={toggleNav}
              className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
                activeLink("/investment")
                  ? "border-b border-emerald-800 w-fit"
                  : ""
              }`}
            >
              Responsible Investment
            </Link>
          </li>
          <li>
            <Link
              href={"/publications"}
              onClick={toggleNav}
              className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
                activeLink("/publications")
                  ? "border-b border-emerald-800 w-fit"
                  : ""
              }`}
            >
              Publications
            </Link>
          </li>
          <li>
            <Link
              href={"/organisation"}
              onClick={toggleNav}
              className={`text-gray-800 hover:text-green-800/50 cursor-pointer ${
                activeLink("/organisation")
                  ? "border-b border-emerald-800 w-fit"
                  : ""
              }`}
            >
              Organisation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
