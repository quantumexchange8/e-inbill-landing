import React, { useState } from 'react';
import { HomeGroup1, HomeGroup1F } from '../Components/Outline';
import { useTranslation } from 'react-i18next';
import ScrollToTopButton from '../Components/ScrollToTopButton';

const Leaveyourcontact = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className='w-full flex justify-center px-[30px] md:px-0'>
        <div className='flex flex-col gap-[100px] justify-center max-w-[1000px] w-full'>
          <div className='flex flex-col gap-[50px] md:gap-[100px] justify-center'>
            {/* 1 */}
            <div className="flex justify-center">
                <div>
                    &time;
                </div>
                <div>
                    <HomeGroup1 />
                </div>
                <div className='w-[280px] md:w-[763px] text-center text-[#0060FF] text-base md:text-[32px] font-semibold leading-tight'>
                    Leave your contact
                </div>
                <div>
                    Please be patient, our service personnel will contact you shortly.
                </div>
            </div>
            {/* 2 */}
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
                  <div className='flex flex-col gap-[10px] w-full'> 
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
  );
};

export default Leaveyourcontact;
