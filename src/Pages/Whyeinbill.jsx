import React from 'react';
import Video1 from '../Asset/Videos/whyEinbillVideo1.mp4';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import { useTranslation } from 'react-i18next';

import { HomeGroup1, WhyGroup1, WhyGroup1S, Group13, Group13S, Group71, Group71S, Group72, Group72S, Group73, Group73S, Group74, Group74S, Group18, Group18S, Group84, Group84S, Group85, Group85S, Group86, Group86S, Group87, Group87S } from '../Components/Outline.jsx';

const Whyeinbill = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className='pt-[54px] md:pt-[113px] pb-[75px] md:pb-[100px] flex flex-col gap-[50px] md:gap-[100px]'>
      {/* 1 */}
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full rounded-br-[150px] md:rounded-br-[500px]'>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-[1000px] flex justify-center">
            <div className="w-[279px] md:w-[870px] flex justify-center text-white/80 text-center text-2xl md:text-[64px] font-bold leading-tight">
              {t('choose_us')}
            </div>
          </div>
          <button className="absolute bottom-10 right-10 md:flex flex-col items-center hidden">
            <HomeGroup1 className="w-[50px] h-[45px]" />
            <div className="text-[#0046BA] text-center text-sm font-bold leading-normal w-[120px] ">
              {t('leave_your_contact')}
            </div>
          </button>
        </div>
      </div>
      {/* 2 */}
      <div className='w-full flex justify-center px-[30px] md:px-0'>
        <div className='flex flex-col gap-[75px] md:gap-[100px] justify-center max-w-[1000px] w-full'>
          {/* 2.1 */}
          <div className='flex flex-col gap-[50px] md:gap-[100px]'> 
            {/* 2.1.1 */}
            <div className='flex flex-col gap-[30px] md:gap-[100px]'>
              <div className='flex flex-col w-[320px] md:w-[900px] justify-center text-left text-[#0046BA] text-xl md:text-5xl font-bold leading-tight'>
                {t('we_can_elevate')}
              </div>
              <div className='w-[256px] md:w-[512px] text-left text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
                {t('why_you_should')}
              </div>
            </div>
            {/* 2.1.2 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'> 
                  <WhyGroup1 />
                </div>
                <div className='md:hidden'>
                  <WhyGroup1S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[246] md:w-[422px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  Customizable and Scalable Solution
                </div>
                <div className='text-left w-[323px] md:w-[820px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  You have the freedom to choose from a variety of expansion modules, such as mobile ordering, kitchen management, reservations, membership management, or a payment system with integrated e-invoice functionality. 
                  Additionally, comprehensive third-party integration solutions are available to seamlessly incorporate all aspects of your operational management into a single system.
                </div>
              </div>
            </div>
            {/* 2.1.3 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group71 />
                </div>
                <div className='md:hidden'>
                  <Group71S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[127px] md:w-[218px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  e-inbill Ecosystem
                </div>
                <div className='hidden md:block text-left w-[320px] md:w-[820px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  Experience unparalleled efficiency and adaptability with the E-inbill Ecosystem.
                  With a robust core POS system, customisable expansion modules, and seamless integration across various technologies, 
                  you can empower every facet of your business operations for optimal performance and success.
                </div>
                <div className='md:hidden text-left w-[320px] md:w-[820px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div>
                    Experience unparalleled efficiency and adaptability with the E-inbill Ecosystem.
                  </div>
                  <div>
                    With a robust core POS system, customisable expansion modules, and seamless integration across various technologies, 
                    you can empower every facet of your business operations for optimal performance and success.
                  </div>
                </div>
              </div>
            </div>
            {/* 2.1.4 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group72 />
                </div>
                <div className='md:hidden'>
                  <Group72S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[193px] md:w-[553px] text-[#000] text-sm md:text-2xl font-bold leading-tight'>
                  Keeping Pace with Innovation and Optimisation
                </div>
                <div className='hidden md:block text-left w-[320px] md:w-[810px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  We continuously analyse market trends and integrate our findings into developing new products. 
                  Our goal is to help restaurants adapt to the evolving catering landscape quickly.
                  Our R&D team introduces products aligned with industry trends, incorporating user feedback. 
                  All new features undergo rigorous testing. 
                  Our commitment to updates ensures both speed and quality.
                </div>
                <div>
                  <div className='md:hidden text-left w-[320px] md:w-[810px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                    <div>
                      We continuously analyse market trends and integrate our findings into developing new products. 
                      Our goal is to help restaurants adapt to the evolving catering landscape quickly.
                    </div>
                    <div>
                      Our R&D team introduces products aligned with industry trends, incorporating user feedback. 
                      All new features undergo rigorous testing. 
                      Our commitment to updates ensures both speed and quality.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2.1.5 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group13 />
                </div>
                <div className='md:hidden'>
                  <Group13S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[178px] md:w-[567px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  System fully supports cloud-based functionality
                </div>
                <div className='text-left w-[320px] md:w-[810px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  A small footprint can yield substantial profits! Utilising a streamlined solution enables you to optimise operational efficiency, 
                  enhance productivity, and extend your brand's online footprint, positioning you as the preferred choice while maintaining cost-effectiveness!
                </div>
              </div>
            </div>
            {/* 2.1.6 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group73 />
                </div>
                <div className='md:hidden'>
                  <Group73S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[178px] md:w-[242px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  Suitable for All Sizes
                </div>
                <div className='hidden md:block text-left w-[333px] md:w-[821px] text-[#000] text-sm md:text-xl  font-medium leading-tight'>
                  <div>
                    No matter if you run a single restaurant, a small or medium-sized chain, or an enterprise, implementing E-inbill's restaurant solution is easy and customisable. 
                    Our system supports different structures for restaurant groups, enabling remote monitoring of operational data for individual stores. 
                    You can track revenue, average order value,  
                  </div>
                  <div>
                    foot traffic, inventory, and more through comprehensive reports. 
                    Plus, you can manage multiple brands and locations effortlessly, empowering your restaurant's growth painlessly.
                  </div>
                </div>
                <div className='md:hidden text-left w-[333px] md:w-[821px] text-[#000] text-sm md:text-xl  font-medium leading-tight'>
                  <div>
                    No matter if you run a single restaurant,  
                  </div>
                  <div>
                    a small or medium-sized chain, or an enterprise, implementing E-inbill's restaurant solution is easy and customisable. 
                    Our system supports different structures for restaurant groups, enabling remote monitoring of operational data for individual stores. 
                    You can track revenue, average order value, foot traffic, inventory, and more through comprehensive reports. 
                    Plus, you can manage multiple brands and locations effortlessly, empowering your restaurant's growth painlessly.
                  </div>
                </div>
              </div>
            </div>
            {/* 2.1.7 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group74 />
                </div>
                <div className='md:hidden'>
                  <Group74S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[161px] md:w-[275px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  24/7 Technical Support
                </div>
                <div className='text-left w-[333px] md:w-[825px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  e-inbill provides round-the-clock technical support, offering in-store consultations, real-time multilingual online customer service, and on-site system training. 
                  Our transparent after-sales service includes hardware maintenance and equipment rental during repairs, ensuring prompt resolution of operational issues for our customers.
                </div>
              </div>
            </div>
            {/* 2.1.8 */}
            <div className='h-[1px] bg-[#0046BA] w-[333px] md:w-full'></div>
          </div>
          {/* 2.2 */}
          <div className='flex flex-col gap-[50px] md:gap-[100px]'>
            {/* 2.2.1 */}
            <div className="flex flex-col gap-[30px] md:gap-[100px]">
              <div className='flex flex-col w-[290px] md:w-[930px] justify-center text-left text-[#0046BA] text-xl md:text-5xl  font-bold leading-tight'>
                {t('our_system_is_fully_equipped')}
              </div>
              <div className='w-[141px] md:w-[512px] text-left text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
                {t('our_point_of_sales')}
              </div>
            </div>
            {/* 2.2.2 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group18 />
                </div>
                <div className='md:hidden'>
                  <Group18S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[47px] md:w-[107px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('interface')}
                </div>
                <div className='text-left w-[333px] md:w-[800px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  {t('tailor_the_layout')}
                </div>
              </div>
            </div>
            {/* 2.2.3 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group84 />
                </div>
                <div className="md:hidden">
                  <Group84S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[47px] md:w-[99px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('security')}
                </div>
                <div className='text-left w-[310px] md:w-[800px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  {t('this_guarantees_that')}
                </div>
              </div>
            </div>
            {/* 2.2.4 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group85 />
                </div>
                <div className='md:hidden'>
                <Group85S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[47px] md:w-[103px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('receipts')}
                </div>
                <div className='text-left w-[310px] md:w-[820px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  {t('provide_your_customers')}
                </div>
              </div>
            </div>
            {/* 2.2.5 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group86 />
                </div>
                <div className='md:hidden'>
                  <Group86S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[47px] md:w-[104px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('payment')}
                </div>
                <div className='text-left w-[314px] md:w-[830px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  {t('offer_your_customers')}
                </div>
              </div>
            </div>
            {/* 2.2.6 */}
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[50px]'>
              <div>
                <div className='hidden md:block'>
                  <Group87 />
                </div>
                <div className='md:hidden'>
                  <Group87S />
                </div>
              </div>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-left w-[47px] md:w-[80px] text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('offline')}
                </div>
                <div className='text-left w-[310px] md:w-[830px] text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  {t('keep_your_operations')}
                </div>
              </div>
            </div>
            {/* 2.2.7 */}
            <div className='h-[1px] bg-[#0046BA] w-[333px] md:w-full'/>
          </div>
          {/* 2.3 */}
          <div className='w-full flex justify-center'>
            <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full'>
              <div className='flex flex-col gap-[50px] md:gap-[100px] justify-center'>
                {/* 2.3.1 */}
                <div className="flex justify-center">
                  <div className='w-[300px] md:w-[720px] text-center text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
                    {t('leave_your_contact_info')}
                  </div>
                </div>
                {/* 2.3.2 */}
                <div className='flex flex-col gap-[100px]'>
                  <form className='flex flex-col gap-[50px] md:gap-[100px]'>
                    {/* Content */}
                    <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                      {/* Full name */}
                      <div className='flex flex-col gap-[10px]'>
                        <div className="text-[#000] text-sm md:text-base font-bold text-left" htmlFor="fullname">
                          {t('full_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                        </div>
                        <input
                          type="text"
                          id="fullname"
                          className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      {/* Company name */}
                      <div className='flex flex-col gap-[10px]'> 
                        <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="companyname">
                          {t('company_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyname"
                          className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      {/* Contact number */}
                      <div className='flex flex-col gap-[10px]'>
                        <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="contactnumber">
                          {t('contact_number')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                        </label>
                        <input
                          type="tel"
                          id="contactnumber"
                          className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      {/* Email-address */}
                      <div className='flex flex-col gap-[10px]'>
                        <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="email">
                          {t('email_address')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      {/* Your state or location */}
                      <div className='flex flex-col gap-[10px]'>
                        <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="location">
                          {t('your_state')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          id="location"
                          className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      {/* Your business sector */}
                      <div className='flex flex-col gap-[10px]'>
                        <label className="block text-[#000] text-sm md:text-base font-bold text-left " htmlFor="sector">
                          {t('your_business_sector')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          id="sector"
                          className="w-full h-10 md:h-[60px] border border-solid bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600"
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
          </div>
        </div>

        <div className='bg-opacity-20'>
          <ScrollToTopButton />
        </div>
      </div>

    </div>
  );
};

export default Whyeinbill;
