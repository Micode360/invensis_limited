import Footer from "@/components/footer";
import Header from "@/components/header";
import Jobs from "@/components/jobs";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";


export default function Careers({ jobs }:any) {

  return (
    <main>
      <Header />
      <section className="relative bg-[#22181C] text-white flex items-center justify-center py-[3.688rem] overflow-hidden">
        <div className="w-[90%] 2xl:w-[70%] z-[1155]">
          <h2 className="text-[2rem] w-full md:w-[50%] sm:text-[3rem] md:text-[3vw] lg:text-[3.5vw] xl:text-[3rem] font-[700] mb-8">
            Your Business and Your People are Our Focus
          </h2>
        </div>
        <Image
          className="absolute bottom-[-2rem] left-0 min-w-[30rem]"
          src="/img/polygon_group.svg"
          width={135}
          height={32}
          alt="invensis_logo"
        />
      </section>

      <section className="bg-[#f8f5f5] flex items-center justify-center py-[3.688rem] md:py-[6.688rem]">
            <div className="grid lg:grid-cols-2 gap-4 w-[90%] 2xl:w-[70%]">
                <div className="relative bg-white p-[2.125rem] md:p-[3.125rem] overflow-hidden">
                    <div>
                        <h2 className="mb-[1.5rem] text-[1.5rem] font-[700]">Experienced Professionals</h2>
                        <p className="w-[90%] mb-4 text-[0.8rem] sm:text-[1rem] leading-6 2xl:leading-[2rem]">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                        <div className="flex"><Link className="px-5 py-4 rounded-md border-[1px] border-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] hover:text-white active:text-white z-[1551]" href="/job-search">Find Jobs</Link></div>
                    </div>
                    <Image
                        className="absolute bottom-[-2rem] left-0 min-w-[30rem]"
                        src="/img/polygon_group.svg"
                        width={135}
                        height={32}
                        alt="invensis_polygon"
                    />
                </div>
                <div className="relative bg-white p-[2.125rem] md:p-[3.125rem] overflow-hidden">
                   <div>
                        <h2 className="mb-[1.5rem] text-[1.5rem] font-[700]">Students and Entry-Level</h2>
                        <p className="w-[90%] mb-4 text-[0.8rem] sm:text-[1rem] leading-6 2xl:leading-[2rem]">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                        <div className="flex"><Link className="px-5 py-4 rounded-md border-[1px] border-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] hover:text-white active:text-white z-[1551]" href="/job-search">Find Jobs</Link></div>
                   </div>
                   <Image
                        className="absolute bottom-[-2rem] left-0 min-w-[30rem]"
                        src="/img/polygon_group.svg"
                        width={135}
                        height={32}
                        alt="invensis_polygon"
                    />
                </div>
            </div>
      </section>

      <section className="bg-[#f8f5f5] flex justify-center pb-[3.688rem] md:pb-[6.688rem]">
      <div className="w-[90%] 2xl:w-[70%] mb-4">
          <div className="flex items-center justify-center"><h2 className="mb-8 font-[700] text-[1.8rem] border-l-[8px] border-[#B53D1B] pl-4 w-fit">Recent Jobs</h2></div>
          <Jobs jobs={jobs} title={""} location={""} />
       </div>
      </section>
      <section className="flex justify-center py-[3.688rem]">
      <div className="w-[90%] 2xl:w-[70%] mb-4">
          <div className="flex items-center justify-center"><Link className="px-5 py-4 rounded-md border-[1px] border-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] hover:text-white active:text-white" href="/job-search">View More</Link></div>
       </div>
      </section>
      <Footer />
    </main>
  );
}


export async function getServerSideProps() {
  const response = axios.get(
    `${process.env.NEXT_PUBLIC_MAIN_URL}/api/public/career`
  );
  const jobs = (await response).data;

  return {
    props: {
      jobs:jobs,
    },
  };
}