import React from 'react';
import logo from '../assets/logo.jpg';

const CodeOfEthicsPolicy = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-12 text-[9px] md:text-base leading-snug">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-sm md:text-xl font-bold text-center uppercase">CODE OF ETHICS POLICY</h1>
                    <h2 className="text-xs md:text-lg italic font-semibold text-center">"Standard of conduct"</h2>
                </div>

                {/* Policy Statement */}
                <div className="mb-4">
                    <p className="text-justify mb-2">
                        <span className="font-bold">Policy:</span> All persons, staff, contractors, parents of individuals, individuals, guardians and/or families with respect all individuals’ belief, traditions, and customs according to their cultural preferences.
                    </p>
                </div>

                {/* Procedure */}
                <div className="mb-4">
                    <h3 className="font-bold mb-1">Procedure</h3>
                    <ol className="list-decimal pl-4 md:pl-8 space-y-1">
                        <li>
                            All persons (staff, contractors, parents of individuals, individuals, guard fans and or families) are always expected to maintain and exercise the highest form of moral and ethical standards in carrying out daily responsibilities and functions.
                        </li>
                        <li>
                            All persons (staff, contractors, parents of Individuals, individuals, guardians and or families) must conduct themselves in a manner that prohibits all forms of prejudice, threats, and favoritism.
                        </li>
                        <li>
                            All persons (staff, contractors, parents of individuals, Individuals, guardians and or families) must comply with Pacific Health Systems policy and procedures according to OCH Guidelines. (Policy 1201)
                        </li>
                        <li>
                            All persons (staff, contractors, parents of individuals, individuals, guardians and or families) will perform their job duties in a professional manner.
                        </li>
                        <li>
                            All persons (staff, contractors, parents of individuals, individuals, guardians and or families) will not disclose privileged and confidential Information.
                        </li>
                        <li>
                            All persons (staff, contractors, parents of individuals, Individuals, guardians and or families) that violate any client rights, HIPPA, or have a conflict of interests with other parties will be terminated.
                        </li>
                        <li>
                            All persons (staff, contractors, parents of Individuals, Individuals, guardians and or families) will respect all clients’ belief, traditions, and customs according to their chosen cultural preferences.
                        </li>
                        <li>
                            All persons (staff, contractors, parents of individuals, individuals, guardians and or families) will receive training in ethics and cultural diversity.
                        </li>
                        <li>
                            All persons (staff, contractors, parents of individuals, individuals, guardians and or families) have a right to a fair and equal opportunity to express their concerns without fear or threat of retaliation.
                        </li>
                        <li>
                            All persons (staff, contractors, parents of individuals, individuals, guardians and or families) are prohibited to use any confidential information as a means to financial gain.
                        </li>
                    </ol>
                </div>

                {/* Prohibitions */}
                <div className="mb-8">
                    <h3 className="font-bold mb-1 uppercase text-sm md:text-lg">THE EMPLOYEE MAY <span className="underline">NOT</span></h3>
                    <ol className="list-decimal pl-4 md:pl-8 space-y-1">
                        <li>Use the client’s vehicle(s) for personal reasons.</li>
                        <li>Consume the client’s food or drinks.</li>
                        <li>Use the client’s phone for personal calls</li>
                        <li>Discuss his/her personal problems, religious and/or political beliefs.</li>
                        <li>Accept gifts or monetary tips from the client and/or client’s family.</li>
                        <li>Lend money to a client or borrow from a client.</li>
                        <li>Purchase or sell gifts, food, or other items to/from the client.</li>
                        <li>Bring friends, children, relatives, or pets to client’s house.</li>
                        <li>Consume alcoholic beverages or other illegal substances prior to delivery of services or within the client’s home.</li>
                        <li>Sleep in the client’s home.</li>
                        <li>Remain on the premises after services have been rendered.</li>
                        <li>Show up at client’s home on weekends or on off duty times.</li>
                        <li>Do things not listed-on the care plan or assignment sheet without permission.</li>
                        <li>Smoke in client’s home.</li>
                        <li>Stay after service time without proper authorization.</li>
                        <li>Turn in a Daily Care Log, Service Record Plan or Progress Note that is not authorized</li>
                    </ol>
                </div>

                {/* Signatures */}
                <div className="grid grid-cols-2 gap-4 md:gap-16 mt-12">
                    <div>
                        <input type="text" className="w-full border-t border-black outline-none mt-8" />
                        <div className="font-bold">Signature of Client/ Client Representative</div>
                    </div>
                    <div>
                        <input type="date" className="w-full border-t border-black outline-none mt-8" />
                        <div className="font-bold">Date</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeOfEthicsPolicy;
