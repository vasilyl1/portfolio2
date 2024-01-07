import React from 'react';
// importing CSS file as a dependency
import Navigation from './Navigation';
function Header({currPage}) {
    return (
      <div>
        <header className="header">
          <h1>Vasily Likhovaydo</h1>
        </header>
        <header className="hdr1">
          <h1>ideas meet future !</h1>
          <img src={require('./../images/vas-photo.jpeg')} alt=''/>
        </header>
        <Navigation currPage = {currPage}/>
      </div>
    );
  }
  
  export default Header;