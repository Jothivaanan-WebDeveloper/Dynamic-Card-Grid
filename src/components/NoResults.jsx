import React from 'react';

const NoResults = () => (
    <div className="flex flex-col items-center justify-center w-10rem p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg className="w-16 h-16 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l6-6m0 0l-6 6m6-6v6m-6 0H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-4m-2 2h4m4-4H8"></path>
        </svg>
        <h2 className="text-lg font-bold">No Results Found</h2>
        <p>Try adjusting your search criteria.</p>
    </div>
);

export default NoResults;
