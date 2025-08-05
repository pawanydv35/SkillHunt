import Image from 'next/image';

export default function JobCard({ job }) {
  return (
    <div className={`${job.color} p-4 rounded-xl shadow-md`}>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{job.date}</span>
        <Image src={job.logo} width={20} height={20} alt="logo" />
      </div>
      <h3 className="text-lg font-semibold mt-2">{job.title}</h3>
      <div className="flex flex-wrap gap-2 my-3">
        {job.type.map((t, i) => (
          <span
            key={i}
            className="bg-white text-xs text-gray-700 px-2 py-1 rounded-full border"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-800">
          <p className="font-medium">{job.rate}</p>
          <p>{job.location}</p>
        </div>
        <button className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800">
          Details
        </button>
      </div>
    </div>
  );
}
