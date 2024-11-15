import { useTranslation } from 'react-i18next';
import { Button } from "./ui/button"
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"
import { HomeGroup1 } from './Outline';

const Leaveyourcontact = () => {

  const { t } = useTranslation();

  return (
    <div className='absolute bottom-10 right-10 md:flex flex-col items-center gap-[10px] hidden'>
      <DrawerRoot key={"md"} size={"md"}>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm" className=' min-w-24 min-h-24 flex flex-col gap-[10px]' > 

          <HomeGroup1 className="w-[50px] h-[45px]" />
            <div className="text-[#0046BA] text-center text-sm font-bold leading-normal">
              <div className='leading-[18px]'>
                {t('leave_your')}
              </div>
              <div className='leading-[18px]'>
                {t('contact')}
              </div>
            </div>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div className='flex items-center gap-4 '>
                <div>
                  <HomeGroup1 className="w-[45px] h-[40px]" />
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='text-xl font-bold leading-tight'>
                    {t('leave_your')} {t('contact')}
                  </div>
                  <div className='leading-tight'>
                    {t('f_please_be_patient')}
                  </div>
                </div>
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <div className='flex flex-col gap-5'>
              <div className='space-y-1.5'>
                <div className="text-[#000] text-sm font-bold text-left" htmlFor="fullname">
                  {t('full_name')}<span className="text-[#F00] text-sm font-medium">*</span>
                </div>
                <input
                  autoComplete='on'
                  type="text"
                  id="fullname"
                  className="w-full border border-solid text-black text-sm bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
                />
              </div>
              <div className='space-y-1.5'>
                <div className="text-[#000] text-sm font-bold text-left" htmlFor="fullname">
                  {t('company_name')}<span className="text-[#F00] text-sm font-medium">*</span>
                </div>
                <input
                  autoComplete='on'
                  type="text"
                  id="fullname"
                  className="w-full border border-solid text-black text-sm bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
                />
              </div>
              <div className='space-y-1.5'>
                <div className="text-[#000] text-sm font-bold text-left" htmlFor="fullname">
                  {t('contact_number')}<span className="text-[#F00] text-sm font-medium">*</span>
                </div>
                <input
                  autoComplete='on'
                  type="text"
                  id="fullname"
                  className="w-full border border-solid text-black text-sm bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
                />
              </div>
              <div className='space-y-1.5'>
                <div className="text-[#000] text-sm font-bold text-left" htmlFor="fullname">
                  {t('email_address')}<span className="text-[#F00] text-sm font-medium">*</span>
                </div>
                <input
                  autoComplete='on'
                  type="text"
                  id="fullname"
                  className="w-full border border-solid text-black text-sm bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
                />
              </div>
              <div className='space-y-1.5'>
                <div className="text-[#000] text-sm font-bold text-left" htmlFor="fullname">
                  {t('your_state')}<span className="text-[#F00] text-sm font-medium">*</span>
                </div>
                <input
                  autoComplete='on'
                  type="text"
                  id="fullname"
                  className="w-full border border-solid text-black text-sm bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
                />
              </div>
              <div className='space-y-1.5'>
                <div className="text-[#000] text-sm font-bold text-left" htmlFor="fullname">
                  {t('your_business_sector')}<span className="text-[#F00] text-sm font-medium">*</span>
                </div>
                <input
                  autoComplete='on'
                  type="text"
                  id="fullname"
                  className="w-full border border-solid text-black text-sm bg-[#D9E3F5] border-[#0060FF] rounded-[5px] md:rounded-[10px] focus:outline-1 focus:outline-[#0046BA] p-3"
                />
              </div>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button className='w-full bg-[#0046BA] text-white rounded-lg' >
              {t('f_leave_your_contact_to')}
            </Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </div>
  );
};

export default Leaveyourcontact;
