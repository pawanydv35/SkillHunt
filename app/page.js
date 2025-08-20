import JobCard from "@/components/JobCard";
import SideBar from "@/components/SideBar";
import { FiSettings } from "react-icons/fi";


export default function Home() {
  const jobs = [
    {
      date: "20 May, 2023",
      company: "Amazon",
      title: "Senior UI/UX Designer",
      tags: ["Part time", "Senior level", "Distant", "Project work"],
      rate: "$250/hr",
      location: "San Francisco, CA",
      bgColor: "#FFECDD",
      icon: "/icons/amazon.png",
    },
    {
      date: "4 Feb, 2023",
      company: "Google",
      title: "Junior UI/UX Designer",
      tags: ["Full time", "Junior level", "Distant", "Project work", "Flexible Schedule"],
      rate: "$150/hr",
      location: "California, CA",
      bgColor: "#D8F7F1",
      icon: "/icons/google.png",
    },
    {
      date: "29 Jan, 2023",
      company: "Dribbble",
      title: "Senior Motion Designer",
      tags: ["Part time", "Senior level", "Full Day", "Shift work"],
      rate: "$260/hr",
      location: "New York, NY",
      bgColor: "#EFDDF8",
      icon: "/icons/dribbble.png",
    },
    {
      date: "11 Apr, 2023",
      company: "Twitter",
      title: "UX Designer",
      tags: ["Full time", "Middle level", "Distant", "Project work"],
      rate: "$120/hr",
      location: "California, CA",
      bgColor: "#DCEEFF",
      icon: "/icons/twitter.png",
    },
    {
      date: "2 Apr, 2023",
      company: "Airbnb",
      title: "Graphic Designer",
      tags: ["Part time", "Senior level"],
      rate: "$300/hr",
      location: "New York, NY",
      bgColor: "#F9DDE5",
      icon: "/icons/airbnb.png",
    },
    {
      date: "18 Jan, 2023",
      company: "Apple",
      title: "Graphic Designer",
      tags: ["Part time", "Distant"],
      rate: "$140/hr",
      location: "San Francisco, CA",
      bgColor: "#E8EBED",
      icon: "/icons/apple.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex gap-6">
      {/* Sidebar */}
      <SideBar />

      {/* Jobs Section */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Recommended jobs</h1>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
              {jobs.length}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Sort by: <strong>Last updated</strong>
            </span>
            <FiSettings className="text-xl text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </main>
        
    </div>
  );
}

