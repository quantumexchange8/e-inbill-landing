import React, { useState } from 'react';
import Video1 from '../Asset/Videos/whyEinbillVideo1.mp4';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import Leaveyourcontact from '../Components/Leaveyourcontact.jsx';
import { useTranslation } from 'react-i18next';
import { HomeGroup1, WhyGroup1, WhyGroup1S, Group13, Group13S, Group71, Group71S, Group72, Group72S, Group73, Group73S, Group74, Group74S, Group18, Group18S, Group84, Group84S, Group85, Group85S, Group86, Group86S, Group87, Group87S } from '../Components/Outline.jsx';

const Whyeinbill = () => {

  const { t, i18n } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='pt-[54px] md:pt-[113px] pb-[75px] md:pb-[100px] flex flex-col gap-[50px] md:gap-[100px]'>
      {/* 1 */}
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full rounded-br-[150px] md:rounded-br-[500px]'>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-[1000px] flex justify-center">
            <div className="flex flex-col justify-center text-white/80 text-center text-2xl md:text-[64px] font-bold leading-tight">
              <div className='hidden md:flex flex-col'>
                <div>
                  {t('choose_us')}
                </div>
                <div>
                  {t('believe_in')}
                </div>
              </div>
              <div className="md:hidden">
                <div>
                  {t('m_choose_us')}
                </div>
                <div className='w-[300px]'>
                  {t('m_believe_in')}
                </div>
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
      <div className='w-full flex justify-center px-[29px] md:px-0'>
        <div className='flex flex-col gap-[75px] md:gap-[100px] justify-center max-w-[1000px] w-full'>
          {/* 2.1 */}
          <div className='flex flex-col gap-[50px] md:gap-[100px]'> 
            {/* 2.1.1 */}
            <div className='flex flex-col gap-[30px] md:gap-[100px]'>
              <div className='flex flex-col justify-center text-left text-[#0046BA] text-xl md:text-5xl font-bold leading-tight'>
                <div className="hidden md:flex flex-col leading-tight">
                  <div>
                    {t('we_can_elevate')}
                  </div>
                  <div>
                    {t('heights_helping')}
                  </div>
                  <div>
                    {t('with_ease')}
                  </div>
                </div>
                <div className="md:hidden">
                  <div>
                    {t('m_we_can_elevate')}
                  </div>
                  <div>
                    {t('m_heights_helping')}
                  </div>
                </div>
              </div>
              <div className='text-left text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
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
                <div className='w-[300px] md:w-full text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('customizable_and_scalable_solution')}
                </div>
                <div className='text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className="hidden md:flex flex-col">
                    <div>
                      {t('freedom_to_choose')}
                    </div>
                    <div>
                      {t('operational_management')}
                    </div>
                  </div>
                  <div className="md:hidden">
                    <div>
                      {t('m_freedom_to_choose')}
                    </div>
                    <div>
                      {t('m_of_expansion')}
                    </div>
                    <div>
                      {t('m_a_single_system')}
                    </div>
                  </div>
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('e_inbill_ecosystem')}
                </div>
                <div className='hidden md:block text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div>
                    {t('experience_unparalleled')}
                  </div>
                  <div>
                    {t('for_optimal')}
                  </div>
                </div>
                <div className='md:hidden text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className='md:hidden'>
                    {t('m_experience_unparalleled')}
                  </div>
                  <div>
                    {t('m_with_a_robust')}
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold leading-tight'>
                  <div className="hidden md:flex">
                    {t('keep_pace')}
                  </div>
                  <div className="md:hidden">
                    <div>
                      {t('m_keep_pace')}
                    </div>
                    <div>
                      {t('m_innovation_and_optimisation')}
                    </div>
                  </div>
                </div>
                <div className='hidden md:block text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div>
                    {t('continuously_analyse')}
                  </div>
                  <div>
                    {t('quickly')}
                  </div>
                  <div>
                    {t('user_feedback')}
                  </div>
                </div>
                <div className='md:hidden text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div>
                    {t('m_continuously_analyse')}
                  </div>
                  <div>
                    {t('m_to_the_evolving')}
                  </div>
                  <div className='w-[320px]'>
                    {t('r_and_d_team')}
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  <div className="hidden md:flex">
                    {t('system_fully_supports')}
                  </div>
                  <div className="md:hidden">
                    <div>
                      {t('m_system_fully_supports')}
                    </div>
                    <div>
                      {t('m_cloud_based')}
                    </div>
                  </div>
                </div>
                <div className='text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className="hidden md:flex flex-col">
                    <div>
                      {t('small_footprint')}
                    </div>
                    <div>
                      {t('you_to_optimise')}
                    </div>
                  </div>
                  <div className='md:hidden w-[325px]'>
                    {t('m_small_footprint')}
                  </div>
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('suitable_for_all_sizes')}
                </div>
                <div className='hidden md:block text-left text-[#000] text-sm md:text-xl  font-medium leading-tight'>
                  <div>
                    {t('no_matter_if_you')}
                  </div>
                  <div>
                    {t('support_different')}
                  </div>
                  <div className='md:w-[830px]'>
                    {t('foot_trafic')}
                  </div>
                </div>
                <div className='md:hidden text-left text-[#000] text-sm md:text-xl  font-medium leading-tight'>
                  <div>
                    {t('m_no_matter_if_you')}  
                  </div>
                  <div className='w-[333px]'>
                    {t('m_small_or_medium')}
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('technical_support')}
                </div>
                <div className='text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className="hidden md:flex flex-col">
                    <div>
                      {t('e_inbill_provides')}
                    </div>
                    <div>
                      {t('cepat_bagi')}
                    </div>  
                  </div>
                  <div className='md:hidden'>
                    {t('m_e_inbill_provides')}
                  </div>
                </div>
              </div>
            </div>
            {/* 2.1.8 */}
            <div className='h-[1px] bg-[#0046BA] w-full' />
          </div>
          {/* 2.2 */}
          <div className='flex flex-col gap-[50px] md:gap-[100px]'>
            {/* 2.2.1 */}
            <div className="flex flex-col gap-[30px] md:gap-[100px]">
              <div className='flex flex-col justify-center text-left text-[#0046BA] text-xl md:text-5xl font-bold leading-tight'>
                <div className="hidden md:flex flex-col leading-tight">
                  <div>
                    {t('our_system_is_fully_equipped')}
                  </div>
                  <div>
                    {t('us_the_ideal')}
                  </div>
                </div>
                <div className="md:hidden">
                  <div>
                    {t('m_our_system_is_fully_equipped')}
                  </div>
                  <div>
                    {t('m_to_match')}
                  </div>
                  <div>
                    {t('m_of_your_industry')}
                  </div>
                  <div>
                    {t('m_the_ideal')}
                  </div>
                </div>
              </div>
              <div className='text-left text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('interface')}
                </div>
                <div className='text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className='hidden md:flex flex-col'>
                    <div>
                      {t('tailor_the_layout')}
                    </div>
                    <div>
                      {t('options_tax_regulations')}
                    </div>
                    <div>
                      {t('your_interface')}
                    </div>
                  </div>
                  <div className="md:hidden">
                    {t('m_tailor_the_layout')}
                  </div>
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('security')}
                </div>
                <div className='text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className='hidden md:flex flex-col'>
                    <div>
                      {t('this_guarantees_that')}
                    </div>
                    <div>
                      {t('you_have_an')}
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div>
                      {t('m_this_guarantees_that')}
                    </div>
                    <div className='w-[320px]'>
                      {t('m_you_have_an')}
                    </div>
                  </div>
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('receipts')}
                </div>
                <div className='text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className="hidden md:flex flex-col">
                    <div>
                      {t('provide_your_customers')}
                    </div>
                    <div>
                      {t('digital_receipt')}
                    </div>
                  </div>
                  <div className="md:hidden">
                    <div>
                        {t('m_provide_your_customers')}
                      </div>
                      <div className='w-[300px]'>
                        {t('m_digital_receipt')}
                      </div>
                  </div>
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('payment')}
                </div>
                <div className='text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className="hidden md:flex flex-col">
                    <div>
                      {t('offer_your_customers')}
                    </div>
                    <div>
                      {t('dan_fleksibiliti')}
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div>
                      {t('m_offer_your_customers')}
                    </div>
                    <div>
                      {t('m_and_ewallets')}
                    </div>
                  </div>
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
                <div className='text-left text-[#000] text-sm md:text-2xl font-bold  leading-tight'>
                  {t('offline')}
                </div>
                <div className='text-left text-[#000] text-sm md:text-xl font-medium leading-tight'>
                  <div className="hidden md:flex flex-col">
                    <div>
                      {t('keep_your_operations')}
                    </div>
                    <div>
                      {t('connection')}
                    </div>
                    <div>
                      {t('is_reestablish')}
                    </div>
                  </div>
                  <div className="md:hidden">
                    <div>
                        {t('m_keep_your_operations')}
                      </div>
                      <div className='w-[320px]'>
                        {t('m_in_the_face')}
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2.2.7 */}
            <div className='h-[1px] bg-[#0046BA] w-full'/>
          </div>
          {/* 2.3 */}
          <div className='w-full flex justify-center'>
            <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full'>
              <div className='flex flex-col gap-[50px] md:gap-[100px] justify-center'>
                {/* 2.3.1 */}
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
                {/* 2.3.2 */}
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
                          type="text"
                          id="sector"
                          className="w-full h-10 md:h-[60px] border border-solid text-black text-sm md:text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-blue-600 p-2 md:p-3"
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
