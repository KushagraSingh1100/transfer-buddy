import logo from "@/public/Transfer buddy 2.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 px-6 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-center">
        <Image className="w-10" src={logo} alt="" />
        <h1 className="text-4xl font-semibold">Transfer Buddy</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link
              className="relative bg-linear-to-r from-current to-current bg-size-[0%_0px] bg-no-repeat bg-bottom-left transition-[background-size] duration-300 hover:bg-size-[100%_2px]"
              href="https://github.com/KushagraSingh1100/transfer-buddy"
            >
              GitHub Repository
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
