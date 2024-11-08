import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Header.css';
import { Message, MessageS, Facebook, FacebookS, Instagram, InstagramS, AppStore, AppStoreS, Playstore, PlaystoreS } from '../Components/Outline.jsx';
import currentTech from '../Asset/Images/logo.png';

const Header = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className='flex flex-col'>
      {/* Web */}
      <div className='hidden md:block'>
        <div className='bg-[#0046BA] w-full flex justify-center py-3'>
          <div className='relative w-[1000px] flex justify-end items-center'>
            <div className='w-full absolute left-1/2 transform -translate-x-1/2 text-white text-xs text-center font-medium leading-tight'>
              {t('only_RM1.99')}
            </div>
            <div className="flex gap-[10px] z-50">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Message />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Facebook />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Instagram />
              </a>
            </div>
          </div>

        </div>
        <div className='bg-[#0060FF] w-full flex justify-center'>
          <div className='w-[1000px] flex justify-between items-center'>
            <div className="flex gap-[11.35px]">
              <div>
                <img src={currentTech} alt='logo' className="h-4 w-5 flex-shrink-0 flex"/>
              </div>
              <div className="flex text-black text-xs font-medium leading-tight">{t('powered_by')}</div>
            </div>
            <div className='flex gap-[50px]'>
              <div className="flex items-center gap-[35px] text-white"> 
                <div>
                  <Link to="/">{t('home')}</Link>
                </div>
                <div>
                  <Link to="/whyeinbill">{t('why_einbill')}</Link>
                </div>
                <div>
                  <Link to="/einvoice">{t('e_invoice')}</Link>
                </div>
                <div>
                  <Link to="/products">{t('products')}</Link>
                </div>
              </div> 
              <div className="flex list-none gap-[10px] py-[18px]">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <AppStore />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <Playstore />
                </a>
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
              <Link to="/">{t('home')}</Link>
            </div>
            <div>
              <Link to="/whyeinbill">{t('why_einbill')}</Link>
            </div>
            <div>
              <Link to="/einvoice">{t('e_invoice')}</Link>
            </div>
            <div>
              <Link to="/products">{t('products')}</Link>
            </div>
          </div> 
          {/* 2 */}
          <div className="flex justify-center gap-[30px] md:hidden">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <AppStoreS />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <PlaystoreS />
            </a>
          </div>
          {/* 3 */}
          <div className="flex justify-center gap-[30px] md:hidden">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <MessageS />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <FacebookS />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <InstagramS />
            </a>
          </div>
          {/* 4 */}
          <div className="flex justify-center gap-[11.35px]">
            <div>
              <img src={currentTech} alt='logo' className="h-4 w-5 flex-shrink-0 flex"/>
            </div>
            <div className="flex text-black text-xs font-medium leading-tight">{t('powered_by')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
