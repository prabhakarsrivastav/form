import React from 'react';
import dbhddLogo from '../assets/dbhdd_logo.png'; // Assuming logo usage, though Form 10 image shows DBHDD logo. I'll use text header if logo isn't available or standard logo.

const Form10 = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-12 text-[9px] md:text-base leading-snug">

                {/* --- PAGE 1 --- */}

                {/* Header */}
                <div className="flex justify-between items-start border-b-2 border-black pb-4 mb-6">
                    <div className="w-1/2 flex items-center gap-2">
                        <img src={dbhddLogo} alt="DBHDD Logo" className="h-12 md:h-20 object-contain" />
                        <div>
                            <div className="font-bold text-[8px] md:text-sm leading-tight">Georgia Department of Behavioral Health & Developmental Disabilities</div>
                            {/*            <div className="font-bold text-[8px] md:text-xs text-blue-900">D·B·H·D·D</div>
*/}                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                        <input type="text" className="border border-black bg-gray-100 h-6 md:h-8 w-full px-1 focus:outline-blue-500" />
                        <div className="text-center text-[8px] md:text-xs">Name of Individual/Consumer/Patient/Applicant</div>
                        <input type="text" className="border border-black bg-gray-100 h-6 md:h-8 w-full px-1 focus:outline-blue-500" />
                        <div className="text-center text-[8px] md:text-xs">Date of Birth AND/OR Social Security Number</div>
                        <div className="border-b border-black"></div>
                    </div>
                </div>

                <h1 className="text-center font-bold text-sm md:text-xl uppercase mb-6 border-b border-black pb-1">AUTHORIZATION FOR RELEASE OF INFORMATION – STANDARD REQUEST</h1>

                <p className="mb-4">I hereby authorize the disclosure of records/information</p>

                {/* From Section */}
                <div className="flex mb-4">
                    <div className="w-[10%] pt-2">From:</div>
                    <div className="w-[90%]">
                        <input type="text" className="bg-blue-50 border border-blue-200 h-8 mb-1 w-full px-1" />
                        <div className="text-[8px] md:text-xs text-center mb-2">(Name of health care provider holding the information - releasing agency)</div>
                        <div className="flex gap-2">
                            <div className="w-2/3">
                                <input type="text" className="bg-blue-50 border border-blue-200 h-8 mb-1 w-full px-1" />
                                <div className="text-[8px] md:text-xs text-center">(Address)</div>
                            </div>
                            <div className="w-1/3">
                                <input type="text" className="bg-blue-50 border border-blue-200 h-8 mb-1 w-full px-1" />
                                <div className="text-[8px] md:text-xs text-center">(Phone/Fax)</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* To Section */}
                <div className="flex mb-8">
                    <div className="w-[10%] pt-2">To:</div>
                    <div className="w-[90%]">
                        <input type="text" className="bg-blue-50 border border-blue-200 h-8 mb-1 w-full px-1" />
                        <div className="text-[8px] md:text-xs text-center mb-2">(Name of Person or Agency to whom information should be given - requesting agency)</div>
                        <div className="flex gap-2">
                            <div className="w-2/3">
                                <input type="text" className="bg-blue-50 border border-blue-200 h-8 mb-1 w-full px-1" />
                                <div className="text-[8px] md:text-xs text-center">(Address)</div>
                            </div>
                            <div className="w-1/3">
                                <input type="text" className="bg-blue-50 border border-blue-200 h-8 mb-1 w-full px-1" />
                                <div className="text-[8px] md:text-xs text-center">(Phone/Fax)</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Authorization Item 1 */}
                <div className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <input type="checkbox" className="w-6 h-6 border border-black mb-1 focus:outline-blue-500 rounded-none accent-black" />
                        <div className="text-[8px]">Initials</div>
                    </div>
                    <div className="w-full">
                        <p className="mb-2">I authorize the following information from my records (and any specific portion thereof):</p>
                        <textarea className="bg-blue-50 border border-blue-200 h-16 w-full p-2 focus:outline-blue-500"></textarea>
                    </div>
                </div>

                {/* Authorization Item 2 */}
                <div className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <input type="checkbox" className="w-6 h-6 border border-black mb-1 focus:outline-blue-500 rounded-none accent-black" />
                        <div className="text-[8px]">Initials</div>
                    </div>
                    <div className="w-full text-justify">
                        <p>I authorize the disclosure of alcohol or drug abuse information, if any. (Please see paragraph 2 below). If I am a minor, my parent/guardian/court-ordered custodian and <strong>I BOTH</strong> must initial here in order for this information to be released.</p>
                    </div>
                </div>
                <input type="checkbox" className="w-6 h-6 border border-black mb-6 ml-1 focus:outline-blue-500 rounded-none accent-black block" />

                {/* Authorization Item 3 */}
                <div className="flex gap-4 mb-6">
                    <div className="flex flex-col items-center">
                        <input type="checkbox" className="w-6 h-6 border border-black mb-1 focus:outline-blue-500 rounded-none accent-black" />
                        <div className="text-[8px]">Initials</div>
                    </div>
                    <div className="w-full text-justify">
                        <p>I authorize the disclosure of information, if any, concerning testing for HIV (Human Immunodeficiency Virus) and/or treatment for HIV or AIDS (Acquired Immune Deficiency Syndrome) and any related conditions.</p>
                    </div>
                </div>

                {/* Purpose */}
                <div className="mb-6">
                    <p className="mb-2">The above disclosure of information is for the purpose of:</p>
                    <textarea className="bg-blue-50 border border-blue-200 h-12 w-full p-2 focus:outline-blue-500"></textarea>
                </div>

                {/* Understanding List */}
                <ol className="list-decimal pl-6 md:pl-10 space-y-2 text-justify mb-6">
                    <li>I understand that the information disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and no longer protected by federal privacy regulations or other applicable state or federal laws (except as set forth in paragraph 2 below).</li>
                    <li>I understand that, pursuant to 42 C.F.R Part 2, alcohol and drug abuse records that I authorize to be disclosed pursuant to this document may not be further re-disclosed without my written consent, except by a court order that complies with the preconditions set forth at 42 C.F.R. 2.61 et seq., or the other limited circumstances specifically permitted by 42 C.F.R. Part 2. Any individual that makes such a disclosure in violation of these provisions may be reported to the United States Attorney and be subject to criminal penalties.</li>
                    <li>I understand that DBHDD or my healthcare provider will not condition my treatment, payment, or eligibility for any applicable benefits on whether I provide authorization for the requested release of information.</li>
                    <li>
                        I intend this document to be a valid authorization conforming to all requirements of the Privacy Rule and State law, and understand that my authorization will remain in effect for: (PLEASE CHECK ONE)
                        <div className="flex gap-4 mt-1 items-center">
                            <label className="flex items-center gap-1"><input type="checkbox" className="mx-1" /> one (1) year OR</label>
                            <label className="flex items-center gap-1"><input type="checkbox" className="mx-1" /> the period necessary to complete all transactions on matters related to services provided to me.</label>
                        </div>
                    </li>
                </ol>

                <p className="italic text-justify mb-4">I understand that unless otherwise limited by state or federal regulation, and except to the extent that action has been taken based upon it, I may revoke this authorization at any time as shown in the space below.</p>


                {/* Signatures Page 1 */}
                <div className="grid grid-cols-[1fr_1fr_100px] gap-4 mb-4 items-end">
                    <div>
                        <input type="text" className="w-full border-b border-black bg-transparent focus:outline-none mb-1" />
                        <div className="font-bold text-[8px] md:text-xs">Signature of Individual/Consumer/Patient/Applicant</div>
                    </div>
                    <div>
                        <input type="text" className="w-full border border-black h-8 px-1 focus:outline-blue-500 mb-1" />
                        <div className="font-bold text-[8px] md:text-xs">Print Name</div>
                    </div>
                    <div>
                        <input type="date" className="w-full border border-black h-8 px-1 focus:outline-blue-500 mb-1" />
                        <div className="font-bold text-[8px] md:text-xs">Date</div>
                    </div>
                </div>

                <div className="grid grid-cols-[1fr_1fr_100px] gap-4 mb-2 items-end">
                    <div>
                        <div className="text-[8px] md:text-xs font-bold mb-1">OR Signature of other person authorized to sign for Individual (check one):</div>
                        <input type="text" className="w-full border-b border-black bg-transparent focus:outline-none mb-1" />
                        <div className="font-bold text-[8px] md:text-xs">&nbsp;</div>
                    </div>
                    <div>
                        <input type="text" className="w-full border border-black h-8 px-1 focus:outline-blue-500 mb-1" />
                        <div className="font-bold text-[8px] md:text-xs">Print Name</div>
                    </div>
                    <div>
                        <input type="date" className="w-full border border-black h-8 px-1 focus:outline-blue-500 mb-1" />
                        <div className="font-bold text-[8px] md:text-xs">Date</div>
                    </div>
                </div>
                <div className="flex gap-4 mb-2 mt-1">
                    <label className="flex items-center gap-1"><input type="checkbox" className="mx-1" /> Parent</label>
                    <label className="flex items-center gap-1"><input type="checkbox" className="mx-1" /> Guardian</label>
                    <label className="flex items-center gap-1"><input type="checkbox" className="mx-1" /> Court-appointed Custodian of Minor</label>
                </div>
                <label className="flex items-center gap-1 mb-8"><input type="checkbox" className="mx-1" /> Agent designated by Individual’s advance directive</label>

                <div className="flex justify-between text-[8px] text-gray-500 mb-12">
                    <span>DBHDD Policy 23-110: Attachment A</span>
                    <span>Page 1 of 3</span>
                    <span>Version 09/06/2019</span>
                </div>


                {/* --- PAGE 2 --- */}

                <div className="border-t-4 border-black pt-8 mb-8" />

                <h2 className="text-center font-bold text-sm md:text-lg uppercase mb-4">USE THIS SPACE ONLY IF AUTHORIZATION IS WITHDRAWN</h2>
                <p className="italic text-justify mb-4">I hereby revoke this authorization, and will send written notice of my withdrawal of this authorization to the staff of the healthcare provider who is providing services to me, OR to DBHDD’s Privacy Officer at 2 Peachtree St. NW, Suite 22.250 Atlanta, GA 30303-3142.</p>

                <div className="grid grid-cols-[1fr_1fr] gap-8 items-end mb-8">
                    <div>
                        <input type="date" className="bg-gray-200 h-8 border border-gray-400 mb-1 w-full px-1 focus:outline-blue-500" />
                        <div className="font-bold text-[8px] md:text-xs">Date this authorization is revoked</div>
                    </div>
                    <div>
                        <input type="text" className="w-full border-b border-black bg-transparent focus:outline-none mb-1 text-right" />
                        <div className="font-bold text-[8px] md:text-xs text-right">Signature of Individual or Legally Authorized Representative</div>
                    </div>
                </div>

                <div className="border-b-2 border-black mb-8"></div>

                <div className="mb-8 text-justify">
                    <p className="mb-4">
                        <span className="font-bold text-blue-800 underline">Complaints and Additional Information:</span> All complaints may be made to DBHDD and to the United States Secretary of Health and Human Services if you believe your privacy rights have been violated. You may file a complaint in writing with your DBHDD facility or program, or with your treatment provider or services provider under contract or agreement with DBHDD’s Office of Constituent Services which maintains your protected health information at telephone <span className="font-bold">(888) 785-6954</span>, fax number <span className="font-bold">(770) 408-5439</span>, by mail to <span className="font-bold">2 Peachtree Street, NW, Suite 24-473 Atlanta, Georgia 30303</span>, or email <a href="http://dbhdd.georgia.gov/office-constituent-services" className="text-blue-600 underline">http://dbhdd.georgia.gov/office-constituent-services</a>. You must state the basis for your complaint. Neither the facility, the provider, nor DBHDD will retaliate against you for filing a complaint. You may also obtain additional information about privacy practices from this contact person.
                    </p>
                    <p>
                        You may also contact <span className="font-bold">DBHDD’s Privacy Officer by telephone at (404) 657-2282, fax number (404) 657-2173, or by mail to 2 Peachtree Street NW, Room 22.250, Atlanta Georgia, 30303-3142</span>, for further information about the complaint process or about this notice.
                    </p>
                </div>

                <div className="grid grid-cols-[1fr_200px] gap-8 items-end mb-12">
                    <div>
                        <input type="text" className="w-full border-b border-black bg-transparent focus:outline-none mb-1" />
                        <div className="text-[8px] md:text-xs">Signature of Individual or Legally Authorized Person</div>
                    </div>
                    <div>
                        <input type="date" className="bg-gray-100 border border-gray-300 h-8 mb-1 w-full px-1 focus:outline-blue-500" />
                        <div className="text-[8px] md:text-xs text-center">Date</div>
                    </div>
                </div>

                <div className="flex justify-between text-[8px] text-gray-500 mb-12">
                    <span>DBHDD Policy 23-110: Attachment A</span>
                    <span>Page 2 of 3</span>
                    <span>Version 09/06/2019</span>
                </div>


                {/* --- PAGE 3 --- */}

                <div className="border-t-4 border-black pt-8 mb-8" />

                <div className="flex justify-between items-start border-b-2 border-black pb-4 mb-6">
                    <div className="w-1/2 flex items-center gap-2">
                        <img src={dbhddLogo} alt="DBHDD Logo" className="h-12 md:h-20 object-contain" />
                        <div>
                            <div className="font-bold text-[8px] md:text-sm leading-tight">Georgia Department of Behavioral Health & Developmental Disabilities</div>
                            {/*           <div className="font-bold text-[8px] md:text-xs text-blue-900">D·B·H·D·D</div>
*/}                        </div>
                    </div>
                </div>

                <div className="border border-black bg-blue-50 p-4 mb-4 text-justify">
                    <h2 className="text-center font-bold text-sm md:text-base uppercase mb-2">NOTICE OF NONDISCRIMINATION:</h2>
                    <p className="mb-2">The Georgia Department of Behavioral Health and Developmental Disabilities (DBHDD) complies with applicable federal civil rights laws and does not discriminate based on race, color, national origin, age, disability, or sex. DBHDD does not exclude people or treat them differently because of race, color, national origin, age, disability, or sex. To communicate effectively with us, DBHDD provides to people with disabilities free aids and services such as interpreters; and written information in other formats (large print, audio, accessible electronic formats). To communicate effectively with us, DBHDD provides to people whose primary language is not English free language services such as: interpreters and information written in other languages. If you need these services, contact Constituent Services at 404-657-5964 or 888-785-6954.</p>
                </div>

                <div className="border border-black">
                    <div className="bg-orange-50 p-2 text-center font-bold border-b border-black">
                        ATENCIÓN: si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al (404.657.5964 or 888.785.6954)
                    </div>
                    {/* Language Rows - simulating the table */}
                    <div className="divide-y divide-black">
                        <div className="p-2 bg-blue-50/50 text-center">Hindi / Nepali / Other Indic Scripts Placeholder text for language assistance</div>
                        <div className="p-2 text-center">CHÚ Ý: Nếu bạn nói Tiếng Việt, có các dịch vụ hỗ trợ ngôn ngữ miễn phí dành cho bạn. Gọi số (404.657.5964 or 888.785.6954)</div>
                        <div className="p-2 bg-blue-50/50 text-center">ATANSYON: Si w pale Kreyòl Ayisyen, gen sèvis èd pou lang ki disponib gratis pou ou. Rele (404.657.5964 or 888.785.6954)</div>
                        <div className="p-2 text-center">주의: 한국어를 사용하시는 경우, 언어 지원 서비스를 무료로 이용하실 수 있습니다. (404.657.5964 or 888.785.6954) 번으로 전화해 주십시오.</div>
                        <div className="p-2 bg-blue-50/50 text-center">ВНИМАНИЕ: Если вы говорите на русском языке, то вам доступны бесплатные услуги перевода. Звоните (404.657.5964 or 888.785.6954).</div>
                        <div className="p-2 text-center font-bold">注意：如果您使用繁體中文，您可以免費獲得語言援助服務。請致電 (404.657.5964 or 888.785.6954).</div>
                        <div className="p-2 bg-blue-50/50 text-center">Arabic Script Placeholder text for language assistance (404.657.5964 or 888.785.6954)</div>
                        <div className="p-2 text-center">Gujarat Script Placeholder: જો તમે ગુજરાતી બોલતા હો, તો નિ:શુલ્ક ભાષા સહાય સેવાઓ તમારા માટે ઉપલબ્ધ છે. ફોન કરો (404.657.5964 or 888.785.6954).</div>
                        <div className="p-2 bg-blue-50/50 text-center">ATENÇÃO: Se fala português, encontram-se disponíveis serviços linguísticos, grátis. Ligue para (404.657.5964 or 888.785.6954).</div>
                        <div className="p-2 text-center">ATTENTION: Si vous parlez français, des services d'aide linguistique vous sont proposés gratuitement. Appelez le (404.657.5964 or 888.785.6954).</div>
                        <div className="p-2 bg-blue-50/50 text-center">Persian Script Placeholder (404.657.5964 or 888.785.6954)</div>
                        <div className="p-2 text-center">Amharic Script Placeholder (404.657.5964 or 888.785.6954)</div>
                        <div className="p-2 bg-blue-50/50 text-center">ACHTUNG: Wenn Sie Deutsch sprechen, stehen Ihnen kostenlos sprachliche Hilfsdienstleistungen zur Verfügung. Rufnummer: (404.657.5964 or 888.785.6954)</div>
                        <div className="p-2 text-center font-bold">注意事項：日本語を話される場合、無料の言語支援をご利用いただけます。 (404.657.5964 or 888.785.6954) まで、お電話にてご連絡ください。</div>
                    </div>
                </div>

                <div className="flex justify-between text-[8px] text-gray-500 mt-12 mb-4">
                    <span>DBHDD Policy 23-110: Attachment A</span>
                    <span>Page 3 of 3</span>
                    <span>Version 09/06/2019</span>
                </div>

            </div>
        </div>
    );
};

export default Form10;
