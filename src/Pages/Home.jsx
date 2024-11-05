import React from 'react';

import { useTranslation } from 'react-i18next';
import { HomeGroup1, GroupM, GroupMS, Tablet, TabletS, KFGroup1, KFGroup1S, Pos, PosS, Group11, Group11S, Group12, Group12S, Group6, Group6S, KFGroup2, KFGroup2S, Startup, StartupS, Arrow, ArrowS } from '../Components/Outline.jsx';
import ScrollToTopButton from '../Components/ScrollToTopButton';
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

  const { t, i18n } = useTranslation();

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
              <div className="w-[218px] md:w-[704px] hidden md:flex flex-col justify-center text-white/80 text-center text-2xl md:text-[64px] font-bold leading-tight">
                <div>
                  {t('a_solution_to')}
                </div> 
                <div>
                  {t('make_payments_easier')}
                </div>
              </div>
              <div className="md:hidden w-[218px] flex flex-col justify-center text-white/80 text-center text-2xl font-bold leading-tight">
                {t('m_a_solution_to')}
              </div>
            </div>
            <button className="absolute bottom-10 right-10 md:flex flex-col items-center hidden">
              <HomeGroup1 className="w-[50px] h-[45px]" />
              <div className="text-[#0046BA] text-center text-sm  font-bold leading-normal w-[120px] ">
              {t('leave_your_contact')}
              </div>
            </button>
          </div>
        </div>
        {/* 1.2 */}
        <div className='w-full flex justify-center'>
          <div className='flex flex-col gap-[50px] md:gap-[100px] justify-center max-w-[1000px] md:w-full '>
            {/* About Us */}
            <div className='flex flex-col gap-[10px] md:gap-5 px-[29px] md:px-0 max-w-[1000px] md:w-full'>
                <div className='text-[#0046BA] w-[91px] md:w-[218px] text-xl md:text-5xl font-bold leading-tight'>
                  {t('about_us')}
                </div>
                <div className='text-[#0060FF] md:w-[960px] text-base md:text-2xl font-medium text-left leading-tight flex flex-col gap-5 md:gap-10'> 
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
                    {t('in_malaysia')}
                  </div>
                  <div className='md:hidden'>
                    <div>
                      {t('m_in_malaysia')}
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
            {/* Key Features */}
            <div className='flex flex-col gap-[50px] md:gap-[100px] items-center px-[30px] md:px-0 max-w-[1000px] md:w-full'>
              <div className='flex justify-center'>
                <div className='md:w-[685px] text-[#0046BA] text-xl md:text-5xl font-bold text-center flex flex-col md:flex-row md:gap-3'>
                  <div>
                    {t('key_features')}
                  </div>
                  <div>
                    {t('of_our_products')}
                  </div> 
                </div> 
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[50px] md:gap-[200px] w-[300px] md:w-full">
                <div className="order-2 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Tablet />
                  </div>
                  <div className="md:hidden">
                    <TabletS />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold leading-tight w-[119px] md:w-[198px]">
                    {t('completing_the_transaction')}
                  </div>
                </div>
                <div className="order-3 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <KFGroup1 />
                  </div>
                  <div className="md:hidden">
                    <KFGroup1S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold leading-tight w-[100px] md:w-[149px]">
                    {t('fully_complaint')}
                  </div>
                </div>
                <div className="order-4 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className='hidden md:block'>
                    <Pos />
                  </div>
                  <div className='md:hidden'>
                    <PosS />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold leading-tight w-[84px] md:w-[140px]">
                    {t('fully_support')}
                  </div>
                </div>
                <div className="order-5 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Group11 />
                  </div>
                  <div className="md:hidden">
                    <Group11S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold leading-tight w-[95px] md:w-[157px]">
                    <div>
                      {t('Unbeatable')}
                    </div> 
                    <div>
                      {t('low_prices')}
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-none flex flex-col col-span-2 md:col-span-1 items-center gap-[30px] justify-center">
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
                  <div className="text-black text-center text-xs md:text-xl font-bold leading-tight w-[131px] md:w-[218px]">
                    {t('absolutely_secure')}
                  </div>
                </div>
                <div className="order-7 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Group6 />
                  </div>
                  <div className="md:hidden">
                    <Group6S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold leading-tight w-[104px] md:w-[173px]">
                    {t('user_friendly')}
                  </div>
                </div>
                <div className="order-8 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <KFGroup2 />
                  </div>
                  <div className="md:hidden">
                    <KFGroup2S />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold leading-tight w-[87px] md:w-[145px]">
                    {t('set_up_and_start')}
                  </div>
                </div>
                <div className="order-9 md:order-none flex flex-col items-center gap-[10px] md:gap-[30px]">
                  <div className="hidden md:block">
                    <Startup />
                  </div>
                  <div className="md:hidden">
                    <StartupS />
                  </div>
                  <div className="text-black text-center text-xs md:text-xl font-bold leading-tight w-[119px] md:w-[198px]">
                    {t('customer_support')}
                  </div>
                </div>
              </div>
              <div className='h-[1px] bg-[#0046BA] w-full' />
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-[75px] md:gap-[100px] justify-center max-w-[1000px] md:w-full '>
          {/* 2.1 */}
          <div className="flex flex-col gap-[75px] md:gap-[150px]">
            {/* 2.1.1 */}
            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
              <div className='flex justify-center'>
                <div className='w-[170px] md:w-[779px] text-[#0046BA] text-xl md:text-5xl font-bold text-center '>
                  {t('no_matter')}
                </div>
              </div>
              <div>
                <div className='text-black text-base md:text-2xl font-medium text-center leading-tight flex flex-col gap-6'>
                  <div className='flex justify-center'>
                    <div className='w-[333px] md:w-[960px]'>
                      {t('whether_a_small_street_vendor')}
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <div className='w-[300px] md:w-[830px]'>
                      {t('the_e_inbill_framework')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2.1.2 */}
            <div className='flex flex-col justify-center gap-[50px] md:gap-[100px]'>
              <div className='w-full flex justify-center'>
                <div className='w-[300px] md:w-[744px] text-[#0060FF] text-base md:text-[32px] font-semibold text-center leading-tight'>
                  {t('The_e_inbill_solution')}
                </div>
              </div>
              <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[50px]'>
                  {/* g1 */}
                  <div className="relative w-[333px] md:w-[300px] h-[501px] md:h-[600px] border-2 border-[#00A6CA] rounded-lg flex flex-col items-center gap-10 md:gap-[62px] px-[17px] md:px-[25px] pt-[60px] pb-[40px] md:pt-[65px] md:pb-[124px]">
                    <div className='absolute -top-5 inset-x-0 flex justify-center'>
                      <div className=" bg-[#00A6CA] text-white text-xl font-semibold leading-tight rounded-[10px] py-2 w-[200px] flex justify-center">{t('basic')}</div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                      <img src={basic} alt="Basic Plan" className="hidden md:block w-[200px]" />
                      <img src={basicS} alt="Basic Plan" className="md:hidden w-[243px]" />
                    </div>
                    <div className='md:w-[240px] text-black text-base font-bold text-left leading-tight flex flex-col gap-[13px] md:gap-[13px]'>
                      <div>
                        {t('for_small_shops_or_stalls')}
                      </div>
                      <div>
                        {t('the_basic_plan')}
                      </div>
                      <div>
                        {t('merchants_simply')}
                      </div>
                    </div>
                  </div>
                  {/* g2 */}
                  <div className="relative w-[333px] md:w-[300px] h-[525px] md:h-[600px] border-2 border-[#0073F6] rounded-lg flex flex-col items-center gap-10 md:gap-[27px] px-[16px] md:px-[25px] pt-[60px] pb-[40px] md:pt-10 md:pb-[86px]">
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
                        <div className='w-[247px]'>
                          {t('a_comfortable_experience')}
                        </div>
                      </div>
                      <div>
                        {t('the_standard_plan')} 
                      </div>
                      <div className='w-[240px]'>
                        {t('with_mobile_devices')}
                      </div>
                    </div>
                    <div className='md:hidden text-black text-base font-bold text-left leading-tight flex flex-col gap-3 md:gap-[11px]'>
                      <div>
                        <div className='w-[280px]'>
                        {t('m_for_small_to_medium_sized')}
                        </div>
                        <div className='w-[247px]'>
                        {t('m_a_comfortable_experience')}
                        </div>
                      </div>
                      <div className='w-[298px]'> 
                        {t('the_standard_plan')}
                      </div>
                      <div className='w-[300px]'>
                        {t('with_mobile_devices')}
                      </div>
                    </div>
                  </div>
                  {/* g3 */}
                  <div className="relative w-[333px] md:w-[300px] h-[534px] md:h-[600px] border-2 border-[#0046BA] rounded-lg flex flex-col items-center gap-10 md:gap-8 px-[17px] md:px-[25px] pt-[61px] pb-[40px] md:pt-[35px] md:pb-[26px]">
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
                      <div>
                        {t('cross_departmental_communication')}
                      </div>
                      <div>
                        {t('enabling_you')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="w-[260px] md:w-[400px] h-[40px] md:h-[60px] rounded-[31px] border-2 border-black shadow-submit flex items-center justify-center gap-[20px] md:gap-[30px]">
                    <div className="w-[181px] md:w-[226px] text-black text-center text-base md:text-[20px] font-semibold">{t('see_all')}</div>
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
        <div className="absolute inset-0 md:flex justify-center items-center hidden">
          <div className="text-white/80 text-center text-[64px] font-bold leading-tight w-full max-w-[1000px]">
            <div>
              {t('tedious_steps')}
            </div> 
            <div>
              {t('hinder_your')}
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
                <div className='w-[327px] md:w-[784px] text-[#0046BA] text-center text-xl md:text-5xl font-bold leading-tight'>
                  {t('you_cannot_resist')}
                </div>
              </div>
              <div className='w-[333px] md:w-[970px] text-black text-base md:text-2xl font-medium leading-tight'>
                {t('we_offer')}
              </div>
            </div>
            {/* 4.1.2 */}
            <div className='flex flex-col gap-[30px] md:gap-[50px]'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[50px]">
                <div className="relative w-[333px] md:w-[300px] h-[100px] md:h-[200px] flex-shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${beautyImage})` }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            {t('beauty')}
                          </div>
                          <div>
                            {t('salon_spas')}
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
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            {t('cafes')}
                          </div> 
                          <div>
                            {t('quick_service')}
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
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            {t('food')}
                          </div>
                          <div>
                            {t('bar')}
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
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            {t('health')}
                          </div> 
                          <div>
                            {t('medical')}
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
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            {t('pets')}
                          </div>
                          <div>
                            {t('grooming')}
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
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            {t('courses')} 
                          </div>
                          <div>
                            {t('education')}
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
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            {t('automotive')} 
                          </div>
                          <div>
                            {t('service')}
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
                        <div className="flex md:flex-col text-white text-center text-sm md:text-xl font-bold leading-tight gap-[3px] md:gap-0">
                          <div>
                            {t('wholesales')}
                          </div> 
                          <div>
                            {t('stock')}
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-[260px] md:w-[400px] h-10 md:h-[60px] rounded-[31px] border-2 border-black shadow-submit flex items-center justify-center gap-5 md:gap-[30px]">
                  <div className="text-black text-center text-base md:text-xl font-semibold">{t('see_all')}</div>
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
              <div className='w-[280px] md:w-[763px] text-center text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
                {t('join_millions')}
              </div>
            </div>
            {/* 5.2 */}
            <div className='flex flex-col'>
              <form className='flex flex-col gap-[50px] md:gap-[100px]'>
                {/* Content */}
                <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
                  {/* Full name */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <div className="text-[#000] text-sm md:text-base font-bold text-left" htmlFor="fullname">
                      {t('full_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </div>
                    <input
                      type="text"
                      id="fullname"
                      className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA]"
                    />
                  </div>
                  {/* Company name */}
                  <div className='flex flex-col gap-[10px]  w-full'> 
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="companyname">
                      {t('company_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyname"
                      className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA]"
                    />
                  </div>
                  {/* Contact number */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="contactnumber">
                      {t('contact_number')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactnumber"
                      className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA]"
                    />
                  </div>
                  {/* Email-address */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="email">
                      {t('email_address')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA]"
                    />
                  </div>
                  {/* Your state or location */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="location">
                      {t('your_state')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA]"
                    />
                  </div>
                  {/* Your business sector */}
                  <div className='flex flex-col gap-[10px] w-full'>
                    <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="sector">
                      {t('your_business_sector')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="sector"
                      className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA]"
                    />
                  </div>
                </div>
                {/* Submit */}
                <div className="flex items-center justify-center">
                  <button className="w-full md:w-[600px] h-[60px] rounded-[31px] border-2 border-black shadow-submit" type="submit">
                    <div className='flex justify-center'>
                      <div className="w-[243px] md:w-[530px] text-black text-center md:text-xl text-base font-semibold leading-tight">
                        {t('leave_your_contact_to')}
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

