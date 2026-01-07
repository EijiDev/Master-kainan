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
    <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Get in Touch
          </h2>
          <p className="text-slate-600">
            Questions? We're here to help. Send us a message and we'll respond
            within 24 hours.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="p-4 border rounded-lg border-slate-300 bg-slate-100">
                <p className="text-sm font-medium text-slate-900">
                  ✓ Message sent! We'll get back to you soon.
                </p>
              </div>
            )}

            <div className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition"
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
                  className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition"
                  required
                >
                  <option value="">Subject</option>
                  <option value="reservation">Reservation</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition resize-none"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2.5 font-semibold text-white text-sm bg-slate-700 rounded-lg hover:bg-slate-800 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
