import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Headset,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Cpu,
  Image,
  Workflow,
  ArrowUpRight,
  Briefcase,
  Code2,
} from "lucide-react";

const certificates = [
  {
    title: "Career Essentials in Generative AI",
    category: "Microsoft & LinkedIn",
    description:
      "Learn Generative AI, Microsoft Copilot, AI ethics, and workplace applications.",
    icon: Sparkles,
    link: "https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    category: "IBM SkillsBuild",
    description:
      "Learn AI, Machine Learning, Deep Learning, NLP, Computer Vision, and AI Ethics.",
    icon: Brain,
    link: "https://skillsbuild.org/college-students/course-catalog/artificial-intelligence-fundamentals",
  },
  {
    title: "Generative AI in Action",
    category: "IBM SkillsBuild",
    description:
      "Explore prompt engineering, Python libraries, AI applications, and responsible AI.",
    icon: Cpu,
    link: "https://skillsbuild.org/college-students/course-catalog/generative-ai-in-action",
  },
  {
    title: "Build Your First Chatbot Using IBM watsonx",
    category: "IBM SkillsBuild",
    description:
      "Create your first AI chatbot using IBM watsonx and natural language processing.",
    icon: Bot,
    link: "https://skillsbuild.org/college-students/course-catalog/build-your-first-chatbot-using-ibm-watsonx",
  },
  {
    title: "AI-Enabled Applications for Customer Service",
    category: "IBM SkillsBuild",
    description:
      "Learn how AI powers customer service with chatbots, sentiment analysis, and personalization.",
    icon: Headset,
    link: "https://skillsbuild.org/college-students/course-catalog/ai-enabled-applications-for-customer-service",
  },
  {
    title: "AI Foundations",
    category: "IBM SkillsBuild",
    description:
      "Build a strong foundation in AI concepts, ethics, career pathways, and design thinking.",
    icon: GraduationCap,
    link: "https://skillsbuild.org/students/course-catalog/artificial-intelligence/ai-foundations-powered-by-iste-and-ibm",
  },
  {
    title: "Introduction to Responsible AI",
    category: "Google Cloud Skills Boost",
    description:
      "Understand responsible AI principles, fairness, transparency, and ethical AI development.",
    icon: ShieldCheck,
    link: "https://www.cloudskillsboost.google/course_templates/554",
  },
  {
    title: "Introduction to Generative AI",
    category: "Google Cloud Skills Boost",
    description:
      "Learn the basics of Generative AI and discover how Google builds AI-powered applications.",
    icon: BookOpen,
    link: "https://www.cloudskillsboost.google/course_templates/536",
  },

  {
  title: "Introduction to Large Language Models",
  category: "Google Cloud Skills Boost",
  description:
    "Learn what Large Language Models (LLMs) are, their applications, prompt tuning, and how modern AI assistants work.",
  icon: Brain,
  link: "https://www.cloudskillsboost.google/course_templates/539",
},
{
  title: "Responsible AI: Applying AI Principles",
  category: "Google Cloud Skills Boost",
  description:
    "Explore how Google applies responsible AI principles and learn best practices for building trustworthy AI systems.",
  icon: ShieldCheck,
  link: "https://www.cloudskillsboost.google/course_templates/388",
},
{
  title: "Prompt Design in Agent Platform",
  category: "Google Cloud Skills Boost",
  description:
    "Master prompt engineering, multimodal prompting, image analysis, and AI interactions using Google's Agent Platform.",
  icon: Sparkles,
  link: "https://www.cloudskillsboost.google/course_templates/976",
},
{
  title: "Build Real World AI Applications with Gemini & Imagen",
  category: "Google Cloud Skills Boost",
  description:
    "Build practical AI applications using Gemini, Imagen, computer vision, NLP, and Google Cloud Agent Platform.",
  icon: Bot,
  link: "https://www.cloudskillsboost.google/course_templates/1076",
},
{
  title: "Introduction to Image Generation",
  category: "Google Cloud Skills Boost",
  description:
    "Understand diffusion models, image generation techniques, and how AI image models are trained and deployed.",
  icon: BookOpen,
  link: "https://www.cloudskillsboost.google/course_templates/541",
},
{
  title: "Transformer Models and BERT Model",
  category: "Google Cloud Skills Boost",
  description:
    "Learn transformer architecture, self-attention, BERT, and modern NLP techniques for language understanding.",
  icon: Cpu,
  link: "https://www.cloudskillsboost.google/course_templates/538",
},
{
  title: "Create Generative AI Apps on Google Cloud",
  category: "Google Cloud Skills Boost",
  description:
    "Build production-ready Generative AI applications using prompt engineering, RAG, and Google Cloud AI services.",
  icon: GraduationCap,
  link: "https://www.cloudskillsboost.google/course_templates/1120",
},
{
  title: "OCI AI Foundations Associate",
  category: "Oracle Learning",
  description:
    "Learn AI, Machine Learning, Deep Learning, Generative AI, and Oracle Cloud AI fundamentals.",
  icon: GraduationCap,
  link: "https://learn.oracle.com/ols/learning-path/become-an-oci-ai-foundations-associate-2025/118071/147781",
},
{
  title: "Introduction to Generative AI",
  category: "AWS Educate",
  description:
    "Understand Generative AI, foundation models, and core AI concepts with AWS Educate.",
  icon: Sparkles,
  link: "https://aws.amazon.com/education/awseducate",
},
{
  title: "Machine Learning Foundations",
  category: "AWS Educate",
  description:
    "Learn the fundamentals of Machine Learning, model training, data, and real-world AI applications.",
  icon: Brain,
  link: "https://aws.amazon.com/education/awseducate",
},
{
  title: "Artificial Intelligence Fundamentals",
  category: "Salesforce Trailhead",
  description:
    "Learn AI fundamentals, machine learning basics, responsible AI, and business applications in Salesforce.",
  icon: Brain,
  link: "https://trailhead.salesforce.com/content/learn/modules/artificial-intelligence-fundamentals",
},
{
  title: "AI for Beginners",
  category: "HP LIFE",
  description:
    "Learn Generative AI, Machine Learning, Large Language Models, AI tools, and AI ethics from scratch.",
  icon: Sparkles,
  link: "https://www.life-global.org/course/391-ai-for-beginners",
},
{
  title: "AI for Business Professionals",
  category: "HP LIFE",
  description:
    "Explore AI for productivity, decision-making, workplace applications, ChatGPT, DALL·E, and responsible AI.",
  icon: Briefcase,
  link: "https://www.life-global.org/course/423-ai-for-business-professionals",
},
{
  title: "Critical Thinking in the AI Era",
  category: "HP LIFE",
  description:
    "Develop critical thinking skills to evaluate AI-generated content, detect misinformation, and reduce bias.",
  icon: ShieldCheck,
  link: "https://www.life-global.org/course/439-critical-thinking-in-the-ai-era",
},
{
  title: "Elements of AI",
  category: "University of Helsinki & Reaktor",
  description:
    "A university-backed introduction to Artificial Intelligence with no coding or math prerequisites.",
  icon: GraduationCap,
  link: "https://www.elementsofai.com",
},
{
  title: "Machine Learning with Python Certification",
  category: "freeCodeCamp",
  description:
    "Learn Machine Learning with Python, TensorFlow, neural networks, and practical AI projects.",
  icon: Code2,
  link: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
},
];

export default function CertificateCards() {
  return (
    <section className="bg-white pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-xl"
                >
                  <div className="flex h-full flex-col p-7">
                    {/* Category */}
                    <span className="inline-flex w-fit rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
                      {item.category}
                    </span>

                    {/* Icon + Title */}
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white transition-all duration-300 group-hover:border-black group-hover:bg-black">
                        <Icon
                          size={26}
                          className="transition-colors duration-300 group-hover:text-white"
                        />
                      </div>

                      <h3 className="text-xl font-semibold leading-tight tracking-tight text-gray-950">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-8 flex-1 text-sm leading-7 text-gray-500">
                      {item.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                      <span className="text-sm font-medium text-gray-500 transition group-hover:text-black">
                        Start Assessment
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-black group-hover:bg-black">
                        <ArrowUpRight
                          size={18}
                          className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}