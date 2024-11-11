import { useTranslation } from 'react-i18next';
import { HomeGroup1F } from './Outline';
import { Group52 } from './Outline';

const Leaveyourcontact = ({ isOpen, onClose }) => {

  const { t } = useTranslation();

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[10px] w-[1000px] max-h-[1000px] overflow-auto relative shadow-lg py-[85px] px-[100px] flex flex-col gap-[100px]">
        <button onClick={onClose} className="absolute top-10 right-10 text-black">
          <Group52 />
        </button>
        <div className='flex flex-col gap-[50px]'>
          <div className='flex justify-center'>
            <HomeGroup1F />
          </div>
          <div className="flex flex-col items-center gap-[30px]">
            <div className="text-black text-5xl font-bold flex gap-[10px]">
              <div>
                {t('f_leave_your_contact')}
              </div>
            </div>
            <div className='text-black text-4xl font-medium w-[691px] flex flex-col leading-tight'>
              <div>
                {t('f_please_be_patient')}
              </div>
              <div>
                {t('f_will_contact')}
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-[50px] md:gap-[100px]'>
          {/* Content */}
          <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
            {/* Full name */}
            <div className='flex flex-col gap-[10px] w-full'>
              <div className="text-[#000] text-base md:text-base font-bold text-left" htmlFor="fullname">
                {t('full_name')}<span className="text-[#F00] text-sm md:text-base font-bold">*</span>
              </div>
              <input
                autoComplete='on'
                type="text"
                id="fullname"
                className="w-full h-10 md:h-[60px] border border-solid text-black text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
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
                className="w-full h-10 md:h-[60px] border border-solid text-black text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
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
                className="w-full h-10 md:h-[60px] border border-solid text-black text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
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
                className="w-full h-10 md:h-[60px] border border-solid text-black text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
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
                className="w-full h-10 md:h-[60px] border border-solid text-black text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
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
                className="w-full h-10 md:h-[60px] border border-solid text-black text-xl bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
              />
            </div>
          </div>
          {/* Submit */}
          <div className="flex items-center justify-center">
            <button className="w-full md:w-auto h-[60px] rounded-[31px] border-2 border-black shadow-submit px-8" type="submit">
              <div className='flex justify-center'>
                <div className="w-[243px] md:w-auto text-black text-center md:text-xl text-base font-semibold leading-tight">
                  {t('f_leave_your_contact_to')}
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Leaveyourcontact;
