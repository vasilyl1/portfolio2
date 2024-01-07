import React from 'react';

const PageNotFound = () => {
    return (
        <div className="text-center my-5">
            <h1>404 Page Not Found</h1>
            <p>Oops! The page you are looking for could not be found.</p>
            <p>Please check the URL or go back to the homepage.</p>
            {/* Add a button to go back to the homepage */}
            <button onClick={() => window.location.href = "/"}>Go to Homepage</button>
        </div>
    );
}

export default PageNotFound;