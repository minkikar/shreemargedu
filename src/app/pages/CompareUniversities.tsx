import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export function CompareUniversities() {
  const universities = [
    {
      id: "sandip",
      name: "Sandip University",
      location: "Nashik, Maharashtra",
      area: "250+ Acres",
      avgPackage: "₹12 LPA",
      highestPackage: "₹28 LPA",
      fees: "₹6 - 8 Lakhs",
      hostel: true,
      rating: "4.2/5",
      officialLink: "https://www.sandipuniversity.edu.in/",
    },
    {
      id: "marwadi",
      name: "Marwadi University",
      location: "Rajkot, Gujarat",
      area: "52 Acres",
      avgPackage: "₹5 LPA",
      highestPackage: "₹34.5 LPA",
      fees: "₹4.7 - 5.7 Lakhs",
      hostel: true,
      rating: "4.3/5",
      officialLink: "https://www.marwadiuniversity.ac.in/",
    },
    {
      id: "utranchal",
      name: "Uttaranchal University",
      location: "Dehradun, Uttarakhand",
      area: "70+ Acres",
      avgPackage: "₹4 - 6 LPA",
      highestPackage: "₹1.5 Crore",
      fees: "₹6 - 12 Lakhs",
      hostel: true,
      rating: "4.1/5",
      officialLink: "https://www.uudoon.in/",
    },
  ];

  const comparisonRows = [
    { label: "University Name", key: "name" },
    { label: "Location", key: "location" },
    { label: "Campus Area", key: "area" },
    { label: "Average Placement", key: "avgPackage" },
    { label: "Highest Placement", key: "highestPackage" },
    { label: "Total B.Tech Fees (4 years)", key: "fees" },
    { label: "Hostel Availability", key: "hostel" },
    { label: "Rating", key: "rating" },
  ];

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
              Compare{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#0D47A1]">
                Universities
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make an informed decision by comparing universities side by side
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table - Desktop */}
      <section className="py-20 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white">
                    <th className="px-6 py-6 text-left text-lg font-bold">
                      Feature
                    </th>
                    {universities.map((uni) => (
                      <th
                        key={uni.id}
                        className="px-6 py-6 text-center text-lg font-bold"
                      >
                        {uni.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.key}
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-blue-50 transition-colors`}
                    >
                      <td className="px-6 py-5 font-semibold text-gray-900">
                        {row.label}
                      </td>
                      {universities.map((uni) => (
                        <td
                          key={uni.id}
                          className="px-6 py-5 text-center text-gray-700"
                        >
                          {row.key === "hostel" ? (
                            uni[row.key] ? (
                              <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                            ) : (
                              <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                            )
                          ) : (
                            uni[row.key as keyof typeof uni]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-gradient-to-r from-orange-50 to-blue-50">
                    <td className="px-6 py-5 font-semibold text-gray-900">
                      Actions
                    </td>
                    {universities.map((uni) => (
                      <td key={uni.id} className="px-6 py-5 text-center">
                        <div className="flex flex-col gap-2">
                          <a
                            href={uni.officialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 border-[#1E88E5] text-[#1E88E5] rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm inline-block"
                          >
                            Official Website
                          </a>
                          <Link
                            to="/contact"
                            className="px-4 py-2 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Cards - Mobile */}
      <section className="py-20 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {universities.map((uni, index) => (
              <motion.div
                key={uni.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white p-6">
                  <h3 className="text-2xl font-bold">{uni.name}</h3>
                </div>

                <div className="p-6 space-y-4">
                  {comparisonRows.map((row) => (
                    <div
                      key={row.key}
                      className="flex justify-between items-center border-b border-gray-200 pb-3"
                    >
                      <span className="font-semibold text-gray-900">
                        {row.label}
                      </span>
                      <span className="text-gray-700">
                        {row.key === "hostel" ? (
                          uni[row.key] ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-600" />
                          )
                        ) : (
                          uni[row.key as keyof typeof uni]
                        )}
                      </span>
                    </div>
                  ))}

                  <div className="flex gap-3 pt-4">
                    <a
                      href={uni.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-2 border-[#1E88E5] text-[#1E88E5] rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm inline-block"
                    >
                      Official Website
                    </a>
                    <Link
                      to="/contact"
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Universities Info */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Compare More Universities?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We partner with 50+ universities across India. Contact us for
              detailed comparison of other universities.
            </p>
            <Link
              to="/universities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View All Universities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our expert counselors can help you make the right choice based on
              your preferences and goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Free Counseling
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
