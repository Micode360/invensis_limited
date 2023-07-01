import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative bg-[#22181C] text-white flex items-center justify-center py-[3.688rem] overflow-hidden">
        <div className="w-[90%] 2xl:w-[70%] z-[1155]">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[3vw] lg:text-[3.5vw] xl:text-[3rem] font-[700]">
            Services
          </h2>
        </div>
        <Image
          className="absolute top-[-2rem] left-0 min-w-[30rem]"
          src="/img/polygon_group.svg"
          width={135}
          height={32}
          alt="invensis_logo"
        />
      </section>

      <section className="flex items-center justify-center pt-[3.688rem] md:pt-[6.688rem] 2xl:pt-[8.688rem] overflow-hidden">
        <div className="w-[90%] md:w-[80%] 2xl:w-[70%]">
          <div className=" grid md:grid-cols-2 md:gap-4 md:mb-[3rem]">
            <div className="relative flex justify-center md:block">
              <Image
                className="w-[80%] md:w-[90%] mb-10 rounded-md shadow-xl"
                src="/img/service/team.svg"
                width={135}
                height={32}
                alt="invensis_logo"
              />
              <div
                className="hidden md:block w-0 h-0 
                  border-t-[180px] border-t-transparent
                  border-r-[175px] border-r-[#B53D1B]
                  border-b-[170px] border-b-transparent
                  absolute top-[-9rem] left-[12%] md:left-[-3rem]
                  rotate-[46deg] z-[-1]"
              ></div>
            </div>
            <div className="mb-[3rem] md:pt-[6rem]">
              <h2 className="text-[6.8vw] sm:text-[3.8vw] xl:text-[3rem] mb-6 font-[700] border-l-[8px] border-[#B53D1B] pl-4">
                Our Expertise and Capabilities
              </h2>
              <p className="text-[0.8rem] md:text-[1rem] leading-8 mb-6">
                Invensis is a team of experienced professionals specializing in
                various aspects of project management and infrastructure
                development. With a focus on both urban and rural areas, we
                offer a wide range of services to meet the needs of developing
                countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white flex items-center justify-center py-[3.688rem] md:py-[6.688rem] 2xl:py-[8.688rem] relative overflow-hidden">
        <div className="w-[90%] z-[1551] md:w-[80%] 2xl:w-[70%]">
          <div className=" grid md:grid-cols-2 md:gap-6">
            <div>
              <p className="text-[0.8rem] md:text-[1rem] leading-8 mb-6">
                Our expertise covers feasibility studies, planning, design, and
                project management. We handle projects from the initial stages
                of pre-design studies and feasibility assessments to the
                preparation of detailed engineering drawings and the supervision
                of project implementation. Our services extend to civil
                infrastructure projects, as well as Oil & Gas projects.
              </p>
              <p className="text-[0.8rem] md:text-[1rem] leading-8 mb-6">
                As a trusted partner, we provide project supervision to a
                diverse client base including government agencies, international
                oil companies, non-governmental organizations, and foreign
                companies. We pride ourselves on maintaining strong
                relationships and prioritize customer satisfaction in all
                aspects of our work.
              </p>
            </div>

            <div className="relative">
              <div className="z-[91551]">
                <Image
                  className="w-full mb-10 rounded-md shadow-xl"
                  src="/img/service/plan.svg"
                  width={135}
                  height={32}
                  alt="invensis_logo"
                />
              </div>
              <div
                className="hidden md:block w-0 h-0 
                    border-t-[180px] border-t-transparent
                    border-r-[175px] border-r-[#B53D1B]
                    border-b-[170px] border-b-transparent
                    absolute top-[-8rem] right-[-3rem]
                    rotate-[136deg] z-[-1]"
              ></div>
            </div>
          </div>
        </div>

        <Image
          className="absolute top-[-2rem] right-0 min-w-[30rem]"
          src="/img/curvy_lines.svg"
          width={135}
          height={32}
          alt="invensis_logo"
        />
      </section>

      <section className="flex items-center justify-center pt-[3.688rem] md:pt-[6.688rem] mb-4 2xl:pt-[8.688rem]">
        <div className="w-[90%] md:w-[80%] 2xl:w-[70%]">
          <div className=" mb-[3rem]">
            <p className="text-[0.8rem] md:text-[1rem] leading-8 mb-6">
              Through our extensive network, we can tap into additional
              resources to meet unique project demands. Our commitment to
              excellence drives us to deliver high-quality services and ensure
              the success of every project we undertake.
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center pb-[3.688rem] md:pb-[6.688rem] 2xl:pb-[8.688rem]">
        <div className="w-[90%] md:w-[80%] 2xl:w-[70%] grid md:grid-cols-2 gap-[5rem]">
          <div>
            <h2 className="text-[6.8vw] text-[#b11717] sm:text-[3.8vw] xl:text-[3rem] pb-2">
              <span className="font-[700]">EPC</span> Services
            </h2>
            <p className="text-[1rem] md:text-[1.2rem] mb-1">
              Engineering, Procurement & Construction
            </p>
            <hr className="border-[#B53D1B] mb-10" />

            <div className="flex mb-6">
              <div className="w-[40px] text-[#b11717]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>
                Multidisciplinary Facilities Design and Studies/Front End
                Engineering Design (Feed), Civil (Roads & Bridges) Design,
                Floods and Erosion Control/Design.
              </p>
            </div>

            <div className="flex mb-6">
              <div className="w-[40px] text-[#b11717]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Project and Construction Management.</p>
            </div>

            <div className="flex mb-4">
              <div className="w-[40px] text-[#b11717]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Procurement Services.</p>
            </div>
          </div>

          <div>
            <h2 className="text-[6.8vw] text-[#1241a5] sm:text-[3.8vw] xl:text-[3rem] pb-2">
              <span className="font-[700]">ICT</span> Services
            </h2>
            <p className="text-[1rem] md:text-[1.2rem] mb-1">
              Information and Communication Technology
            </p>
            <hr className="border-[#1241a5] mb-10" />

            <div className="flex mb-6">
              <div className="w-[40px] text-[#1241a5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>IT Support Services.</p>
            </div>

            <div className="flex mb-6">
              <div className="w-[40px] text-[#1241a5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Software Development.</p>
            </div>

            <div className="flex mb-4">
              <div className="w-[40px] text-[#1241a5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Procurement of Hardware</p>
            </div>

            <div className="flex mb-4">
              <div className="w-[40px] text-[#1241a5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Digital Marketing</p>
            </div>
          </div>

          <div>
            <h2 className="text-[6.8vw] text-[#cc8b12] sm:text-[3.8vw] xl:text-[3rem] pb-2">
              <span className="font-[700]">Marine</span> Services
            </h2>
            <hr className="border-[#cc8b12] mb-10" />

            <div className="flex mb-6">
              <div className="w-[40px] text-[#cc8b12]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Branding and Publicity</p>
            </div>

            <div className="flex mb-6">
              <div className="w-[40px] text-[#cc8b12]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Digital Marketing</p>
            </div>

            <div className="flex mb-4">
              <div className="w-[40px] text-[#cc8b12]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Graphic Design and Animation</p>
            </div>
          </div>

          <div>
            <h2 className="text-[6.8vw] text-[#1e8111] sm:text-[3.8vw] xl:text-[3rem] pb-2">
              <span className="font-[700]">Human</span> Resources
            </h2>
            <p className="text-[1rem] md:text-[1.2rem] mb-1">
              Human Resources/Manpower Supply Services
            </p>
            <hr className="border-[#1e8111] mb-10" />

            <div className="flex mb-6">
              <div className="w-[40px] text-[#1e8111]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Recruitment and Manpower supply (Outsourcing Services)</p>
            </div>

            <div className="flex mb-6">
              <div className="w-[40px] text-[#1e8111]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Human Capital Development and Training</p>
            </div>
          </div>

          <div>
            <h2 className="text-[6.8vw] text-[#541181] sm:text-[3.8vw] xl:text-[3rem] pb-2">
              <span className="font-[700]">Brannding</span> and Design
            </h2>
            <hr className="border-[#541181] mb-10" />

            <div className="flex mb-6">
              <div className="w-[40px] text-[#541181]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Branding and Publicity</p>
            </div>

            <div className="flex mb-6">
              <div className="w-[40px] text-[#541181]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Digital Marketing</p>
            </div>

            <div className="flex mb-6">
              <div className="w-[40px] text-[#541181]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <p>Graphic Design and Animation</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-[url('/img/service/road225.svg')] bg-cover bg-center py-[3.688rem] md:py-[6.688rem] 2xl:py-[8.688rem]">
        <div className="w-[90%] md:w-[80%] 2xl:w-[70%] flex flex-col justify-center items-center text-white">
          <p className="text-[1rem] md:text-[1.5rem] leading-[2.5rem] mb-4 text-center">
            Contact us today to discuss how our services can meet your specific
            needs and bring your projects to life. Our team is ready to
            collaborate with you and provide tailored solutions that drive
            success.
          </p>
          <div className="flex items-center justify-center">
            <Link
              className="px-5 py-4 rounded-md border-[1px] bg-[#B53D1B] border-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] hover:text-white active:text-white"
              href="/contact"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
