import { useState } from "react";
import { FormatDate } from "../components/date_format";
import Delete from "./delete";

export default function JobDetails({ details, setDetails, applicants }: any) {
  const [option, setOption] = useState<any>({ type: "description", value: [] });
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [deleteMod, setDeleteMod] = useState<any>({});
  const [delDisplay, setDelDisplay] = useState<string>("hidden");



  return (
    <div
      className={`${details.display} top-0 left-0 right-0 bottom-0 bg-[#0000002c] z-[999999]`}
    >
      <div className="bg-white overflow-y-auto absolute top-0 left-0 md:left-[30%] right-0 bottom-0 px-6 2xl:px-[8rem] py-12">
        <div
          onClick={() => {
            setOption({ type: "description", value: [] })
            setDetails({ display: "hidden", details: {} });
          }}
          className="absolute top-6 right-[2rem] bg-white p-2 rounded-lg shadow-md border-[1px] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {option.type === "description" ? (
          <div>
            <div className="mb-[2rem]">
              <h3 className="text-[2rem] font-[700] mb-[0.5rem]">
                {details.details.title}
              </h3>

              <div className="mb-[0.5rem]">
                <span className="font-[700]">Location: </span>
                <span>{details.details.location}</span>
              </div>
              <div className="mb-[0.5rem] text-gray-600">
                <span className="font-[700] text-black">Posted: </span>
                {FormatDate(details.details.createdAt)}
              </div>

              <div className="mb-[0.5rem] text-gray-600">
                <span className="font-[700] text-black">Start Date:</span>
                {details.details.startdate}
              </div>


              <h3 className="font-[700] text-[1.2rem] mb-4">Description</h3>
              {details.details.description}
            </div>

            <div className="flex">
              <button
                onClick={() => setOption({ type: "applicants", value: "" })}
                className="text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] py-4 px-8 z-[1551]"
              >
                Applicants
              </button>
            </div>
          </div>
        ):option.type === "applicants"?
        (
          <table className="table-auto w-full text-[#667085]">
          <thead>
            <tr className="text-left py-[0.813rem] px-[1.5rem] border-b-[1px]">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Applied</th>
            <th>CV</th>
            <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {applicants.length < 1? 
              ""
            :
            applicants.filter((a:any)=>a.jobId === details.details.id)
              .sort((a: any, b: any) => {
                let dateA: any = new Date(a.createdAt);
                let dateB: any = new Date(b.createdAt);

                return dateB - dateA;
              })
              .map((data: any, index: number) => (
                <tr className="border-b-[1px]" key={index}>
               <td className="py-[1.625rem]">{data.firstname}</td>
               <td className="py-[1.625rem]">{data.lastname}</td>
                <td className="py-[1.625rem]">{FormatDate(data.createdAt)}</td>
                <td className="py-[1.625rem]">
                <a
                      href={data.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#9e3818] text-white rounded-md mr-8 hover:bg-red-500"
                    >
                      Open
                    </a>
                  </td>
                  <td className="py-[1.625rem]">
                    <div className="relative flex items-center justify-start">
                    <div
                            className="px-6 py-2 border-[1px] hover:bg-[#eee] text-center rounded cursor-pointer"
                            onClick={() => {
                              setDelDisplay("fixed");
                              setDeleteMod(data);
                            }}
                          >
                            Delete
                          </div>
                    </div>
                  </td>
                  
                  <Delete
                    delDisplay={delDisplay}
                    setDelDisplay={setDelDisplay}
                    deleteMod={deleteMod}
                    setDeleteMod={setDeleteMod}
                    Title={"Application"}
                  />
                </tr>
              ))
             }
          </tbody>
          </table>
          )
         : (
          ""
        )}
      </div>
    </div>
  );
}
