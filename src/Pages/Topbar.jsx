import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Header.css';
import { Group, GroupS, GroupWorld, GroupLines, Message, MessageL, Facebook, FacebookL, Instagram, InstagramL, AppStore, Playstore, Translate,Triangle } from '../Components/Outline.jsx';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Header = () => {

  return (
      <div className='fixed w-full z-30 flex flex-col'>
        {/* 1 */}
        <div className='hidden bg-[#0046BA] w-full md:flex justify-center py-3'>
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
        <div className='bg-[#0046BA] md:bg-[#0060FF] w-full flex justify-center'>
          <div className='max-w-[1000px] flex justify-between items-center w-full'>
            {/* 2.1 */}
            <div className="hidden md:flex items-center">
              <Group />
            </div>
            <div className="md:hidden">
              <GroupS />
            </div>
            {/* 2.2 */}
            <div className="hidden md:flex items-center gap-[35px] text-white">
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
            <div className="hidden md:flex gap-[10px]">
              <AppStore />
              <Playstore />
              <Translate />
            </div>
            {/* 2.4 */}
            <div className='md:hidden flex gap-5'>
              {/* Languages */}
              <Menu as='div' className="md:hidden relative text-center">
                <div className='flex justify-center'>
                  <MenuButton>
                    <GroupWorld />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-6 mr-3 w-[180px] h-[248px] rounded-tr-sm rounded-br-[10px] rounded-s-[10px] bg-[#0060FF] py-[30px] px-7">
                  <div className='absolute top-[-11px] right-0'>
                    <Triangle />
                  </div>
                  <div className="flex flex-col gap-[30px] text-white text-center text-xl font-semibold leading-tight">
                    <MenuItem>
                      <a className="flex justify-center gap-[25px]">
                        <MessageL />
                        <FacebookL />
                        <InstagramL />
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="">
                        English
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="">
                        Malay
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="">
                        简体中文
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
              {/* Navigation */}
              <Menu as='div' className="md:hidden relative text-center">
                <div className='flex justify-center'>
                  <MenuButton>
                    <GroupLines />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-6 mr-3 w-[180px] h-[304px] rounded-tr-sm rounded-br-[10px] rounded-s-[10px] bg-[#0060FF] py-[30px] px-7">
                  <div className='absolute top-[-11px] right-0'>
                    <Triangle />
                  </div>
                  <div className="flex flex-col gap-[30px] text-white text-center text-xl font-semibold leading-tight">
                    <MenuItem>
                      <a className="flex justify-center gap-[25px]">
                        <MessageL />
                        <FacebookL />
                        <InstagramL />
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/whyeinbill">Why E-inbill</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/einvoice">E-invoice</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/products">Products</Link>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
            
          </div>
        </div>
      </div>
  );
};

export default Header;

