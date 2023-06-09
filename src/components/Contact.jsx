/* eslint-disable react/no-unescaped-entities */
import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../Utils/motion'





const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (keyStrokeEvent) => {
    const { name, value } = keyStrokeEvent.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_uajv1te',
      'template_r8n7ioj',
       {
        from_name: form.name,
        to_name: 'Miguel',
        from_email: form.email,
        to_email: `mig21.ap@gmail.com`,
        message: form.message,
        
      },'-A9Zr2pe1NhAf1AiZ')
      .then(() => {
        setLoading(false);
        alert('Message sent successfully! I will get back to you as soon as I can.');
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, (err) => {
        setLoading(false);
        console.log(err);
        alert('Message failed to send. Please try my LinkedIn '); 
     })};

    
  return (
    <div className=" xl:flex-row overflow-hidden">
      <motion.div variants={slideIn('center',"tween", 0.2, 1)}
      className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Reach out, I'm always available</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact Me</h3>
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>
             Your Name :
            </span>
            <input
              type = 'text'
              name = 'name'
              value = {form.name}
              onChange = {handleChange }
              placeholder = 'Name goes here'
              className = 'bg-primary py-4  px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className = 'flex flex-col'>
            <span className = 'text-white font-medium mb-4 '>
              Your Email :
            </span>
            <input
              type = 'email'
              name = 'email'
              value = {form.email}
              onChange = {handleChange }
              placeholder = 'Email goes here'
              className = 'bg-primary py-4  px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>
              Your Message :
            </span>
            <textarea
              rows = '7'
              name = 'message'
              value = {form.message}
              onChange = {handleChange }
              placeholder = 'Message goes here'
              className = 'bg-primary py-4  px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button type='submit' className='bg-primary py-3 px-8 outline-none shadow-md shadow-primary rounded-xl text-white font-medium'>
            {loading ? "Message on it's way..." : "Send Message"}
          </button>
        </form> 
      </motion.div>
      <motion.div variants={slideIn('up',"tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>    
    </div>
  )
}

export default SectionWrapper(Contact, "contact")