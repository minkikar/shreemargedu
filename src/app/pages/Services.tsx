import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  GraduationCap,
  Award,
  Briefcase,
  Trophy,
  Target,
  BookOpen,
  Users,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'College Admission Guidance',
      description:
        'Expert counseling to help you choose the right college and course based on your interests, aptitude, and career goals.',
      features: [
        'Personalized college recommendations',
        'Course selection guidance',
        'Application assistance',
        'Document preparation support',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Career Counseling',
      description:
        'One-on-one sessions with experienced IT professionals to plan your career path and achieve your professional goals.',
      features: [
        'Career path assessment',
        'Industry insights',
        'Skill gap analysis',
        'Long-term career planning',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Skill Development Courses',
      description:
        'Access to premium online courses in trending technologies to enhance your skills and stay ahead in the competitive job market.',
      features: [
        'Web Development courses',
        'Data Science & AI',
        'Cloud Computing',
        'Digital Marketing',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Briefcase,
      title: 'Internship Assistance',
      description:
        'Connect with top companies and secure quality internships to gain real-world experience in your field of study.',
      features: [
        'Company connections',
        'Resume building',
        'Interview preparation',
        'Internship placement support',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Trophy,
      title: 'Hackathon Support',
      description:
        'Participate in national and international hackathons with our guidance, resources, and mentorship to build your portfolio.',
      features: [
        'Hackathon notifications',
        'Team formation assistance',
        'Project idea guidance',
        'Technical mentorship',
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Award,
      title: 'Job Assistance',
      description:
        'Comprehensive job placement support including resume building, interview preparation, and connections with hiring companies.',
      features: [
        'Job placement assistance',
        'Mock interviews',
        'Resume & portfolio review',
        'Salary negotiation guidance',
      ],
      gradient: 'from-yellow-500 to-orange-500',
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#0D47A1]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support from admission to job placement - everything you need for a successful career
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#1E88E5] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get started with our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contact Us', desc: 'Reach out via phone or form' },
              { step: '02', title: 'Free Consultation', desc: 'Discuss your goals with experts' },
              { step: '03', title: 'Get Guidance', desc: 'Receive personalized support' },
              { step: '04', title: 'Achieve Success', desc: 'Land your dream college or job' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Guidance',
                desc: 'Learn from experienced IT professionals',
              },
              {
                icon: Award,
                title: 'Proven Results',
                desc: '1000+ students successfully placed',
              },
              {
                icon: TrendingUp,
                title: 'Continuous Support',
                desc: 'Support until you get your first job',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
              Ready to Start Your Success Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get in touch with us today and let our experts guide you towards your dream career
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
