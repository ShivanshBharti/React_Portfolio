import { React, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'

// template_jbl284o
// service_irv1kyw
// m4wH1xxv4OPtkrh5f

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send('service_irv1kyw', 'template_jbl284o', { from_name: form.name, to_name: 'Shivansh', from_email: form.email, to_email: 'sociophobe2000@gmail.com', message: form.message }, 'm4wH1xxv4OPtkrh5f')
      .then(() => {
        setLoading(false)
        alert('Thanks for reaching out. I will get back to you as soon as possible.')
        setForm({
          name: '',
          email: '',
          message: '',
        })

      }, (error) => {
        setLoading(false)
        console.log(error)
        alert('Something went wrong. Please try again later.')
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch with Me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder="What's your name?" type='text' name='name' value={form.name} onChange={handleChange} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder="What's your email?" type='email' name='email' value={form.email} onChange={handleChange} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder="What do you want to say?" type='text' rows="7" name='message' value={form.message} onChange={handleChange} />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-xl outline-none'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")