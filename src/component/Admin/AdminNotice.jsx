import { useEffect, useState } from "react";

export default function AdminNotice() {

  const [notice, setNotice] = useState({
    title: "",
    desc: "",
    date: "",
    fileUrl: "",
  });

  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(data);
  }, []);

  // 📁 HANDLE FILE UPLOAD (convert to base64)
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF allowed");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setNotice((prev) => ({
        ...prev,
        fileUrl: reader.result, // base64 string
      }));
    };
  };

  const handleAdd = () => {
    if (!notice.title) return alert("Title required");

    const newNotice = {
      ...notice,
      id: Date.now(),
      date: notice.date || new Date().toISOString(),
    };

    const updated = [newNotice, ...notices];
    localStorage.setItem("notices", JSON.stringify(updated));
    setNotices(updated);

    setNotice({ title: "", desc: "", date: "", fileUrl: "" });
  };

  const handleDelete = (id) => {
    const updated = notices.filter((n) => n.id !== id);
    localStorage.setItem("notices", JSON.stringify(updated));
    setNotices(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <h1 className="text-2xl font-bold mb-6">
        Manage Notices
      </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 space-y-4">

        <input
          placeholder="Title"
          value={notice.title}
          onChange={(e) => setNotice({...notice, title: e.target.value})}
          className="input"
        />

        <textarea
          placeholder="Description"
          value={notice.desc}
          onChange={(e) => setNotice({...notice, desc: e.target.value})}
          className="input"
        />

        <input
          placeholder="Date (optional)"
          value={notice.date}
          onChange={(e) => setNotice({...notice, date: e.target.value})}
          className="input"
        />

        {/* 📁 FILE INPUT */}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFile}
          className="input"
        />

        {/* 📄 PREVIEW */}
        {notice.fileUrl && (
          <p className="text-sm text-green-600">
            PDF Attached ✅
          </p>
        )}

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Notice
        </button>

      </div>

      {/* LIST */}
      <div className="space-y-3">

        {notices.map((n) => (
          <div key={n.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">

            <div>
              <p className="font-semibold">{n.title}</p>
              <p className="text-sm text-gray-500">{n.date}</p>
              {n.fileUrl && (
                <p className="text-xs text-green-600">PDF Attached</p>
              )}
            </div>

            <button
              onClick={() => handleDelete(n.id)}
              className="text-red-500"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

      {/* INPUT STYLE */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
        }
      `}</style>

    </div>
  );
}