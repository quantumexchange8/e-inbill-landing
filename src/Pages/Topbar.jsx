import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Header.css';
import { Group, GroupS, GroupWorld, GroupLines, Message, MessageL, Facebook, FacebookL, Instagram, InstagramL, AppStore, Playstore, Translate,Triangle } from '../Components/Outline.jsx';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Header = () => {

  const { t, i18n } = useTranslation();

  const languages = ['en', 'bm', 'zh'];
  const currentLangIndex = languages.indexOf(i18n.language);
  const handleCycleLanguage = () => {
    const nextLangIndex = (currentLangIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextLangIndex]);
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
      <div className='fixed w-full z-30 flex flex-col'>
        {/* 1 */}
        <div className='hidden bg-[#0046BA] w-full md:flex justify-center py-3'>
          <div className='relative w-[1000px] flex justify-end items-center'>
            <div className='w-full absolute left-1/2 transform -translate-x-1/2 text-white text-xs text-center font-medium leading-tight'>
              {t('only_RM1.99')}
            </div>
            <div className="flex gap-[10px] z-50">
              <button  onClick={(e) => e.preventDefault()}>
                <Message />
              </button>
              <button  onClick={(e) => e.preventDefault()}>
                <Facebook />
              </button>
              <button onClick={(e) => e.preventDefault()}>
                <Instagram />
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className='bg-[#0046BA] md:bg-[#0060FF] w-full flex justify-center px-[30px] md:px-0'>
          <div className='max-w-[1000px] flex justify-between items-center w-full'>
            {/* 2.1 */}
            <button>
              <div className="hidden md:flex items-center">
                <Group />
              </div>
              <div className="md:hidden">
                <GroupS />
              </div>
            </button>
            {/* 2.2 */}
            <div className="hidden md:flex items-center gap-[28px] text-white">
              <div>
                <NavLink to="/" className={({ isActive }) => `px-[7px] py-[2px] ${isActive ? 'rounded-md border border-white' : ''}`}>
                  {t('home')}
                </NavLink>
              </div>
              <div>
                <NavLink to="/whyeinbill" className={({ isActive }) => `px-[7px] py-[2px] ${isActive ? 'rounded-md border border-white' : ''}`}>
                  {t('why_einbill')}
                </NavLink>
              </div>
              <div>
                <NavLink to="/einvoice" className={({ isActive }) => `px-[7px] py-[2px] ${isActive ? 'rounded-md border border-white' : ''}`}>
                  {t('e_invoice')}
                </NavLink>
              </div>
              <div>
                <NavLink to="/products" className={({ isActive }) => `px-[7px] py-[2px] ${isActive ? 'rounded-md border border-white' : ''}`}>
                  {t('products')}
                </NavLink>
              </div>
            </div>
            {/* 2.3 */}
            <div className="hidden md:flex gap-[10px]">
              <button onClick={(e) => e.preventDefault()}>
                <AppStore />
              </button>
              <button onClick={(e) => e.preventDefault()}>
                <Playstore />
              </button>
              <button onClick={handleCycleLanguage}>
                <Translate />
              </button>
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
                      <div className="flex justify-center gap-[25px]">
                        <button   onClick={(e) => e.preventDefault()}>
                          <MessageL />
                        </button>
                        <button   onClick={(e) => e.preventDefault()}>
                          <FacebookL />
                        </button>
                        <button   onClick={(e) => e.preventDefault()}>
                          <InstagramL />
                        </button>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <button onClick={() => handleChangeLanguage("en")}>
                        {t('english')}
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button onClick={() => handleChangeLanguage("bm")}>
                        {t('malay')}
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button onClick={() => handleChangeLanguage("zh")}>
                        {t('chinese')}
                      </button>
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
                <MenuItems className="absolute right-0 z-10 mt-6 mr-3 w-[180px] h-[304px] rounded-tr-sm rounded-br-[10px] rounded-s-[10px] bg-[#0060FF] py-[30px] px-2">
                  <div className='absolute top-[-11px] right-0'>
                    <Triangle />
                  </div>
                  <div className="flex flex-col gap-[30px] text-white text-center text-xl font-semibold leading-tight">
                    <MenuItem>
                      <div className="flex justify-center gap-[25px]">
                        <button   onClick={(e) => e.preventDefault()}>
                          <MessageL />
                        </button>
                        <button   onClick={(e) => e.preventDefault()}>
                          <FacebookL />
                        </button>
                        <button   onClick={(e) => e.preventDefault()}>
                          <InstagramL />
                        </button>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/">{t('home')}</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/whyeinbill">{t('why_einbill')}</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/einvoice">{t('e_invoice')}</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/products">{t('products')}</Link>
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

