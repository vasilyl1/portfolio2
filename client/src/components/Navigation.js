import React, { useState } from 'react';
import '../styles/Style.css';
import Tabs from './Tabs';
import About from './tabs/About';
import Project from './tabs/Project';
import Contact from './tabs/Contact';
import Resume from './tabs/Resume';
import {projects} from './data/portfolio';

function Navigation({currPage}) {
  
  const [currentPage, setCurrentPage] = useState(currPage);


  // This method is checking to see what the value of `currentPage` is. 
  // Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'About') return <About />;

    // projects is an array of objects imported from portfolio with all the projects data.
    // rendering all items of this array via Project component using .map 
    // and passing index for each element of array for doing a unique key at Project
    if (currentPage === 'Portfolio') 
      return <div className='n2body-right' key='navigation'>
        { projects.map((project,index) => <Project project={project} index={index} />) }
      </div>;

    if (currentPage === 'Contact') return <Contact />;

    // if not returned by this point, only one obvious choice is left
    return <Resume />;
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