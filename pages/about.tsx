import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonial from "@/components/testimonials";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative bg-[#22181C] text-white flex items-center justify-center py-[3.688rem] overflow-hidden">
        <div className="w-[90%] 2xl:w-[70%] z-[1155]">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[3vw] lg:text-[3.5vw] xl:text-[3rem] font-[700]">
            About Us
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

      {/* About Us */}
      <section className="flex items-center justify-center py-[3.688rem] md:py-[6.688rem] 2xl:py-[8.688rem]">
        <div className="w-[90%] 2xl:w-[70%]">
          <div className="md:w-[50%] mb-[3rem]">
            <h2 className="text-[6.8vw] sm:text-[3.8vw] xl:text-[3rem] mb-6 font-[700] border-l-[8px] border-[#B53D1B] pl-4">
              Our History
            </h2>
            <p>
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl. Forem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
              efficitur neque. Ut diam quam, semper iaculis condimentum ac,
              vestibulum eu nisl.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="flex mt-[10%]">
              <div className="w-full relative">
                <Image
                  className="w-full md:w-[90%] mb-10 rounded-md shadow-xl"
                  src="/img/home/34356778984342343663.jpg"
                  width={135}
                  height={32}
                  alt="invensis_logo"
                />
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-[6.8vw] sm:text-[3.8vw] xl:text-[3rem] mb-6 font-[700] border-l-[8px] border-[#B53D1B] pl-4">
                  Mission Statement
                </h2>
                <p>
                  Researching and deploying the most relevant and novel
                  solutions for: Engineering, HR Management, IT/Telecoms,
                  Construction, Consulting and Project Management, Procurement
                  and Branding in our sectors of operation.
                </p>
              </div>

              <div>
                <h2 className="text-[6.8vw] sm:text-[3.8vw] xl:text-[3rem] mb-6 font-[700] border-l-[8px] border-[#B53D1B] pl-4">
                  Corporate Philosophy
                </h2>
                <p>
                  Invensis Technologies Synergy Limited is a versatile
                  technology company that provides sustainable solutions to
                  various industries. We offer services ranging from oil and
                  gas, design, construction, project management, HR management,
                  consulting, procurement, company branding, and information
                  technology/telecoms. Our team is always inventing
                  possibilities and creating solutions that are knowledge-based,
                  ideas-driven, and dynamic. We value Nimbleness, Innovation,
                  Customer-centricity, and Excellence (NICE) in all aspects of
                  our work, ensuring the highest quality standards and excellent
                  customer service. We take pride in our experienced and highly
                  intellectual workforce, who are dedicated to delivering
                  quality results on time and within budget. Our goal is to meet
                  our clients&apos; needs and improve their company&apos;s
                  workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Footer />
    </main>
  );
}
