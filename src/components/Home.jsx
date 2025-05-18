import React from 'react'
import image from '../../public/image.jpg'
import image2 from '../../public/image2.jpg'
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTiktok, BiLogoTwitter, BiLogoWhatsapp, BiLogoYoutube } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const cardHover = {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }

  return (
    <div id='Home' className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-gray-800 mb-12 sm:text-4xl"
        >
          Meet Our <span className="text-teal-600">Team</span>
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Raditya Saputra Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <div className="p-8 flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6"
              >
                <img 
                  src={image} 
                  alt="Raditya Saputra" 
                  className='w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-teal-100 shadow-md'
                />
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Front End
                </motion.div>
              </motion.div>

              <div className="text-center space-y-3">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className='text-3xl font-bold text-gray-800'
                >
                  Raditya Saputra
                </motion.h1>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='text-xl font-semibold text-teal-600'
                >
                  Front End Developer
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className='text-gray-600 max-w-md'
                >
                 Saya seorang siswa di SMK Negeri 1 Tengaran dengan pengalaman beberapa tahun di bidang rekayasa perangkat lunak. Bersemangat dalam menciptakan antarmuka pengguna yang cantik dan fungsional.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='flex gap-4 mt-6'
              >
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="https://www.tiktok.com/@ditt_jw?is_from_webapp=1&sender_device=pc" 
                  className="social-icon"
                >
                  <BiLogoTiktok className='h-8 w-8'/>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="https://www.instagram.com/ditya_.sptra?igsh=b2xmY2hpaWxoZG4z" 
                  className="social-icon"
                >
                  <BiLogoInstagram className='h-8 w-8'/>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="https://wa.me/qr/4A2OYOK66TZ6G1" 
                  className="social-icon"
                >
                  <BiLogoWhatsapp className='h-8 w-8'/>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Tio Imam Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <div className="p-8 flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6"
              >
                <img 
                  src={image2} 
                  alt="Tio Imam" 
                  className='w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-teal-100 shadow-md'
                />
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Back End
                </motion.div>
              </motion.div>

              <div className="text-center space-y-3">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className='text-3xl font-bold text-gray-800'
                >
                  Tio Imam
                </motion.h1>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='text-xl font-semibold text-teal-600'
                >
                  Back End Developer
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className='text-gray-600 max-w-md'
                >
                  Saya adalah siswa SMK Negeri 1 Tengaran yang memiliki pengalaman bertahun-tahun di bidang rekayasa perangkat lunak. Pengembang back-end berpengalaman yang mengkhususkan diri dalam solusi sisi server yang tangguh.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='flex gap-4 mt-6'
              >
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="https://github.com/tiobelajarhosting" 
                  className="social-icon"
                >
                  <BiLogoGithub className='h-8 w-8'/>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="https://www.tiktok.com/@wnnxcyyl?_t=ZS-8wRxyFLXSuW&_r=1" 
                  className="social-icon"
                >
                  <BiLogoTiktok className='h-8 w-8'/>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="https://www.instagram.com/_wnnxcyyl/profilecard/?igsh=MW41dGlkeTZleTAxag==" 
                  className="social-icon"
                >
                  <BiLogoInstagram className='h-8 w-8'/>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="https://wa.me/qr/IZVBLI5XE2Z6I1" 
                  className="social-icon"
                >
                <BiLogoWhatsapp className='h-8 w-8'/>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .social-icon {
          @apply h-10 w-10 flex items-center justify-center rounded-full bg-teal-600 text-white transition-all duration-200 hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:scale-110;
        }
      `}</style>
    </div>
  )
}

export default Home