import React, { useEffect } from "react";
import NavBar from "@/Components/NavBar";
import { Inertia } from '@inertiajs/inertia';

const Home = () => {
    useEffect(() => {
        document.title = 'Home - Real A Styling Events & Catering Services';
    }, []);

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar />

            {/* Main Content */}
            <div className="bg-white">
                
                {/* Hero Section */}
                <section className="relative p-8 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Banner Text */}
                    <div className="relative z-10 text-white text-center py-24">
                        <h1 className="text-4xl font-extrabold uppercase tracking-wide leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                            Real A Event Styling & Catering Services
                        </h1>
                        <p className="mt-4 text-xl font-light tracking-wider" style={{fontFamily: "'Roboto', sans-serif"}}>
                            Your happiness is important, let us do your magic!
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">

                    {/* Left Content */}
                    <div className="bg-white p-6 shadow-lg">
                        <h2 className="text-3xl font-extrabold">EXPERIENCE A STRESS-FREE, FUN, MEMORABLE, AND A WELL-MANAGED EVENT</h2>
                        <p className="mt-4 text-gray-600">Here at Real A Events, we focus on your event so you can focus on you! So let us handle all the stress and just focus on your big day. Our well organized and trained event professionals will handle every detail so you can relax and enjoy each moment. </p>

                        <p className="mt-4 text-gray-600">
                            Don’t take our word for it – take theirs’. See what people are saying about our service. Please click the button below. 
                        </p>

                        {/* Replace button with Link component */}
                        <button 
                            onClick={() => window.open("https://www.facebook.com/AEventsStyling/reviews", "_blank")} 
                            className="relative h-12 w-64 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-72 before:w-72 before:origin-top-right before:-translate-x-full before:translate-y-24 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 mt-6">
                            <span className="relative z-10">Reviews & Recommendations</span>
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="bg-white p-6 shadow-lg">
                        <img src="/images/panel-image5.jpg" alt="Event Image" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="relative p-16 md:p-24 lg:p-32 text-center">
                    {/* Background Image with Overlay */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center opacity-70" 
                        style={{ backgroundImage: "url('/images/panel-image6.jpg')" }} 
                    ></div>

                    {/* Overlay to enhance text readability */}
                    <div className="absolute inset-0 bg-gray opacity-50"></div>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black relative z-10">
                        It's Going to be Perfect!
                    </h3>

                    {/* Button */}
                    <button onClick={() => Inertia.visit('/contact')}
                        className="relative z-10 mt-6 h-12 md:h-14 w-64 md:w-64 overflow-hidden border border-white shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-72 before:w-72 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
                        <span className="relative z-10">Let's Plan It</span>
                    </button>
                </section>

                {/* Footer */}
                <footer className="p-8 bg-black text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <h4 className="text-lg font-bold">Services</h4>
                            <ul className="mt-4 space-y-2">
                                <li>UI Design</li>
                                <li>UX Cases</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold">Resources</h4>
                            <ul className="mt-4 space-y-2">
                                <li>Design Systems</li>
                                <li>Development Features</li>
                                <li>Collaboration Features</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold">Support</h4>
                            <ul className="mt-4 space-y-2">
                                <li>Blog</li>
                                <li>Best Practices</li>
                                <li>Support Center</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold">More</h4>
                            <ul className="mt-4 space-y-2">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Legal</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
