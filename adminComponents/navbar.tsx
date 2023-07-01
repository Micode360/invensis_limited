import Image from "next/image";
import Cookies from 'universal-cookie';


const cookies = new Cookies();


export default function Navbar({ setNav, minNav, setMinNav }:any) {
  
  const handleSignOut = () => {
    cookies.remove("usertkn");
    window.location.href = "/login";
  }

  return (
    <section className={`${minNav} top-0 bottom-0 left-0 bg-[#070707] text-white py-[1.438rem] pr-[1.5rem] pl-[2.188rem] md:h-[1000vh] md:block md:overflow-hidden z-[999999]`}>
        <div onClick={()=>setMinNav("hidden")} className="absolute top-4 right-[-4rem] md:right-[unset] md:left-[-6rem] bg-[#070707] p-2 rounded-lg shadow-md cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </div>
      
      
      <nav className="mb-[3.23rem] hover:text-red-300 cursor-pointer">
      <Image
          className="object-cover rounded min-w-[80px] w-[8rem]"
          src="/white_logo.svg"
          alt="img"
          width={90}
          height={36}
        />
      </nav>

      <h2 className="text-[#98A2B3] mb-[1rem]">Admin</h2>

      <nav onClick={()=>setNav("careers")} className="flex items-center mb-[0.938rem] hover:text-[#e2b5a9] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[1.2rem] h-[1.2rem] mr-[0.3rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
        Careers
      </nav>

      <nav onClick={()=>setNav("projects")} className="flex items-center mb-[0.938rem] hover:text-[#e2b5a9] cursor-pointer">
        <Image
          className="object-cover rounded min-w-[16px] mr-[0.5rem]"
          src="/img/admin/sales.svg"
          alt="img"
          width={16}
          height={36}
        />
        Projects
      </nav>


      <nav onClick={()=>setNav("applications")} className="flex items-center mb-[2.688rem] hover:text-[#e2b5a9] text-green cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[1.2rem] h-[1.2rem] mr-[0.3rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>
        Applications
      </nav>

      <h2 className="text-[#98A2B3] mb-[1rem]">Other</h2>

      <nav onClick={handleSignOut} className="flex items-center mb-[2.031rem] hover:text-[#e2b5a9] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[1.2rem] h-[1.2rem] mr-[0.3rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        Log Out
      </nav>
    </section>
  );
}
