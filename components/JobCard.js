import { FaBookmark } from "react-icons/fa";
import Image from "next/image";

export default function JobCard({ job }) {
  return (
    <div
      className={`p-4 rounded-2xl shadow-sm border relative`}
      style={{ backgroundColor: job.bgColor }}
    >
      {/* Bookmark */}
      <button className="absolute top-3 right-3 text-gray-500 hover:text-black">
        <FaBookmark />
      </button>

      {/* Date */}
      <p className="text-sm text-gray-600 mb-2">{job.date}</p>

      {/* Company & Role */}
      <div className="flex items-center gap-2 mb-1">
        {job.icon && (
          <Image src={job.icon} alt={job.company} width={20} height={20} />
        )}
        <h3 className="font-semibold">{job.company}</h3>
      </div>

      <p className="font-bold text-lg mb-3">{job.title}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-white/40 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Price & Location */}
      <div className="flex justify-between items-center">
        <p className="font-bold">{job.rate}</p>
        <p className="text-sm text-gray-500">{job.location}</p>
      </div>

      {/* Button */}
      <button className="mt-3 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800">
        Details
      </button>
    </div>
  );
}

