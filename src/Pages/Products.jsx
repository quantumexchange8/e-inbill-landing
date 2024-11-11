import React, { useState } from 'react';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import Leaveyourcontact from '../Components/Leaveyourcontact.jsx';
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
import { useTranslation } from 'react-i18next';
import { HomeGroup1, Vector, Vector2, Vector3, Group111, Group111S, Group119, Group119S, Android, AndroidS, Ram, RamS, NFC, NFCS, Bluetooth, BluetoothS, Wifi, WifiS, QR, QRS, ArrowFlipForwardB, NanoSim, NanoSimS, Group123, Group123S, PrintSpeed, PrintSpeedS, Support, SupportS, Speaker, SpeakerS, PowerAdaptor, PowerAdaptorS, Screen, ScreenS, Weight, WeightS } from '../Components/Outline.jsx';

const Home = () => {
  
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='pt-[54px] md:pt-[113px] pb-[50px] md:pb-[100px] flex flex-col gap-[75px] md:gap-[100px]'>
      <div className='flex flex-col gap-[50px] md:gap-[100px]'>
        {/* 1 */} 
        <div className="relative text-white">
          <video autoPlay loop playsInline muted className='w-full rounded-br-[150px] md:rounded-br-[500px]'>
            <source src={Video1} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-full max-w-[1000px] flex justify-center">
              <div className="flex flex-col justify-center text-white/80 text-center text-2xl md:text-[64px] font-bold leading-tight">
                <div>
                  {t('tools_to_enhance')}
                </div>
                <div>
                  {t('your_business_model')}
                </div>
              </div>
            </div>
            <button onClick={openModal} className="absolute bottom-10 right-10 md:flex flex-col items-center gap-[10px] hidden">
              <HomeGroup1 className="w-[50px] h-[45px]" />
              <div className="text-[#0046BA] text-center text-sm font-bold leading-normal">
                <div className='leading-[18px]'>
                  {t('leave_your')}
                </div>
                <div className='leading-[18px]'>
                  {t('contact')}
                </div>
              </div>
            </button>
            <Leaveyourcontact isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>

        {/* 2 */}
        <div className='w-full flex justify-center px-[30px] md:px-0'>
          <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full '>
            <div className="flex flex-col items-center gap-[30px] md:gap-5 text-left">
              <div className='text-[#0046BA] text-xl md:text-5xl font-bold'>
                <div className='hidden md:flex flex-col w-[1000px]'>
                  <div className='leading-tight'>
                    {t('switch_to_e_inbill')}
                  </div>
                  <div className='md:w-[900px] leading-tight'>
                    {t('business_stays_compliant')}
                  </div>
                  <div className='leading-tight'>
                    {t('p_lhdn_e_invoice')}
                  </div>
                </div>
                <div className='md:hidden w-[333px]'>
                  <div className='leading-tight'>
                    {t('m_switch_to_e_inbill')}
                  </div>
                  <div className='md:w-[900px] leading-tight'>
                    {t('m_business_stays_compliant')}
                  </div>
                  <div className='leading-tight'>
                    {t('m_p_lhdn_e_invoice')}
                  </div>
                </div>
              </div>
              <div className='w-[333px] md:w-[1000px] text-[#0060FF] text-sm md:text-2xl font-medium leading-tight'>
                <div className='md:w-[960px]'>
                  {t('comprehensive_solution')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className='w-full flex justify-center px-[30px] md:px-0'>
          <div className='flex flex-col max-w-[1000px] h-[1152px] md:h-auto w-[333px] md:w-auto bg-gradient-to-b from-white/50 from-30% to-[#01A7CA80] to-100% outline outline-1 outline-[#00A6CA] rounded-[10px]'>
            <div>
              {/* 3.1 */}
              <div className="inset-0 flex flex-col justify-center items-center">
                <div className='bg-[#00A6CA] w-full h-[83px] md:h-[116px] rounded-t-[10px] flex flex-col justify-center gap-[5px] md:gap-[10px] md:mb-[-1px]'>
                  <div className="flex flex-col items-center">
                    <div className='text-white text-center text-2xl md:text-5xl font-semibold leading-tight'>
                      {t('basic')}
                    </div>
                  </div>
                  <div className='text-white text-center text-xs md:text-base font-bold leading-tight'>
                    {t('suitable_for_small_business')}
                  </div>
                </div>
                <div className='bg-[#00A6CA] w-full h-[23px] md:h-[33px] clip-v-shape mt-[-0.5px]' />
              </div>
              {/* 3.2 */}
              <div className="flex flex-col gap-[30px] md:gap-[50px] pt-[5px] pb-[50px] md:py-[50px] px-[22px] md:px-[45px]">
                {/* 3.2.1 */}
                <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-9">
                  <div className="flex md:justify-center">
                    <img src={Product1} alt="Product 1 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                  <div className="flex md:justify-center">
                    <img src={Product2} alt="Product 2 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                  <div className="flex md:justify-center items-center">
                    <img src={Product3} alt="Product 3 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                  <div className="flex md:justify-center">
                    <img src={Product4} alt="Product 4 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                </div>
                {/* 3.2.2 */}
                <div className='flex flex-col gap-[30px] md:gap-[50px] px-5 md:px-7'>
                  {/* LHDN E-INVOICE Compliance */}
                  <div className='flex flex-col gap-[30px]'>
                    <div className='flex items-center justify-center w-[250px] h-[30px] rounded-md text-white text-sm font-bold bg-[#00A6CA]'>
                      <div> 
                        {t('lhdn_e_invoice_compliance')}
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                      <div className='flex justify-center md:justify-start'>
                        <div className='relative z-10 text-[#666] text-base md:text-sm font-semibold leading-tight flex gap-4'>
                          <div>{t('bundle_promo_price')}</div>
                          <span className="line-through">{t('rm3')}</span> 
                        </div>
                      </div>
                      <div className='flex justify-center md:justify-start'>
                        <div className='w-[132px] md:w-[195px] text-[#00A6CA] text-[64px] md:text-8xl font-bold leading-[60px] md:leading-[72px]'>
                          {t('rm1')}
                        </div>
                        <div className=' text-[#00A6CA] text-left text-base md:text-[32px] font-semibold leading-[25px]'>
                          {t('99day')}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Application, Vector */}
                  <div className='flex flex-col md:flex-row gap-5 text-[#000] text-sm font-medium leading-[22px] md:leading-[22px] text-left'>
                    <div className="flex gap-4">
                      {/* Vectors */}
                      <div className="flex flex-col w-4 gap-[11px]">
                        <div className='flex items-center h-4' />
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
                              {t('application')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('customisable_menu')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('biometric_lock')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('unlimited_invoices')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('cloud_storage')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('training_and_support')}
                            </li>
                          </ul>
                        </div>
                        {/* include */}
                        <div className='w-[150px]'>
                          <ul>
                            <li className=' text-[#00A6CA] font-bold'>
                              {t('included')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('software_license')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('rm726')}
                            </li>
                            <li className='flex gap-[19px] h-[22px]' />
                            <li className='flex gap-[19px]'>
                              {t('mobile_printer')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('free_x_10')}
                            </li>
                          </ul>
                        </div>
                        {/* Printer */}
                        <div className='flex flex-col md:flex-row md:gap-5'>
                          <div className='w-[210px]'>
                            <ul>
                              <li className=' text-[#00A6CA] font-bold'>
                                {t('printer')}
                              </li>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('203_dpi')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('basic_printing')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('usb_bluetooth')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('basic_paper')}
                                </li>
                              </div>
                            </ul>
                          </div>
                          <div className='w-[220px]'>
                            <ul>
                              <li className='hidden md:block h-[22px]' />
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('li_oin_battery')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('ps_ac')}
                                </li>
                              </div>
                              <div className='flex gap-1'> 
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('weight')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('thickness')}
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
        <div className='w-full h-[1372px] md:h-auto flex justify-center px-[30px] md:px-0'>
          <div className='flex flex-col max-w-[1000px] h-[1372px] md:h-auto w-[333px] md:w-auto bg-gradient-to-b from-white/50 from-30% to-[#0073F680] to-100% outline outline-1 outline-[#0073F6] rounded-[10px]'>
            <div>
              {/* 4.1 */}
              <div className="inset-0 flex flex-col justify-center items-center">
                <div className='bg-[#0174F6] w-full h-[77px] md:h-[116px] rounded-t-[10px] flex flex-col justify-center gap-[5px] md:gap-[10px] md:mb-[-1px]'>
                  <div className='text-white text-center text-2xl md:text-5xl font-semibold leading-tight'>
                    {t('standard')}
                  </div>
                  <div className='flex justify-center'>
                    <div className=' md:w-full flex justify-center text-white text-center text-xs md:text-base font-bold leading-tight'>
                      <div className='hidden md:flex'>
                        {t('mobile_pos_device_suitable')}
                      </div>
                      <div className='md:hidden'>
                        <div>
                          {t('m_mobile_pos_device_suitable')}
                        </div>
                        <div>
                          {t('m_yang_sedang_berkembang')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-[#0174F6] w-full h-[23px] md:h-[33px] clip-v-shape mt-[-0.5px]' />
              </div>
              {/* 4.2 */}
              <div className="flex flex-col gap-[30px] md:gap-[50px] pt-[15px] pb-[50px] md:py-[50px] px-[22px] md:px-[45px]">
                {/* 4.2.1 */}
                <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
                  <div className="order-1 md:order-none flex md:justify-center">
                    <img src={Product5} alt="Product 5 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                  <div className="order-3 md:order-none flex md:justify-center">
                    <img src={Product6} alt="Product 6 Logo" className="w-[130px] md:w-[160px] h-[130px] md:h-[200px]" />
                  </div>
                  <div className="order-4 md:order-none flex md:justify-center items-center">
                    <img src={Product7} alt="Product 7 Logo" className="w-[130px] md:w-[229px] h-[85px] md:h-[150px]" />
                  </div>
                  <div className="order-2 md:order-none flex md:justify-center">
                    <img src={Product8} alt="Product 8 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                </div>
                {/* 4.2.2 */}
                <div className='flex flex-col gap-[30px] md:gap-[50px] px-5 md:px-7'>
                  {/* LHDN E-INVOICE Compliance */}
                  <div className='flex flex-col gap-[30px] items-center md:items-start'>
                    <div className='flex items-center justify-center w-[250px] h-[30px] rounded-[6.667px] text-white text-sm font-bold bg-[#0174F6] '>
                      <div>
                        {t('lhdn_e_invoice_compliance')}
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                      <div className='flex justify-center md:justify-start'>
                        <div className='relative z-10 text-[#666] text-base md:text-sm font-semibold leading-tight flex gap-4'>
                          <div>{t('bundle_promo_price')}</div> 
                          <span className="line-through">{t('rm4')}</span> 
                        </div>
                      </div>
                      <div className='flex text-[#0174F6] justify-center'>
                        <div className='w-[141px] md:w-[212px] text-[64px] md:text-8xl font-bold leading-[60px] md:leading-[72px]'>
                          {t('rm2')}
                        </div>
                        <div className='text-left text-base md:text-[32px] font-semibold md:leading-[25px]'>
                          {t('99day')}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Application, Vector */}
                  <div className="flex flex-col md:flex-row gap-5 text-[#000] text-sm font-medium leading-[22px] text-left">
                    <div className="flex gap-4">
                      {/* Vectors */}
                      <div className="flex flex-col w-4 gap-[11px]">
                        <div className='flex items-center h-4'>
                        </div>
                        <div className='flex items-center'>
                          <Vector2 />
                        </div>
                        <div className='flex items-center'>
                          <Vector2 />
                        </div>
                        <div className='flex items-center'>
                          <Vector2 />
                        </div>
                        <div className='flex items-center'>
                          <Vector2 />
                        </div>
                        <div className='flex items-center'>
                          <Vector2 />
                        </div>
                      </div>
                      {/* Application, include, Mobile Pos Device */}
                      <div className='flex flex-col md:flex-row gap-[30px] md:gap-3 text-[#000] text-sm font-medium leading-[22px] text-left'>
                        {/* Application */}
                        <div className='w-[150px]'>
                          <ul>
                            <li className=' text-[#0174F6] text-sm font-bold'>
                              {t('application')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('customisable_menu')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('biometric_lock')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('unlimited_invoices')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('cloud_storage')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('training_and_support')}
                            </li>
                          </ul>
                        </div>
                        {/* include */}
                        <div className='w-[150px]'>
                          <ul>
                            <li className=' text-[#0174F6] text-sm font-bold'>
                              {t('included')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('software_license')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('rm726')}
                            </li>
                            <li className='flex gap-[19px] h-[22px]' />
                            <li className='flex gap-[19px]'>
                              {t('mobile_pos_device')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('free_x_10')}
                            </li>
                          </ul>
                        </div>
                        {/* Mobile Pos Device */}
                        <div className="flex flex-col md:flex-row md:gap-3">
                          <div className='w-[230px]'>
                            <ul>
                              <li className=' text-[#0174F6] text-sm font-bold'>
                                {t('mobile_pos_device2')}
                              </li>
                              <div className='flex gap-1'> 
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('standard_display')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('camera_rear')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('express_printing')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('usb_c_bluetooh_or_wifi')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('nfc')}
                                </li>
                              </div>
                            </ul>
                          </div>
                          <div className='w-[230px] flex flex-col gap-6'>
                            <div>
                              <ul>
                                <li className='hidden md:block text-[#00A6CA] text-sm font-bold h-5' />
                                <div className='flex gap-1'>
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('ultra_large')}
                                  </li>
                                </div>
                                <div className='flex gap-1'>
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('58mm_width')}
                                  </li>
                                </div>
                                <div className='flex gap-1'>
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('removable_battery')}
                                  </li>
                                </div>
                                <div className='flex gap-1'>
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('battery_capacity')}
                                  </li>
                                </div>
                                <div className='flex gap-1'>
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('standard_ps_ac')}
                                  </li>
                                </div>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li className='text-[10px] font-bold'>
                                  {t('charging_dock')}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Icons */}
                  <div className='flex flex-col md:flex-row gap-[22px] md:gap-[54px]'>
                    <div className='flex justify-between md:gap-[54px]'>
                      <div className='flex flex-col md:gap-[10px] items-center'>
                        <div className='hidden md:block'>
                          <Group111 />
                        </div>
                        <div className='md:hidden'>
                          <Group111S />
                        </div>
                        <div className='hidden md:block w-[73px] text-[10px] font-bold leading-tight'>
                          {t('octa_core')}
                        </div>
                      </div>
                      <div className='flex flex-col md:gap-[10px] items-center'>
                        <div className='hidden md:block'>
                          <Android />
                        </div>
                        <div className='md:hidden'>
                          <AndroidS />
                        </div>
                        <div className='hidden md:block  w-[40px] text-[10px] font-bold leading-tight'>
                          {t('android_13')}
                        </div>
                      </div>
                      <div className='flex flex-col md:gap-[10px] items-center'>
                        <div className='hidden md:block'>
                          <Ram />
                        </div>
                        <div className='md:hidden'>
                          <RamS />
                        </div>
                        <div className='hidden md:block  w-[53px] text-[10px] font-bold leading-tight'>
                          {t('2_gb_ram')}
                        </div>
                      </div>
                      <div className='flex flex-col md:gap-[10px] items-center'>
                        <div className='hidden md:block'>
                          <NFC />
                        </div>
                        <div className='md:hidden'>
                          <NFCS />
                        </div>
                        <div className='hidden md:block  w-[80px] text-[10px] font-bold leading-tight'>
                          {t('nfc_compatible')}
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between md:gap-[54px]'>
                      <div className='flex flex-col md:gap-[10px] items-center'>
                        <div className='hidden md:block'>
                        <Bluetooth />
                        </div>
                        <div className='md:hidden'>
                        <BluetoothS />
                        </div>
                        <div className='hidden md:block  w-[48px] text-[10px] font-bold leading-tight'>
                          {t('bluetooth_5')}
                        </div>
                      </div>
                      <div className='flex flex-col md:gap-[10px] items-center'>
                        <div className='hidden md:block'>
                          <Wifi />
                        </div>
                        <div className='md:hidden'>
                          <WifiS />
                        </div>
                        <div className='hidden md:block  w-[40px] text-[10px] font-bold leading-tight'>
                          {t('support_wifi')}
                        </div>
                      </div>
                      <div className='flex flex-col md:gap-[10px] items-center'>
                        <div className='hidden md:block'>
                          <QR />
                        </div>
                        <div className='md:hidden'>
                          <QRS />
                        </div>
                        <div className='hidden md:block  w-[42px] text-[10px] font-bold leading-tight'>
                          {t('support_qr')}
                        </div>
                      </div>
                      <div className='flex flex-col md:gap-[10px] items-center'>
                        <div className='hidden md:block'>
                          <Group119 />
                        </div>
                        <div className='md:hidden'>
                          <Group119S />
                        </div>
                        <div className='hidden md:block  w-[69px] text-[10px] font-bold leading-tight'>
                          {t('up_to_10hrs')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className='w-full h-[1495px] md:h-auto flex justify-center px-[30px] md:px-0'>
          <div className='flex flex-col max-w-[1000px] h-[1495px] md:h-auto w-[333px] md:w-auto bg-gradient-to-b from-white/50 from-30% to-[#0046BA80] to-100% outline outline-1 outline-[#0046BA] rounded-[10px]'>
            <div>
              {/* 5.1 */}
              <div className="inset-0 flex flex-col justify-center items-center">
                <div className='bg-[#0046BA] w-full h-[77px] md:h-[116px] rounded-t-[10px] flex flex-col justify-center gap-[5px] md:gap-[10px] md:mb-[-1px]'>
                  <div className='text-white text-center text-2xl md:text-5xl font-semibold leading-tight'>
                    {t('advanced')}
                  </div>
                  <div className='text-white text-center text-xs md:text-base font-bold leading-tight'>
                    <div className='hidden md:flex justify-center'>
                      {t('smart_pos_device_suitable')}
                    </div>
                    <div className='md:hidden'>
                      <div>
                        {t('m_smart_pos_device_suitable')}
                      </div>
                      <div>
                        {t('m_runcit_and_perniagaan')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-[#0046BA] w-full h-[23px] md:h-[33px] clip-v-shape mt-[-0.5px]' />
              </div>
              {/* 5.2 */}
              <div className="flex flex-col gap-[30px] md:gap-[50px] pt-[5px] pb-[44px] md:py-[50px] px-[22px] md:px-[45px]">
                {/* 5.2.1 */}
                <div className='flex flex-row flex-wrap justify-center items-center gap-5 md:gap-9'>
                  <div>
                    <img src={Product9} alt="Product 9 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                  <div>
                    <img src={Product10} alt="Product 10 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                  <div>
                    <img src={Product11} alt="Product 11 Logo" className="w-[130px] md:w-[200px] h-[106.6px] md:h-[164px]" />
                  </div>
                  <div>
                    <img src={Product12} alt="Product 12 Logo" className="w-[130px] md:w-[200px] h-[130px] md:h-[200px]" />
                  </div>
                </div>
                {/* 5.2.2 */}
                <div className='flex flex-col gap-[30px] md:gap-[50px] px-5 md:px-8'>
                  {/* LHDN E-INVOICE Compliance */}
                  <div className='flex flex-col gap-[30px] items-center md:items-start'>
                    <div className='flex items-center justify-center w-[250px] h-[30px] rounded-[6.667px] text-white text-sm font-bold bg-[#0046BA] '>
                      <div>
                        {t('lhdn_e_invoice_compliance')}
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <div className='flex justify-center md:justify-start'>
                        <div className='relative z-10 text-[#666] text-base md:text-sm font-semibold leading-tight flex gap-4'>
                          <div>{t('bundle_promo_price')}</div> 
                          <span className="line-through">{t('rm8')}</span> 
                        </div>
                      </div>
                      <div className='flex text-[#0046BA] justify-center'>
                        <div className='w-[141px] md:w-[215px] text-[64px] md:text-8xl font-bold leading-[60px] md:leading-[72px]'>
                          {t('rm6')}
                        </div>
                        <div className='w-[68px] md:w-[120px] text-left text-base md:text-[32px] font-semibold md:leading-[25px]'>
                          {t('11day')}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Application, Vector */}
                  <div className='flex flex-col md:flex-row gap-5 text-[#000] text-sm font-medium leading-[22px] text-left'>
                    <div className="flex gap-4">
                      {/* Vectors */}
                      <div className="flex flex-col w-4 gap-[11px]">
                        <div className='flex items-center h-4' />
                        <div className='flex items-center'>
                          <Vector3 />
                        </div>
                        <div className='flex items-center'>
                          <Vector3 />
                        </div>
                        <div className='flex items-center'>
                          <Vector3 />
                        </div>
                        <div className='flex items-center'>
                          <Vector3 />
                        </div>
                        <div className='flex items-center'>
                          <Vector3 />
                        </div>
                      </div>
                      {/* Application, include, Mobile Pos Device */}
                      <div className="flex flex-col md:flex-row gap-[30px] md:gap-5 text-[#000] text-sm font-medium leading-[22px] text-left">
                        {/* Application */}
                        <div className='w-[150px]'>
                          <ul>
                            <li className=' text-[#0046BA] text-sm font-bold'>
                              {t('application')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('customisable_menu')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('biometric_lock')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('unlimited_invoices')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('cloud_storage')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('training_and_support')}
                            </li>
                          </ul>
                        </div>
                        {/* include */}
                        <div className='w-[150px]'>
                          <ul>
                            <li className=' text-[#0046BA] text-sm font-bold'>
                              {t('included')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('software_license')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('rm1095')}
                            </li>
                            <li className='flex gap-[19px]  h-[22px]' />
                            <li className='flex gap-[19px]'>
                              {t('smart_pos_device')}
                            </li>
                            <li className='flex gap-[19px]'>
                              {t('free_x_10')}
                            </li>
                          </ul>
                        </div>
                        {/* Smart Pos Device */}
                        <div className="flex flex-col md:flex-row md:gap-5">
                          <div className='w-[230px]'>
                            <ul>
                              <li className=' text-[#0046BA] text-sm font-bold'>
                                {t('smart_pos_device2')}
                              </li>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('advanced_display')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                <li className='flex gap-[19px]'>
                                  {t('secondary_screen')}
                                </li>
                              </div>
                              <div className='flex gap-1'>
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('seiko_thermal_printer')}
                                </li>
                              </div>
                              <div className="flex gap-1">
                                <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                <li className='flex gap-[19px]'>
                                  {t('multiple_peripheral_port')}
                                </li>
                              </div>
                              <div className="flex gap-1">
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('nfc_and_qr')}
                                </li>
                              </div>
                              <div className="flex gap-1">
                                <div className='transform scale-y-[-1] flex items-center'>
                                  <ArrowFlipForwardB />
                                </div>
                                <li className='flex gap-[19px]'>
                                  {t('camera')}
                                </li>
                              </div>
                            </ul>
                          </div>
                          <div className='w-[230px] flex flex-col gap-8'>
                            <div>
                              <ul>
                                <li className='hidden md:block text-[#00A6CA] text-sm font-bold h-5' />
                                <div className="flex gap-1">
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('standard_roll')}
                                  </li>
                                </div>
                                <div className="flex gap-1">
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('automatic_cutter')}
                                  </li>
                                </div>
                                <div className="flex gap-1">
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('printing_speed')} 
                                  </li>
                                </div>
                                <div className="flex gap-1">
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('power_bank')}
                                  </li>
                                </div>
                                <div className="flex gap-1">
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('100v_240v')}
                                </li>
                                </div>
                                <div className="flex gap-1">
                                  <div className='transform scale-y-[-1] flex items-center'>
                                    <ArrowFlipForwardB />
                                  </div>
                                  <li className='flex gap-[19px]'>
                                    {t('support_2g_3g_4g_lte')}
                                  </li>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Icons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-11">
                    <div className="justify-center">
                      <div className="grid grid-cols-4 gap-7 md:gap-11">
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Group111 />
                          </div>
                          <div className='md:hidden'>
                            <Group111S />
                          </div>
                          <div className='hidden md:block w-[73px] text-[10px] font-bold leading-tight'>
                            {t('octa_core')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Android />
                          </div>
                          <div className='md:hidden'>
                            <AndroidS />
                          </div>
                          <div className='hidden md:block w-[40px] text-[10px] font-bold leading-tight'>
                            {t('android_11')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Ram />
                          </div>
                          <div className='md:hidden'>
                            <RamS />
                          </div>
                          <div className='hidden md:block w-[53px] text-[10px] font-bold leading-tight'>
                            {t('2_gb_ram')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <NFC />
                          </div>
                          <div className='md:hidden'>
                            <NFCS />
                          </div>
                          <div className='hidden md:block w-[80px] text-[10px] font-bold leading-tight'>
                            {t('nfc_compatible')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Group123 />
                          </div>
                          <div className='md:hidden'>
                            <Group123S />
                          </div>
                          <div className='hidden md:block w-[60px] text-[10px] font-bold leading-tight'>
                            {t('hd_touch_pane')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <PrintSpeed />
                          </div>
                          <div className='md:hidden'>
                            <PrintSpeedS />
                          </div>
                          <div className='hidden md:block w-[57px] text-[10px] font-bold leading-tight'>
                            {t('advanced_print_speed')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Support />
                          </div>
                          <div className='md:hidden'>
                            <SupportS />
                          </div>
                          <div className='hidden md:block w-[72px] text-[10px] font-bold leading-tight'>
                            {t('icon_support_2g')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Speaker />
                          </div>
                          <div className='md:hidden'>
                            <SpeakerS />
                          </div>
                          <div className='hidden md:block w-[44px] text-[10px] font-bold leading-tight'>
                            {t('mono_speaker')}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='justify-center'>
                      <div className="grid grid-cols-4 gap-7 md:gap-11">
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                          <Bluetooth />
                          </div>
                          <div className='md:hidden'>
                          <BluetoothS />
                          </div>
                          <div className='hidden md:block w-[48px] text-[10px] font-bold leading-tight'>
                            {t('bluetooth_5')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Wifi />
                          </div>
                          <div className='md:hidden'>  
                            <WifiS />
                          </div>
                          <div className='hidden md:block w-[40px] text-[10px] font-bold leading-tight'>
                            {t('support_wifi')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <NanoSim />
                          </div>
                          <div className='md:hidden'>
                            <NanoSimS />
                          </div>
                          <div className='hidden md:block w-[50px] text-[10px] font-bold leading-tight'>
                            {t('nanosim')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Group119 />
                          </div>
                          <div className='md:hidden'>
                            <Group119S />
                          </div>
                          <div className='hidden md:block w-[69px] text-[10px] font-bold leading-tight'>
                            {t('up_to_10hrs')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <PowerAdaptor />
                          </div>
                          <div className='md:hidden'>
                            <PowerAdaptorS />
                          </div>
                          <div className='hidden md:block w-[73px] text-[10px] font-bold leading-tight'>
                            {t('power_adaptor')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Screen />
                          </div>
                          <div className='md:hidden'>
                            <ScreenS />
                          </div>
                          <div className='hidden md:block w-[56px] text-[10px] font-bold leading-tight'>
                            {t('2_nd_screen')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <QR />
                          </div>
                          <div className='md:hidden'>
                            <QRS />
                          </div>
                          <div className='hidden md:block w-[42px] text-[10px] font-bold leading-tight'>
                            {t('support_qr')}
                          </div>
                        </div>
                        <div className='flex flex-col gap-[10px] items-center'>
                          <div className='hidden md:block'>
                            <Weight />
                          </div>
                          <div className='md:hidden'>
                            <WeightS />
                          </div>
                          <div className='hidden md:block w-[43px] text-[10px] font-bold leading-tight'>
                            {t('advanced_weight')}
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
      </div>

      {/* 6 */}
      <div className='w-full flex justify-center px-[30px] md:px-0'>
        <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full'>
          <div className='flex flex-col gap-[50px] md:gap-[100px] justify-center'>
            {/* 6.1 */}
            <div className="flex justify-center">
              <div className='text-center text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
                <div className="hidden md:flex flex-col">
                  <div>
                    {t('leave_your_contact_info')}
                  </div>
                  <div>
                    {t('e_inbill_empowers')}
                  </div>
                  <div>
                    {t('memberdayakan_peniaga')}
                  </div>
                </div>
                <div className="md:hidden">
                  <div>
                      {t('m_leave_your_contact_info')}
                    </div>
                    <div>
                      {t('m_e_inbill_empowers')}
                    </div>
                    <div className='w-[310px]'>
                      {t('m_memberdayakan_peniaga')}
                    </div>
                </div>
              </div>
            </div>
            {/* 6.2 */}
            <div className='flex flex-col gap-[100px]'>
              <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-[50px] md:gap-[100px]'>
                {/* Content */}
                <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                  {/* Full name */}
                  <div className='flex flex-col gap-[10px]'>
                    <div className="text-[#000] text-sm md:text-base font-bold text-left" htmlFor="fullname">
                      {t('full_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </div>
                    <input
                      autoComplete='on'
                      type="text"
                      id="fullname"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600 p-2 md:p-3"
                    />
                  </div>
                  {/* Company name */}
                  <div className='flex flex-col gap-[10px]'> 
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="companyname">
                      {t('company_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="text"
                      id="companyname"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600 p-2 md:p-3"
                    />
                  </div>
                  {/* Contact number */}
                  <div className='flex flex-col gap-[10px]'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="contactnumber">
                      {t('contact_number')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="tel"
                      id="contactnumber"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600 p-2 md:p-3"
                    />
                  </div>
                  {/* Email-address */}
                  <div className='flex flex-col gap-[10px]'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="email">
                      {t('email_address')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="email"
                      id="email"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600 p-2 md:p-3"
                    />
                  </div>
                  {/* Your state or location */}
                  <div className='flex flex-col gap-[10px]'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="location">
                      {t('your_state')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="text"
                      id="location"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600 p-2 md:p-3"
                    />
                  </div>
                  {/* Your business sector */}
                  <div className='flex flex-col gap-[10px]'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="sector">
                      {t('your_business_sector')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="text"
                      id="sector"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600 p-2 md:p-3"
                    />
                  </div>
                </div>
                {/* Submit */}
                <div className="flex items-center justify-center">
                  <button className="w-auto rounded-[31px] border-2 border-black shadow-submit" type="submit">
                    <div className='flex justify-center'>
                      <div className="w-[333px] md:w-auto text-black text-center md:text-xl text-base font-semibold leading-tight py-[10px] px-9">
                        <div className='hidden md:flex'>
                          {t('leave_your_contact_to')}
                        </div>
                        <div className="md:hidden">
                          <div>
                            {t('m_leave_your_contact_to')}
                          </div>
                          <div>
                            {t('m_a_complimentary')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='bg-opacity-20'>
          <ScrollToTopButton />
        </div>
      </div>

    </div>
  );
};

export default Home;
