import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MinNav from "./minNav";

export default function Header() {
  let [menu, setMenu] = useState<any>("hidden");
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  return (
    <>
      <section className="bg-white text-[#010101] text-[0.938ren] flex justify-between items-center py-4 px-6 2xl:px-[8rem]">
        <nav>
          <Link href="/" onClick={() => setMenuStatus(true)}>
            <Image
              className="min-w-[8.438rem] "
              src="/black_logo.svg"
              width={135}
              height={32}
              alt="invensis_logo"
            />
          </Link>
        </nav>
        <nav className="hidden lg:block">
          <span className="mx-6">
            <Link
              className="hover:text-[#B53D1B]"
              href="/"
              onClick={() => setMenuStatus(true)}
            >
              Home
            </Link>
          </span>
          <span className="mx-6">
            <Link
              className="hover:text-[#B53D1B]"
              href="/about"
              onClick={() => setMenuStatus(true)}
            >
              About Us
            </Link>
          </span>
          <span className="mx-6">
            <Link
              className="hover:text-[#B53D1B]"
              href="/careers"
              onClick={() => setMenuStatus(true)}
            >
              Careers
            </Link>
          </span>
          <span className="mx-6">
            <Link
              className="hover:text-[#B53D1B]"
              href="/projects"
              onClick={() => setMenuStatus(true)}
            >
              Projects
            </Link>
          </span>
          <span className="mx-6">
            <Link
              className="hover:text-[#B53D1B]"
              href="/services"
              onClick={() => setMenuStatus(true)}
            >
              Services
            </Link>
          </span>
        </nav>
        <nav className="hidden lg:block">
          <Link
            href="/contact"
            className="flex justify-center items-center text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] py-4 px-4"
            onClick={()=>setMenuStatus(true)}
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 rotate-[310deg] ml-[1rem] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </Link>
        </nav>
        <nav className="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenu("fixed")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </nav>
        <MinNav menu={menu} setMenu={setMenu} />
      </section>

      {menuStatus === true ? (
        <div className="w-full h-1">
          <div className="w-20 rounded h-1 bg-[#df6543] transfull"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
