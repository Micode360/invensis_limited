import Footer from "@/components/footer";
import Header from "@/components/header";
import Suscribe from "@/components/suscribe";
import Testimonial from "@/components/testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative bg-[#22181C] flex items-center justify-center overflow-hidden">
        <div className="z-[1550] flex flex-col justify-center items-center md:grid md:grid-cols-2 w-[90%] 2xl:w-[70%] text-white py-[3.75rem] md:py-[9.75rem]">
          <div className="flex items-center">
            <div className="text-center md:text-left">
              <h2 className="text-[2rem] sm:text-[3rem] md:text-[3vw] lg:text-[3.5vw] xl:text-[3rem] font-[700] mb-8">
                Building a Better Future with Innovative Technology Services
              </h2>
              <div className="flex justify-center md:block">
                <Link
                  href="/contact"
                  className="flex justify-center items-center bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] py-3 px-4 w-fit"
                >
                  Send us a message
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              className="w-[80%] mt-[4rem] md:mt-0"
              src="/img/house_plan.svg"
              width={135}
              height={32}
              alt="invensis_logo"
            />
          </div>
        </div>

        
        <Image
          className="absolute bottom-0 left-0 min-w-[30rem]"
          src="/img/polygon_group.svg"
          width={135}
          height={32}
          alt="invensis_polygon"
        />
        <Image
          className="absolute top-[-50px] right-[-50px] min-w-[15rem]"
          src="/img/blue_subtract.svg"
          width={135}
          height={32}
          alt="invensis_blue-subtract"
        />
      </section>

      {/* Sponsors */}

      <section className="flex flex-col items-center justify-center py-10 2xl:py-[6rem] px-6">
        <h2 className="py-2 mb-10 md:mb-6 font-[700] text-[1.5rem] text-center">
          Trusted by International Giants
        </h2>
        <div className="grid grid-cols-2 content-center gap-[20vw] md:gap-0 md:flex items-center md:w-[80%] 2xl:w-[70%] md:justify-between">
          <Image
            className="w-[5.5rem] opacity-[0.55] "
            src="/img/home/sponsors/shell-logo-black-and-white.svg"
            width={135}
            height={32}
            alt="invensis_shell_logo"
          />

          <Image
            className="w-[5.5rem] opacity-[0.55] "
            src="/img/home/sponsors/gazprom-5-logo-png-transparent.svg"
            width={135}
            height={32}
            alt="invensis_gazprom_logo"
          />

          <Image
            className="w-[5.5rem] opacity-[0.55] "
            src="/img/home/sponsors/chevron-logo-black-and-white.svg"
            width={135}
            height={32}
            alt="invensis_chevron_logo"
          />

          <Image
            className="w-[5.5rem] opacity-[0.55] "
            src="/img/home/sponsors/total-logo-black-and-white.svg"
            width={135}
            height={32}
            alt="invensis_total_logo"
          />

          <Image
            className="w-[5.5rem] opacity-[0.55] "
            src="/img/home/sponsors/statoil-logo-black-and-white.svg"
            width={135}
            height={32}
            alt="invensis_statoil_logo"
          />
        </div>
      </section>

      {/*About Us */}
      <section className="relative flex justify-center items-center text-white bg-[#f0572d] py-[6.688rem] 2xl:py-[8.688rem] overflow-hidden">
        <div className="grid md:grid-cols-4 w-[90%] 2xl:w-[70%] z-[1550]">
          <div className="col-span-3 lg:col-span-2">
            <h2 className="text-[2rem] sm:text-[3rem] mb-[2rem]">This is who we are</h2>
            <p className="text-[0.8rem] md:text-[1rem] leading-8 2xl:leading-[3rem]">
              Invensis Limited is a flexible technology company that focuses on
              creating sustainable operational systems for society. We offer a
              wide range of services including oil and gas, infrastructure
              design, construction, and maintenance, as well as company branding
              and information technology.
            </p>
          </div>
          <div></div>
        </div>
        <Image
          className="absolute bottom-0 left-0 min-w-[30rem]"
          src="/img/polygon_group.svg"
          width={135}
          height={32}
          alt="polygon"
        />
        <Image
          className="absolute top-0 right-[-2rem] min-w-[30rem]"
          src="/img/polygon_full.svg"
          width={135}
          height={32}
          alt="polygon"
        />
      </section>

      {/*Core values*/}
      <section className="flex flex-col justify-center items-center py-[3.688rem] md:py-[6.688rem]">
        <div className="w-[90%] 2xl:w-[70%] text-center">
          <div className="flex items-center justify-center"><h2 className="mb-8 font-[700] text-[1.8rem] border-l-[8px] border-[#B53D1B] pl-4 w-fit">Our Core Values</h2></div>
          <p className="mb-[3rem]">
            Our core values express our uncompromised principles to achieving
            highest standards for quality and safety as well as maintain
            excellence customer service delivery.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-full md:w-[60%] 2xl:w-[40%] ">
          <div className="w-[13rem] flex flex-col justify-center items-center mx-4 mb-10 md:mb-4">
            <div className="w-[10rem] h-[10rem] mb-4 bg-red-700 text-white text-[Libre Franklin] font-[700] text-[8rem] flex justify-center items-center rounded-md">
              N
            </div>
            <h2 className="font-[700] text-[1rem] mb-4">Nimbleness</h2>
            <p className="text-center">
              We value agility and flexibility, empowering our employees to take
              risks and find creative solutions.
            </p>
          </div>

          <div className="w-[13rem] flex flex-col justify-center items-center mx-4 mb-10 md:mb-4">
            <div className="w-[10rem] h-[10rem] mb-4 bg-red-700 text-white text-[Libre Franklin] font-[700] text-[8rem] flex justify-center items-center rounded-md">
              I
            </div>
            <h2 className="font-[700] text-[1rem] mb-4">Innovation</h2>
            <p className="text-center">
              We are committed to pushing the boundaries of what is possible and
              fostering a culture of experimentation.
            </p>
          </div>

          <div className="w-[13rem] flex flex-col justify-center items-center mx-4 mb-10 md:mb-4">
            <div className="w-[10rem] h-[10rem] mb-4 bg-red-700 text-white text-[Libre Franklin] font-[700] text-[8rem] flex justify-center items-center rounded-md">
              C
            </div>
            <h2 className="font-[700] text-[1rem] mb-4">Costumer-centric</h2>
            <p className="text-center">
              We put our customers first, building long-term relationships and
              providing reliable service.
            </p>
          </div>

          <div className="w-[13rem] flex flex-col justify-center items-center mx-4 mb-10 md:mb-4">
            <div className="w-[10rem] h-[10rem] mb-4 bg-red-700 text-white text-[Libre Franklin] font-[700] text-[8rem] flex justify-center items-center rounded-md">
              E
            </div>
            <h2 className="font-[700] text-[1rem] mb-4">Excellence</h2>
            <p className="text-center">
              We strive for excellence, setting high standards and continuously
              improving to deliver quality work.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[#f8f5f5] flex flex-col items-center justify-center py-[3.688rem] md:py-[6.688rem]">
      <div className="flex items-center justify-center"><h2 className="mb-8 font-[700] text-[1.8rem] border-l-[8px] border-[#B53D1B] pl-4 w-fit">What we do</h2></div>

        <div className="w-[90%] 2xl:w-[70%] grid grid-cols-2 text-white gap-4">
          <div className="col-span-2 bg-[url('/img/home/frame1.svg')] bg-cover bg-center grid1 rounded-md py-6 px-4 md:py-10 md:px-6">
            <div className="z-40">
              <h2 className="z-20 text-[1rem] md:text-[1.4rem] mb-[2rem] font-[700] ">
                Engineering, Procurement & Construction
              </h2>

              <ul className="list-disc ml-5">
                <li className="mb-[1.5rem] w-[60%] text-[0.8rem] md:text-[1rem]">
                  Multidisciplinary Facilities Design and Studies/Front End
                  Engineering Design (Feed), Civil (Roads & Bridges) Design,
                  Floods and Erosion Control/Design.
                </li>
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Project and Construction Management.
                </li>
                <li className="mb-[2.5rem] text-[0.8rem] md:text-[1rem]">
                  Procurement Services.
                </li>
              </ul>

              <div>
                <Link
                  className="flex justify-center items-center text-white bg-[#B53D1B] rounded-[4px] w-fit py-4 px-4"
                  href="/services"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>


          <div className="col-span-2 md:col-span-1 bg-[url('/img/home/frame2.svg')] bg-cover bg-center rounded-md py-6 px-4 md:py-10 md:px-6">
            <div className="z-40">
              <h2 className="z-20 text-[1rem] md:text-[1.4rem] mb-[2rem] font-[700] ">
              Information and Communication Technology
              </h2>

              <ul className="list-disc ml-5">
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  IT Support Services.
                </li>
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Software Development.
                </li>
                <li className="mb-[2.5rem] text-[0.8rem] md:text-[1rem]">
                  Procurement of Hardware
                </li>
                <li className="mb-[2.5rem] text-[0.8rem] md:text-[1rem]">
                  Digital Marketing
                </li>
              </ul>

              <div>
                <Link
                  className="flex justify-center items-center text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] w-fit py-4 px-4"
                  href="/services"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>





          <div className="col-span-2 md:col-span-1 bg-[url('/img/home/frame3.svg')] bg-cover bg-center rounded-md py-6 px-4 md:py-10 md:px-6">
            <div className="z-40">
              <h2 className="z-20 text-[1rem] md:text-[1.4rem] mb-[2rem] font-[700] ">
                  Catering Services
              </h2>

              <ul className="list-disc ml-5">
                <li className="mb-[1.5rem] text-[1rem]">
                  Recruitment and Manpower supply (Outsourcing Services)
                </li>
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Onshore/Offshore Catering
                </li>
                <li className="mb-[2.5rem] text-[0.8rem] md:text-[1rem]">
                  Procurement of Hardware
                </li>
                <li className="mb-[2.5rem] text-[0.8rem] md:text-[1rem]">
                  Digital Marketing
                </li>
              </ul>

              <div>
                <Link
                  className="flex justify-center items-center text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] w-fit py-4 px-4"
                  href="/services"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-[url('/img/home/frame4.svg')] bg-cover bg-center grid1 rounded-md py-6 px-4 md:py-10 md:px-6">
            <div className="z-40">
              <h2 className="z-20 text-[1rem] md:text-[1.4rem] mb-[2rem] font-[700] ">
                Marine Services
              </h2>

              <ul className="list-disc ml-5">
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Branding and Publicity
                </li>
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Digital Marketing
                </li>
                <li className="mb-[2.5rem] text-[0.8rem] md:text-[1rem]">
                  Graphic Design and Animation
                </li>
              </ul>

              <div>
                <Link
                  className="flex justify-center items-center text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] w-fit py-4 px-4"
                  href="/services"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>



          
          <div className="col-span-2 md:col-span-1 bg-[url('/img/home/frame5.svg')] bg-cover bg-center rounded-md py-6 px-4 md:py-10 md:px-6">
            <div className="z-40">
              <h2 className="z-20 text-[1rem] md:text-[1.4rem] mb-[2rem] font-[700] ">
                  Human Resources
              </h2>

              <ul className="list-disc ml-5">
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Recruitment and Manpower supply (Outsourcing Services)
                </li>
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Human Capital Development and Training
                </li>
              </ul>

              <div>
                <Link
                  className="flex justify-center items-center text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] w-fit py-4 px-4"
                  href="/services"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 bg-[url('/img/home/frame6.svg')] bg-cover bg-center rounded-md py-6 px-4 md:py-10 md:px-6">
            <div className="z-40">
              <h2 className="z-20 text-[1rem] md:text-[1.4rem]] mb-[2rem] font-[700] ">
                Branding and Design
              </h2>

              <ul className="list-disc ml-5">
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Branding and Publicity
                </li>
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Digital Marketing
                </li>
                <li className="mb-[1.5rem] text-[0.8rem] md:text-[1rem]">
                  Graphic Design and Animation
                </li>
              </ul>

              <div>
                <Link
                  className="flex justify-center items-center text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] w-fit py-4 px-4"
                  href="/services"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>


       {/*Why choose Us */}
       <section className="relative flex justify-center items-center text-white bg-[#22181C] py-[3.688rem] md:py-[6.688rem] 2xl:py-[8.688rem] overflow-hidden">
        <div className="grid md:grid-cols-4 w-[90%] 2xl:w-[70%] z-[1550]">
          <div className="col-span-3 lg:col-span-2">
            <h2 className="text-[2rem] sm:text-[3rem] mb-[2rem]">Why You Should Choose Us</h2>
            <p className="text-[0.8rem] md:text-[1rem] leading-8 2xl:leading-[3rem]">
              At our company, we believe in building high value, meaningful, long-term relationships with our clients. We are passionate about what we do and our commitment to innovation and continuous improvement shows in our work. Our team is result-oriented and dedicated to delivering human-centric solutions that exceed your expectations.
            </p>
          </div>
          <div></div>
        </div>
        <Image
          className="absolute bottom-0 left-0 min-w-[30rem]"
          src="/img/polygon_group.svg"
          width={135}
          height={32}
          alt="polygon"
        />
        <Image
          className="absolute top-0 right-[-2rem] min-w-[30rem]"
          src="/img/polygon_full.svg"
          width={135}
          height={32}
          alt="polygon"
        />
      </section>

      <Testimonial/>
      <Suscribe/>
      <Footer />
    </main>
  );
}
