export default function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <span            
            className="px-4 py-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-100 cursor-pointer"
          >
            Previous
          </span>
        </li>
        <li>
          <span
            className="px-4 py-3 leading-tight text-gray-500 cursor-pointer bg-white border border-gray-300 hover:bg-gray-100"
          >
            1
          </span>
        </li>
        <li>
          <span
            className="px-4 py-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-md cursor-pointer hover:bg-gray-100"
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
}
