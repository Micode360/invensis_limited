import { FormatDate } from "../components/date_format"


export default function ProjectDetails ({ details, setDetails }:any) {

    return (
        <div
        className={`${details.display} top-0 left-0 right-0 bottom-0 bg-[#0000002c] z-[999999]`}
      >
      
        <div className="bg-white overflow-y-auto absolute top-0 left-0 md:left-[50%] right-0 bottom-0 px-6 2xl:px-[8rem] py-12">
        <div
          onClick={() => {
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

        <div>
            <div className="mb-[2rem]">
              <h3 className="text-[2rem] font-[700] mb-[0.5rem]">
                {details.details.name}
              </h3>

              <div className="mb-[0.5rem]">
                <span className="font-[700]">Location: </span>
                <span>
                  {details.details.location}
                </span>
              </div>

              <div className="mb-[0.5rem]">
                <span className="font-[700]">Duration: </span>
                <span>
                  {details.details.duration}
                </span>
              </div>
              <div className="mb-[3.5rem] text-gray-600">
                <span className="font-[700] text-black">Posted: </span>
                {FormatDate(details.details.createdAt)}
              </div>


              <h3 className="font-[700] text-[1.2rem] mb-4">Description</h3>
              {details.details.description}
            </div>
            </div>
        </div>
      </div>
    );
}