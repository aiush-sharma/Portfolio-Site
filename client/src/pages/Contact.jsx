import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle Form Submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual backend URL in production
      const apiUrl = import.meta.env.DEV
        ? "http://localhost:5000/api/contact"
        : "/api/contact";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset(); // Clear form fields on success
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#1c1c1c] text-white py-20 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-1 flex flex-col justify-start">
          <div>
            <span className="text-[#dfb76c] text-sm tracking-widest uppercase block mb-4">
              {" "}
              Contact
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Let's create something together.
            </h2>
          </div>
          <div className="space-y-4 text-neutral-400 text-sm">
            <p>Based in Butwal, Nepal (Available globally)</p>
            <p>aiushsharma@portfolio.com</p>
          </div>
        </div>

        {/* Right Column: React Hook Form Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-1 space-y-8 flex flex-col justify-start"
        >
          {/* Name Field */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="block py-3 px-0 w-full text-sm bg-transparent border-b border-neutral-700 appearance-none focus:outline-none focus:border-[#dfb76c] transition-colors peer"
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="relative z-0 w-full group">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="block py-3 px-0 w-full text-sm bg-transparent border-b border-neutral-700 appearance-none focus:outline-none focus:border-[#dfb76c] transition-colors peer"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="relative z-0 w-full group">
            <textarea
              rows="4"
              placeholder="Your Message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
              })}
              className="block py-3 px-0 w-full text-sm bg-transparent border-b border-neutral-700 appearance-none focus:outline-none focus:border-[#dfb76c] transition-colors peer resize-none"
            />
            {errors.message && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button & Status Alerts */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-[#1a1a1a] px-8 py-3 text-sm font-medium tracking-wide hover:bg-[#dfb76c] hover:text-black transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-[#dfb76c] text-sm animate-pulse">
                ✓ Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-sm">
                ✕ Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
