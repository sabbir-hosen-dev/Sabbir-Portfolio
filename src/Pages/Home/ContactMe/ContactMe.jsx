import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from "react-intersection-observer"; // Import useInView from react-intersection-observer
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Heading from "../../../Components/Heading/Heading";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import bg from "../../../assets/section.svg";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validation
    const newErrors = {};
    if (name.length < 2) {
      newErrors.name = "Name must be at least 2 letters.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please provide a valid email.";
    }
    if (message.split(" ").length < 5) {
      newErrors.message = "Message must be at least 5 words.";
    }

    setErrors(newErrors);

    // If no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            toast.success(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
          },
          (error) => {
            toast.error(`Message failed to send: ${error.text}`);
          }
        );
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative"
      ref={ref} // Attach the ref here
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView
      transition={{ duration: 0.8 }}
    >
      <div className="absolute -z-10">
        <img src={bg} alt="" />
      </div>
      <div className="wrap pt-14">
        <Heading title="Contact Me" />
        <Toaster />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 justify-center items-center">
          {/* Left Side */}
          <motion.form
            className="m-auto w-full"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on inView
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Contact with me
            </p>
            <div className="text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
              <p className="text-sm text-[#d3d8e8]">
                If you have any questions or concerns, please don&apos;t hesitate
                to contact me. I am open to any work opportunities that align
                with my skills and interests.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <InputField label="Your Name:" name="name" error={errors.name} />
                <InputField
                  label="Your Email:"
                  name="email"
                  type="email"
                  error={errors.email}
                />
                <TextAreaField
                  label="Your Message:"
                  name="message"
                  error={errors.message}
                />
                <motion.button
                  className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-1">Send Message</span>
                </motion.button>
              </div>
            </div>
          </motion.form>
          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animate based on inView
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mt-8 text-[#d3d8e8] text-2xl flex flex-col gap-5">
              <ContactInfo icon={<FaPhoneAlt />} text="+880 1313 530 719" />
              <ContactInfo
                icon={<FaEnvelope />}
                text="tssabbirhosen@gmail.com"
              />
              <ContactInfo
                icon={<FaMapMarkerAlt />}
                text="Tangail, Bangladesh"
              />
            </div>
            <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
              <SocialIcon
                href="https://github.com/sabbir-hosen-dev"
                icon={<FaGithub />}
              />
              <SocialIcon
                href="https://www.linkedin.com/in/sabbir-hosen-dev/"
                icon={<FaLinkedin />}
              />
              <SocialIcon
                href="https://www.facebook.com/sabbir.hosen.dev"
                icon={<FaFacebook />}
              />
              <SocialIcon
                href="https://wa.me/+8801313530719"
                icon={<FaWhatsapp />}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const InputField = ({ label, name, type = "text", error }) => (
  <div className="flex flex-col gap-2">
    <label className="text-base">{label}</label>
    <input
      className={`bg-[#10172d] w-full border rounded-md px-3 py-2 ${
        error ? "border-red-400" : "border-[#353a52]"
      } focus:border-[#16f2b3]`}
      type={type}
      name={name}
      required
    />
    {error && <p className="text-sm text-red-400">{error}</p>}
  </div>
);

const TextAreaField = ({ label, name, error }) => (
  <div className="flex flex-col gap-2">
    <label className="text-base">{label}</label>
    <textarea
      className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
      name={name}
      required
      rows="4"
    ></textarea>
    {error && <p className="text-sm text-red-400">{error}</p>}
  </div>
);

import PropTypes from 'prop-types';

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#d3d8e8] hover:text-[#16f2b3] transition-colors duration-300"
  >
    {icon}
  </a>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{text}</span>
  </div>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

ContactInfo.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Contact;
