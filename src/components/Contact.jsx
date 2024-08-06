import React from 'react'
import "../Styles/Contact.css"
export default function Contact() {
  return (
    <div>
    <section id='contact'>
      <h1 className='sectionTitle'>Contact</h1>
      <form action=''>
        <div className='formGroup'>
          <label htmlFor='name' hidden >Name</label>
          <input type='text' name='name' id='name' placeholder='Name' required/>
        </div>

        <div className='formGroup'>
          <label htmlFor='email' hidden>email</label>
          <input type='text' name='email' id='name' placeholder='Email' required/>
        </div>

        <div className='formGroup'>
          <label htmlFor='message' hidden>Message</label>
          <textarea type='text' name='message' id='message' placeholder='Message' required/>
        </div>
        <input type='submit' className='hover btn' value="Submit"/>
      </form>
    </section>
      
    </div>
  )
}
