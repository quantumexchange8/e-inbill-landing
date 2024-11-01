import React from 'react';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import Video1 from '../Asset/Videos/eInvoiceVideo1.mp4';
import { HomeGroup1, EGroup, EGroupS, ArrowFlipForward, ArrowFlipForwardS } from '../Components/Outline.jsx';
import LHDN from '../Asset/Images/LHDN_logo1.png';

const Einvoice = () => {
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
              What is an E-invoice
            </div>
          </div>
          <div className="absolute bottom-10 right-10 md:flex flex-col items-center hidden">
            <HomeGroup1 className="w-[50px] h-[45px]" />
            <div className="text-[#0046BA] text-center text-sm font-bold leading-normal w-[120px] ">
              Leave your Contact
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col justify-center max-w-[1000px] w-full px-[30px] md:px-0'>
          {/* 2.1 */}
          <div className='flex flex-col gap-[20px] justify-center max-w-[1000px] w-full'>
            <div className='flex flex-col w-[295px] md:w-[1000px] justify-center text-left text-[#0046BA] text-xl md:text-5xl not-italic font-bold leading-tight'>
              Simplify your Malaysian business's electronic invoicing process with E-Inbill.
            </div>
            <div className="hidden md:flex w-[955px] text-left text-[#0060FF] text-sm md:text-2xl not-italic font-medium leading-tight">
              The Malaysian Inland Revenue Board (LHDN) mandates the use of electronic invoicing for tax purposes. 
              E-Inbill is certified to meet these requirements, offering a seamless solution for your business needs. 
              The implementation of electronic invoicing is being phased in, with the initial group of businesses required to comply by August 1, 2024. 
              By July 1, 2025, all Malaysian businesses, regardless of size, must transition to electronic invoicing. 
              Transition to E-Inbill now to ensure your business remains compliant with LHDN regulations and stays ahead in the digital transformation journey.
            </div>
            <div className='md:hidden flex flex-col md:flex-row text-left text-[#0060FF] text-sm md:text-2xl not-italic font-medium leading-tight'>
              <div className='w-[317px]'>
                The Malaysian Inland Revenue Board (LHDN) mandates the use of electronic invoicing for tax purposes. 
                E-Inbill is certified to meet these requirements, offering a seamless solution for your business needs. 
                The implementation of electronic invoicing is being phased in, with the initial group of businesses required to comply
              </div>
              <div className='w-[325px]'>
                by August 1, 2024. 
                By July 1, 2025, all Malaysian businesses, regardless of size, must transition to electronic invoicing. 
                Transition to E-Inbill now to ensure your business remains compliant with LHDN regulations and stays ahead in the digital transformation journey.
              </div>
            </div>
          </div>
          {/* 2.2 */}
          <div className='py-[100px] md:py-[200px] flex justify-center'>
            {/* Medium and above */}
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
            {/* Small */}
            <div className="md:hidden flex items-center gap-[50px]">
              <div className="bg-blue-800 flex flex-col items-center rounded-[30px] w-[100px] h-[100px] justify-center">
                <div className="flex flex-col gap-[8.15px]">
                  <EGroupS />
                </div>
              </div>
              <div className='flex'>
                <img src={LHDN} alt="LHDN Logo" className="w-[128px] h-[100px] flex-shrink-0" />
              </div>
            </div>
          </div>
          {/* 2.3 */}
          <div className='flex flex-col text-left w-full gap-[75px] md:gap-[100px]'>
            {/* Start Implementing E-Invoicing */}
            <div className='flex flex-col gap-[50px]'>
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='w-[213px] md:w-[594px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                  Start Implementing E-Invoicing For Your Business?
                </div>
                <div className='w-[333px] md:w-[950px] text-[#0060FF] text-sm md:text-xl font-medium leading-tight'>
                  The implementating of E-invoice will be phased to ensure a smooth transition. 
                  The criteria for determining the annual turnover or revenue thresholds for E-Invoice implementation are as follows:
                </div>
              </div>
              <div>
                <div className='text-[#0060FF] text-sm md:text-xl leading-tight flex flex-col gap-[20px] w-[333px] md:w-full'>
                  <div className='pl-7 flex flex-col gap-5'>
                    <ul>
                      <li className='w-[240px] md:w-full list-disc list-outside font-bold md:font-semibold'>
                        For taxpayers with audited financial statements: 
                      </li>
                      <div className='font-medium'>
                        The annual turnover or revenue will be determined based on the figures stated in the statement of comprehensive income in the audited financial statements for the financial year 2022.
                      </div>
                    </ul>
                    <ul>
                      <li className='w-[240px] md:w-full list-disc list-outside font-bold md:font-semibold'>
                        For taxpayers without audited financial statements:
                      </li>
                      <div className='font-medium'>
                        The annual revenue will be determined based on the figures reported in the tax return for the year of assessment 2022.
                      </div>
                    </ul>
                  </div>
                  <div className='font-medium w-[319px] md:w-[980px]'>
                    In the event of a change in the accounting year-end for the financial year 2022, 
                    the taxpayer’s turnover or revenue will be pro-rated to a 12-month period to accurately determine the e-Invoice implementation date.
                  </div>
                </div>
              </div>
            </div>
            {/* E-Invoice */}
            <div className='flex flex-col gap-[10px] md:gap-5'>
              <div className='w-[242px] md:w-[415px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                E-Invoice Implementing Timeline:
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl leading-tight md:leading-[30px] flex flex-col gap-[15px] md:gap-[30px] w-[333px] md:w-full'>
                <ul className='list-disc flex flex-col pl-6'>
                  <li className='font-bold md:font-semibold'>
                    Target Taxpayers:
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
                      Taxpayers with an annual turnover or revenue of more than RM100 million.
                    </div>
                  </div>
                  <li className='font-bold md:font-semibold'>
                    Implementation Date:
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
                      1 August 2024
                    </div>
                  </div>
                </ul>
                <ul className='list-disc flex flex-col pl-6'>
                  <li className='font-bold md:font-semibold'>
                    Target Taxpayers:
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
                    <div className='w-[280px] md:w-full font-medium'>
                      Taxpayers with an annual turnover or revenue of more than RM25 million and up to RM100 million.
                    </div>
                  </div>
                  <li className='font-bold md:font-semibold'>
                    Implementation Date:
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
                      1 January 2025
                    </div>
                  </div>
                </ul>
                <ul className='list-disc flex flex-col pl-6'>
                  <li className='font-bold md:font-semibold'>
                    Target Taxpayers:
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
                      Taxpayers with an annual turnover or revenue of less than RM25 million.
                    </div>
                  </div>
                  <li className='font-bold md:font-semibold'>
                    Implementation Date:
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
                      1 July 2025
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            {/* IRBM MyInvois System */}
            <div className='flex flex-col gap-[10px] md:gap-5'>
              <div className='w-[160px] md:w-[266px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                IRBM MyInvois System
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl font-medium'>
                <ul className='list-disc flex flex-col gap-4 pl-6'>
                  <li className='w-[305px] md:w-[900px]'>
                   <div className='hidden md:block '>
                      To support the growth of the digital economy, the Government intends to implement e-Invoice in stages in an effort to enhance the efficiency of Malaysia’s tax administration management. 
                      This initiative is aligned with the Twelfth Malaysia Plan, which aims to strengthen the digital services infrastructure and modernise the tax administration system through digitalisation.
                   </div>
                   <div className='md:hidden'>
                    <div>
                      To support the growth of the digital economy, the Government intends to implement
                    </div> 
                    <div className='w-[320px]'>
                      e-Invoice in stages in an effort to enhance the efficiency of Malaysia’s tax administration management. 
                      This initiative is aligned with the Twelfth Malaysia Plan, which aims to strengthen the digital services infrastructure and modernise the tax administration system through digitalisation.
                    </div>
                   </div>
                  </li>
                  <li className='w-[305px] md:w-[950px]'>
                    The e-Invoice will enable near real-time validation and storage of transactions, catering to Business-to-Business (B2B), Business-to-Consumer (B2C) and Business-to-Government (B2G) transactions.
                  </li>
                </ul>
              </div>
            </div>
            {/* Benefits of Adopting e-Invoice */}
            <div className='flex flex-col gap-[10px] md:gap-5'>
              <div className='w-[209px] md:w-[358px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                Benefits of Adopting e-Invoice
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight flex flex-col gap-5 w-[333px] md:w-full'>
                <div>
                  The implementation of e-Invoice not only provides seamless experience to taxpayers, but also improves business efficiency and increases tax compliance.
                </div>
                <div>
                  Overall benefits of adopting e-Invoice include:
                </div>
                <div className='pl-4 md:pl-7'>
                  <ul className='list-decimal flex flex-col gap-5'>
                    <li className='w-[312px] md:w-[950px]'>
                      Unified invoicing process through the streamlining of transaction document creation, and submission of data electronically to IRBM. 
                      The automation of data entry for transactions reduces manual efforts and human errors;
                    </li>
                    <li className='md:w-[900px]'>
                      Facilitate tax return filing through seamless system integration for efficient and accurate tax reporting;
                    </li>
                    <li className='w-[315px] md:w-[950px]'>
                      For larger businesses, the adoption of e-Invoice enables the streamlining of operations, resulting enhanced efficiency and significant time as well as cost savings through automated processes, seamless data integration, and improved invoice management; and
                    </li>
                    <li className='w-[305px] md:w-[950px]'>
                      For micro, small and medium-sized enterprises (MSMEs), the phased implementation offers a progressive and manageable transition to e-Invoice, allowing MSMEs to align their financial reporting and processes to be digitalised with industry standards, 
                      ensuring that MSMEs to adapt over a longer period and mitigating potential disruptions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* LHDN E-Invoice */}
            <div className='flex flex-col gap-5'>
              <div className='hidden md:flex w-[313px] md:w-[732px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                LHDN E-Invoice: What Are The Penalties For Non-Compliance?
              </div>
              <div className='md:hidden w-[313px] md:w-[732px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                <div>
                  LHDN E-Invoice: 
                </div>
                <div>
                  What Are The Penalties For Non-Compliance?
                </div>
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight flex flex-col gap-[30px]'>
                <div className='hidden md:block w-[333px] md:w-[850px]'>
                  Adhering to the Malaysian Inland Revenue Board’s (LHDN) E-Invoice mandate is mandatory, and non-compliance can result in significant consequences for your business. 
                  Here's what you need to be aware of:
                </div>
                <div className='md:hidden w-[333px]'>
                  <div>
                    Adhering to the Malaysian Inland Revenue Board’s (LHDN) E-Invoice mandate is mandatory, and non-compliance can result in significant
                  </div>
                  <div className='w-[335px]'>
                    consequences for your business. Here's what you need to be aware of:
                  </div>
                </div>
                <div className='pl-7'>
                  <ul className='flex flex-col gap-4 list-disc w-[323px] md:w-[950px]'>
                    <li>
            
                      Penalties: Non-compliance with e-invoice regulations can incur substantial financial penalties, ranging from RM200 to RM20,000.
                    </li>
                    <li>
                      Legal Consequences: Failure to comply may also result in imprisonment for a maximum period of six months. 
                      This underscores the gravity of the LHDN mandate.
                    </li>
                    <ul className='flex flex-col md:flex-row gap-1 list-disc'>
                      <li>
                        For more info:
                      </li> 
                      <a href="\" target="_blank" className="underline text-blue-600">
                        (LHDN) Offences, Fines and Penalties.
                      </a>
                    </ul>
                    <ul className='flex flex-col md:flex-row gap-1 list-disc'>
                      <li>
                        E-Invoice Customer Feedback Form: 
                      </li>
                      <a href="\" target="_blank" className="underline text-blue-600">
                        Following link.
                      </a>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
            {/* Who, Entities Required, Entities exempt */}
            <div className="flex flex-col gap-[75px] md:gap-[50px]">
              {/* Who */}
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='w-[266px] md:w-[606px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                  Who Needs to Comply with e-Invoicing in Malaysia?
                </div>
                <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight flex flex-col gap-[30px] w-[333px] md:w-[920px]'>
                  LHDN has released guidelines outlining which entities, individuals, and businesses are required to adhere to e-invoicing rules, as well as those exempt from them.
                </div>
              </div>
              {/* Entities Required */}
              <div className='flex flex-col gap-[10px] md:gap-5'>
                <div className='w-[304px] md:w-[658px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                  Entities Required to Comply with e-Invoicing in Malaysia
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
                          Associations.
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
                          Body of persons.
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
                          Branches.
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
                          Business trusts.
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
                          Co-operative societies.
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
                          Corporations.
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
                          Limited liability partnerships.
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
                          Partnerships.
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
                          Property trust funds.
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
                          Property trusts.
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
                          Real estate investment trusts.
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
                          Representative offices and regional offices.
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
                          Trust bodies.
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
                          Unit trusts.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Entities exempt */}
              <div className="flex flex-col gap-[10px] md:gap-5">
                <div className="w-[333px] md:w-[382px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight">
                  Entities exempt from e-Invoicing
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
                        Ruler and Ruling Chief.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Former Ruler and Ruling Chief.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-end md:items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Consort of a Ruler of a State with specified titles.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-end md:items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Consort of a Former Ruler of a State with specified titles Government.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        State Government and State authority.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Government authority.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Local authority.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Statutory authority and Statutory Body.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Property trust funds.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-end'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Facilities provided by the above Government, authority, or Body Consular offices and diplomatic officers, Consular officers, and Consular employees.
                      </div>
                    </li>
                    <li className='flex gap-2'>
                      <div className='transform scale-y-[-1] flex items-center'>
                        <div className='hidden md:block'>
                          <ArrowFlipForward />
                        </div>
                        <div className='md:hidden'>
                          <ArrowFlipForwardS />
                        </div>
                      </div>
                      <div>
                        Individual who is not conducting Business.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Type of e-invoices */}
            <div className="flex flex-col gap-[30px] md:gap-5">
              <div className="flex flex-col gap-[10px] md:gap-5">
                <div className='w-[210px] md:w-[354px] text-[#0046BA] text-sm md:text-2xl font-bold leading-tight'>
                  Type of e-invoices in Malaysia
                </div>
                <div className='w-[333px] md:w-full text-[#0060FF] text-sm md:text-xl font-medium leading-tight md:leading-[30px]'>
                  The below documents must be issued in electronic format under Malaysia e-Invoice:
                </div>
              </div>
              <div className='text-[#0060FF] text-sm md:text-xl font-medium leading-tight md:leading-[30px] w-[333px] md:w-[980px]'>
                <ul className='list-disc pl-4 md:pl-6 flex flex-col gap-4'>
                  <li>
                    <b>Invoices:</b> It is generally used to record transactions between supplier and buyer. 
                    Invoices also include a self-billed invoice issued for tracking expenses.
                  </li>
                  <li>
                    <b>Credit notes:</b> A credit note is a document issued by sellers to make corrections to an e-Invoice issued previously mainly to lower the original invoice's value without returning money to the Buyer. 
                    It is generally used to adjust errors, apply discounts, or account for returned items. 
                  </li>
                  <li>
                    <b>Debit notes:</b> In contrast to credit notes, debit notes are issued to record additional costs related to a previously issued e-Invoice.
                  </li>
                  <li>
                    <b>Refund notes:</b> A refund e-Invoice is an official document issued by a Seller to record refund issued to the Buyer.
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
