/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Heading from '../../../Components/Heading/Heading';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validation
    const newErrors = {};
    if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 letters.';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please provide a valid email.';
    }
    if (message.split(' ').length < 5) {
      newErrors.message = 'Message must be at least 5 words.';
    }

    setErrors(newErrors);

    // If no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form, // Pass the form element
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            toast.success(`Thank you, ${name}! Your message has been sent.`);

            form.reset(); // Clear the form
          },
          error => {
            toast.error(`Message failed to send: ${error.text}`);
          }
        );
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <Heading title="Contact Me" />
        <Toaster />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 justify-center items-center">
          {/* Left Side */}
          <form className="m-auto w-full" onSubmit={handleSubmit}>
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Contact with me
            </p>
            <div className="text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
              <p className="text-sm text-[#d3d8e8]">
                If you have any questions or concerns, please don&apos;t
                hesitate to contact me. I am open to any work opportunities that
                align with my skills and interests.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-base">Your Name: </label>
                  <input
                    className={`bg-[#10172d] w-full border rounded-md px-3 py-2 ${
                      errors.name ? 'border-red-400' : 'border-[#353a52]'
                    } focus:border-[#16f2b3]`}
                    type="text"
                    maxLength="100"
                    name="name"
                    required
                  />

                  {errors.name && (
                    <p className="text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-base">Your Email: </label>
                  <input
                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
                    type="email"
                    name="email"
                    maxLength="100"
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-base">Your Message: </label>
                  <textarea
                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
                    maxLength="500"
                    name="message"
                    required
                    rows="4"></textarea>
                  {errors.message && (
                    <p className="text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
                {/* Submit Button */}
                <div className="flex flex-col items-center gap-3">
                  <button className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white">
                    <span className="flex items-center gap-1">
                      Send Message
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* Right Side */}
          <div className="">
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
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    rel="noopener noreferrer"
    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer">
    <div className="text-2xl text-white">{icon}</div>
  </a>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="text-xl text-[#16f2b3]">{icon}</div>
    <p>{text}</p>
  </div>
);

export default Contact;
