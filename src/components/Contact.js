import { SocialLinks } from "../data";
import icons from "../icons";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
      <p className="text-2xl text-gray-400 capitalize">Connect with me</p>
      <div className="flex items-center justify-center w-full mt-24 mb-5 flex-wrap gap-4">
        {SocialLinks && SocialLinks.map((n) => {
          // Dynamically retrieve the icon component from icons.js
          const IconComponent = icons[n.icon];
          return (
            <motion.a
              key={n.id}
              href={n.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
            >
              {IconComponent && <IconComponent className="text-3xl text-textBase" />} {/* Render the icon */}
              <p className="text-lg text-textBase">{n.name}</p>
            </motion.a>
          );
        })}
      </div>
      <p className="text-white text-base">angadimohammadsadiq@gmail.com</p>
    </section>
  );
}

export default Contact;
