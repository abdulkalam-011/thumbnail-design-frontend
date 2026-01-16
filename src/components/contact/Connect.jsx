import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { FiCheck } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaDiscord, FaBehance } from "react-icons/fa";

const ContactForm = () => {
  const formRef = useRef(null);
  const tickRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    channel: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ---------------- SHAKE ANIMATION ---------------- */
  const shakeForm = () => {
    gsap.fromTo(
      formRef.current,
      { x: -8 },
      { x: 8, duration: 0.06, repeat: 6, yoyo: true }
    );
  };

  /* ---------------- SUCCESS TICK ---------------- */
  useEffect(() => {
    if (success) {
      gsap.fromTo(
        tickRef.current,
        { scale: 0, rotate: -90 },
        { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [success]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
  };

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const newErrors = {};

    if (form.name.trim().length < 3) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@gmail.com")) {
      newErrors.email = "Only Gmail addresses allowed";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Please describe your project";
    }

    return newErrors;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      shakeForm();
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });
      setSuccess(true);
    } catch (err) {
      alert("Submission failed",err);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- SUCCESS UI ---------------- */
  if (success) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="relative w-full max-w-3xl bg-zinc-900 rounded-2xl p-10 text-center">
          <div
            ref={tickRef}
            className="mx-auto mb-5 h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center text-black"
          >
            <FiCheck size={32} />
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Thank you!
          </h2>

          <p className="text-zinc-400 mt-3">
            We’ll reach you out soon on
          </p>

          <p className="text-yellow-400 font-medium mt-1 break-all">
            {form.email}
          </p>
        </div>
      </section>
    );
  }

  /* ---------------- FORM UI (MATCH IMAGE) ---------------- */
  return (
    <section className="min-h-screen flex items-center  justify-center bg-[linear-gradient(to_bottom,yellow,#313131)] mt-10">
      <div
        ref={formRef}
        className="relative w-full max-w-3xl bg-zinc-900 sm:rounded-2xl p-6 md:p-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
          Let’s Create Something Viral
        </h2>

        <p className="text-center text-zinc-400 text-sm mt-2">
          Fill out the form below or DM me on Twitter.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input type="hidden" name="form-name" value="contact-viral" />

          {/* NAME + EMAIL */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="John Doe"
            />
            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="john@gmail.com"
            />
          </div>

          {/* CHANNEL */}
          <Input
            label="Channel Link (Optional)"
            name="channel"
            value={form.channel}
            onChange={handleChange}
            placeholder="https://youtube.com/..."
          />

          {/* MESSAGE */}
          <Textarea
            label="Project Details"
            name="message"
            value={form.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Tell me about the video, vibe, and text..."
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition flex items-center justify-center"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              "Send Message  →"
            )}
          </button>
        </form>

        {/* SOCIAL ICONS */}
        <div className="mt-6 flex justify-center gap-4 text-zinc-400">
          <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          <FaDiscord className="hover:text-yellow-400 cursor-pointer" />
          <FaBehance className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

/* ---------------- SMALL UI PARTS ---------------- */

const Input = ({ label, error, ...props }) => (
  <div>
    <label className="text-xs text-zinc-400">{label}</label>
    <input
      {...props}
      className={`mt-1 w-full h-11 rounded-lg bg-black border px-4 text-white outline-none
      ${error ? "border-red-500" : "border-zinc-700 focus:border-yellow-400"}`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const Textarea = ({ label, error, ...props }) => (
  <div>
    <label className="text-xs text-zinc-400">{label}</label>
    <textarea
      {...props}
      rows={4}
      className={`mt-1 w-full rounded-lg bg-black border px-4 py-3 text-white outline-none resize-none
      ${error ? "border-red-500" : "border-zinc-700 focus:border-yellow-400"}`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
