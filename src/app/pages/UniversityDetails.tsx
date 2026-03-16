import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import {
  MapPin,
  Building2,
  TrendingUp,
  Home,
  BookOpen,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function UniversityDetails() {
  const { id } = useParams();

  const universityData: Record<string, any> = {
    sandip: {
      name: 'Sandip University',
      location: 'Nashik, Maharashtra',
      area: '250+ Acres',
      about:
        'Sandip University is a leading institution offering world-class education with state-of-the-art infrastructure and experienced faculty.',
      infrastructure: [
        'Modern Laboratories',
        'Digital Library',
        'Sports Complex',
        'Hostel Facilities',
        'Auditorium & Conference Halls',
        'Cafeteria',
      ],
      courses: [
        { name: 'B.Tech (CSE)', fees: '₹4.5 Lakhs' },
        { name: 'MBA', fees: '₹3 Lakhs' },
        { name: 'BBA', fees: '₹2.5 Lakhs' },
        { name: 'Pharmacy', fees: '₹4 Lakhs' },
      ],
      avgPackage: '₹4-6 LPA',
      highestPackage: '₹12 LPA',
      placementRate: '85%',
      eligibility: '10+2 with 50% marks',
      entranceExams: 'JEE Main, MHT-CET, University Entrance Test',
    },
    parul: {
      name: 'Parul University',
      location: 'Vadodara, Gujarat',
      area: '150+ Acres',
      about:
        'Parul University is a premier educational institution known for its innovative teaching methods and excellent placement records.',
      infrastructure: [
        'Advanced Tech Labs',
        'Central Library',
        'Indoor & Outdoor Sports',
        'Boys & Girls Hostels',
        'Seminar Halls',
        'Food Court',
      ],
      courses: [
        { name: 'B.Tech (CSE)', fees: '₹5 Lakhs' },
        { name: 'MBA', fees: '₹3.5 Lakhs' },
        { name: 'BBA', fees: '₹2.8 Lakhs' },
        { name: 'BCA', fees: '₹2.5 Lakhs' },
      ],
      avgPackage: '₹5-7 LPA',
      highestPackage: '₹15 LPA',
      placementRate: '90%',
      eligibility: '10+2 with 50% marks',
      entranceExams: 'JEE Main, GUJCET, University Entrance Test',
    },
    lpu: {
      name: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      area: '600+ Acres',
      about:
        'LPU is one of India\'s largest private universities, offering diverse programs with excellent placement opportunities and global exposure.',
      infrastructure: [
        'World-class Labs',
        'International Library',
        'Sports Stadium',
        'On-campus Hostels',
        'Convention Centers',
        'Multiple Cafeterias',
      ],
      courses: [
        { name: 'B.Tech (CSE)', fees: '₹6.5 Lakhs' },
        { name: 'MBA', fees: '₹4 Lakhs' },
        { name: 'BBA', fees: '₹3.5 Lakhs' },
        { name: 'Law', fees: '₹5 Lakhs' },
      ],
      avgPackage: '₹6-8 LPA',
      highestPackage: '₹20 LPA',
      placementRate: '92%',
      eligibility: '10+2 with 50% marks',
      entranceExams: 'JEE Main, LPUNEST',
    },
  };

  const university = universityData[id || 'sandip'] || universityData.sandip;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/universities"
              className="inline-flex items-center gap-2 text-[#1E88E5] hover:underline mb-6"
            >
              ← Back to Universities
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {university.name}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1E88E5]" />
                <span>{university.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#1E88E5]" />
                <span>{university.area} Campus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Images */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzczNTgzMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Campus Building"
                className="w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670111482157-c5ecbba142a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzM2NzA3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Campus Aerial View"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About University */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About University</h2>
              <p className="text-lg text-gray-600 mb-6">{university.about}</p>
              
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
                <div className="grid grid-cols-2 gap-3">
                  {university.infrastructure.map((item: string) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#1E88E5]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Placement Details</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-2">
                    <TrendingUp className="w-8 h-8 text-[#1E88E5]" />
                    <div>
                      <p className="text-sm text-gray-600">Average Package</p>
                      <p className="text-2xl font-bold text-gray-900">{university.avgPackage}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-2">
                    <Award className="w-8 h-8 text-[#FF6F00]" />
                    <div>
                      <p className="text-sm text-gray-600">Highest Package</p>
                      <p className="text-2xl font-bold text-gray-900">{university.highestPackage}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-2">
                    <Users className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Placement Rate</p>
                      <p className="text-2xl font-bold text-gray-900">{university.placementRate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses & Fees */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Courses & Fees</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Course</th>
                    <th className="px-6 py-4 text-left">Total Fees (4 Years)</th>
                  </tr>
                </thead>
                <tbody>
                  {university.courses.map((course: any, index: number) => (
                    <tr key={course.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{course.name}</td>
                      <td className="px-6 py-4 text-gray-700">{course.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Admission Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility</h3>
                <p className="text-gray-700">{university.eligibility}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Entrance Exams</h3>
                <p className="text-gray-700">{university.entranceExams}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Apply to {university.name}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form and our counselors will guide you through the admission process
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Course</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all">
                  <option>Select Course</option>
                  {university.courses.map((course: any) => (
                    <option key={course.name}>{course.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">State</label>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
