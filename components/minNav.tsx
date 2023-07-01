import Link from "next/link";

export default function MinNav({ menu, setMenu }: any) {
  return (
    <section
      className={`${menu} lg:hidden top-0 left-0 right-0 bottom-0 bg-[#0000002c] z-[999999]`}
    >
      <div className="bg-white absolute top-0 left-0 md:left-[50%] right-0 bottom-0 px-6 2xl:px-[8rem] py-8">
        <div
          onClick={() => setMenu("hidden")}
          className="absolute top-4 right-[2rem] md:right-[unset] md:left-[-6rem] bg-white p-2 rounded-lg shadow-md border-[1px] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <nav className="mb-6 flex flex-col">
          <span className="py-6 border-b-[1px] border-[#b53c1b75]">
            <Link
              className="hover:text-[#B53D1B] font-[700] text-[1.2rem]"
              href="/"
            >
              Home
            </Link>
          </span>
          <span className="py-6 border-b-[1px] border-[#b53c1b75]">
            <Link
              className="hover:text-[#B53D1B] font-[700] text-[1.2rem]"
              href="/about"
            >
              About Us
            </Link>
          </span>
          <span className="py-6 border-b-[1px] border-[#b53c1b75]">
            <Link
              className="hover:text-[#B53D1B] font-[700] text-[1.2rem]"
              href="/careers"
            >
              Careers
            </Link>
          </span>
          <span className="py-6 border-b-[1px] border-[#b53c1b75]">
            <Link
              className="hover:text-[#B53D1B] font-[700] text-[1.2rem]"
              href="/projects"
            >
              Projects
            </Link>
          </span>
          <span className="py-6 border-b-[1px] border-[#b53c1b75]">
            <Link
              className="hover:text-[#B53D1B] font-[700] text-[1.2rem]"
              href="/services"
            >
              Services
            </Link>
          </span>
        </nav>
        <nav className="mb-6">
          <Link
            href="/contact"
            className="flex justify-center w-fit items-center text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] py-4 px-4"
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
      </div>
    </section>
  );
}
