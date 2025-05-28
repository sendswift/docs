import { Button } from "@/components/ui/button";
import { BrainCircuit, Headset, ShieldUser, Webhook } from "lucide-react";

function Home() {
    return (
        <>
            <div className="bg-[#6F3DEA] text-white w-full py-28">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-center">Sendswift Developer Center</h1>
                    <p className="mt-4 text-center">Seamlessly integrate your CRM with SendSwift using our powerful API.</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                        <a href="/documentation/subscribe">
                            <div className="bg-white text-gray-800 p-6 rounded-lg flex items-center gap-2">
                                <Webhook className="text-[#6F3DEA]" />
                                <h2 className="text-xl font-bold">Events</h2>
                            </div>
                        </a>
                        <a href="/documentation/add-lead-to-campaign">
                            <div className="bg-white text-gray-800 p-6 rounded-lg flex items-center gap-2">
                                <BrainCircuit className="text-[#6F3DEA]" />
                                <h2 className="text-xl font-bold">Actions</h2>
                            </div>
                        </a>
                        <a href="/documentation/authorization">
                            <div className="bg-white text-gray-800 p-6 rounded-lg flex items-center gap-2">
                                <ShieldUser className="text-[#6F3DEA]" />
                                <h2 className="text-xl font-bold">Authorization</h2>
                            </div>
                        </a>
                        <a href="mailto:support@sendswift.ai">
                            <div className="bg-white text-gray-800 p-6 rounded-lg flex items-center gap-2">
                                <Headset className="text-[#6F3DEA]" />
                                <h2 className="text-xl font-bold">Support</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center bg-[#F6F7FF] py-8">
                    <img src="https://cdn.prod.website-files.com/670e4959bc2df06893641660/6719078fd9abf5ac943133ea_Frame%201321316141.avif" alt="Logo 1" className="w-32 mx-4" />
                    <img src="https://cdn.prod.website-files.com/670e4959bc2df06893641660/6719078e8d55a366c7bafe80_Frame%201321316150.avif" alt="Logo 1" className="w-32 mx-4" />
                    <img src="https://cdn.prod.website-files.com/670e4959bc2df06893641660/6719078ed5b706241b00eacd_Frame%201321316149.avif" alt="Logo 1" className="w-32 mx-4" />
                    <img src="https://cdn.prod.website-files.com/670e4959bc2df06893641660/6719078e7ab8dd8be8ac0b39_Frame%201321316147.avif" alt="Logo 1" className="w-32 mx-4" />
                    <img src="https://cdn.prod.website-files.com/670e4959bc2df06893641660/6719079000bf5fe1f18c3c63_Frame%201321316146.avif" alt="Logo 1" className="w-32 mx-4" />
                    <img src="https://cdn.prod.website-files.com/670e4959bc2df06893641660/6719078ed5b706241b00eaca_Frame%201321316148.avif" alt="Logo 1" className="w-32 mx-4" />
                    <img src="https://cdn.prod.website-files.com/670e4959bc2df06893641660/6719078efade9c9ede9afa19_Frame%201321316143.avif" alt="Logo 1" className="w-32 mx-4" />
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="bg-green-500 px-3 py-1 rounded-lg text-white">
                                GET
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-800 font-semibold text-xl">Get Campaigns</span>
                        </div>
                        <div>
                            <span className="text-gray-800">/api/public/get-campaigns</span>
                        </div>
                        <div>
                            <a href="/documentation/get-campaigns" className="text-[#6F3DEA]">Try it out!</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="bg-red-500 px-3 py-1 rounded-lg text-white">
                                Auth
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-800 font-semibold text-xl">Verify Auth</span>
                        </div>
                        <div>
                            <span className="text-gray-800">/api/public/verify-auth</span>
                        </div>
                        <div>
                            <a href="/documentation/authorization" className="text-[#6F3DEA]">Try it out!</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="bg-blue-500 px-3 py-1 rounded-lg text-white">
                                Trigger
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-800 font-semibold text-xl">Subscribe to Event</span>
                        </div>
                        <div>
                            <span className="text-gray-800">/api/public/subscribe-to-event</span>
                        </div>
                        <div>
                            <a href="/documentation/subscribe" className="text-[#6F3DEA]">Try it out!</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="bg-purple-500 px-3 py-1 rounded-lg text-white">
                                Action
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-800 font-semibold text-xl">Change Lead Status</span>
                        </div>
                        <div>
                            <span className="text-gray-800">/api/public/change-lead-status</span>
                        </div>
                        <div>
                            <a href="/documentation/change-lead-status" className="text-[#6F3DEA]">Try it out!</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="bg-blue-500 px-3 py-1 rounded-lg text-white">
                                Trigger
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-800 font-semibold text-xl">Unsubscribe from Event</span>
                        </div>
                        <div>
                            <span className="text-gray-800">/api/public/unsubscribe-from-event</span>
                        </div>
                        <div>
                            <a href="/documentation/unsubscribe" className="text-[#6F3DEA]">Try it out!</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="bg-purple-500 px-3 py-1 rounded-lg text-white">
                                Action
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-800 font-semibold text-xl">Add Lead to Blocklist</span>
                        </div>
                        <div>
                            <span className="text-gray-800">/api/public/add-lead-to-blocklist</span>
                        </div>
                        <div>
                            <a href="/documentation/add-lead-to-blocklist" className="text-[#6F3DEA]">Try it out!</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center bg-[#1F3020] py-8 rounded-lg my-16">
                    <img src="https://cdn.prod.website-files.com/57f295d463d4b1963d7bfa85/62fbf31706a030671a2ed098_zapier_logo_white.png" alt="Logo 1" className="w-32 mx-4" />
                    <h2 className="text-white text-2xl font-bold">Integrate with every endpoint through Zapier.</h2>
                    <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-lg mt-4" asChild>
                        <a href="https://zapier.com" target="_blank">Create a Zap</a>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Home;