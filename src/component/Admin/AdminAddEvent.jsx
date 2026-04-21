import { useEffect, useState } from "react";

export default function AdminAddEvent() {

  const [event, setEvent] = useState({
    title: "",
    date: "",
    image: "",
    desc: "",
  });

  const [events, setEvents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [success, setSuccess] = useState(false);

  // 🔥 Load events
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(data);
  }, []);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedEvents;

    if (editId) {
      // ✏️ UPDATE
      updatedEvents = events.map((item) =>
        item.id === editId ? { ...event, id: editId } : item
      );
    } else {
      // ➕ CREATE
      const newEvent = { ...event, id: Date.now() };
      updatedEvents = [newEvent, ...events];
    }

    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEvents(updatedEvents);

    setSuccess(true);
    setEditId(null);

    setEvent({
      title: "",
      date: "",
      image: "",
      desc: "",
    });

    setTimeout(() => setSuccess(false), 2000);
  };

  // ❌ DELETE
  const handleDelete = (id) => {
    const updated = events.filter((item) => item.id !== id);
    localStorage.setItem("events", JSON.stringify(updated));
    setEvents(updated);
  };

  // ✏️ EDIT
  const handleEdit = (item) => {
    setEvent(item);
    setEditId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔵 HERO */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 text-center">
        <h1 className="text-3xl font-bold">
          {editId ? "Edit Event" : "Add New Event"}
        </h1>
        <p className="text-blue-100 text-sm">
          Manage school events
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* 📝 FORM + PREVIEW */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                ✅ {editId ? "Event updated!" : "Event added!"}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <input name="title" value={event.title} onChange={handleChange} placeholder="Event Title" required className="input" />
              <input name="date" value={event.date} onChange={handleChange} placeholder="Event Date" required className="input" />
              <input name="image" value={event.image} onChange={handleChange} placeholder="Image URL" required className="input" />
              <textarea name="desc" value={event.desc} onChange={handleChange} placeholder="Description" required className="input h-28" />

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                {editId ? "Update Event" : "Add Event"}
              </button>

            </form>

          </div>

          {/* PREVIEW */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border flex items-center justify-center">

            <div className="w-[280px] bg-white rounded-xl shadow-lg p-3 rotate-[-3deg]">

              {event.image ? (
                <img src={event.image} className="w-full h-40 object-cover rounded-lg" />
              ) : (
                <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                  Image Preview
                </div>
              )}

              <div className="p-3">
                <p className="text-xs text-blue-600">{event.date || "Date"}</p>
                <h3 className="font-semibold">{event.title || "Event Title"}</h3>
                <p className="text-xs text-gray-500">{event.desc || "Description..."}</p>
              </div>

            </div>

          </div>

        </div>

        {/* 📋 EVENTS LIST */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">

          <h2 className="text-xl font-bold mb-4">All Events</h2>

          <div className="space-y-4">

            {events.map((item) => (
              <div key={item.id} className="flex items-center justify-between border p-4 rounded-xl">

                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* INPUT STYLE */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.1);
        }
      `}</style>

    </div>
  );
}