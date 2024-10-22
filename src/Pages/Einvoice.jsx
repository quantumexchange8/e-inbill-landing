import React from 'react';
import Video1 from '../Asset/Videos/eInvoiceVideo1.mp4';
import { HomeGroup1, EGroup, EInbill } from '../Components/Outline.jsx';
import LHDN from '../Asset/Images/LHDN_logo1.png';

const Einvoice = () => {
  return (
    <div className='pt-[101px] flex flex-col gap-[100px]'>
      {/* 1 */}
      <div className="relative text-white">
        <video autoPlay loop playsInline muted className='w-full rounded-br-[500px]'>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white/80 text-center text-[64px] font-bold leading-tight w-full max-w-[1000px] flex justify-center">
            <div className="w-[638px] flex justify-center">
              What is an E-invoice
            </div>
          </div>
          <div className="absolute bottom-10 right-10 flex flex-col items-center">
            <HomeGroup1 className="w-[50px] h-[45px]" />
            <div className="text-[#0046BA] text-center text-sm  font-bold leading-normal w-[120px] ">
              Leave your contact here
            </div>
          </div>
        </div>
      </div>
      
      {/* 2 */}
      <div className='w-full flex justify-center'>
        <div className='flex flex-col justify-center max-w-[1000px] w-full'>
          {/* 2.1 */}
          <div className='flex flex-col gap-[20px] justify-center max-w-[1000px] w-full'>
            <div className='flex flex-col w-[1000px] justify-center text-left text-[#0046BA] text-5xl not-italic font-bold leading-tight'>
              Simplify your Malaysian business's electronic invoicing process with E-Inbill.
            </div>
            <div className='w-[955px] text-left text-[#0060FF] text-2xl not-italic font-medium leading-tight'>
              The Malaysian Inland Revenue Board (LHDN) mandates the use of electronic invoicing for tax purposes. 
              E-Inbill is certified to meet these requirements, offering a seamless solution for your business needs. 
              The implementation of electronic invoicing is being phased in, with the initial group of businesses required to comply by August 1, 2024. 
              By July 1, 2025, all Malaysian businesses, regardless of size, must transition to electronic invoicing. 
              Transition to E-Inbill now to ensure your business remains compliant with LHDN regulations and stays ahead in the digital transformation journey.
            </div>
          </div>
          {/* 2.2 */}
          <div className='py-[200px] flex justify-center'>
            <div className="flex items-center gap-[200px]">
              <div className="bg-blue-800 flex flex-col items-center rounded-[30px] w-[200px] h-[200px] justify-center">
                <div className="flex flex-col gap-[16.31px]">
                  <div className='flex'>
                    <EGroup />
                  </div>
                  <div className='flex justify-center'>
                    <EInbill />
                  </div>
                </div>
              </div>
              <div className='flex'>
                <img src={LHDN} alt="flexLHDN Logo" className="w-[256px] h-[200px] flex-shrink-0" />
              </div>
            </div>
          </div>
          {/* 2.3 */}
          <div className='flex flex-col text-left w-full gap-[100px]'>
            {/* 2.3.1 */}
            <div className='flex flex-col gap-[50px]'>
              <div className='flex flex-col gap-5'>
                <div className='w-[594px] text-[#0046BA] text-2xl font-bold leading-tight'>
                  Start Implementing E-Invoicing For Your Business?
                </div>
                <div className='text-[#0060FF] text-xl font-medium leading-tight'>
                  The implementating of E-invoice will be phased to ensure a smooth transition. 
                  The criteria for determining the annual turnover or revenue thresholds for E-Invoice implementation are as follows:
                </div>
              </div>
              <div>
                <div className='text-[#0060FF] text-xl leading-tight flex flex-col gap-[20px]'>
                  <ul>
                    <li className='list-disc list-inside font-semibold'>
                      For taxpayers with audited financial statements: 
                    </li>
                    <div className='pl-7 font-medium'>
                      The annual turnover or revenue will be determined based on the figures stated in the statement of comprehensive income in the audited financial statements for the financial year 2022.
                    </div>
                  </ul>
                  <div>
                    <li className='font-semibold'>
                      For taxpayers without audited financial statements:
                    </li>
                    <div className='pl-7 font-medium'>
                      The annual revenue will be determined based on the figures reported in the tax return for the year of assessment 2022.
                    </div>
                  </div>
                  <div className='font-medium'>
                    In the event of a change in the accounting year-end for the financial year 2022, 
                    the taxpayer’s turnover or revenue will be pro-rated to a 12-month period to accurately determine the e-Invoice implementation date.
                  </div>
                </div>
              </div>
            </div>
            {/* 2.3.2 */}
            <div className='flex flex-col gap-[20px]'>
              <div className='w-[415px] text-[#0046BA] text-2xl font-bold leading-tight'>
                E-Invoice Implementing Timeline:
              </div>
              <div className='text-[#0060FF] text-xl leading-[30px] flex flex-col gap-[30px]'>
                <div>
                  <li className='font-semibold'>
                    Target Taxpayers:
                  </li>
                  <div className='pl-6 font-medium'>
                    ↪️ Taxpayers with an annual turnover or revenue of more than RM100 million.
                  </div>
                  <li className='font-semibold'>
                    Implementation Date:
                  </li>
                  <div className='pl-6 font-medium'>
                    ↪️ 1 August 2024
                  </div>
                </div>
                <div>
                  <li className='font-semibold'>
                    Target Taxpayers:
                  </li>
                  <div className='pl-6 font-medium'>
                    ↪️ Taxpayers with an annual turnover or revenue of more than RM25 million and up to RM100 million.
                  </div>
                  <li className='font-semibold'>
                    Implementation Date:
                  </li>
                  <div className='pl-6 font-medium'>
                    ↪️ 1 January 2025
                  </div>
                </div>
                <div>
                  <li className='font-semibold'>
                    Target Taxpayers:
                  </li>
                  <div className='pl-6 font-medium'>
                    ↪️ Taxpayers with an annual turnover or revenue of less than RM25 million.
                  </div>
                  <li className='font-semibold'>
                    Implementation Date:
                  </li>
                  <div className='pl-6 font-medium'>
                    ↪️ 1 July 2025
                  </div>
                </div>
              </div>
            </div>
            {/* 2.3.3 */}
            <div className='flex flex-col gap-5'>
              <div className='w-[266px] text-[#0046BA] text-2xl font-bold leading-tight'>
                IRBM MyInvois System
              </div>
              <div className='text-[#0060FF] text-xl font-medium'>
                <ul className='list-disc flex flex-col gap-4 pl-6'>
                  <li>
                    To support the growth of the digital economy, the Government intends to implement e-Invoice in stages in an effort to enhance the efficiency of Malaysia’s tax administration management. 
                    This initiative is aligned with the Twelfth Malaysia Plan, which aims to strengthen the digital services infrastructure and modernise the tax administration system through digitalisation.
                  </li>
                  <li>
                    The e-Invoice will enable near real-time validation and storage of transactions, catering to Business-to-Business (B2B), Business-to-Consumer (B2C) and Business-to-Government (B2G) transactions.
                  </li>
                </ul>
              </div>
            </div>
            {/* 2.3.4 */}
            <div className='flex flex-col gap-5'>
              <div className='w-[358px] text-[#0046BA] text-2xl font-bold leading-tight'>
                Benefits of Adopting e-Invoice
              </div>
              <div className='text-[#0060FF] text-xl font-medium leading-tight flex flex-col gap-5'>
                <div>
                  The implementation of e-Invoice not only provides seamless experience to taxpayers, but also improves business efficiency and increases tax compliance.
                </div>
                <div>
                  Overall benefits of adopting e-Invoice include:
                </div>
                <div className='px-7'>
                  <ul className='list-decimal flex flex-col gap-5'>
                    <li>
                      Unified invoicing process through the streamlining of transaction document creation, and submission of data electronically to IRBM. 
                      The automation of data entry for transactions reduces manual efforts and human errors;
                    </li>
                    <li>
                      Facilitate tax return filing through seamless system integration for efficient and accurate tax reporting;
                    </li>
                    <li>
                      For larger businesses, the adoption of e-Invoice enables the streamlining of operations, resulting enhanced efficiency and significant time as well as cost savings through automated processes, seamless data integration, and improved invoice management; and
                    </li>
                    <li>
                      For micro, small and medium-sized enterprises (MSMEs), the phased implementation offers a progressive and manageable transition to e-Invoice, allowing MSMEs to align their financial reporting and processes to be digitalised with industry standards, 
                      ensuring that MSMEs to adapt over a longer period and mitigating potential disruptions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 2.3.5 */}
            <div className='flex flex-col gap-5'>
              <div className='w-[732px] text-[#0046BA] text-2xl font-bold leading-tight'>
                LHDN E-Invoice: What Are The Penalties For Non-Compliance?
              </div>
              <div className='text-[#0060FF] text-xl font-medium leading-tight flex flex-col gap-[30px]'>
                <div>
                  Adhering to the Malaysian Inland Revenue Board’s (LHDN) E-Invoice mandate is mandatory, and non-compliance can result in significant consequences for your business. 
                  Here's what you need to be aware of:
                </div>
                <div className='px-7'>
                  <ul className='flex flex-col gap-4 list-disc'>
                    <li>
                      Penalties: Non-compliance with e-invoice regulations can incur substantial financial penalties, ranging from RM200 to RM20,000.
                    </li>
                    <li>
                      Legal Consequences: Failure to comply may also result in imprisonment for a maximum period of six months. 
                      This underscores the gravity of the LHDN mandate.
                    </li>
                    <li>
                      For more info: (LHDN) Offences, Fines and Penalties.
                    </li>
                    <li>
                      E-Invoice Customer Feedback Form: Following link.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 2.3.6 */}
            <div className="flex flex-col gap-[50px]">
              <div className='flex flex-col gap-5'>
                <div className='w-[606px] text-[#0046BA] text-2xl font-bold leading-tight'>
                  Who Needs to Comply with e-Invoicing in Malaysia?
                </div>
                <div className='text-[#0060FF] text-xl font-medium leading-tight flex flex-col gap-[30px]'>
                  LHDN has released guidelines outlining which entities, individuals, and businesses are required to adhere to e-invoicing rules, as well as those exempt from them.
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='w-[658px] text-[#0046BA] text-2xl font-bold leading-tight'>
                  Entities Required to Comply with e-Invoicing in Malaysia
                </div>
                <div className='text-[#0060FF] text-xl font-medium leading-[30px]'>
                  <ul>
                    <li>
                      ↪️ Associations.
                    </li>
                    <li>
                      ↪️ Body of persons.
                    </li>
                    <li>
                      ↪️ Branches.
                    </li>
                    <li>
                      ↪️ Business trusts.
                    </li>
                    <li>
                      ↪️ Co-operative societies.
                    </li>
                    <li>
                      ↪️ Corporations.
                    </li>
                    <li>
                      ↪️ Limited liability partnerships.
                    </li>
                    <li>
                      ↪️ Partnerships.
                    </li>
                    <li>
                      ↪️ Property trust funds.
                    </li>
                    <li>
                      ↪️ Property trusts.
                    </li>
                    <li>
                      ↪️ Real estate investment trusts.
                    </li>
                    <li>
                      ↪️ Representative offices and regional offices.
                    </li>
                    <li>
                      ↪️ Trust bodies.
                    </li>
                    <li>
                      ↪️ Unit trusts.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-[382px] text-[#0046BA] text-2xl font-bold leading-tight">
                  Entities exempt from e-Invoicing
                </div>
                <div className='text-[#0060FF] text-xl font-medium leading-[30px]'>
                  <ul>
                    <li>
                      ↪️ Ruler and Ruling Chief.
                    </li>
                    <li>
                      ↪️ Former Ruler and Ruling Chief.
                    </li>
                    <li>
                      ↪️ Consort of a Ruler of a State with specified titles.
                    </li>
                    <li>
                      ↪️ Consort of a Former Ruler of a State with specified titles Government.
                    </li>
                    <li>
                      ↪️ State Government and State authority.
                    </li>
                    <li>
                      ↪️ Government authority.
                    </li>
                    <li>
                      ↪️ Local authority.
                    </li>
                    <li>
                      ↪️ Statutory authority and Statutory Body.
                    </li>
                    <li>
                      ↪️ Property trust funds.
                    </li>
                    <li>
                      ↪️ Facilities provided by the above Government, authority, or Body Consular offices and diplomatic officers, Consular officers, and Consular employees.
                    </li>
                    <li>
                      ↪️ Individual who is not conducting Business.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 2.3.7 */}
            <div className="flex flex-col gap-5 pb-[100px]">
              <div className='w-[354px] text-[#0046BA] text-2xl font-bold leading-tight'>
                Type of e-invoices in Malaysia
              </div>
              <div className='text-[#0060FF] text-xl font-medium leading-[30px]'>
                The below documents must be issued in electronic format under Malaysia e-Invoice:
              </div>
              <div className='text-[#0060FF] text-xl font-medium leading-[30px]'>
                <ul className='list-disc px-6 '>
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
      </div>
    </div>
  );
};

export default Einvoice;
