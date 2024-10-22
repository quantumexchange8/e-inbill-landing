import React from 'react';
import Video1 from '../Asset/Videos/productVideo1.mp4';
import Product1 from '../Asset/Images/product1.png';
import Product2 from '../Asset/Images/product2.png';
import Product3 from '../Asset/Images/product3.png';
import Product4 from '../Asset/Images/product4.png';
import Product5 from '../Asset/Images/product5.png';
import Product6 from '../Asset/Images/product6.png';
import Product7 from '../Asset/Images/product7.png';
import Product8 from '../Asset/Images/product8.png';
import Product9 from '../Asset/Images/product9.png';
import Product10 from '../Asset/Images/product10.png';
import Product11 from '../Asset/Images/product11.png';
import Product12 from '../Asset/Images/product12.png';
import { HomeGroup1, VShapedB, VShapedS, VShapedA , Vector, Vector2, Vector3, Group111, Group119, Android, Ram, NFC, Bluetooth, Wifi, QR, } from '../Components/Outline.jsx';

const Home = () => {
  return (
    <div className='pt-[101px] flex flex-col gap-[100px]'>
      {/* 1 */} 
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full rounded-br-[500px]'>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white/80 text-center text-[64px] font-bold leading-tight w-full max-w-[1000px] flex justify-center">
            <div className="w-[704px] flex justify-center">
              Tools to Enhance Your Business Model
            </div>
          </div>
          <div className="absolute bottom-10 right-10 flex flex-col items-center">
            <HomeGroup1 className="w-[50px] h-[45px]" />
            <div className="text-[#0046BA] text-center text-sm  font-bold leading-normal w-[120px] ">
              Leave your contact here
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full '>
          <div className="flex flex-col gap-5 text-left">
            <div className='text-[#0046BA] w-full text-5xl font-bold'>
              Switch to E-inbill and ensure your business stays compliant with LHDN E Invocie.
            </div>
            <div className='text-[#0060FF] text-2xl font-medium leading-tight'>
              Comprehensive Solution: Integrated Cash Collection, Inventory Management, and Business Intelligence.
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col max-w-[1000px] w-full bg-gradient-to-b from-white/50 from-30% to-[#01A7CA80] to-100% outline outline-1 outline-[#00A6CA] rounded-[10px]'>
          <div className="flex flex-col gap-[50px]">
            {/* 3.1 */}
            <div className="inset-0 flex flex-col justify-center items-center">
              {/* <div className='text-white text-center text-5xl font-semibold leading-tight'>
                  Basic
              </div>
              <div className='text-white text-center text-base font-bold leading-tight'>
                  (Suitable for Small Business)
              </div> */}
              <div className='relative inset-0 w-full h-full'>
                <VShapedB />
              </div>
            </div>
            {/* 3.2 */}
            <div className='flex gap-10 justify-center'>
              <div>
                <img src={Product1} alt="Product 1 Logo" className="w-[200px] h-[200px]" />
              </div>
              <div>
                <img src={Product2} alt="Product 2 Logo" className="w-[200px] h-[200px]" />
              </div>
              <div>
                <img src={Product3} alt="Product 3 Logo" className="w-[200px] h-[200px]" />
              </div>
              <div>
                <img src={Product4} alt="Product 4 Logo" className="w-[200px] h-[200px]" />
              </div>
            </div>
            {/* 3.3 */}
            <div className='flex flex-col gap-[30px] pl-[60px]'>
              <div className='flex items-center justify-center w-[250px] h-[30px] rounded-[2.667px] text-white text-sm font-bold bg-[#00A6CA] '>
                LHDN E-INVOICE Compliance
              </div>
              <div className='flex flex-col gap-[10px]'>
                <div className='flex'>
                  <div className='relative z-10 text-[#666] text-sm font-semibold leading-tight '>
                    Bundle Promo Price: RM3.01 
                  </div>
                  {/* <div className='absolute h-[1px] bg-[#666] w-12 rotate-[170deg]'></div> */}
                </div>
                <div className='flex'>
                  <div className='w-[198px] text-[#00A6CA] text-8xl font-bold leading-tight'>
                    RM1
                  </div>
                  <div className='w-[135px] text-[#00A6CA] text-[32px] font-semibold leading-tight'>
                    .99 / day
                  </div>
                </div>
              </div>
            </div>
            {/* 3.4 */}
            <div className='flex gap-5 pl-[60px] text-[#000] text-sm font-medium leading-[22px] text-left'>
              <div className='w-[180px]'>
                <ul>
                  <li className=' text-[#00A6CA] text-sm font-bold pl-8'>
                    Application:
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector />
                    </div>
                    <div>
                      Customisable Menu
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector />
                    </div>
                    <div>
                      Biometric Lock
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector />
                    </div>
                    <div>
                      Unlimited Invoices
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector />
                    </div>
                    <div>
                      Cloud Storage
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector />
                    </div>
                    <div>
                      Training & Support
                    </div>
                  </li>
                </ul>
              </div>
              <div className='w-[150px]'>
                <ul>
                  <li className=' text-[#00A6CA] text-sm font-bold'>
                    included:
                  </li>
                  <li className='flex gap-[19px]'>
                    Software license.
                  </li>
                  <li className='flex gap-[19px]'>
                    (RM726.35)
                  </li>
                  <li className='flex gap-[19px]'>
                    <br/>
                  </li>
                  <li className='flex gap-[19px]'>
                    Mobile printer.
                  </li>
                  <li className='flex gap-[19px]'>
                    Free X 10 paper roll.
                  </li>
                </ul>
              </div>
              <div className='w-[210px]'>
                <ul>
                  <li className=' text-[#00A6CA] text-sm font-bold'>
                    Printer:
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ 203 dpi 8dots Resolution
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Printing Width 72mm
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ USB + Bluetooth / Wifi
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Paper Width 58mm / 80mm
                  </li>
                </ul>
              </div>
              <div className='w-[220px]'>
                <ul>
                  <li className=' text-[#00A6CA] text-sm font-bold'>
                    <br/>
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ 7.4V Li-ion battery, 1800mAh
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ PS AC 100V-240V 50/60HZ
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Weight 0.48 KG
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Thickness 0.053 ~ 0.15mm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* 4 */}
      <div className='w-full h-[1017px] flex justify-center'>
        <div className='flex flex-col max-w-[1000px] w-full bg-gradient-to-b from-white/50 from-30% to-[#0073F680] to-100% outline outline-1 outline-[#0073F6] rounded-[10px]'>
          <div className="flex flex-col gap-[50px]">
            {/* 4.1 */}
            <div className='relative inset-0 w-full h-full'>
              <VShapedS />
            </div>
            {/* 4.2 */}
            <div className='flex gap-10 justify-center items-center'>
              <div>
                <img src={Product5} alt="Product 5 Logo" className="w-[200px] h-[200px]" />
              </div>
              <div>
                <img src={Product6} alt="Product 6 Logo" className="w-[160px] h-[200px]" />
              </div>
              <div>
                <img src={Product7} alt="Product 7 Logo" className="w-[229.36px] h-[150px]" />
              </div>
              <div>
                <img src={Product8} alt="Product 8 Logo" className="w-[200px] h-[200px]" />
              </div>
            </div>
            {/* 4.3 */}
            <div className='flex flex-col gap-[30px] pl-[60px]'>
              <div className='flex items-center justify-center w-[250px] h-[30px] rounded-[2.667px] text-white text-sm font-bold bg-[#0174F6] '>
                LHDN E-INVOICE Compliance
              </div>
              <div className='flex flex-col gap-[10px]'>
                <div className='flex'>
                  <div className='relative z-10 text-[#666] text-sm font-semibold leading-tight '>
                    Bundle Promo Price: RM4.10 
                  </div>
                  {/* <div className='absolute h-[1px] bg-[#666] w-12 rotate-[170deg]'></div> */}
                </div>
                <div className='flex text-[#0174F6]'>
                  <div className='w-[212px] text-8xl font-bold leading-tight'>
                    RM2
                  </div>
                  <div className='w-[135px] text-[32px] font-semibold leading-tight'>
                    .99 / day
                  </div>
                </div>
              </div>
            </div>
            {/* 4.4 */}
            <div className='flex gap-5 pl-[60px] text-[#000] text-sm font-medium leading-[22px] text-left'>
              <div className='w-[180px]'>
                <ul>
                  <li className=' text-[#0174F6] text-sm font-bold pl-8'>
                    Application:
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector2 />
                    </div>
                    <div>
                      Customisable Menu
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector2 />
                    </div>
                    <div>
                      Biometric Lock
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector2 />
                    </div>
                    <div>
                      Unlimited Invoices
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector2 />
                    </div>
                    <div>
                      Cloud Storage
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector2 />
                    </div>
                    <div>
                      Training & Support
                    </div>
                  </li>
                </ul>
              </div>
              <div className='w-[150px]'>
                <ul>
                  <li className=' text-[#0174F6] text-sm font-bold'>
                    included:
                  </li>
                  <li className='flex gap-[19px]'>
                    Software license.
                  </li>
                  <li className='flex gap-[19px]'>
                    (RM726.35)
                  </li>
                  <li className='flex gap-[19px]'>
                    <br/>
                  </li>
                  <li className='flex gap-[19px]'>
                    Mobile POS Device.
                  </li>
                  <li className='flex gap-[19px]'>
                    Free X 10 paper roll.
                  </li>
                </ul>
              </div>
              <div className='w-[210px]'>
                <ul>
                  <li className=' text-[#0174F6] text-sm font-bold'>
                    Mobile POS Device:
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ 6.5″, 720*1600 Display
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Camera Rear 5MP QR Scan
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Express Printing
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ USB-C + Bluetooth / Wifi
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ NFC Compatible (Optional)
                  </li>
                </ul>
              </div>
              <div className='w-[230px] flex flex-col gap-8'>
                <div>
                  <ul>
                    <li className=' text-[#00A6CA] text-sm font-bold'>
                      <br/>
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ Ultra Large Printing Roll
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ 58mm width & 50mm diameter
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ Removable Battery
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ battery capacity 3350mAh
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ PS AC 100V-240V 50/60HZ
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      * Charging dock sold separately
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 4.5 */}
            <div className='flex gap-[60px] justify-center'>
              <div className='flex flex-col gap-[10px] items-center'>
                <div>
                  <Group111 />
                </div>
                <div className='w-[73px] text-[10px] font-bold leading-tight'>
                  Octa-Core Cortex 2.0GH
                </div>
              </div>
              <div className='flex flex-col gap-[10px] items-center'>
                <div>
                  <Android />
                </div>
                <div className='w-[40px] text-[10px] font-bold leading-tight'>
                  Android 13
                </div>
              </div>
              <div className='flex flex-col gap-[10px] items-center'>
                <div>
                  <Ram />
                </div>
                <div className='w-[53px] text-[10px] font-bold leading-tight'>
                  2GB RAM
                  32GB ROM
                </div>
              </div>
              <div className='flex flex-col gap-[10px] items-center'>
                <div>
                  <NFC />
                </div>
                <div className='w-[80px] text-[10px] font-bold leading-tight'>
                  NFC Compatible
                  (Optional)
                </div>
              </div>
              <div className='flex flex-col gap-[10px] items-center'>
                <div>
                 <Bluetooth />
                </div>
                <div className='w-[48px] text-[10px] font-bold leading-tight'>
                  Bluetooth
                  5.0
                </div>
              </div>
              <div className='flex flex-col gap-[10px] items-center'>
                <div>
                  <Wifi />
                </div>
                <div className='w-[40px] text-[10px] font-bold leading-tight'>
                  Support Wifi
                </div>
              </div>
              <div className='flex flex-col gap-[10px] items-center'>
                <div>
                  <QR />
                </div>
                <div className='w-[42px] text-[10px] font-bold leading-tight'>
                  Support QR Scan
                </div>
              </div>
              <div className='flex flex-col gap-[10px] items-center'>
                <div>
                  <Group119 />
                </div>
                <div className='w-[69px] text-[10px] font-bold leading-tight'>
                  Up to 10hrs Single Charge
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className='w-full h-[1129px] flex justify-center'>
        <div className='flex flex-col max-w-[1000px] w-full bg-gradient-to-b from-white/50 from-30% to-[#0046BA80] outline outline-1 outline-[#0046BA] rounded-[10px]'>
          <div className="flex flex-col gap-[50px]">
            {/* 5.1 */}
            <div className='relative inset-0 w-full h-full'>
              <VShapedA />
            </div>
            {/* 5.2 */}
            <div className='flex gap-10 justify-center items-center'>
              <div>
                <img src={Product9} alt="Product 9 Logo" className="w-[200px] h-[200px]" />
              </div>
              <div>
                <img src={Product10} alt="Product 10 Logo" className="w-[200px] h-[200px]" />
              </div>
              <div>
                <img src={Product11} alt="Product 11 Logo" className="w-[200px] h-[164px]" />
              </div>
              <div>
                <img src={Product12} alt="Product 12 Logo" className="w-[200px] h-[200px]" />
              </div>
            </div>
            {/* 5.3 */}
            <div className='flex flex-col gap-[30px] pl-[60px]'>
              <div className='flex items-center justify-center w-[250px] h-[30px] rounded-[2.667px] text-white text-sm font-bold bg-[#0046BA] '>
                LHDN E-INVOICE Compliance
              </div>
              <div className='flex flex-col gap-[10px]'>
                <div className='flex'>
                  <div className='relative z-10 text-[#666] text-sm font-semibold leading-tight '>
                    Bundle Promo Price: RM8.15 
                  </div>
                  {/* <div className='absolute h-[1px] bg-[#666] w-12 rotate-[170deg]'></div> */}
                </div>
                <div className='flex text-[#0046BA]'>
                  <div className='w-[198px] text-8xl font-bold leading-tight'>
                    RM6
                  </div>
                  <div className='w-[135px] text-[32px] font-semibold leading-tight'>
                    .11 / day
                  </div>
                </div>
              </div>
            </div>
            {/* 5.4 */}
            <div className='flex gap-5 pl-[60px] text-[#000] text-sm font-medium leading-[22px] text-left'>
              <div className='w-[180px]'>
                <ul>
                  <li className=' text-[#0046BA] text-sm font-bold pl-8'>
                    Application:
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector3 />
                    </div>
                    <div>
                      Customisable Menu
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector3 />
                    </div>
                    <div>
                      Biometric Lock
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector3 />
                    </div>
                    <div>
                      Unlimited Invoices
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector3 />
                    </div>
                    <div>
                      Cloud Storage
                    </div>
                  </li>
                  <li className='flex gap-[19px]'>
                    <div className='flex items-center'>
                      <Vector3 />
                    </div>
                    <div>
                      Training & Support
                    </div>
                  </li>
                </ul>
              </div>
              <div className='w-[150px]'>
                <ul>
                  <li className=' text-[#0046BA] text-sm font-bold'>
                    included:
                  </li>
                  <li className='flex gap-[19px]'>
                    Software license.
                  </li>
                  <li className='flex gap-[19px]'>
                    (RM1,095.00)
                  </li>
                  <li className='flex gap-[19px]'>
                    <br/>
                  </li>
                  <li className='flex gap-[19px]'>
                    Smart POS Device.
                  </li>
                  <li className='flex gap-[19px]'>
                    Free X 10 paper roll.
                  </li>
                </ul>
              </div>
              <div className='w-[230px]'>
                <ul>
                  <li className=' text-[#0046BA] text-sm font-bold'>
                    Smart POS Device:
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ 10.1", 1280 x 800 HD Display
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Secondary Screen
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Seiko Thermal Printer
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Multiple Peripheral Port
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ NFC Compatible + QR Scan
                  </li>
                  <li className='flex gap-[19px]'>
                    ↪️ Camera 1D + 2D Barcode Scan
                  </li>
                </ul>
              </div>
              <div className='w-[230px] flex flex-col gap-8'>
                <div>
                  <ul>
                    <li className=' text-[#00A6CA] text-sm font-bold'>
                      <br/>
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ 80*80mmStandard Roll
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ Automatic Cutter
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ 250mm/s Printing Speed 
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ Compatible with Power Bank
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ 100V-240V ~ 24V / 2.5A
                    </li>
                    <li className='flex gap-[19px]'>
                      ↪️ Support 2G / 3G / 4G / LTE
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 */}
      <div className='w-full flex justify-center pb-[100px]'>
        <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full'>
          <div className='flex flex-col gap-[100px] justify-center'>
            {/* 2.4.1 */}
            <div className="flex justify-center">
              <div className='w-[720px] text-center text-[#0060FF] text-[32px] font-semibold leading-tight'>
                Leave your contact information to discover how E-inbill empowers merchants to achieve more.
              </div>
            </div>
            {/* 2.4.2 */}
            <div className='flex flex-col gap-[100px]'>
              <div className='flex flex-col gap-[50px]'>
                {/* Full name */}
                <div className='flex flex-col gap-[10px]'>
                  <div className="text-[#000] text-base font-bold text-left" htmlFor="fullname">
                    Full name<span className="text-[#F00] text-base  font-bold">*</span>
                  </div>
                  <input
                    type="text"
                    id="fullname"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Company name */}
                <div className='flex flex-col gap-[10px]'> 
                  <label className="block text-[#000] text-base font-bold text-left " htmlFor="companyname">
                    Company name<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyname"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Contact number */}
                <div className='flex flex-col gap-[10px]'>
                  <label className="block text-[#000] text-base  font-bold text-left " htmlFor="contactnumber">
                    Contact number<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactnumber"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Email-address */}
                <div className='flex flex-col gap-[10px]'>
                  <label className="block text-[#000] text-base  font-bold text-left " htmlFor="email">
                    Email address<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Your state or location */}
                <div className='flex flex-col gap-[10px]'>
                  <label className="block text-[#000] text-base  font-bold text-left " htmlFor="location">
                    Your state or location<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
                {/* Your business sector */}
                <div className='flex flex-col gap-[10px]'>
                  <label className="block text-[#000] text-base  font-bold text-left " htmlFor="sector">
                    Your business sector<span className="text-[#F00] text-base  font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="sector"
                    className="w-full h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[10px] focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>
            {/* 2.4.3 */}
            <div className="flex items-center justify-center">
              <button className="w-[600px] h-[60px] rounded-[31px] border-2 border-black" type="submit">
                <div className='flex justify-center'>
                  <div className="w-[530px] text-black text-center text-xl font-semibold leading-tight">
                    Leave your contact to schedule a complimentary demo
                  </div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
