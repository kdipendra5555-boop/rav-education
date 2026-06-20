import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobCard({
  title,
  location,
  type,
  description,
  applyLink = "/teacher-apply",
}) {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

        <div className="flex-1">
          <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
            <Briefcase size={16} />
            Hiring Now
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            {title}
          </h3>

          <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
            <MapPin size={15} />
            <span>{location}</span>
          </div>
        </div>

        <div>
          <span className="inline-flex bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
            {type}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-slate-600 text-sm leading-6 sm:leading-7">
        {description}
      </p>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

        <span className="text-xs text-slate-400">
          Unnati Education Initiative
        </span>

        <Link
          to={applyLink}
          className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all"
        >
          Apply Now
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}