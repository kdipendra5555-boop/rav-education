import { motion } from "framer-motion";

export default function OrbisFooter() {
  return (
    <section className="border-t border-gray-200 bg-white py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl font-semibold tracking-tight text-gray-950 md:text-6xl"
      >
        Learn and Enjoy  Your Certificate.
      </motion.h2>
    </section>
  );
}