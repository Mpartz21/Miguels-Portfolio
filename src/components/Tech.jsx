import { BallCanvas } from "./canvas"
import SectionWrapper  from "../hoc/SectionWrapper"
import { technologies } from "../constants"
import { styles } from "../styles"

const Tech = () => {
  return (
    <div>
      <p className={styles.sectionSubText}>Technologies I have grown an understanding through experience</p>
      <h2 className={styles.sectionHeadText}>ToolBox</h2>
  
        <div
          className="flex flex-row flex-wrap justify-center gap-10 mt-20"
        >     
          {technologies.map((tech) => (
            <div
              className="w-28 h-28" key={tech.name}
            >
              <BallCanvas
                icon={tech.icon}/>
          </div>
          ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")