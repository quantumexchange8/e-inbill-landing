import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomeGroup1, GroupM, GroupMS, Tablet, TabletS, KFGroup1, KFGroup1S, Pos, PosS, Group11, Group11S, Group12, Group12S, Group6, Group6S, KFGroup2, KFGroup2S, Startup, StartupS, Arrow, ArrowS } from '../Components/Outline.jsx';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import Leaveyourcontact from '../Components/Leaveyourcontact.jsx';
import beautyImage from '../Asset/Images/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon-1.png';
import barista from '../Asset/Images/young-woman-barista-working-modern-coffee-shop-1.png';
import food from '../Asset/Images/couple-enjoying-food-restaurant-1.png';
import dentist from '../Asset/Images/woman-patient-dentist-1.png';
import retail from '../Asset/Images/smart-attractive-asian-female-enjoy-choose-ffitting-dress-cloth-with-cloth-rack-boutique-shop-shopping-mall-background-1.png';
import pets from '../Asset/Images/vet-with-brush-animals-woman-black-t-shirt-cat-couch-1.png';
import education from '../Asset/Images/asian-college-students-back-school-wear-facemask-keep-distance-studying-classroom-1.png';
import service from '../Asset/Images/unidentified-car-mechanic-serviceman-disassembly-checking-car-alloy-chrome-wheel-1.png';
import stock from '../Asset/Images/warehouse-managers-walking-large-storage-department-controlling-distribution-market-1.png';
import basic from '../Asset/Images/basic.png';
import basicS from '../Asset/Images/basicS.png';
import standard from '../Asset/Images/standard.png';
import standardS from '../Asset/Images/standardS.png';
import advanced from '../Asset/Images/advanced.png';
import advancedS from '../Asset/Images/advancedS.png';
import Video1 from '../Asset/Videos/homeVideo1.mp4';
import Video2 from '../Asset/Videos/homeVideo2.mp4';


