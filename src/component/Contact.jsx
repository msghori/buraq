import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l557qqd",
        "template_wtdl1vt",
        form.current,
        "id70wvfbVPxU7CwDl"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send email: " + error.text);
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="mb-6 md:mb-0 md:pe-4">
          <h1 className="ylwColor font-bold mb-4 font-notoSerif px-4 text-2xl md:text-4xl">
            Get In Touch
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">FULL NAME*</label>
                <input
                  type="text"
                  className="w-full p-3 bg-white text-black border border-gray-300 rounded-xl"
                  required
                  name="name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">EMAIL ADDRESS*</label>
                <input
                  type="email"
                  className="w-full p-3 bg-white text-black border border-gray-300 rounded-xl"
                  required
                  name="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">MOBILE NUMBER</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 bg-white text-black border border-gray-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-white mb-2">COMPANY</label>
                <input
                  type="text"
                  name="company"
                  className="w-full p-3 bg-white text-black border border-gray-300 rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2">MESSAGE*</label>
              <textarea
                className="w-full p-3 bg-white text-black border border-gray-300 rounded-xl h-32"
                required
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#f39412] text-white px-8 py-2 rounded-full hover:bg-white hover:text-[#f39412] transition"
            >
              Send Message
            </button>
          </form>{" "}
        </div>
        <div className="mb-6 md:mb-0 md:pe-4">
          <img
            src={`${import.meta.env.BASE_URL}images/contact.webp`}
            alt="Contact Us"
            className="w-full h-full object-contain md:object-cover mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
