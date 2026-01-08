import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="relative py-5 overflow-hidden bg-white">
      <div className="relative z-10">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Questions? We're here to help. Send us a message and we'll respond
              within 24 hours.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="p-4 border border-green-300 rounded-lg bg-green-50">
                  <p className="text-sm font-medium text-green-800">
                    ✓ Message sent! We'll get back to you soon.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="px-4 py-3 text-sm transition bg-white border rounded-lg text-slate-900 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/10"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="px-4 py-3 text-sm transition bg-white border rounded-lg text-slate-900 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/10"
                    required
                  />
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone (optional)"
                    className="px-4 py-3 text-sm transition bg-white border rounded-lg text-slate-900 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/10"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="px-4 py-3 text-sm transition bg-white border rounded-lg text-slate-900 border-slate-300 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/10"
                    required
                  >
                    <option value="" className="text-slate-600">
                      Subject
                    </option>
                    <option value="reservation" className="text-slate-900">
                      Reservation
                    </option>
                    <option value="feedback" className="text-slate-900">
                      Feedback
                    </option>
                    <option value="complaint" className="text-slate-900">
                      Complaint
                    </option>
                    <option value="partnership" className="text-slate-900">
                      Partnership
                    </option>
                    <option value="other" className="text-slate-900">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                  className="w-full px-4 py-3 text-sm transition bg-white border rounded-lg resize-none text-slate-900 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/10"
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-semibold text-white transition duration-300 rounded-lg bg-slate-700 hover:bg-slate-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default Contact;
