import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const ContactForm = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const shakeForm = () => {
    gsap.fromTo(
      formRef.current,
      { x: -10 },
      { x: 10, duration: 0.08, repeat: 5, yoyo: true }
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
    setSuccess(false);
  };

  const validate = () => {
    const newErrors = {};

    if (form.name.trim().length < 5) {
      newErrors.name = "Name must be at least 5 characters";
    }

    if (
      form.email.trim().length < 10 ||
      !form.email.includes("@gmail.com")
    ) {
      newErrors.email = "Only valid Gmail addresses allowed";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
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
    alert("Something went wrong. Try again.",err);
  } finally {
    setLoading(false);
  }
};

  // ✅ SUCCESS STATE
  if (success) {
    return (
      <div className=" flex items-center justify-start bg-green-300 md:p-4 p-0 md:my-10 w-fit">
        <div className=" p-8 text-center text-white">
          <h2 className="text-xl font-semibold mb-2">Thank you! 🙌</h2>
          <p className="text-sm opacity-80">
            Your message has been sent successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex items-center justify-start md:p-4 p-0">
      <form
        ref={formRef}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify="true"
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#4c4a4a] py-6 px-2  md:p-6 space-y-4 rounded-md"
      >
        {/* Netlify required */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Name */}
        <div>
          <label className="text-white text-sm mb-1 block">Name</label>
          <input
            name="name"
            placeholder="John Doe"
            value={form.name}
            focus={errors.name ? 'true' : 'false'}
            onChange={handleChange}
            className={`w-full bg-[#7a7a7a] text-white px-3 py-2 outline-none ${errors.name && "border border-red-500 focus:ring-2 focus:ring-red-500"}`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-white text-sm mb-1 block">Email</label>
          <input
            name="email"
            placeholder="johndoe@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-[#7a7a7a] text-white px-3 py-2 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="text-white text-sm mb-1 block">Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Hi Abdul can You help me with..."
            value={form.message}
            onChange={handleChange}
            className="w-full bg-[#7a7a7a] text-white px-3 py-2 resize-none outline-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-gray-700 py-3 text-sm font-medium flex items-center justify-center hover:bg-gray-200 transition disabled:opacity-70"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
