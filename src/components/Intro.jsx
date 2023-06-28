import SectionWrapper from '../hoc/SectionWrapper'
import {styles} from '../styles'

const IntroTop = () => {   
    return (
        <div className={`${styles.paddingX} absolute  mx-auto flex flex-row items-start gap-5 pb-8 `}>
            <div className="flex flex-col justify-center items-center">
                <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                <div className="w-1 sm:h-80 h-40 violet-gradient"/>
            </div>
            <div>
                <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm <span className="text-[#915eff]"> Miguel Partida</span></h1>
                <p className={`${styles.heroSubText} = text-white-100`}>
                    I develop web applications from scratch<br className='sm:block hidden'/> I am a full stack developer with experience in the MERN stack.
                </p>
            </div>
        </div>
    )
}

export default SectionWrapper(IntroTop, "")