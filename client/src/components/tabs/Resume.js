import React from 'react';

function Resume() {
  return (
    <div className='n2body-left-2'>
    <h1>Resume</h1><br></br>
    <a href = 'https://docs.google.com/document/d/1D4vjZ32bd7KvrzL8HVomzVeLZNW_UMn4SIrfw0Hkj60/edit?usp=sharing'>Download my resume</a><br></br>
    <p>Front-end Proficiencies</p> <br></br>
    <ul style={{listStyleType: 'square', marginLeft: '3%'}}>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>jQuery</li>
    <li>responsive design</li>
    <li>React</li>
    <li>Bootstrap</li>
    <li>Progressive Web Applications</li>
    </ul><br></br>
    <p>Back-end Proficiencies</p><br></br>
    <ul style={{listStyleType: 'square', marginLeft: '3%'}}>
    <li>API</li>
    <li>Node</li>
    <li>Express</li>
    <li>MySQL, Sequelize</li>
    <li>MongoDB, Mongoose</li>
    <li>IndexedDB</li>
    <li>MVC</li>
    <li>MERN</li>
    <li>GraphQL</li>
    </ul>
    <br></br>
</div>
  );
}

export default Resume;