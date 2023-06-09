import {Tilt} from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from "../styles"
import SectionWrapper from "../hoc/SectionWrapper"
import { fadeIn, textVariant } from "../Utils/motion"
import { testimonials } from "../constants"

const FeebackCard = ({ index, testimonial, name, designation, company, image }) => {

  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sx:w-[260px] w-full"
      >
        <div className="relative flex-auto flex-col">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span>-</span>{name}
            <p className="mt-1 text-secondary text-[12px]">
              {designation}
            </p>
            </p>
          </div>
          <img
          src ={image}
          alt = {name}
          className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        </div>
      </Tilt>    
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className="mt-10 w-full flex-col">
      <div className={`${styles.padding} rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say </p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`flex gap-7 flex flex-wrap `}>
        {testimonials.map((testimonial, index) => (
          <FeebackCard className="bg-tertiary" key={testimonial.name} index={index} 
          {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")