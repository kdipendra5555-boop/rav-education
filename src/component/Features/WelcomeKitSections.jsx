import { motion } from "framer-motion";
import {
  Shirt,
  BookOpen,
  Sparkles,
  Mail,
  CheckCircle2
} from "lucide-react";

export default function WelcomeKitSections() {

  const sections = [
    {
      title: "School Uniform",
      icon: Shirt,
      color: "text-blue-500",
      items: [
        "T-Shirt", "Lower", "Shirt", "Pant", "Skirt",
        "Shoes", "Socks", "Tie", "ID Card", "Belt",
        "Sweater", "Cap"
      ],
    },
    {
      title: "Stationery",
      icon: BookOpen,
      color: "text-green-500",
      items: [
        "Books", "Notebooks", "School Diary",
        "Pen", "Pencil", "Eraser", "Pencil Box"
      ],
    },
    {
      title: "Extras",
      icon: Sparkles,
      color: "text-purple-500",
      items: [
        "Water Bottle", "School Bag",
        "Fun Stickers", "Laces"
      ],
    },
    {
      title: "A Letter to Guardian",
      icon: Mail,
      color: "text-orange-500",
      items: [
        "Welcome Letter",
        "School Vision & Guidelines",
        "Important Instructions",
        "Contact Information"
      ],
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-14 md:py-24 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
            What You Get
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base max-w-xl mx-auto md:mx-0">
            Everything a student needs — thoughtfully packed in one smart welcome kit.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {sections.map((section, i) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* ICON */}
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className={`p-3 rounded-xl bg-gray-50 group-hover:scale-110 transition ${section.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center md:text-left">
                  {section.title}
                </h3>

                {/* ITEMS */}
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="text-sm text-gray-600 flex items-center gap-2 justify-center md:justify-start"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}