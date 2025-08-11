'use clinet';

import { useState } from "react";

export default function Sidebar() {
  const [workingSchedule] = useState([
    { label: "Full time", checked: true },
    { label: "Part time", checked: true },
    { label: "Internship", checked: false },
    { label: "Project work", checked: true },
    { label: "Volunteering", checked: false },
  ]);

  const [employmentType] = useState([
    { label: "Full day", checked: true },
    { label: "Flexible schedule", checked: false },
    { label: "Shift work", checked: false },
    { label: "Distant work", checked: true },
    { label: "Shift method", checked: false },
  ]);

  return (
    <aside className="w-72 bg-white p-4 rounded-2xl shadow-sm border h-fit">
      {/* LuckyJob Promo */}
      <div className="bg-black text-white rounded-2xl p-5 mb-6 text-center">
        <p className="text-lg font-semibold leading-snug">
          Get Your best profession <br /> with LuckyJob
        </p>
        <button className="mt-4 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
          Learn more
        </button>
      </div>

      {/* Filters */}
      <div>
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        {/* Working Schedule */}
        <div className="mb-6">
          <p className="font-medium mb-2">Working schedule</p>
          <div className="space-y-2 text-sm">
            {workingSchedule.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={item.checked} /> {item.label}
              </label>
            ))}
          </div>
        </div>

        {/* Employment Type */}
        <div>
          <p className="font-medium mb-2">Employment type</p>
          <div className="space-y-2 text-sm">
            {employmentType.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={item.checked} /> {item.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
