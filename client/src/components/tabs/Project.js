import React from 'react';
import { projects } from './../data/portfolio';

function Project() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {projects.map((project) => (
              <div key={project.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={project.href}>
                    <span className="inset-0" />
                    {project.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{project.description}</p>
                <p className="text-base text-gray-900">{project.tech}</p>
                <a href={project.repo}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-slate-900">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                  </svg>
                </a>
                <br></br>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )



  /*
    return (
        <div className={project.class} key={`k${index}`}>
          <div className='box3'>
          <a href = {project.deployment}> {project.name} </a><br></br><br></br><br></br><br></br>
          <a className='h3' href = {project.repo}>GitHub: {project.description}</a>
          <h2>Technologies: {project.tech}</h2>
          </div>
        </div>
    );
  */


}

export default Project;
