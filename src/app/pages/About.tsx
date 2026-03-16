import { motion } from 'motion/react';
import { Target, Users, Award, Lightbulb, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import aboutus from '../../assets/aboutus.png'

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Help students build successful careers through proper guidance and support at every step of their educational journey.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To become India\'s most trusted education guidance platform, bridging the gap between students and their dream careers.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, student-first approach, excellence in service, and commitment to long-term success of every student.',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'IT professionals and career mentors with years of industry experience',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Thousands of students successfully placed in top companies',
    },
    {
      icon: TrendingUp,
      title: 'End-to-End Support',
      description: 'Continuous guidance from admission to job placement',
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#0D47A1]">Shree Marg</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Partner From College Admission To Career Success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={aboutus}
                  alt="Students studying together"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Shree Marg is a student-focused admission guidance platform dedicated to helping students make informed decisions about their education and career.
                </p>
                <p className="text-lg">
                  Our team includes experienced IT professionals and career mentors who guide students in choosing the right college and career path.
                </p>
                <p className="text-lg">
                  We believe that proper guidance at the right time can transform a student's future. That's why we support students from admission to job placement, ensuring they have the resources and mentorship needed to succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
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
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go beyond just admission guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6F00] to-[#F57C00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Journey */}
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
              Complete Support Throughout Your Journey
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              From choosing the right college to landing your first job, we're with you at every step. Our comprehensive support system includes free career guidance, skill development courses, internship assistance, hackathon support, and job placement help.
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="text-lg">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg">Companies Hiring</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-lg">Placement Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
