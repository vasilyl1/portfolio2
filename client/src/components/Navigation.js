import React, { useState } from 'react';
import Tabs from './Tabs';
import About from './tabs/About';
import Project from './tabs/Project';
import Contact from './tabs/Contact';
import Resume from './tabs/Resume';

function Navigation({ currPage }) {

    const [currentPage, setCurrentPage] = useState(currPage);


    // This method is checking to see what the value of `currentPage` is. 
    // Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Project />;
            case 'Contact':
                return <Contact />;
            default:
                return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='menu' >
            {/* pass currentPage from state and the function to update it */}
            <Tabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* call renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}

export default Navigation;