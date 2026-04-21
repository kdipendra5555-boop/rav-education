import { useEffect, useState } from "react";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notices")) || [];

    const updated = data.map((n) => ({
      ...n,
      date: n.date || new Date().toISOString(),
    }));

    setNotices(updated);
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-gray-50 py-14">

      {/* 🔷 HEADING */}
      <div className="max-w-5xl mx-auto px-4 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          School Notices
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Stay updated with latest announcements
        </p>
      </div>

      {/* ⚪ NOTICES */}
      <div className="max-w-4xl mx-auto px-4 space-y-8">

        {notices.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <p className="text-gray-400 text-sm">
              No notices available
            </p>
          </div>
        )}

        {notices.map((notice) => (
          <div key={notice.id} className="flex gap-4 group">

            {/* 🔵 TIMELINE DOT */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
              <div className="w-[2px] flex-1 bg-gray-200"></div>
            </div>

            {/* 📄 CONTENT */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 flex justify-between items-center gap-4">

                {/* LEFT SIDE */}
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-2">
                    {formatDate(notice.date)}
                  </p>

                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {notice.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {notice.desc}
                  </p>
                </div>

                {/* RIGHT SIDE BUTTON */}
                {notice.fileUrl ? (
                  <a
                    href={notice.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
                  >
                    Download
                  </a>
                ) : (
                  <p className="text-xs text-gray-300 whitespace-nowrap">
                    No file
                  </p>
                )}

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}