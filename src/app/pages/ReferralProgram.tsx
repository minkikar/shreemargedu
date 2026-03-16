import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Users,
  Gift,
  TrendingUp,
  Award,
  Phone,
  CheckCircle,
  ArrowRight,
  Rocket,
} from 'lucide-react';

export function ReferralProgram() {
  const steps = [
    {
      number: '01',
      title: 'Refer a Student',
      description: 'Share Shree Marg with your friends, family, or anyone looking for college admission guidance',
      icon: Users,
    },
    {
      number: '02',
      title: 'Student Takes Admission',
      description: 'The referred student takes admission through Shree Marg in one of our partner universities',
      icon: CheckCircle,
    },
    {
      number: '03',
      title: 'You Earn Rewards',
      description: 'Receive referral rewards once the admission is confirmed and the student enrolls',
      icon: Gift,
    },
  ];

  const benefits = [
    {
      icon: Gift,
      title: 'Generous Rewards',
      description: 'Earn attractive referral rewards for every successful admission',
    },
    {
      icon: Users,
      title: 'No Limit',
      description: 'Refer unlimited students and keep earning rewards',
    },
    {
      icon: TrendingUp,
      title: 'Easy Process',
      description: 'Simple and transparent referral tracking system',
    },
    {
      icon: Award,
      title: 'Bonus Rewards',
      description: 'Additional bonuses for multiple successful referrals',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1E88E5] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6F00] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <Rocket className="w-20 h-20 text-[#1E88E5]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Referral <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#0D47A1]">Program</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Earn rewards by helping students find the right educational path. Share the opportunity and earn together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to start earning rewards
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E88E5] via-[#FF6F00] to-[#1E88E5] transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className={`inline-flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-2xl flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-5xl font-bold text-gray-200">{step.number}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6F00] to-[#F57C00] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10 flex-shrink-0">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Program Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why join our referral program?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Important Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1E88E5] flex-shrink-0 mt-1" />
                <p>Referral rewards are paid after successful admission confirmation and fee payment</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1E88E5] flex-shrink-0 mt-1" />
                <p>You can refer unlimited students and earn rewards for each successful admission</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1E88E5] flex-shrink-0 mt-1" />
                <p>Reward amount varies based on the course and university</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1E88E5] flex-shrink-0 mt-1" />
                <p>Contact us to know detailed referral earnings and complete terms & conditions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
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
              Ready to Start Earning?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us to learn more about referral earnings, terms, and how to get started
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:7601005805"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1E88E5] rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-sm">Call us now</p>
                  <p className="text-xl font-bold">7601005805</p>
                </div>
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#F57C00] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
