import {styles} from '../styles'
import { ComputersCanvas } from './canvas'  
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'

const Hero = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-start`}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm <span className="text-[#915eff]"> Miguel Partida</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications from scratch<br className='sm:block hidden'/> I am a full stack developer with experience in the MERN stack.
          </p>
        </div>

       
      </div> 
      <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 flex w-full justify-center items-center">
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center p-2 items-start'>
            <motion.div
              animate={{y: [0, 24, 0]}}
              transition={{duration: 1.5, repeat: Infinity}}
              repeatType='loop'
              className='w-3 h-3 rounded-full bg-secondary mg-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "")