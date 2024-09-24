import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Paul Ogbogu",
          to_email: "podonnixon0@gmail.com",
        },
        import.meta.env.VITE_PUBLIC_ID
      );
      setLoading(false);
      alert("Your Message has been sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("Something went wrong!");
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/asset/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text"> Let&apos;s talk</h3>
          <p className="text-lg text-white-600">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">your Message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi I'm looking....."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                className="field-btn_arrow"
                alt="arrow-up"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
