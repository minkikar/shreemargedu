import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#0D47A1]">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We're here to help you make the right decision for
              your future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us and our expert counselors will guide you through
                the admission process. We're available to answer all your
                questions.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:7601005805"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Call us for instant support
                    </p>
                    <p className="text-xl font-bold text-[#1E88E5]">
                      7601005805
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6F00] to-[#F57C00] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">Monday - Saturday</p>
                    <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">Why Contact Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Free admission counseling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>University selection guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Career counseling sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Complete admission support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and we'll get back to you as soon as possible
              </p>

              <form
                action="https://formspree.io/f/xdawwpod"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Full Name *
                  </label>
                  <input
                    name="Full Name" // ADDED
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Mobile Number *
                  </label>
                  <input
                    name="Mobile" // ADDED
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Email *
                  </label>
                  <input
                    name="Email" // ADDED
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Inquiry Type *
                  </label>
                  <select
                    name="Inquiry Type" // ADDED
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="Admission Guidance">
                      Admission Guidance
                    </option>
                    <option value="Referral Program">Referral Program</option>
                    <option value="University Details">
                      University Details
                    </option>
                    <option value="Career Counseling">Career Counseling</option>
                    <option value="Internship Support">
                      Internship Support
                    </option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      City
                    </label>
                    <input
                      name="City" // ADDED
                      type="text"
                      placeholder="Enter your city"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      State
                    </label>
                    <input
                      name="State" // ADDED
                      type="text"
                      placeholder="Enter your state"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    name="Message" // ADDED
                    placeholder="Tell us about your query..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Call us now for instant support from our expert counselors
            </p>
            <a
              href="tel:7601005805"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1E88E5] rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <p className="text-sm">Call us now</p>
                <p className="text-2xl font-bold">7601005805</p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is the counseling service free?",
                  a: "Yes, all our counseling and guidance services are completely free for students.",
                },
                {
                  q: "Which universities do you work with?",
                  a: "We partner with 50+ top universities across India including Sandip, Parul, LPU, and many more.",
                },
                {
                  q: "How does the admission process work?",
                  a: "Contact us, get free counseling, choose your university, and we handle the entire admission process.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
