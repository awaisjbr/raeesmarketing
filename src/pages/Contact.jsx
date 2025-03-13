import Loading from '../components/Loading';
import React, { useState } from 'react';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import contact from "../assets/icons/contact.jpg"
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Contact = ({whatsapp}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange  = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    const formURL = 'https://api.web3forms.com/submit';
    const data = {access_key: '9884a3b5-7a8d-4c0f-864f-1488c989b19a', // Replace with your API key
      ...formData,};

    try {
      const response = await fetch(formURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/success'); // Navigate to custom success page
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (err) {
      alert(err.message);
    } finally{
      setLoading(false);
    }
  };

  if(loading){
    return <Loading />
  };
  return (
    <div className='flex flex-col items-center pt-20 md:pt-24 lg:pt-28 bg-slate-200'>
    <div className='my-2 text-lg lg:text-2xl font-semiboldb bg-[#947054] py-5 lg:py-10 w-full text-center text-white'><p>Contact Us</p></div>
    <div className='flex flex-col gap-5 text-sm font-semibold w-[95%] mt-5'>
    {/* Google Map */}
      <div className='w-full flex flex-col lg:flex-row items-center bg-white p-5 rounded-lg shadow-lg'>
        <div className='flex-1 flex items-center justify-center w-[95%] lg:w-[60%]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d850.1467183581892!2d73.06007026959308!3d31.535504798387958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDMyJzA3LjgiTiA3M8KwMDMnMzguNiJF!5e0!3m2!1sen!2s!4v1741847816600!5m2!1sen!2s" width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* Adress & Social */}
        <div className='text-[#7D7D7D] flex flex-col gap-8 mt-8 lg:w-[40%] items-center'>
          <h1 className='text-[#947054] text-start lg:text-lg shadow-lg p-5 rounded-lg font-semibold decoration-[#947054] '>RAEES ESTATE MARKETING</h1>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-5'><FiPhoneCall className='text-[#947054]' /><a href="tel:+923280555595">+92 328 0555595</a></div>
            <div className='flex items-center gap-5'><HiOutlineMailOpen className='text-[#947054]'/><a href="mailto:contact@raeesmarketing.com">contact@raeesmarketing.com</a></div>
            <div className='flex items-center gap-5'><FaMapMarkerAlt className='text-[#947054]'/><p>Sarghodah Road, By Pass, Faisalabad.</p></div>
          </div>
        </div>
      </div>
    {/* Contact Form */}
      <div className='flex flex-col lg:flex-row gap-5 items-center justify-center my-3'>
        <div className='flex-1 flex items-center justify-center border'><img src={contact} width={550} alt="" /></div>
        <div className='bg-slate-400 items-center flex-1 w-full'>
          <p className='text-center text-xl font-bold underline underline-offset-8 mt-5 mb-2'>Help & Support</p>
          <p className='text-center font-mono text-lg'>Feel Free to Contact</p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 my-2 items-center'>
            {/* <input type="text" className='hidden' name="access_key"  value={"9884a3b5-7a8d-4c0f-864f-1488c989b19a"} onChange={() => ""}/> */}
            <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Your Name' autoComplete='off' required/>
            <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="email" name='email' onChange={handleChange} value={formData.email} placeholder='Your Email' autoComplete='off' required/>
            <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="text" name="subject" onChange={handleChange} value={formData.subject} placeholder='Subject...' autoComplete='off' required/>
            <textarea className='w-[80%] p-2 outline-none text-slate-500' rows={10} name="message" onChange={handleChange} value={formData.message} placeholder='Message' autoComplete='off' required/>
            <button className='bg-[rgb(108,78,232)] text-white p-2 rounded-md' type='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </div>

    <div onClick={whatsapp} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500">
        <FaSquareWhatsapp />
    </div>
  </div>
  )
}

export default Contact
