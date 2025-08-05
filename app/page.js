import Image from "next/image";
import navbar from '@/components/navbar';
import JobCard from '@/components/JobCard';

const jobs = [
  {
    id: 1,
    company: 'Amazon',
    title: 'Senior UI/UX Designer',
    date: '20 May, 2023',
    type: ['Part time', 'Senior level', 'Distant', 'Project work'],
    rate: '$250/hr',
    location: 'San Francisco, CA',
    logo: '/amazon.png',
    color: 'bg-orange-100',
  },
  {
    id: 2,
    company: 'Google',
    title: 'Junior UI/UX Designer',
    date: '4 Feb, 2023',
    type: ['Full time', 'Junior level', 'Distant', 'Flexible Schedule'],
    rate: '$150/hr',
    location: 'California, CA',
    logo: '/google.png',
    color: 'bg-green-100',
  },
  {
    id: 3,
    company: 'Dribbble',
    title: 'Senior Motion Designer',
    date: '29 Jan, 2023',
    type: ['Part time', 'Senior level', 'Full Day', 'Shift work'],
    rate: '$260/hr',
    location: 'New York, NY',
    logo: '/dribbble.png',
    color: 'bg-purple-100',
  },
  {
    id: 4,
    company: 'Twitter',
    title: 'UX Designer',
    date: '11 Apr, 2023',
    type: ['Full time', 'Middle level', 'Distant', 'Project work'],
    rate: '$120/hr',
    location: 'California, CA',
    logo: '/twitter.png',
    color: 'bg-blue-100',
  },
  {
    id: 5,
    company: 'Airbnb',
    title: 'Graphic Designer',
    date: '2 Apr, 2023',
    type: ['Part time', 'Senior level'],
    rate: '$300/hr',
    location: 'New York, NY',
    logo: '/airbnb.png',
    color: 'bg-pink-100',
  },
  {
    id: 6,
    company: 'Apple',
    title: 'Graphic Designer',
    date: '18 Jan, 2023',
    type: ['Part time', 'Distant'],
    rate: '$140/hr',
    location: 'San Francisco, CA',
    logo: '/apple.png',
    color: 'bg-gray-100',
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recommended Jobs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

