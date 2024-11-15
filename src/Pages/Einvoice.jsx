import React from 'react';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import Leaveyourcontact from '../Components/Leaveyourcontact.jsx';
import Video1 from '../Asset/Videos/eInvoiceVideo1.mp4';
import { useTranslation } from 'react-i18next';
import { EGroup, EGroupS, ArrowFlipForward, ArrowFlipForwardS } from '../Components/Outline.jsx';
import LHDN from '../Asset/Images/LHDN_logo1.png';

const Einvoice = () => {

  const { t } = useTranslation();

  return (
    <div className='pt-[54px] md:pt-[113px] md:pb-[100px] pb-[75px] flex flex-col gap-[50px] md:gap-[100px]'>
      {/* 1 */}
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full rounded-br-[150px] md:rounded-br-[500px]'>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-[1000px] flex justify-center">
            <div className="w-[239px] md:w-[638px] flex justify-center text-white/80 text-center text-2xl md:text-[64px] font-bold leading-tight">
              {t('what_is_an_e_invoice')}
            </div>
          </div>
          <Leaveyourcontact />
        </div>
      </div>
      {/* 2 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-center max-w-[1000px] w-full px-[29px] md:px-0'>
          {/* 2.1 */}
          <div className='flex flex-col items-center md:items-start gap-[20px] max-w-[1000px] w-full'>
            <div className='flex flex-col gap-[10px] text-left text-[#0046BA] text-xl md:text-5xl font-bold leading-tight'>
              <div className='hidden md:flex flex-col leading-tight text-left'>
                <div>
                  {t('simplify_your_malaysian')}
                </div>
                <div> 
                  {t('electronic_invoicing')}
                </div>
                <div> 
                  {t('e_inbill')}
                </div>
              </div>
              <div className="w-[333px] md:hidden">
                <div className='w-[310px]'>
                  {t('m_simplify_your_malaysian')}
                </div>
                <div> 
                  {t('m_invoicing_process')}
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:flex-col text-left text-[#0060FF] text-sm md:text-2xl not-italic font-medium leading-tight">
              <div>
                {t('the_malaysian_inland_revenue_board')}
              </div>
              <div>
                {t('for_tax_purpose')}
              </div>
              <div className='w-[950px]'>
                {t('by_july_1')}
              </div>
            </div>
            <div className='md:hidden flex flex-col md:flex-row text-left text-[#0060FF] text-sm md:text-2xl not-italic font-medium leading-tight w-[333px]'>
              <div>
                {t('m_the_malaysian_inland_revenue_board')}
              </div>
              <div className='w-[323px]'>
                {t('m_by_august_1')}
              </div>
            </div>
          </div>
          {/* 2.2 */}
          <div className='py-[100px] md:py-[200px]'>
            {/* Web */}
            <div className="hidden md:flex items-center gap-[200px]">
              <div className="bg-blue-800 flex flex-col items-center rounded-[30px] w-[200px] h-[200px] justify-center">
                <div className="flex flex-col gap-[16.31px]">
                  <EGroup />
                </div>
              </div>
              <div className='flex'>
                <img src={LHDN} alt="flexLHDN Logo" className="w-[256px] h-[200px] flex-shrink-0" />
              </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden flex justify-center gap-[50px] w-[333px] ">
              <div className="bg-blue-800 flex  rounded-[30px] w-[100px] h-[100px]">
                <div className="flex flex-col gap-[8.15px]">
                  <EGroupS />
                </div>
              </div>
              <div>
                <img src={LHDN} alt="LHDN Logo" className="w-[128px] h-[100px] flex-shrink-0" />
              </div>
            </div>
          </div>
          {/* 2.3 */}
          <div className='flex flex-col items-center md:items-start text-left w-full gap-[75px] md:gap-[100px]'>
            {/* Start Implementing E-Invoicing */}
            <div className='flex flex-col items-center gap-[50px]'>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                  <div className='hidden md:flex'>
                    <div>
                      {t('start_implementing_e_invoicing')}
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div>
                      {t('m_start_implementing_e_invoicing')}
                    </div>
                    <div>
                      {t('m_for_your_business')}
                    </div>
                  </div>
                </div>
                <div className='w-[333px] md:w-[970px] text-[#0060FF] text-sm md:text-xl font-medium leading-tight'>
                  {t('the_implementating_of_e_invoice')}
                </div>
              </div>
              <div>
                <div className='text-[#0060FF] text-sm md:text-xl leading-tight flex flex-col gap-[20px] w-[333px] md:w-full'>
                  <div className='pl-6 md:pl-7 flex flex-col gap-5'>
                    <ul>
                      <li className='list-disc list-outside font-bold md:font-semibold'>
                        <div className='hidden md:flex'>
                          {t('for_taxpayers_with_audited')}
                        </div>
                        <div className='md:hidden'>
                          <div>
                            {t('m_for_taxpayers_with_audited')}
                          </div>
                          <div>
                            {t('financail_statement')}
                          </div>
                        </div>
                      </li>
                      <div className='md:w-[950px] font-medium'>
                        {t('the_annual_turnover_or_revenue')}
                      </div>
                    </ul>
                    <ul>
                      <li className='list-disc list-outside font-bold md:font-semibold'>
                        <div className='hidden md:flex'>
                          {t('for_taxpayers_without_audited')}
                        </div>
                        <div className='md:hidden'>
                          <div>
                            {t('m_for_taxpayers_without_audited')}
                          </div>
                          <div>
                            {t('financail_statement')}
                          </div>
                        </div>
                      </li>
                      <div className='font-medium'>
                        {t('the_annual_revenue')}
                      </div>
                    </ul>
                  </div>
                  <div className='md:w-[970px] font-medium'>
                    <div className="hidden md:flex">
                      {t('in_the_event_of')}
                    </div>
                    <div className="md:hidden">
                      <div>
                        {t('m_in_the_event_of')}
                      </div>
                      <div className='w-[320px]'>
                        {t('m_year_end')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* E-Invoice */}
            <div className='flex flex-col gap-[10px] md:gap-5'>
              <div className='text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                {t('e_invoice_implementing_timeline')}
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl leading-tight md:leading-[30px] flex flex-col gap-[15px] md:gap-[30px] w-[333px] md:w-full'>
                <ul className='list-disc flex flex-col pl-6 md:pl-6'>
                  <li className='font-bold md:font-semibold'>
                    {t('target_taxpayers')}
                  </li>
                  <div className='flex gap-1 md:gap-2'>
                    <div className='transform scale-y-[-1] flex items-end md:items-center'>
                      <div className='hidden md:block'>
                        <ArrowFlipForward />
                      </div>
                      <div className='md:hidden'>
                        <ArrowFlipForwardS />
                      </div>
                    </div>
                    <div className='font-medium'>
                      {t('taxpayers_with_100')}
                    </div>
                  </div>
                  <li className='font-bold md:font-semibold'>
                    {t('implementation_date')}
                  </li>
                  <div className='flex gap-1 md:gap-2'>
                    <div className='transform scale-y-[-1] flex items-end md:items-center'>
                      <div className='hidden md:block'>
                        <ArrowFlipForward />
                      </div>
                      <div className='md:hidden'>
                        <ArrowFlipForwardS />
                      </div>
                    </div>
                    <div className='font-medium'>
                      {t('1_august_2024')}
                    </div>
                  </div>
                </ul>
                <ul className='list-disc flex flex-col pl-6'>
                  <li className='font-bold md:font-semibold'>
                    {t('target_taxpayers')}
                  </li>
                  <div className='flex gap-1 md:gap-2'>
                    <div className='transform scale-y-[-1] flex items-end'>
                      <div className='hidden md:block'>
                        <ArrowFlipForward />
                      </div>
                      <div className='md:hidden'>
                        <ArrowFlipForwardS />
                      </div>
                    </div>
                    <div className='md:w-full font-medium'>
                      <div className='hidden md:flex'>
                        {t('taxpayers_with_25_100')}
                      </div>
                      <div className="md:hidden">
                        <div>
                          {t('m_taxpayers_with_25_100')}
                        </div>
                        <div>
                          {t('m_up_to_100')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <li className='font-bold md:font-semibold'>
                    {t('implementation_date')}
                  </li>
                  <div className='flex gap-1 md:gap-2'>
                    <div className='transform scale-y-[-1] flex items-end md:items-center'>
                      <div className='hidden md:block'>
                        <ArrowFlipForward />
                      </div>
                      <div className='md:hidden'>
                        <ArrowFlipForwardS />
                      </div>
                    </div>
                    <div className='font-medium'>
                      {t('1_january_2025')}
                    </div>
                  </div>
                </ul>
                <ul className='list-disc flex flex-col pl-6'>
                  <li className='font-bold md:font-semibold'>
                    {t('target_taxpayers')}
                  </li>
                  <div className='flex gap-1 md:gap-2'>
                    <div className='transform scale-y-[-1] flex items-end md:items-center'>
                      <div className='hidden md:block'>
                        <ArrowFlipForward />
                      </div>
                      <div className='md:hidden'>
                        <ArrowFlipForwardS />
                      </div>
                    </div>
                    <div className='font-medium'>
                      {t('taxpayers_with_25')}
                    </div>
                  </div>
                  <li className='font-bold md:font-semibold'>
                    {t('implementation_date')}
                  </li>
                  <div className='flex gap-1 md:gap-2'>
                    <div className='transform scale-y-[-1] flex items-end md:items-center'>
                      <div className='hidden md:block'>
                        <ArrowFlipForward />
                      </div>
                      <div className='md:hidden'>
                        <ArrowFlipForwardS />
                      </div>
                    </div>
                    <div className='font-medium'>
                      {t('1_july_2025')}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            {/* IRBM MyInvois System */}
            <div className='flex flex-col gap-[10px] md:gap-5'>
              <div className='w-[160px] md:w-[266px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                {t('irbm_myinvoice_system')}
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight'>
                <ul className='list-disc flex flex-col gap-4 pl-5 md:pl-6'>
                  <li className='md:w-[961px]'>
                   <div className='hidden md:block '>
                    {t('to_support_the_growth')}
                   </div>
                   <div className='md:hidden w-[315px]'>
                    <div>
                      {t('m_to_support_the_growth')}
                    </div> 
                    <div className='w-[315px]'>
                      {t('e_invoice_in_stages')}
                    </div>
                   </div>
                  </li>
                  <li className='w-[315px] md:w-[950px]'>
                    {t('the_e_invoice')}
                  </li>
                </ul>
              </div>
            </div>
            {/* Benefits of Adopting e-Invoice */}
            <div className='flex flex-col gap-[10px] md:gap-5'>
              <div className='text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                {t('benefits_of_adopting_e_invoice')}
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight flex flex-col gap-5 w-[333px] md:w-full'>
                <div>
                  {t('the_implementation_of_e_Invoice')}
                </div>
                <div>
                  {t('overall_benefits')}
                </div>
                <div className='pl-4 md:pl-7'>
                  <ul className='list-decimal flex flex-col gap-5'>
                    <li className='w-[312px] md:w-[960px]'>
                      {t('unified_invoicing_process')}
                    </li>
                    <li className='md:w-[900px]'>
                      {t('facilitate_tax_return_filing')}
                    </li>
                    <li className='w-[313px] md:w-[965px]'>
                      {t('for_larger_businesses')}
                    </li>
                    <li className='w-[312px] md:w-[965px]'>
                      <div className='hidden md:flex'>
                        <div>
                          {t('for_micro')}
                        </div>
                      </div>
                      <div className="md:hidden">
                        <div>
                          {t('m_for_micro')}
                        </div>
                        <div>
                          {t('m_over_a_longer_period')}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* LHDN E-Invoice */}
            <div className='flex flex-col gap-5 w-[333px] md:w-full'>
              <div className='hidden md:flex w-[313px] md:w-[732px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                {t('lhdn_e_invoice_what_are')}
              </div>
              <div className='md:hidden w-[313px] md:w-[732px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                <div>
                  {t('lhdn_e_invoice')}
                </div>
                <div>
                  {t('what_are_the_penalties')}
                </div>
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight flex flex-col gap-[30px]'>
                <div className='hidden md:block w-[333px] md:w-[981px]'>
                  <div>
                    {t('adhering_to_the_lhdn_title')}
                  </div>
                  <div className='w-[850px]'>
                    {t('and_non_compliance')}
                  </div>
                </div>
                <div className='md:hidden w-[333px]'>
                  <div>
                    {t('adhering_to_the_lhdn')}
                  </div>
                  <div className='w-[335px]'>
                    {t('consequences_for_your_business')}
                  </div>
                </div>
                <div className='pl-5 md:pl-8'>
                  <ul className='flex flex-col gap-4 list-disc w-[315px] md:w-[950px]'>
                    <li className='w-[310px] md:w-full'>
                      {t('penalties')}
                    </li>
                    <li className='w-[312px] md:w-full'>
                      {t('legal_consequences')}
                    </li>
                    <ul className='flex flex-col md:flex-row gap-1 list-disc'>
                      <li>
                        {t('for_more_info')}
                      </li> 
                      <button href="#" onClick={(e) => e.preventDefault() } className="underline text-blue-600 text-left">
                        {t('lhdn_offences')}
                      </button>
                    </ul>
                    <ul className='flex flex-col md:flex-row gap-1 list-disc'>
                      <li>
                        {t('customer_feedback_form')}
                      </li>
                      <button href="#" onClick={(e) => e.preventDefault() } className="underline text-blue-600 text-left">
                        {t('following_link')}
                      </button>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
            {/* Who, Entities Required, Entities exempt */}
            <div className="flex flex-col gap-[75px] md:gap-[50px]">
              {/* Who */}
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='w-[293px] md:w-full text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                  <div className='hidden md:flex '>
                    {t('who_needs_to_comply')}
                  </div>
                  <div className='md:hidden'>
                    <div>
                      {t('m_who_needs_to_comply')}
                    </div>
                    <div>
                      {t('m_in_malaysia')}
                    </div>
                  </div>
                </div>
                <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight flex flex-col gap-[30px]'>
                  <div className='hidden md:flex flex-col'>
                    <div>
                      {t('lhdn_has_released_guidelines')}
                    </div>
                    <div>
                      {t('adhere_to')}
                    </div>
                  </div>
                  <div className='md:hidden w-[333px]'>
                    {t('m_lhdn_has_released_guidelines')}
                  </div>
                </div>
              </div>
              {/* Entities Required */}
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='w-[304px] md:w-[658px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                  <div className="hidden md:flex">
                    {t('entities_required')}
                  </div>
                  <div className="md:hidden">
                    <div>
                      {t('m_entities_required')}
                    </div>
                    <div>
                      {t('m_malaysia')}
                    </div>
                  </div>
                </div>
                <div className='w-[333px] md:w-[920px] text-[#0060FF] text-sm md:text-xl font-medium leading-tight md:leading-[30px]'>
                  <ul>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('associations')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('body_of_persons')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('branches')}
                        </div>
                      </div>  
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('business_trusts')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('co_operative_societies')}
                        </div>
                      </div>  
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('corporations')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('limited_liability')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('partnerships')}
                        </div>
                      </div >
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('property_trust_funds')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('property_trusts')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('real_estate')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('representative_offices')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('trust_bodies')}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex gap-1 md:gap-2'>
                        <div className='transform scale-y-[-1] flex items-center'>
                          <div className='hidden md:block'>
                            <ArrowFlipForward />
                          </div>
                          <div className='md:hidden'>
                            <ArrowFlipForwardS />
                          </div>
                        </div>
                        <div>
                          {t('unit_trusts')}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Entities exempt */}
              <div className="flex flex-col gap-[10px] md:gap-5">
                <div className="text-[#0046BA] text-sm md:text-2xl font-bold leading-tight">
                  {t('entities_exempt')}
                </div>
                <div className='w-[333px] md:w-[940px] text-[#0060FF] text-sm md:text-xl font-medium leading-tight md:leading-[30px]'>
                  <ul>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('ruler_and_ruling_chief')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('former_ruler')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-end md:items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('consort_of_a_ruler')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-end md:items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('consort_of_a_former')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('state_government')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('government_authority')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('local_authority')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('statutory_authority')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('property_trust')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-end'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('facilities_provided')}
                      </div>
                    </li>
                    <li className='flex gap-1 md:gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        {t('individual_who')}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Type of e-invoices */}
            <div className="flex flex-col gap-[30px] md:gap-5">
              <div className="flex flex-col gap-[10px] md:gap-5">
                <div className='text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                  {t('type_of_e_invoice')}
                </div>
                <div className='w-[333px] md:w-full text-[#0060FF] text-sm md:text-xl font-medium leading-tight md:leading-[30px]'>
                  {t('below_documents')}
                </div>
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight md:leading-[30px] w-[333px] md:w-[990px]'>
                <ul className='list-disc pl-[18px] md:pl-8 flex flex-col gap-4'>
                  <li>
                    <b>{t('invoices')}</b> {t('it_is_generally_used')}
                  </li>
                  <li className='md:w-[955px]'>
                    <b>{t('credit_notes')}</b> {t('a_credit_note_is')}
                  </li>
                  <li>
                    <b>{t('debit_notes')}</b> {t('in_constrast_to')}
                  </li>
                  <li>
                    <b>{t('refund_notes')}</b> {t('a_refund_notes_is')}
                  </li>
                </ul>
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

export default Einvoice;
