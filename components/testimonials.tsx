export default function Testimonial() {
  return (
    <section className="flex flex-col items-center justify-center py-[3.688rem] md:py-[6.688rem] bg-[#f8f5f5]">
      <div className="w-[90%] 2xl:w-[70%]">
        <h2 className="pb-[10px] text-[1.125rem] font-[700] border-b-[2px] border-[#000000] w-fit pr-[10%]">
          Testimonials
        </h2>
        <div className="grid content-center lg:grid-cols-2 gap-4 w-full py-[1.688rem]">
          <div className="bg-white text-[1rem] p-[2.125rem] md:p-[3.125rem]">
            <p className="text-[0.8rem] sm:text-[1rem] leading-8 2xl:leading-[3rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              officia dolorem voluptate fugit illum ipsum error, quidem ut
              tempora unde laborum, facilis sed quibusdam temporibus incidunt ex
              doloremque reprehenderit quia?
            </p>

            <p className="text-[1rem] mt-[2rem] font-[700] ">Author</p>
          </div>

          <div className="bg-white text-[1rem] p-[2.125rem] md:p-[3.125rem]">
            <p className="text-[0.8rem] sm:text-[1rem] leading-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              officia dolorem voluptate fugit illum ipsum error, quidem ut
            </p>

            <p className="text-[1rem] mt-[2rem] font-[700] ">Author</p>
          </div>
        </div>
      </div>
    </section>
  );
}
