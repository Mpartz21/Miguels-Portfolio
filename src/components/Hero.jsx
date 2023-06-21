import { ComputersCanvas } from './canvas'  
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'

const Hero = () => {
  return (
    <section className="relative h-screen mx-auto"> 
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