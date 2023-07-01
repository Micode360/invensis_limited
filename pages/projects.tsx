import Footer from "@/components/footer";
import Header from "@/components/header";
// import Pagination from "@/components/pagination";
import Image from "next/image";
import axios from "axios";

export default function Projects({ projects }: any) {

  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative bg-[#22181C] text-white flex items-center justify-center py-[3.688rem] overflow-hidden">
        <div className="w-[90%] 2xl:w-[70%] z-[1155]">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[3vw] lg:text-[3.5vw] xl:text-[3rem] font-[700]">
            Projects
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

      {/* Projects */}
      <section className="bg-[#f8f5f5] flex items-center justify-center py-[3.688rem] md:py-[6.688rem]">
        <div className="w-[93%] 2xl:w-[70%]">
          <div className="grid md:grid-cols-2 gap-4">
            {projects.length < 1?
              <div className="col-span-2 text-center text-gray-400 w-full py-12 font-[700] text-[1.5rem]">
                 No Projects  
             </div>
            :
            projects.map((project: any) => (
              <div
                key={project.id}
                className="relative bg-white p-6 rounded-md shadow-md overflow-hidden"
              >
                <div className="mb-[2rem]">
                  <h3 className="text-[1.5rem] font-[700] mb-[1.125rem]">
                    {project.name}
                  </h3>
                  <p className="mb-[1rem] text-[#cab6b6] ">
                    {project.location}
                  </p>
                  <p>
                    {project.description}
                  </p>
                </div>
                <div className="mb-[1rem]">
                  <span>{project.duration}</span>
                </div>

                <Image
                  className="absolute bottom-[-2rem] left-0 min-w-[30rem] opacity-[0.6]"
                  src="/img/polygon_group.svg"
                  width={135}
                  height={32}
                  alt="invensis_polygon"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="text-white flex items-center justify-center py-[3.688rem] overflow-hidden">
        <div className="w-[90%] 2xl:w-[70%] flex justify-center items-center">
          {/* <Pagination /> */}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export async function getServerSideProps() {
  const response = axios.get(
    `${process.env.NEXT_PUBLIC_MAIN_URL}/api/public/projects/`
  );
  const projects = (await response).data;

  return {
    props: {
      projects: projects,
    },
  };
}
