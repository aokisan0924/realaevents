import React, { useEffect } from "react";
import NavBar from "@/Components/NavBar";

const debut = () => {
    useEffect(() => {
        document.title = 'Packages - Real A Styling Events & Catering Services';
    }, []);

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar />
            <h1>Packages</h1>
        </div>
    );
};

export default debut;