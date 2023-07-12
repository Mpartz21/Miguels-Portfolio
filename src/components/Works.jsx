/* eslint-disable react/prop-types */
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import { github } from '../assets'
import SectionWrapper from '../hoc/SectionWrapper'
import { projects, works } from '../constants'
import { fadeIn, textVariant} from '../Utils/motion'


const ProjectCard = ({index, name, description, tags, image, source_code_Link}) => {
return (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[260px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
        <div className='absolute inset-0 flex justify-end m-3 car-img_hover'>
          <div onClick={() => window.open (source_code_Link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-center'>
            <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white text-[24px] font-bold'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}> #{tag.name}</p>
          ))}
      </div>
    </Tilt>
  </motion.div>
)

}

const Works = () => {
  return (
    <div className={`${styles.padding} min-h-[300px] flex-auto`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Past Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex-auto'>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-xl leading-[30px]'>
          {works.map((work) => (`${work.prelude}`))}
        </motion.p>
      </div>
      <div
      className='mt-20 flex flex-wrap gap-7'
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
           index={index} 
           {...project}/>))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, "work")