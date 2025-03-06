import React from 'react';
import logo from "../assets/logo1.png"
import {FiPhoneCall} from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#212529]'>
      <div className='flex flex-col'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 lg:px-16'>
          {/* Company Info */}
          <div className='flex flex-col gap-5 max-w-sm'>
            <h1 className='text-white font-semibold underline decoration-[#947054] underline-offset-8'>Company</h1>
            <img src={logo} className='w-20' alt="footer-logo" />
            <p className='text-[#7D7D7D]'>Your trusted partner in finding the perfect place to build your dream home in Faisalabad.</p>
          </div>
          {/* Office Timing */}
          <div className='max-w-sm'>
            <div className='text-[#7D7D7D] flex flex-col gap-10'>
              <h1 className='text-white font-semibold underline decoration-[#947054] underline-offset-4'>HOURS</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-wrap items-center justify-between border-b-2 border-[#947054]'><p>Monday-Saturday</p><p>09 AM - 06 PM</p></div>
                <div className='flex flex-wrap items-center justify-between border-b-2 border-[#947054]'><p>Friday-Break</p><p>12 PM - 03 PM</p></div>
                <div className='flex flex-wrap items-center justify-between border-b-2 border-[#947054]'><p>Sunday</p><p>Closed</p></div>
              </div>
            </div>
            {/* Address */}
            <div className='text-[#7D7D7D] flex flex-col gap-8 mt-8'>
              <h1 className='text-white font-semibold underline decoration-[#947054] underline-offset-4'>ADDRESS</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-5'><FiPhoneCall className='text-[#947054]' /><p>+92 300 1234567</p></div>
                <div className='flex items-center gap-5'><HiOutlineMailOpen className='text-[#947054]'/><p>contact@resees.com</p></div>
                <div className='flex items-center gap-5'><FaMapMarkerAlt className='text-[#947054]'/><p>Sarghodah Road, By Pass, Faisalabad.</p></div>
              </div>
            </div>
          </div>
          {/* Contact From */}
          <div className='text-[#7D7D7D] flex flex-col gap-10'>
            <h1 className='text-white font-semibold underline decoration-[#947054] underline-offset-4'>FIND US</h1>
            <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.145369443961!2d73.05233937545218!3d31.547624874201386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39224108be55a961%3A0x93c8288f27282d2e!2sGrand%20City%20Faisalabad%20-%20Phase-1!5e0!3m2!1sen!2s!4v1741189742987!5m2!1sen!2s" width="330" height="300" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
        </div>
        <div className='bg-[#111113] py-3'><p className='text-[#7D7D7D] text-center'>{`Copyright ©2025 All rights reserved | [developed by a-coder] `}</p></div>
      </div>
    </footer>
  )
}

export default Footer
