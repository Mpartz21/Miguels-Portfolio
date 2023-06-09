/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import SectionWrapper from '../hoc/SectionWrapper'
import { textVariant } from '../Utils/motion'

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#452e37', color: '#f3f3f3' }}
    contentArrowStyle={{ borderRight: '7px solid  #f3f3f3' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.company}
          className='w-[60%] h-[60%] object-contain' 
          />
      </div>}
  >
    <div>
    <h3
    className='text-white text-[24px] font-bold text-center'
    >{experience.title}</h3>
    <p className='text-secondary text-[16px] font-bold'
    style={{margin: 0}}
    >
      {experience.company_name}</p>
    </div>
    <ul
      className='mt-5 list-disc ml-5 space-y-2'
    >
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
        ))}

    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      >
        <h2 className={styles.sectionHeadText}>Concluded Projects</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
          <ExperienceCard key={index}  experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")