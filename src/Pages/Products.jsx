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
import { HomeGroup1, Vector, Vector2, Vector3, Group111, Group119, Android, Ram, NFC, Bluetooth, Wifi, QR, ArrowFlipForwardB, NanoSim, Group123, PrintSpeed, Support, Speaker, PowerAdaptor, Screen,Weight } from '../Components/Outline.jsx';

const Home = () => {
  return (
    <div className='pt-[113px] md:pb-[100px] pb-[75px] flex flex-col gap-[50px] md:gap-[100px]'>
      {/* 1 */} 
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full rounded-br-[500px]'>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-[1000px] flex justify-center">
            <div className="w-[239px] md:w-[650px] flex justify-center text-white/80 text-center text-2xl md:text-[64px] font-bold leading-tight">
              Tools to Enhance Your Business Model
            </div>
          </div>
          <div className="absolute bottom-10 right-10 md:flex flex-col items-center hidden">
            <HomeGroup1 className="w-[50px] h-[45px]" />
            <div className="text-[#0046BA] text-center text-sm font-bold leading-normal w-[120px] ">
              Leave your contact here
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full '>
          <div className="flex flex-col gap-[30px] md:gap-5 text-left">
            <div className='text-[#0046BA] w-[333px] md:w-[800px] text-xl md:text-5xl font-bold'>
              Switch to E-inbill and ensure your business stays compliant with LHDN E Invocie.
            </div>
            <div className='text-[#0060FF] w-[333px] md:w-[900px] text-sm md:text-2xl font-medium leading-tight'>
              Comprehensive Solution: Integrated Cash Collection, Inventory Management, and Business Intelligence.
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col max-w-[1000px] h-[1152px] md:h-[839px] w-[333px] md:w-full bg-gradient-to-b from-white/50 from-30% to-[#01A7CA80] to-100% outline outline-1 outline-[#00A6CA] rounded-[10px]'>
          <div>
            {/* 3.1 */}
            <div className="inset-0 flex flex-col justify-center items-center">
              <div className='bg-[#00A6CA] w-full h-[83px] md:h-[116px] rounded-t-[10px] flex flex-col justify-center gap-[5px] md:gap-[10px] md:mb-[-1px]'>
                <div className="flex flex-col items-center">
                  <div className='text-white text-center text-2xl md:text-5xl font-semibold leading-tight w-[63px] md:w-[126px]'>
                      Basic
                  </div>
                </div>
                <div className='text-white text-center text-xs md:text-base font-bold leading-tight'>
                    (Suitable for Small Business)
                </div>
              </div>
              <div className='bg-[#00A6CA] w-full h-[23px] md:h-[33px] clip-v-shape mt-[-0.5px]' />
            </div>
            {/* 3.2 */}
            <div className="flex flex-col gap-[30px] md:gap-[50px] pt-[5px] pb-[50px] md:py-[50px] px-[22px] md:px-[45px]">
              {/* 3.2.1 */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-center'>
                <div>
                  <img src={Product1} alt="Product 1 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                </div>
                <div>
                  <img src={Product2} alt="Product 2 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                </div>
                <div>
                  <img src={Product3} alt="Product 3 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                </div>
                <div>
                  <img src={Product4} alt="Product 4 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                </div>
              </div>
              {/* 3.2.2 */}
              <div className='flex flex-col gap-[30px] md:gap-[50px] px-5 md:px-7'>
                <div className='flex flex-col gap-[30px]'>
                  <div className='flex items-center justify-center w-[250px] h-[30px] rounded-md text-white text-sm font-bold bg-[#00A6CA]'>
                    <div> 
                      LHDN E-INVOICE Compliance
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <div className='flex justify-center md:justify-start'>
                      <div className='relative z-10 text-[#666] text-base md:text-sm font-semibold leading-tight flex gap-4'>
                        <div>Bundle Promo Price:</div>
                        <span className="line-through">RM3.01</span> 
                      </div>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                      <div className='w-[132px] md:w-[195px] text-[#00A6CA] text-[64px] md:text-8xl font-bold leading-[60px] md:leading-[72px]'>
                        RM1
                      </div>
                      <div className='w-[68px] md:w-[134px] text-[#00A6CA] text-base md:text-[32px] font-semibold leading-[25px]'>
                        .99 / day
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 text-[#000] text-sm font-medium leading-[22px] md:leading-[22px] text-left'>
                  {/* Application, Vector */}
                  <div className="flex gap-4">
                    {/* Vector */}
                    <div className="flex flex-col w-4 gap-[11px]">
                      <div className='flex items-center h-4'>
                        <br />
                      </div>
                      <div className='flex items-center'>
                        <Vector />
                      </div>
                      <div className='flex items-center'>
                        <Vector />
                      </div>
                      <div className='flex items-center'>
                        <Vector />
                      </div>
                      <div className='flex items-center'>
                        <Vector />
                      </div>
                      <div className='flex items-center'>
                        <Vector />
                      </div>
                    </div>
                    {/* Application, include, Printer */}
                    <div className='flex flex-col md:flex-row gap-5'>
                      {/* Application */}
                      <div className='w-[150px]'>
                        <ul>
                          <li className=' text-[#00A6CA] font-bold'>
                            Application:
                          </li>
                          <li className='flex gap-[19px]'>
                            <div>
                              Customisable Menu
                            </div>
                          </li>
                          <li className='flex gap-[19px]'>
                            <div>
                              Biometric Lock
                            </div>
                          </li>
                          <li className='flex gap-[19px]'>
                            <div>
                              Unlimited Invoices
                            </div>
                          </li>
                          <li className='flex gap-[19px]'>
                            <div>
                              Cloud Storage
                            </div>
                          </li>
                          <li className='flex gap-[19px]'>
                            <div>
                              Training & Support
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* include */}
                      <div className='w-[150px]'>
                        <ul>
                          <li className=' text-[#00A6CA] font-bold'>
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
                      {/* Printer */}
                      <div className='flex flex-col md:flex-row md:gap-5'>
                        <div className='w-[210px]'>
                          <ul>
                            <li className=' text-[#00A6CA] font-bold'>
                              Printer:
                            </li>
                            <div className='flex gap-1'>
                              <div className='transform scale-y-[-1] flex items-center'>
                                <ArrowFlipForwardB />
                              </div>
                              <li className='flex gap-[19px]'>
                                203 dpi 8dots Resolution
                              </li>
                            </div>
                            <div className='flex gap-1'>
                              <div className='transform scale-y-[-1] flex items-center'>
                                <ArrowFlipForwardB />
                              </div>
                              <li className='flex gap-[19px]'>
                                Printing Width 72mm
                              </li>
                            </div>
                            <div className='flex gap-1'>
                              <div className='transform scale-y-[-1] flex items-center'>
                                <ArrowFlipForwardB />
                              </div>
                              <li className='flex gap-[19px]'>
                                USB + Bluetooth / Wifi
                              </li>
                            </div>
                            <div className='flex gap-1'>
                              <div className='transform scale-y-[-1] flex items-center'>
                                <ArrowFlipForwardB />
                              </div>
                              <li className='flex gap-[19px]'>
                                Paper Width 58mm / 80mm
                              </li>
                            </div>
                          </ul>
                        </div>
                        <div className='w-[220px]'>
                          <ul>
                            <li className='hidden md:block text-[#00A6CA] font-bold'>
                              <br/>
                            </li>
                            <div className='flex gap-1'>
                              <div className='transform scale-y-[-1] flex items-center'>
                                <ArrowFlipForwardB />
                              </div>
                              <li className='flex gap-[19px]'>
                                7.4V Li-ion battery, 1800mAh
                              </li>
                            </div>
                            <div className='flex gap-1'>
                              <div className='transform scale-y-[-1] flex items-center'>
                                <ArrowFlipForwardB />
                              </div>
                              <li className='flex gap-[19px]'>
                                PS AC 100V-240V 50/60HZ
                              </li>
                            </div>
                            <div className='flex gap-1'> 
                              <div className='transform scale-y-[-1] flex items-center'>
                                <ArrowFlipForwardB />
                              </div>
                              <li className='flex gap-[19px]'>
                                Weight 0.48 KG
                              </li>
                            </div>
                            <div className='flex gap-1'>
                              <div className='transform scale-y-[-1] flex items-center'>
                                <ArrowFlipForwardB />
                              </div>
                              <li className='flex gap-[19px]'>
                                Thickness 0.053 ~ 0.15mm
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* 4 */}
      <div className='w-full h-[1372px] md:h-[1017px] flex justify-center'>
        <div className='flex flex-col max-w-[1000px] h-[1152px] md:h-[1017px] w-[333px] md:w-full bg-gradient-to-b from-white/50 from-30% to-[#0073F680] to-100% outline outline-1 outline-[#0073F6] rounded-[10px]'>
          <div>
            {/* 4.1 */}
            <div className="inset-0 flex flex-col justify-center items-center">
              <div className='bg-[#0174F6] w-full h-[83px] md:h-[116px] rounded-t-[10px] flex flex-col justify-center gap-[10px] md:mb-[-1px]'>
                <div className='text-white text-center text-2xl md:text-5xl font-semibold leading-tight'>
                    Standard
                </div>
                <div className='text-white text-center text-xs md:text-base font-bold leading-tight'>
                  (Mobile POS Device Suitable for Growing Business）
                </div>
              </div>
              <div className='bg-[#0174F6] w-full h-[23px] md:h-[33px] clip-v-shape mt-[-0.5px]' />
            </div>
            {/* 4.2 */}
            <div className="flex flex-col gap-[50px] pt-[15px] pb-[50px] md:py-[50px] px-[22px] md:px-[45px]">
              {/* 4.2.1 */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-[30px] md:gap-10'>
                <div className="order-1 md:order-none">
                  <img src={Product5} alt="Product 5 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                </div>
                <div className="order-3 md:order-none">
                  <img src={Product6} alt="Product 6 Logo" className="w-[130px] md:w-[160px] h-[130px] md:h-[200px]" />
                </div>
                <div className="order-4 md:order-none">
                  <img src={Product7} alt="Product 7 Logo" className="w-[130px] md:w-[229px] h-[130px] md:h-[200px]" />
                </div>
                <div className="order-2 md:order-none">
                  <img src={Product8} alt="Product 8 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                </div>
              </div>
              {/* 4.2.2 */}
              <div className='flex flex-col gap-[50px] px-2'>
                {/* LHDN E-INVOICE Compliance */}
                <div className='flex flex-col gap-[30px] items-center md:items-start'>
                  <div className='flex items-center justify-center w-[250px] h-[30px] rounded-[6.667px] text-white text-sm font-bold bg-[#0174F6] '>
                    <div>
                      LHDN E-INVOICE Compliance
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <div className='flex justify-center md:justify-start'>
                      <div className='relative z-10 text-[#666] text-base md:text-sm font-semibold leading-tight flex gap-4'>
                        <div>Bundle Promo Price:</div> 
                        <span className="line-through">RM4.10</span> 
                      </div>
                    </div>
                    <div className='flex text-[#0174F6]'>
                      <div className='w-[212px] text-8xl font-bold leading-[72px]'>
                        RM2
                      </div>
                      <div className='w-[135px] text-[32px] font-semibold leading-[25px]'>
                        .99 / day
                      </div>
                    </div>
                  </div>
                </div>
                {/* Application... */}
                <div className='flex gap-5 text-[#000] text-sm font-medium leading-[22px] text-left'>
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
                  <div className='w-[230px]'>
                    <ul>
                      <li className=' text-[#0174F6] text-sm font-bold'>
                        Mobile POS Device:
                      </li>
                      <div className='flex gap-1'> 
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          6.5″, 720*1600 Display
                        </li>
                      </div>
                      <div className='flex gap-1'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          Camera Rear 5MP QR Scan
                        </li>
                      </div>
                      <div className='flex gap-1'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          Express Printing
                        </li>
                      </div>
                      <div className='flex gap-1'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          USB-C + Bluetooth / Wifi
                        </li>
                      </div>
                      <div className='flex gap-1'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          NFC Compatible (Optional)
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className='w-[230px] flex flex-col gap-6'>
                    <div>
                      <ul>
                        <li className=' text-[#00A6CA] text-sm font-bold'>
                          <br/>
                        </li>
                        <div className='flex gap-1'>
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            Ultra Large Printing Roll
                          </li>
                        </div>
                        <div className='flex gap-1'>
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            58mm width & 50mm diameter
                          </li>
                        </div>
                        <div className='flex gap-1'>
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            Removable Battery
                          </li>
                        </div>
                        <div className='flex gap-1'>
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            battery capacity 3350mAh
                          </li>
                        </div>
                        <div className='flex gap-1'>
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            PS AC 100V-240V 50/60HZ
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className='text-[10px] font-bold'>
                          * Charging dock sold separately
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Icons */}
                <div className='flex justify-between'>
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
        </div>
      </div>

      {/* 5 */}
      <div className='w-full h-[1129px] flex justify-center'>
        <div className='flex flex-col max-w-[1000px] w-full bg-gradient-to-b from-white/50 from-30% to-[#0046BA80] outline outline-1 outline-[#0046BA] rounded-[10px]'>
          <div>
            {/* 5.1 */}
            <div className="inset-0 flex flex-col justify-center items-center">
              <div className='bg-[#0046BA] w-full h-[116px] rounded-t-[10px] flex flex-col justify-center gap-[10px] mb-[-1px]'>
                <div className='text-white text-center text-5xl font-semibold leading-tight'>
                    Advanced
                </div>
                <div className='text-white text-center text-base font-bold leading-tight'>
                  (Smart POS Device Suitable for Retail & Business)
                </div>
              </div>
              <div className='bg-[#0046BA] w-full h-[33px] clip-v-shape mt-[-0.5px]' />
            </div>
            {/* 5.2 */}
            <div className="flex flex-col gap-[50px] py-[50px] px-[45px]">
              {/* 5.2.1 */}
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
              {/* 5.2.2 */}
              <div className='flex flex-col gap-[50px] px-7'>
                {/* LHDN E-INVOICE Compliance */}
                <div className='flex flex-col gap-[30px]'>
                  <div className='flex items-center justify-center w-[250px] h-[30px] rounded-[6.667px] text-white text-sm font-bold bg-[#0046BA] '>
                    LHDN E-INVOICE Compliance
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                  <div className='flex'>
                      <div className='relative z-10 text-[#666] text-sm font-semibold leading-tight flex gap-4'>
                        <div>Bundle Promo Price:</div> 
                        <span className="line-through">RM8.15</span> 
                      </div>
                    </div>
                    <div className='flex text-[#0046BA]'>
                      <div className='w-[215px] text-8xl font-bold leading-[72px]'>
                        RM6
                      </div>
                      <div className='w-[107px] text-[32px] font-semibold leading-[25px]'>
                        .11 / day
                      </div>
                    </div>
                  </div>
                </div>
                {/* Application... */}
                <div className='flex gap-5 text-[#000] text-sm font-medium leading-[22px] text-left'>
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
                      <div className='flex gap-1'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          10.1", 1280 x 800 HD Display
                        </li>
                      </div>
                      <div className='flex gap-1'>
                        <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                        <li className='flex gap-[19px]'>
                          Secondary Screen
                        </li>
                      </div>
                      <div className='flex gap-1'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          Seiko Thermal Printer
                        </li>
                      </div>
                      <div className="flex gap-1">
                        <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                        <li className='flex gap-[19px]'>
                          Multiple Peripheral Port
                        </li>
                      </div>
                      <div className="flex gap-1">
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          NFC Compatible + QR Scan
                        </li>
                      </div>
                      <div className="flex gap-1">
                        <div className='transform scale-y-[-1] flex items-center'>
                          <ArrowFlipForwardB />
                        </div>
                        <li className='flex gap-[19px]'>
                          Camera 1D + 2D Barcode Scan
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className='w-[230px] flex flex-col gap-8'>
                    <div>
                      <ul>
                        <li className='text-[#00A6CA] text-sm font-bold'>
                          <br/>
                        </li>
                        <div className="flex gap-1">
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            80*80mmStandard Roll
                          </li>
                        </div>
                        <div className="flex gap-1">
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            Automatic Cutter
                          </li>
                        </div>
                        <div className="flex gap-1">
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            250mm/s Printing Speed 
                          </li>
                        </div>
                        <div className="flex gap-1">
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            Compatible with Power Bank
                          </li>
                        </div>
                        <div className="flex gap-1">
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            100V-240V ~ 24V / 2.5A
                        </li>
                        </div>
                        <div className="flex gap-1">
                          <div className='transform scale-y-[-1] flex items-center'>
                            <ArrowFlipForwardB />
                          </div>
                          <li className='flex gap-[19px]'>
                            Support 2G / 3G / 4G / LTE
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Icons */}
                <div className='flex flex-col gap-[50px]'>
                  <div className='flex justify-between'>
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
                        Android 11
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
                        <NanoSim />
                      </div>
                      <div className='w-[50px] text-[10px] font-bold leading-tight'>
                        NanoSim (Optional)
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
                  <div className='flex justify-between'>
                    <div className='flex flex-col gap-[10px] items-center'>
                      <div>
                        <Group123 />
                      </div>
                      <div className='w-[60px] text-[10px] font-bold leading-tight'>
                        10.1" HD
                        Touch Pane
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                      <div>
                        <PrintSpeed />
                      </div>
                      <div className='w-[57px] text-[10px] font-bold leading-tight'>
                        250mm/s
                        Print Speed
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                      <div>
                        <Support />
                      </div>
                      <div className='w-[72px] text-[10px] font-bold leading-tight'>
                        Support
                        2G/3G/4G/LTE
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                      <div>
                        <Speaker />
                      </div>
                      <div className='w-[44px] text-[10px] font-bold leading-tight'>
                        1.5 Mono
                        Speaker
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                      <div>
                        <PowerAdaptor />
                      </div>
                      <div className='w-[73px] text-[10px] font-bold leading-tight'>
                        Power Adaptor
                        100 ~ 240V
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                      <div>
                        <Screen />
                      </div>
                      <div className='w-[56px] text-[10px] font-bold leading-tight'>
                        2nd Screen
                        2.4” LED
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                      <div>
                        <QR />
                      </div>
                      <div className='w-[42px] text-[10px] font-bold leading-tight'>
                        Support
                        QR Scan
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                      <div>
                        <Weight />
                      </div>
                      <div className='w-[43px] text-[10px] font-bold leading-tight'>
                      Weight
                      1.785 KG
                      </div>
                    </div>
                  </div>
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
            {/* 6.1 */}
            <div className="flex justify-center">
              <div className='w-[720px] text-center text-[#0060FF] text-[32px] font-semibold leading-tight'>
                Leave your contact information to discover how E-inbill empowers merchants to achieve more.
              </div>
            </div>
            {/* 6.2 */}
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
            {/* 6.3 */}
            <div className="flex items-center justify-center">
              <button className="w-[600px] h-[60px] rounded-[31px] border-2 border-black shadow-submit"  type="submit">
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
