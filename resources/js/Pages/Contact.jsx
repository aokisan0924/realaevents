import React, { useEffect } from "react";
import NavBar from "@/Components/NavBar";

const About = () => {
    useEffect(() => {
        document.title = 'Contact Us - Real A Styling Events & Catering Services';
    }, []);

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar />
            <h1>Contact Us</h1>
        </div>
    );
};

export default About;