import { Link } from "react-router";
import { motion } from "motion/react";
import { MapPin, Building2, TrendingUp, Home, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Universities() {
  const universities = [
    {
      id: "sandip",
      name: "Sandip University",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.QjlH1urni4tQzz8_GN-sCQHaEK?pid=Api&P=0&h=180",
      location: "Nashik, Maharashtra",
      area: "250+ Acres",
      courses: "B.Tech, MBA, B.Pharma, B.Sc, B.Des",
      avgPackage: "₹12 LPA",
      highestPackage: "₹28 LPA",
      fees: "₹6 - 8 Lakhs",
      hostel: "Available (approx. ₹1.1L/year)",
      officialLink: "https://www.sandipuniversity.edu.in/",
    },
    {
      id: "marwadi",
      name: "Marwadi University",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.kXnxlCGel5QuPhUvhAR7NQAAAA?pid=Api&P=0&h=180",
      location: "Rajkot, Gujarat",
      area: "52 Acres",
      courses: "B.Tech, BCA, B.Sc, B.Pharm, MBA",
      avgPackage: "₹5 LPA",
      highestPackage: "₹34.5 LPA",
      fees: "₹4.7 - 5.7 Lakhs",
      hostel: "Available (₹65k - 1.1L/year)",
      officialLink: "https://www.marwadiuniversity.ac.in/",
    },
    {
      id: "amity-hyd",
      name: "Amity University",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.dnshLSvILMGf0q_YvVEmkQHaDW?pid=Api&P=0&h=180",
      location: "Hyderabad, Telangana",
      area: "20 Acres",
      courses: "B.Tech, BCA, B.Sc Data Science, BBA, MBA",
      avgPackage: "₹6 - 7 LPA",
      highestPackage: "₹2 Crore (Global)",
      fees: "₹7.5 - 9.8 Lakhs",
      hostel: "Available (460-seater)",
      officialLink: "https://hyderabad.amity.edu/",
    },
    {
      id: "anurag",
      name: "Anurag University",
      image: "https://img.youtube.com/vi/n1wdUNWWKc0/mqdefault.jpg",
      location: "Hyderabad, Telangana",
      area: "55 Acres",
      courses: "B.Tech, B.Pharm, B.Sc (Hons), MBA",
      avgPackage: "₹3.75 LPA",
      highestPackage: "₹38 LPA",
      fees: "₹5.4 - 11.4 Lakhs",
      hostel: "Available",
      officialLink: "https://anurag.edu.in/",
    },
    {
      id: "kaveri",
      name: "Kaveri University",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.KCBHK_iINRxIVs96SRfEyQHaEK?pid=Api&P=0&h=180",
      location: "Siddipet, Telangana",
      area: "Modern Campus",
      courses: "B.Tech (CSE, AI&ML), Agricultural Studies",
      avgPackage: "₹4 - 5 LPA",
      highestPackage: "₹12 LPA",
      fees: "₹12 Lakhs (Total Academic)",
      hostel: "Mandatory (₹1.25L - 1.5L/year)",
      officialLink: "https://kaveriuniversity.edu.in/",
    },
    {
      id: "utranchal",
      name: "Uttaranchal University",
      image: "https://www.addressguru.in/images/574444364.jpg",
      location: "Dehradun, Uttarakhand",
      area: "70+ Acres",
      courses: "B.Tech, Law, MBA, B.Sc, BCA",
      avgPackage: "₹4 - 6 LPA",
      highestPackage: "₹1.5 Crore",
      fees: "₹6 - 12 Lakhs",
      hostel: "Available (approx. ₹3.68L total)",
      officialLink: "https://www.uudoon.in/",
    },
    {
      id: "sharda",
      name: "Sharda University",
      image: "https://www.addressguru.in/images/1593523164.png",
      location: "Greater Noida, UP",
      area: "63 Acres",
      courses: "B.Tech, MBA, MBBS, B.Sc, BCA",
      avgPackage: "₹6.4 - 8 LPA",
      highestPackage: "₹1.7 Crore",
      fees: "₹7 - 14.8 Lakhs",
      hostel: "Available",
      officialLink: "https://www.sharda.ac.in/",
    },
    {
      id: "sanjay-ghodawat",
      name: "Sanjay Ghodawat University",
      image: "https://i.ytimg.com/vi/-J2f6HKaw5Y/maxresdefault.jpg",
      location: "Kolhapur, Maharashtra",
      area: "Modern Campus",
      courses: "B.Tech, MBA, B.Des, B.Pharm, BCA",
      avgPackage: "₹3.20 LPA",
      highestPackage: "₹36 LPA",
      fees: "₹5.8 - 6.4 Lakhs",
      hostel: "Available (₹57,000/year)",
      officialLink: "https://www.sguk.ac.in/",
    },
    {
      id: "guru-nanak",
      name: "Guru Nanak University",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.g_j82HXcpzdb4JQzppPP4QHaDz?pid=Api&P=0&h=180",
      location: "Hyderabad, Telangana",
      area: "100+ Acres",
      courses: "B.Tech, BBA, MBA, M.Tech, B.Sc",
      avgPackage: "₹4.5 - 5.5 LPA",
      highestPackage: "₹60 LPA",
      fees: "₹4.8 - 7.2 Lakhs",
      hostel: "Available (2500-bed capacity)",
      officialLink: "https://gnuindia.org/",
    },
    {
      id: "malla-reddy",
      name: "Malla Reddy University",
      image:
        "https://image-static.collegedunia.com/public/college_data/images/campusimage/15980093471.jpg",
      location: "Hyderabad, Telangana",
      area: "100+ Acres",
      courses: "B.Tech, B.Sc, BPT, MBA, M.Tech",
      avgPackage: "₹5 - 8 LPA",
      highestPackage: "₹22.4 LPA (up to 92 LPA reported)",
      fees: "₹8 Lakhs (Stable for 4 years)",
      hostel: "Available (₹90k - 1.8L/year)",
      officialLink: "https://www.mallareddyuniversity.ac.in/",
    },
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
              Partner{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#0D47A1]">
                Universities
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore top universities across India and find the perfect match
              for your career goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <motion.div
                key={university.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {university.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-[#1E88E5] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p>{university.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-gray-600">
                      <Building2 className="w-5 h-5 text-[#1E88E5] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Campus Area
                        </p>
                        <p>{university.area}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-gray-600">
                      <TrendingUp className="w-5 h-5 text-[#1E88E5] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Avg Package
                        </p>
                        <p>{university.avgPackage}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-gray-600">
                      <TrendingUp className="w-5 h-5 text-[#FF6F00] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Highest Package
                        </p>
                        <p>{university.highestPackage}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-gray-600">
                        <span className="font-semibold text-gray-900">
                          B.Tech Fees (4 years):
                        </span>{" "}
                        {university.fees}
                      </p>
                      <p className="text-gray-600 mt-2">
                        <span className="font-semibold text-gray-900">
                          Hostel:
                        </span>{" "}
                        {university.hostel}
                      </p>
                    </div>
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
              Need Help Choosing the Right University?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our expert counselors are here to guide you through the admission
              process
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
