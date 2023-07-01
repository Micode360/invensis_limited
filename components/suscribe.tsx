import Image from "next/image";

export default function Suscribe() {
  return (
    <section className="relative flex justify-center items-center text-white bg-[#1a3b94ef] py-[3.688rem] md:py-[6.688rem] overflow-hidden">
      <div className="w-[90%] 2xl:w-[70%] flex justify-center items-center z-[1550]">
        <div className="w-full md:w-[80%]">
          <h2 className="text-[2rem] md:text-[3rem] mb-[2rem]">Stay up to date</h2>
          <div>
            <input
              className="py-[1.2rem] text-black w-full my-4 mr-4 px-[1rem] text-[1rem]"
              type="email"
              placeholder="Email Address"
            />
            <button className="py-[1.2rem] px-[1rem] bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] z-[99999]">
              Subscribe Now
            </button>
          </div>
          <div className="hidden mt-6 text-right text-yellow-500">Error message</div>
        </div>
      </div>
      <Image
        className="absolute top-[-12rem] left-[-10rem] min-w-[30rem]"
        src="/img/polygon_full.svg"
        width={135}
        height={32}
        alt="polygon"
      />

      <Image
          className="absolute bottom-[-10rem] right-[-2rem] min-w-[30rem]"
          src="/img/polygon_full.svg"
          width={135}
          height={32}
          alt="polygon"
        />
    </section>
  );
}
