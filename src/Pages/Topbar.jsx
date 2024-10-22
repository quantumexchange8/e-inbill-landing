import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';
import { Group, Whatsapp, Facebook, Instagram, A, Playstore, Translate } from '../Components/Outline.jsx';

const Header = () => {
  return (
      <div className='fixed w-full z-30 flex flex-col'>
        {/* 1 */}
        <div className='bg-[#0046BA] w-full flex justify-center py-3'>
          <div className='w-[1000px] flex justify-end gap-[134px]'>
            <div className='text-white text-xs text-center font-medium leading-tight'>
              Only RM1.99/day for your business to accept cashless payments with E-invoice. Try free demo now!
            </div>
            <div className="flex gap-[10px]">
              <Whatsapp />
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className='bg-[#0060FF] w-full flex justify-center'>
          <div className='max-w-[1000px] flex justify-between items-center w-full'>
            {/* 2.1 */}
            <div className="flex py-[10px] ">
              <Group />
            </div>
            {/* 2.2 */}
            <div className="flex items-center gap-[35px] text-white">
              <div className='mx-[7px]'>
                <Link to="/" className="rounded-md focus:ring-1 focus:ring-white px-[7px]">Home</Link>
              </div>
              <div>
                <Link to="/whyeinbill" className="rounded-md focus:ring-1 focus:ring-white px-[7px]">Why E-inbill</Link>
              </div>
              <div>
                <Link to="/einvoice" className="rounded-md focus:ring-1 focus:ring-white px-[7px]">E-invoice</Link>
              </div>
              <div>
                <Link to="/products" className="rounded-md focus:ring-1 focus:ring-white px-[7px]">Products</Link>
              </div>
            </div>
            {/* 2.3 */}
            <div className="flex list-none gap-5 py-[10px]">
              <A />
              <Playstore />
              <Translate />
            </div>
          </div>
        </div>

      </div>
  );
};

export default Header;