const Home = () => {

  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  return (
    <div className='pt-[54px] md:pt-[113px] pb-[75px] md:pb-[100px] flex flex-col gap-[75px] md:gap-[100px]'>
      {/* 1 */} 
      <div className='flex flex-col gap-[50px] md:gap-[100px]'>
        {/* 1.1 */}
        <div className="relative text-white">
          <video autoPlay loop playsInline muted className='w-full rounded-br-[150px] md:rounded-br-[500px]'>
            <source src={Video1} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-full max-w-[1000px] flex justify-center">
              <div className="hidden md:flex flex-col justify-center text-white/80 text-center text-[64px] font-bold leading-tight">
                <div>
                  {t('a_solution_to')}
                </div> 
                <div>
                  {t('make_payments_easier')}
                </div>
              </div>
              <div className="md:hidden flex flex-col justify-center text-white/80 text-center text-2xl font-bold leading-tight w-[333px]">
                <div>
                  {t('m_a_solution_to')}
                </div>
                <div>
                  {t('m_payments_easier')}
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
        {/* 1.2 */}
        <div className="w-full flex justify-center px-[30px]">
          <div className="flex flex-col gap-[50px] md:gap-[100px] justify-center max-w-[1000px] w-[333px] md:w-full ">
            {/* About Us */}
            <div className="flex flex-col gap-[10px] md:gap-[20px] w-[333px] md:w-full ">
              <div className='text-[#0046BA] text-xl md:text-5xl font-bold text-left leading-tight w-[333px] md:w-full '>
                {t('about_us')}
              </div>
              <div className="flex w-[333px] md:w-full ">
                <div className="w-[333px] md:w-full  text-[#0060FF] text-base md:text-2xl font-medium text-left leading-tight flex flex-col gap-5">
                  <div className='hidden md:block'>
                  <div>
                      {t('we_are_einbill')}
                  </div>
                  <div>
                      {t('as_a_technology_driven_company')}
                  </div>
                  </div>
                  <div className='md:hidden'>
                  <div>
                      {t('m_we_are_einbill')}
                  </div> 
                  <div>
                      {t('current_tech')}
                  </div>
                  </div>
                  <div className='hidden md:block'>
                  <div>
                      {t('in_malaysia')}
                  </div>
                  <div>
                      {t('standard_serving')}
                  </div>
                  <div>
                      {t('retail_to_manufacturing')}
                  </div>
                  <div>
                      {t('medium_size')}
                  </div>
                  <div>
                      {t('and_mdec')}
                  </div>
                  <div>
                      {t('bodies_we')}
                  </div>
                  </div>
                  <div className='md:hidden'>
                  <div>
                      {t('m_in_malaysia_we')}
                  </div> 
                  <div>
                      {t('m_e_invoicing_products')} 
                  </div>
                  <div>
                      {t('m_with_a_focus')}
                  </div>
                  <div>
                      {t('m_lhdn_regulations')}
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Key Feature */}
            <div className="flex flex-col gap-[50px] md:gap-[100px] items-center px-[30px] md:px-0 max-w-[1000px] md:w-full">
              <div className="flex justify-center md:w-[685px] text-[#0046BA] text-xl md:text-5xl font-bold text-center">
                <div className='md:hidden'>
                    <div>
                        {t('m_key_features')}
                    </div>
                    <div>
                        {t('m_of_our_products')}
                    </div> 
                </div>
                <div className='hidden md:flex'>
                    {t('key_features')}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[39px] md:gap-[120px] w-[300px] md:w-full">
                <div className="order-2 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                  <Tablet />
                  </div>
                  <div className="md:hidden">
                  <TabletS />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold ">
                    <div className='md:leading-[23px]'>
                        {t('completing')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('transaction')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('just')}
                    </div>
                  </div>
                </div>
                <div className="order-3 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <KFGroup1 />
                  </div>
                  <div className="md:hidden">
                    <KFGroup1S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold">
                    <div className='md:leading-[23px]'>
                        {t('fully_complaint')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('tax_e_invoice')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('functionality')}
                    </div>
                  </div>
                </div>
                <div className="order-4 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className='hidden md:block'>
                    <Pos />
                  </div>
                  <div className='md:hidden'>
                    <PosS />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold">
                    <div className='md:leading-[23px]'>
                        {t('fully_support')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('all_payment')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('methods')}
                    </div>
                  </div>
                </div>
                <div className="order-5 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Group11 />
                  </div>
                  <div className="md:hidden">
                    <Group11S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold">
                    <div className='md:leading-[23px]'>
                        {t('Unbeatable')}
                    </div> 
                    <div className='md:leading-[23px]'>
                        {t('low_prices')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('would_not')}
                    </div>
                  </div>
                </div>
                <div className='order-1 md:order-none flex flex-col col-span-2 md:col-span-1 items-center '>
                  <div className=" flex flex-col items-center rounded-[30px] w-[150px] h-[150px] justify-center">
                    <div className='hidden md:block'>
                        <GroupM />
                    </div>
                    <div className='md:hidden'>
                        <GroupMS />
                    </div>
                  </div>
                </div>
                <div className="order-6 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Group12 />
                  </div>
                  <div className="md:hidden">
                    <Group12S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold">
                    <div className='md:leading-[23px]'>
                        {t('absolutely_secure')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('cloud_synchrnization')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('and_storage')}
                    </div>
                  </div>
                </div>
                <div className="order-7 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Group6 />
                  </div>
                  <div className="md:hidden">
                    <Group6S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold">
                    <div className='md:leading-[23px]'>
                        {t('user_friendly')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('easy_to_use')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('key_interface')}
                    </div>
                  </div>
                </div>
                <div className="order-8 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <KFGroup2 />
                  </div>
                  <div className="md:hidden">
                    <KFGroup2S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold">
                    <div className='md:leading-[23px]'>
                        {t('set_up')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('start_selling')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('within_minutes')}
                    </div>
                  </div>
                </div>
                <div className="order-9 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Startup />
                  </div>
                  <div className="md:hidden">
                    <StartupS />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold">
                    <div className='md:leading-[23px]'>
                        {t('customer_support')}
                    </div>
                    <div className='md:leading-[23px]'> 
                        {t('seven_days')}
                    </div>
                    <div className='md:leading-[23px]'>
                        {t('for_quick_assistance')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[1px] bg-[#0046BA] w-full' />
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className='w-full flex justify-center px-[29px]'>
        <div className='flex flex-col gap-[75px] md:gap-[100px] justify-center max-w-[1000px] md:w-full '>
          {/* 2.1 */}
          <div className="flex flex-col gap-[75px] md:gap-[150px]">
            {/* 2.1.1 */}
            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
              <div className='flex justify-center'>
                <div className='flex flex-col md:gap-3 text-[#0046BA] text-xl md:text-5xl font-bold text-center leading-tight '>
                  <div className='hidden md:flex flex-col'>
                    <div>
                      {t('no_matter')}
                    </div>
                    <div>
                      {t('anda_berada')}
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div>
                      {t('m_no_matter')}
                    </div>
                    <div>
                      {t('m_industry_you_are')}
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='w-[333px] md:w-full text-black text-base md:text-2xl font-medium text-center leading-tight flex flex-col gap-6'>
                  <div className='flex flex-col'>
                    <div className='hidden md:flex justify-center'>
                        {t('whether_a_small_street_vendor')}
                    </div>
                    <div className='hidden md:flex justify-center'>
                      {t('di_bawah_satu')}
                    </div>
                    <div className='md:hidden'>
                      <div>
                        {t('m_whether_a_small_street_vendor')}
                      </div>
                      <div>
                        {t('m_unified')}
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <div>
                      <div>
                        {t('the_e_inbill_framework')}
                      </div>
                      <div>
                        {t('together')}
                      </div>
                      <div>
                        {t('you_and_your')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2.1.2 */}
            <div className='flex flex-col gap-[50px] md:gap-[100px]'>
              <div className='flex justify-center'>
                <div className='text-[#0060FF] text-base md:text-[32px] font-semibold text-center leading-tight'>
                  <div className='hidden md:flex justify-center'>
                    {t('the_e_inbill_solution')}
                  </div>
                  <div className='hidden md:flex justify-center'>
                    {t('your_business')}
                  </div>
                  <div className='md:hidden w-[333px]'>
                    <div>
                      {t('m_the_e_inbill_solution')}
                    </div>
                    <div>
                      {t('m_your_business')}
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[50px] justify-items-center'>
                  {/* g1 */}
                  <div className="relative w-[333px] md:w-[300px] md:max-h-[620px] border-2 border-[#00A6CA] rounded-lg flex flex-col items-center gap-10 md:gap-[62px] px-[15px] md:px-[24px] pt-[60px] pb-[40px] md:pt-[65px] md:pb-[100px]">
                    <div className='absolute -top-5 inset-x-0 flex justify-center'>
                      <div className=" bg-[#00A6CA] text-white text-xl font-semibold leading-tight rounded-[10px] py-2 w-[200px] flex justify-center">{t('basic')}</div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                      <img src={basic} alt="Basic Plan" className="hidden md:block w-[200px]" />
                      <img src={basicS} alt="Basic Plan" className="md:hidden w-[243px]" />
                    </div>
                    <div className='text-black text-base font-bold text-left leading-tight flex flex-col gap-[13px] md:gap-[13px]'>
                      <div className='hidden md:flex flex-col'>
                        <div>
                          {t('for_small_shops_or_stalls')}
                        </div>
                        <div>
                          {t('is_undoubtedly')}
                        </div>
                      </div>
                      <div className='md:hidden flex flex-col'>
                        <div>
                          {t('m_for_small_shops_or_stalls')}
                        </div>
                        <div>
                          {t('m_is_undoubtedly')}
                        </div>
                      </div>
                      <div>
                        {t('the_basic_plan')}
                      </div>
                      <div className='hidden md:flex flex-col'>
                        <div>
                          {t('merchants_simply')}
                        </div>
                        <div className='w-[230px]'>
                          {t('in_to_account')}
                        </div>
                      </div>
                      <div className="md:hidden">
                        {t('m_merchants_simply')}
                      </div>
                    </div>
                  </div>
                  {/* g2 */}
                  <div className="relative w-[333px] md:w-[300px] h-auto md:max-h-[620px] border-2 border-[#0073F6] rounded-lg flex flex-col items-center gap-10 md:gap-[27px] px-[15px] md:px-[24px] pt-[60px] pb-[40px] md:pt-10 md:pb-[86px]">
                    <div className='absolute -top-5 inset-x-0 flex justify-center'>
                      <div className=" bg-[#0073F6] text-white text-xl font-semibold leading-tight rounded-[10px] py-2 w-[200px] flex justify-center">{t('standard')}</div>
                    </div>
                    <div className='w-full md:min-h-[200px] flex justify-center items-center'>
                      <img src={standard} alt="Basic Plan" className="hidden md:block w-[200px]" />
                      <img src={standardS} alt="Basic Plan" className="md:hidden w-[200px]" />
                    </div>
                    <div className='hidden md:flex flex-col gap-3 md:gap-[11px] text-black text-base font-bold text-left leading-tight'>
                      <div>
                        <div>
                          {t('for_small_to_medium_sized')}
                        </div>
                        <div>
                          {t('a_comfortable_experience')}
                        </div>
                      </div>
                      <div>
                        {t('the_standard_plan')} 
                      </div>
                      <div className='w-[250px]'>
                        <div>
                          {t('with_mobile_devices')}
                        </div>
                        <div className='w-[240px]'>
                          {t('customers_can')}
                        </div>
                      </div>
                    </div>
                    <div className='md:hidden text-black text-base font-bold text-left leading-tight flex flex-col gap-3 md:gap-[11px]'>
                      <div>
                        <div>
                          {t('m_for_small_to_medium_sized')}
                        </div>
                        <div>
                          {t('m_a_comfortable_experience')}
                        </div>
                        <div>
                          {t('m_customer_is')}
                        </div>
                      </div>
                      <div className=''> 
                        {t('the_standard_plan')}
                      </div>
                      <div className=''>
                        {t('m_with_mobile_devices')}
                      </div>
                    </div>
                  </div>
                  {/* g3 */}
                  <div className="relative w-[333px] md:w-[300px] h-auto md:max-h-[620px] border-2 border-[#0046BA] rounded-lg flex flex-col items-center gap-10 md:gap-8 px-[15px] md:px-[24px] pt-[61px] pb-[40px] md:pt-[35px] md:pb-[26px]">
                    <div className='absolute -top-5 inset-x-0 flex justify-center'>
                      <div className=" bg-[#0046BA] text-white text-xl font-semibold leading-tight rounded-[10px] py-2 w-[200px] flex justify-center">{t('advanced')}</div>
                    </div>
                    <div className='w-full md:h-[200px] flex justify-center items-center'>
                      <img src={advanced} alt="Basic Plan" className="hidden md:block w-[200px] h-[140x]" />
                      <img src={advancedS} alt="Basic Plan" className="md:hidden w-[200px] h-[140x]" />
                    </div>
                    <div className='text-black text-base font-bold text-left leading-tight flex flex-col gap-3 md:gap-[11px]'>
                      <div>
                        {t('restaurant_management')}
                      </div>
                      <div className='hidden md:flex flex-col'>
                        <div>
                          {t('cross_departmental_communication')}
                        </div>
                        <div>
                          {t('ke_dalam_genggaman')}
                        </div>
                      </div>
                      <div className='md:hidden'>
                        {t('m_cross_departmental_communication')}
                      </div>
                      <div>
                        {t('enabling_you')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button onClick={() => navigate('/products')} className="w-auto rounded-[31px] border-2 border-black shadow-submit flex items-center justify-between px-[25px] md:px-[58px] py-[10px] md:py-[18px] gap-[20px] md:gap-[30px]">
                    <div className="text-black text-center text-base md:text-[20px] font-semibold">
                      {t('see_all')}
                    </div>
                    <div className='hidden md:block'>
                      <Arrow />
                    </div>
                    <div className='md:hidden'>
                      <ArrowS />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full'>
          <source src={Video2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="hidden md:flex flex-col text-white/80 text-center text-[64px] font-bold leading-tight w-full max-w-[1000px]">
            <div>
              {t('tedious_steps')}
            </div> 
            <div>
              {t('hinder_your')}
            </div>
          </div>
          <div className="md:hidden flex flex-col items-center justify-center text-white/80 text-center text-2xl font-bold leading-tight w-[333px] md:w-full max-w-[1000px]">
            <div className='flex items-center'>
              {t('m_tedious_steps')}
            </div> 
            <div className='flex items-center'>
              {t('m_hinder_your')}
            </div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="w-full flex justify-center px-[30px] md:px-0">
        <div className="flex flex-col gap-[50px] md:gap-[100px] justify-center max-w-[1000px] md:w-full">
          {/* 4.1 */}
          <div className='flex flex-col gap-[30px] md:gap-[100px] justify-center max-w-[1000px] w-full'>
            {/* 4.1.1 */}
            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
              <div className='flex justify-center'>
                <div className='text-[#0046BA] text-center text-xl md:text-5xl font-bold leading-tight flex flex-col md:gap-[10px]'>
                  <div className='hidden md:flex flex-col md:gap-[10px]'>
                    <div>
                      {t('you_cannot_resist')}
                    </div>
                    <div>
                      {t('that_the_product')}
                    </div>
                  </div>
                  <div className='md:hidden w-[333px]'>
                    <div>
                      {t('m_you_cannot_resist')}
                    </div>
                    <div>
                      {t('m_advantages')}
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:w-[970px] text-black text-base md:text-2xl font-medium leading-tight'>
                <div className='hidden md:flex flex-col'>
                  <div>
                    {t('we_offer')}
                  </div>
                  <div>
                    {t('be_customised_for')}
                  </div>
                  <div>
                    {t('have_choosing')}
                  </div>
                </div>
                <div className='md:hidden w-[333px]'>
                  {t('m_we_offer')}
                </div>
              </div>
            </div>
            {/* 4.1.2 */}
            <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[50px]">
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${beautyImage})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight md:gap-0">
                          <div className="hidden md:flex flex-col">
                            <div>
                              {t('beauty')}
                            </div>
                            <div>
                              {t('salon_spas')}
                            </div>
                          </div>
                          <div className='md:hidden'>
                            {t('m_beauty')}
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${barista})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight md:gap-0">
                          <div className="hidden md:flex flex-col">
                            <div>
                              {t('cafes')}
                            </div> 
                            <div>
                              {t('quick_service')}
                            </div>
                          </div>
                          <div className='md:hidden'>
                            {t('m_cafes')}
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${food})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight md:gap-0">
                          <div className="hidden md:flex flex-col">
                            <div>
                              {t('food')}
                            </div>
                            <div>
                              {t('bar')}
                            </div>
                          </div>
                          <div className='md:hidden'>
                            {t('m_food')}
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${dentist})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight md:gap-0">
                          <div className='hidden md:flex flex-col'>
                            <div>
                              {t('health')}
                            </div> 
                            <div>
                              {t('medical')}
                            </div>
                          </div>
                          <div className="md:hidden">
                            {t('m_health')}
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${retail})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight">
                          {t('retail_shop')}
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${pets})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight md:gap-0">
                          <div className='hidden md:flex flex-col'>
                            <div>
                              {t('pets')}
                            </div>
                            <div>
                              {t('grooming')}
                            </div>
                          </div>
                          <div className='md:hidden'>
                            {t('m_pets')}
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${education})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight md:gap-0">
                          <div className="hidden md:flex flex-col">
                            <div>
                              {t('courses')} 
                            </div>
                            <div>
                              {t('education')}
                            </div>
                          </div>
                          <div className="md:hidden">
                            {t('m_courses')} 
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${service})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight md:gap-0">
                          <div className="hidden md:flex flex-col">
                            <div>
                              {t('automotive')} 
                            </div>
                            <div>
                              {t('service')}
                            </div>
                          </div>
                          <div className="md:hidden">
                              {t('m_automotive')} 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${stock})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight md:gap-0">
                          <div className='hidden md:flex flex-col'>
                            <div>
                              {t('wholesales')}
                            </div> 
                            <div>
                              {t('stock')}
                            </div>
                          </div>
                          <div className="md:hidden">
                            {t('m_wholesales')}
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button onClick={() => navigate('/products')} className="w-auto h-10 md:h-[60px] rounded-[31px] border-2 border-black shadow-submit flex items-center justify-between gap-[20px] md:gap-[30px] px-[18px] md:px-[58px] md:py-[18px]">
                  <div className="text-black text-center text-base md:text-xl font-semibold">
                    {t('see_all')}
                  </div>
                  <div className='hidden md:block'>
                    <Arrow />
                  </div>
                  <div className='md:hidden'>
                    <ArrowS />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* 4.2 */}
          <div className='h-[1px] bg-[#0046BA] w-full' />
        </div>
      </div>

      {/* 5 */}
      <div className='w-full flex justify-center px-[30px] md:px-0'>
        <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full'>
          <div className='flex flex-col gap-[50px] md:gap-[100px] justify-center'>
            {/* 5.1 */}
            <div className="flex justify-center">
              <div className='w-full md:w-[763px] text-center text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
                <div className='hidden md:flex flex-col'>
                  <div>
                    {t('join_millions')}
                  </div>
                  <div>
                    {t('usher_in')}
                  </div>
                </div>
                <div className='md:hidden flex flex-col items-center'>
                  <div className='w-[333px]'>
                    <div>
                      {t('m_join_millions')}
                    </div>
                    <div>
                      {t('m_for_your')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 5.2 */}
            <div className='flex flex-col'>
              <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-[50px] md:gap-[100px]'>
                {/* Content */}
                <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
                  {/* Full name */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <div className="text-[#000] text-sm md:text-base font-bold text-left" htmlFor="fullname">
                      {t('full_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </div>
                    <input
                      autoComplete='on'
                      type="text"
                      id="fullname"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-2 md:p-3"
                    />
                  </div>
                  {/* Company name */}
                  <div className='flex flex-col gap-[10px]  w-full'> 
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="companyname">
                      {t('company_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="text"
                      id="companyname"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-2 md:p-3"
                    />
                  </div>
                  {/* Contact number */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="contactnumber">
                      {t('contact_number')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="tel"
                      id="contactnumber"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-2 md:p-3"
                    />
                  </div>
                  {/* Email-address */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="email">
                      {t('email_address')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="email"
                      id="email"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-2 md:p-3"
                    />
                  </div>
                  {/* Your state or location */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="location">
                      {t('your_state')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="text"
                      id="location"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-2 md:p-3"
                    />
                  </div>
                  {/* Your business sector */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="sector">
                      {t('your_business_sector')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      autoComplete='on'
                      type="text"
                      id="sector"
                      className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-2 md:p-3"
                    />
                  </div>
                </div>
                {/* Submit */}
                <div className="flex items-center justify-center">
                  <button className="w-auto rounded-[31px] border-2 border-black shadow-submit " type="submit">
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

