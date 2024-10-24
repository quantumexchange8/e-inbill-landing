import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header.css';
import { Group, Message, Facebook, Instagram, AppStore, Playstore, Translate } from '../Components/Outline.jsx';

const Header = () => {
  return (
      <div className='fixed w-full z-30 flex flex-col'>
        {/* 1 */}
        <div className='bg-[#0046BA] w-full flex justify-center py-3'>
          <div className='w-[1000px] flex justify-end gap-[175px]'>
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
        {/* 2 */}
        <div className='bg-[#0060FF] w-full flex justify-center'>
          <div className='max-w-[1000px] flex justify-between items-center w-full'>
            {/* 2.1 */}
            <div className="flex">
              <Group />
            </div>
            {/* 2.2 */}
            <div className="flex items-center gap-[35px] text-white">
              <div>
                <NavLink to="/" className={({ isActive }) => `px-[7px] py-[2px] ${isActive ? 'rounded-md border border-white' : ''}`}>
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink to="/whyeinbill" className={({ isActive }) => `px-[7px] py-[2px] ${isActive ? 'rounded-md border border-white' : ''}`}>
                  Why E-inbill
                </NavLink>
              </div>
              <div>
                <NavLink to="/einvoice" className={({ isActive }) => `px-[7px] py-[2px] ${isActive ? 'rounded-md border border-white' : ''}`}>
                  E-invoice
                </NavLink>
              </div>
              <div>
                <NavLink to="/products" className={({ isActive }) => `px-[7px] py-[2px] ${isActive ? 'rounded-md border border-white' : ''}`}>
                  Products
                </NavLink>
              </div>
            </div>
            {/* 2.3 */}
            <div className="flex gap-[10px]">
              <AppStore />
              <Playstore />
              <Translate />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
