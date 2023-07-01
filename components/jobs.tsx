import { useState } from "react";
import Image from "next/image";
import { FormatDate } from "./date_format";
import JobDescription from "./job_description";
import ReactMarkdown from "react-markdown"

export default function Jobs({ jobs, title, location }: any) {
  let [menu, setMenu] = useState<any>("hidden");

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.length >= 1
        ? jobs.filter((job: any) => {
          if (title === "" && location === "") {
            return job;
          } 
          
          if (title && !location) {
            return job.title.toLowerCase().includes(title.toLowerCase());
          } else if (!title && location) {
            return job.location.toLowerCase().includes(location.toLowerCase());
          }else if (title && location) {
            return (
              job.title.toLowerCase().includes(title.toLowerCase()) &&
              job.location.toLowerCase().includes(location.toLowerCase())
            );
          }
  
          return false;
        
        })
        .sort((a: any, b: any) => {
          let dateA: any = new Date(a.createdAt);
          let dateB: any = new Date(b.createdAt);

          return dateB - dateA;
        }).map((job: any, index:any) => (
            <div
              key={!job.id?index:job.id}
              className="relative bg-white p-6 rounded-md shadow-md overflow-hidden"
            >
              <div className="mb-[1rem]">
                <span>{!job.location?"":job.location}</span>
              </div>
              <div className="mb-[2rem]">
                <h3 className="text-[2rem] font-[700] mb-[1.125rem]">
                  {!job.title?"":job.title}
                </h3>
                <div className="markdown-container">
                        <ReactMarkdown>
                          {!job.description?"":job.description.slice(0, 133) + ' ...' }
                        </ReactMarkdown>
                        </div>
              </div>
              <div className="flex justify-between items-center">
                <div>{!job.createdAt?"":FormatDate(job.createdAt)}</div>
                <div className="flex">
                  <button onClick={()=>setMenu("fixed")} className="text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] py-4 px-4 z-[1551]">
                    Details
                  </button>
                </div>
              </div>
              <JobDescription menu={menu} setMenu={setMenu} job={job} />
              <Image
                className="absolute bottom-[-2rem] left-0 min-w-[30rem] opacity-[0.6]"
                src="/img/polygon_group.svg"
                width={135}
                height={32}
                alt="invensis_polygon"
              />
            </div>
          ))
        : (
        <div className="relative overflow-hidden text-center text-gray-700 col-span-3 py-10 text-[2rem] font-[700] ">
          No Jobs yet.
          <Image
                className="absolute bottom-[-6rem] left-[50%] translate-x-[-50%] min-w-[30rem] opacity-[0.6]"
                src="/img/polygon_group.svg"
                width={135}
                height={32}
                alt="invensis_polygon"
              />
        </div>)}
    </div>

    </>
  );
}
