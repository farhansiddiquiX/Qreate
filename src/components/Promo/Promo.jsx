import React from 'react'
import './Promo.css'
import { RiWifiLine, RiLinksLine, RiUserSharedLine } from 'react-icons/ri';
const Promo = () => {
  return (
    <>
      <div className='ad-cont'>
        <div className='ad-text'>
            <img src='/images/logo.png'/>
            <h1>Free QR code <br />generator.</h1>
            <p>Invite your audience to learn more about your brand or business with a <br />scannable QR code. Use the quick and easy QR code generator from Qreate<br />, the quick and easy to use app.</p>
        </div>
        <div className='ad-img'>
            <img src='/images/ad.webp'/>
        </div>
      </div>
     <div className="usecases-cont">
        <h2>What can you do with Qreate?</h2>
        <div className="usecases-cards">
          <div className="usecase-card">
            <RiWifiLine size={30} className="usecase-icon" />
            <h3>Share Wi‑Fi Access</h3>
            <p>Generate a QR code containing your network’s SSID and password so guests can join your Wi‑Fi instantly by scanning—no typing required.</p>
          </div>
          <div className="usecase-card">
            <RiLinksLine size={30} className="usecase-icon" />
            <h3>Share Your Website</h3>
            <p>Create QR codes for your website or portfolio so your audience can access your work instantly with a scan.</p>
          </div>
          <div className="usecase-card">
            <RiUserSharedLine size={30} className="usecase-icon" />
            <h3>Share Contact Details</h3>
            <p>Generate QR codes for your contact information or social media profiles, making it easy for others to connect with you.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Promo
