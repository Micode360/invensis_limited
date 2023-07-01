import Image from "next/image";

export default function Header({ nav, setNav, setMinNav }: any) {
  return (
    <section className="flex justify-between items-center py-[1.125rem] px-[2.188rem]">
      <div className="text-[1.5rem] font-[700]">
        {nav.charAt(0).toUpperCase() + nav.slice(1).toLowerCase()}
      </div>

      <div className="flex items-center">
        {/* <svg
          className="mr-[1.375rem]"
          width="20"
          height="25"
          viewBox="0 0 20 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 24.5C11.375 24.5 12.5 23.375 12.5 22H7.5C7.5 23.375 8.625 24.5 10 24.5ZM17.5 17V10.75C17.5 6.9125 15.4625 3.7 11.875 2.85V2C11.875 0.9625 11.0375 0.125 10 0.125C8.9625 0.125 8.125 0.9625 8.125 2V2.85C4.55 3.7 2.5 6.9 2.5 10.75V17L0 19.5V20.75H20V19.5L17.5 17ZM15 18.25H5V10.75C5 7.65 6.8875 5.125 10 5.125C13.1125 5.125 15 7.65 15 10.75V18.25Z"
            fill="#757B8C"
          />
        </svg> */}
        <div className="w-[2.5rem] h-[2.5rem] bg-[#9e3818] text-white flex justify-center items-center text-[1.1rem] mr-[1rem] rounded-full">A</div>
         <span className="hidden md:block">Administrator</span>

        <nav className="md:hidden ml-4 w-[2.5rem] h-[2.5rem] bg-[#1e2135] text-white flex justify-center items-center text-[1.1rem] rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={()=>setMinNav("fixed")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </nav>
      </div>

      
    </section>
  );
}
