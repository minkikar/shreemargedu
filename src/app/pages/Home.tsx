import { Link } from "react-router";
import { motion } from "motion/react";
import {
  GraduationCap,
  Award,
  Users,
  Briefcase,
  Trophy,
  Gift,
  ArrowRight,
  Phone,
  BookOpen,
  Target,
  Rocket,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const benefits = [
    {
      icon: Award,
      title: "Free Career Guidance",
      description:
        "Get expert advice from IT professionals to shape your career path",
    },
    {
      icon: BookOpen,
      title: "Free Skill Development Courses",
      description: "Access premium courses to enhance your technical skills",
    },
    {
      icon: Briefcase,
      title: "Free Internship Assistance",
      description: "Land quality internships with top companies in your field",
    },
    {
      icon: Trophy,
      title: "Hackathon Support",
      description: "Participate in hackathons with our guidance and resources",
    },
    {
      icon: Target,
      title: "Job Assistance",
      description: "Get placed in your dream company after graduation",
    },
    {
      icon: Gift,
      title: "Free Goodies & Community",
      description: "Join an active student community and get exclusive perks",
    },
  ];

  const journeySteps = [
    {
      title: "Admission Guidance",
      description: "Choose the right college and course",
    },
    {
      title: "Free Courses",
      description: "Upskill with industry-relevant courses",
    },
    {
      title: "Internship Assistance",
      description: "Gain real-world experience",
    },
    { title: "Hackathon Support", description: "Build your portfolio" },
    { title: "Job Assistance", description: "Land your first job" },
  ];

  const universities = [
    {
      id: "sandip",
      name: "Sandip University",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.QjlH1urni4tQzz8_GN-sCQHaEK?pid=Api&P=0&h=180",
      location: "Nashik, Maharashtra",
      area: "250+ Acres",
      package: "₹12 LPA",
      fees: "₹6 - 8 Lakhs",
      officialLink: "https://www.sandipuniversity.edu.in/",
    },
    {
      id: "marwadi",
      name: "Marwadi University",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.kXnxlCGel5QuPhUvhAR7NQAAAA?pid=Api&P=0&h=180",
      location: "Rajkot, Gujarat",
      area: "52 Acres",
      package: "₹5 LPA",
      fees: "₹4.7 - 5.7 Lakhs",
      officialLink: "https://www.marwadiuniversity.ac.in/",
    },
    {
      id: "amity-hyd",
      name: "Amity University",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.dnshLSvILMGf0q_YvVEmkQHaDW?pid=Api&P=0&h=180",
      location: "Hyderabad, Telangana",
      area: "20 Acres",
      package: "₹6 - 7 LPA",
      fees: "₹7.5 - 9.8 Lakhs",
      officialLink: "https://hyderabad.amity.edu/",
    },
  ];

  const courses = [
    { name: "B.Tech", icon: "💻", gradient: "from-blue-500 to-cyan-500" },
    { name: "MBA", icon: "💼", gradient: "from-purple-500 to-pink-500" },
    { name: "BBA", icon: "📊", gradient: "from-green-500 to-teal-500" },
    { name: "BCA", icon: "🖥️", gradient: "from-orange-500 to-red-500" },
    { name: "Pharmacy", icon: "💊", gradient: "from-indigo-500 to-purple-500" },
    { name: "Law", icon: "⚖️", gradient: "from-yellow-500 to-orange-500" },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "B.Tech - CSE",
      rating: 5,
      text: "Shree Marg helped me choose the right college and guided me during admission. The support was excellent!",
    },
    {
      name: "Priya Patel",
      course: "MBA",
      rating: 5,
      text: "Got amazing career counseling and internship assistance. Highly recommend Shree Marg!",
    },
    {
      name: "Amit Kumar",
      course: "BCA",
      rating: 5,
      text: "The free courses and hackathon support helped me build a strong portfolio. Thank you Shree Marg!",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1E88E5] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6F00] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Start Your College Journey With the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#0D47A1]">
                  Right Guidance
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join top universities through Shree Marg and receive guidance
                from admission until you get your first job.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Get Free Counseling
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/universities"
                  className="px-8 py-4 border-2 border-[#1E88E5] text-[#1E88E5] rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  Explore Universities
                </Link>
              </div>
              <a
                href="tel:7601005805"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] rounded-xl">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call us now</p>
                  <p className="text-xl font-bold text-gray-900">7601005805</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577036421869-7c8d388d2123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxlZ2UlMjBncmFkdWF0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzM2NzA3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students Success"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Shree Marg */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Shree Marg?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support from admission to your first job
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Support Students Until They Get Their First Job
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your complete journey from admission to placement
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E88E5] to-[#FF6F00] transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E88E5] to-[#FF6F00] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 flex-shrink-0">
                    {index + 1}
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Universities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Top universities across India for your bright future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <motion.div
                key={university.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {university.name}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <p className="text-gray-600 flex items-center gap-2">
                      <span className="font-semibold">Location:</span>{" "}
                      {university.location}
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <span className="font-semibold">Campus Area:</span>{" "}
                      {university.area}
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <span className="font-semibold">Avg. Package:</span>{" "}
                      {university.package}
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <span className="font-semibold">B.Tech Fees:</span>{" "}
                      {university.fees}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={university.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 border-2 border-[#1E88E5] text-[#1E88E5] rounded-lg hover:bg-blue-50 transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                      Official Website
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      to="/contact"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/universities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View All Universities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of courses
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${course.gradient} p-6 rounded-2xl text-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}
              >
                <div className="text-4xl mb-3">{course.icon}</div>
                <h3 className="text-white font-bold text-lg">{course.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6F00] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Rocket className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Earn Rewards by Referring Students
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Refer a student to Shree Marg. If the student takes admission
              through us, you can earn referral rewards.
            </p>
            <Link
              to="/referral-program"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Students Say About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from our successful students
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FF6F00] text-[#FF6F00]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      {/* Lead Capture Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Free Guidance
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form and our experts will contact you
              </p>
            </div>

            <form
              action="https://formspree.io/f/xdawwpod"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    name="Full Name" // Added name attribute
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    name="Mobile Number" // Added name attribute
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  name="Email" // Added name attribute
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Course Interested
                </label>
                <select
                  name="Course Interested" // Added name attribute
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                >
                  <option value="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Law">Law</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Inquiry Type</label>
                <select
                  name="Inquiry Type" // Added name attribute
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="Admission Guidance">Admission Guidance</option>
                  <option value="Referral Program">Referral Program</option>
                  <option value="University Details">University Details</option>
                  <option value="Career Counseling">Career Counseling</option>
                  <option value="Internship Support">Internship Support</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Guidance
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
