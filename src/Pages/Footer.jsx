import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';
import { Message, MessageS, Facebook, FacebookS, Instagram, InstagramS, AppStore, AppStoreS, Playstore, PlaystoreS } from '../Components/Outline.jsx';
import currentTech from '../Asset/Images/logo.png';

const Header = () => {
  return (
    <div className='flex flex-col'>
      <div className='hidden md:block'>
        <div className='bg-[#0046BA] w-full flex justify-center py-3'>
          <div className='w-[1000px] flex justify-end gap-[134px]'>
            <div className='text-white text-xs text-center font-medium leading-tight'>
              Only RM1.99/day for your business to accept cashless payments with E-invoice. Try free demo now!
            </div>
            <div className="flex gap-[10px]">
              <Message />
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
        <div className='bg-[#0060FF] w-full flex justify-center'>
          <div className='w-[1000px] flex justify-between items-center gap-[192px]'>
            <div className="flex gap-[11.35px]">
              <div>
                <img src={currentTech} alt='logo' className="h-4 w-5 flex-shrink-0 flex"/>
              </div>
              <div className="flex text-black text-xs font-medium leading-tight">Powered by Current Tech Industries Sdn Bhd.</div>
            </div>
            <div className='flex gap-[50px]'>
              <div className="flex items-center gap-[35px] text-white"> 
                <div>
                  <Link to="/">Home</Link>
                </div>
                <div>
                  <Link to="/whyeinbill">Why E-inbill</Link>
                </div>
                <div>
                  <Link to="/einvoice">E-invoice</Link>
                </div>
                <div>
                  <Link to="/products">Products</Link>
                </div>
              </div> 
              <div className="flex list-none gap-[10px] py-[18px]">
                <AppStore />
                <Playstore />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='md:hidden bg-[#0060FF] w-full flex justify-center items-center h-[551px]'>
        <div className='flex flex-col gap-[50px]'>
          {/* 1 */}
          <div className="flex flex-col items-center gap-[30px] md:gap-[19px] text-white text-2xl font-semibold leading-tight"> 
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/whyeinbill">Why E-inbill</Link>
            </div>
            <div>
              <Link to="/einvoice">E-invoice</Link>
            </div>
            <div>
              <Link to="/products">Products</Link>
            </div>
          </div> 
          {/* 2 */}
          <div className="flex justify-center gap-[30px] md:hidden">
            <div>
              <AppStoreS />
            </div>
            <div>
              <PlaystoreS />
            </div>
          </div>
          {/* 3 */}
          <div className="flex justify-center gap-[30px] md:hidden">
              <div>
                <MessageS />
              </div>
              <div>
                <FacebookS />
              </div>
              <div>
                <InstagramS />
              </div>
          </div>
          {/* 4 */}
          <div className="flex justify-center gap-[11.35px]">
            <div>
              <img src={currentTech} alt='logo' className="h-4 w-5 flex-shrink-0 flex"/>
            </div>
            <div className="flex text-black text-xs font-medium leading-tight">Powered by Current Tech Industries Sdn Bhd.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
