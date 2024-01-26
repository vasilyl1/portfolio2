import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Front-end Proficiencies',
    description: 
      'HTML, CSS, JavaScript, jQuery, responsive design, React, Bootstrap, Progressive Web Applications',
  },

  {
    id: 2,
    title: 'Back-end Proficiencies',
    description:
      'API, Node, Express, MySQL, Sequelize, MongoDB, Mongoose, IndexedDB, MVC, MERN, GraphQL',
  },
]

function Resume() {
  return (

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Full Stack Web Developer</h2>
          <a 
            className="mt-2 text-lg leading-8 text-gray-600"
            href='https://docs.google.com/document/d/1D4vjZ32bd7KvrzL8HVomzVeLZNW_UMn4SIrfw0Hkj60/edit?usp=sharing'
          >
            Click here to download my Resume.
          </a>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <p>
                    <span className="absolute inset-0" />
                    {post.title}
                  </p>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>





    /*
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
*/
  );
}

export default Resume;