import React from 'react'

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin -ml-1 mr-3 h-16 w-16 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v-4c2.485 0 4.746-.89 6.5-2.375L20 12zm-2-6.292A7.963 7.963 0 0120 12h4c0-3.042-1.135-"
          />
        </svg>
        <span className="text-2xl font-semibold">Loading...</span>
      </div>
    </>
  );
}
