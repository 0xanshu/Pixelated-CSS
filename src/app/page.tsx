"use client";

import { useEffect } from "react";

const REDIRECT_URL = "https://pixelated-css.onrender.com/";

export default function HomePage() {
  useEffect(() => {
    // Client-side redirect
    window.location.href = REDIRECT_URL;
  }, []);

  return (
    <>
      {/* Meta refresh for browsers that don't support JavaScript */}
      <meta httpEquiv="refresh" content={`0; url=${REDIRECT_URL}`} />
      <link rel="canonical" href={REDIRECT_URL} />

      <main className="flex h-screen w-full items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-light text-gray-900">
            Pixelated-CSS
          </h1>
          <p className="mb-4 text-gray-600">
            Redirecting to the new location...
          </p>
          <p className="text-sm text-gray-500">
            If you are not redirected automatically,{" "}
            <a
              href={REDIRECT_URL}
              className="text-blue-600 underline hover:text-blue-800"
            >
              click here
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
