import React, { useEffect } from "react";
import NavBar from "@/Components/NavBar";

const About = () => {
    useEffect(() => {
        document.title = 'About Us - Real A Styling Events & Catering Services';
    }, []);

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar />
            <h1></h1>
        </div>
    );
};

export default About;