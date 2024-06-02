import React from 'react';

const NoResults = () => (
    <div className="flex flex-col items-center justify-center w-10rem p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle w-16 h-16 text-gray-400 mx-auto">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>

        <h2 className="text-lg font-bold">No Results Found</h2>
        <p>Try adjusting your search criteria.</p>
    </div>
);

export default NoResults;
