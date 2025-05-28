function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="w-full p-8 fixed top-0 bg-white">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <img src="/logo.png" alt="Logo" className="w-24" />
                        <div>
                            <ul className="flex space-x-8">
                                <li>
                                    <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
                                </li>
                                <li>
                                    <a href="/documentation" className="text-gray-800 hover:text-gray-600">Documentation</a>
                                </li>
                                <li>
                                    <a href="mailto:support@sendswift.ai" className="text-gray-800 hover:text-gray-600">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mt-24">
                {children}
            </div>
            <footer className="bg-[#F6F7FF] py-8">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-4">
                            <img src="https://cdn.prod.website-files.com/670e4959bc2df06893641660/670f8bd14eedcecafa059a8d_Frame%2048095512.svg" alt="Logo" className="w-48" />
                            <p className="max-w-sm">
                                We're making email marketing simple and robust in an age where competition is ramping up.
                            </p>
                        </div>
                        <div className="max-w-md">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/documentation">Documentation</a>
                                </li>
                                <li>
                                    <a href="mailto:support@sendswift.ai">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        © 2025 Sendswift W.L.L CR: 172695-1 <br />
                        Flat/Shop No. 124, Building 135, Road/Street 1702, Diplomatic Area, Block 317, Bahrain <br />
                        <a href="https://www.sendswift.ai/legal/terms-and-conditions-policy" target="_blank">Terms of Service.</a> All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;