import React, { useEffect } from "react";
import NavBar from "@/Components/NavBar"; // Adjusted to match your navbar component name

const Wedding = () => {
    useEffect(() => {
        document.title = 'Packages - Real A Styling Events & Catering Services';
    }, []);

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar />
            <h1>Wedding Package</h1>
            <p>Details about the wedding package will go here.</p>
        </div>
    );
};

export default Wedding;
