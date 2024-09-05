'use client';
import { useState, useEffect } from "react";
import React from 'react'

const HomeComponent = () => {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [count, setCount] = useState(0);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch('https://urlshortenrbackend-ed843dpqz-abdulmateens-projects.vercel.app/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: longUrl})
      });

      const data = await response.json();
      setShortUrl(data.shortUrl);
      // setLongUrl("");
      console.log(data);
    }
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        <div>
          <h1 className="text-6xl font-bold text-red-600">Url Shortener</h1>
        </div>
        <div className="">
          <h2 className="text-xl font-medium">Paste your long Url here</h2>
          <div className="flex flex-row gap-2">
            <input onChange={(e) => {setLongUrl(e.target.value)}} type="text" placeholder="Enter the link here" required/>
            <button onClick={handleSubmit}>Shorten Url</button>
          </div>
          {shortUrl && (
            <div className="mt-4">
              <p>Your shortened Url: <a onClick={() => {setCount(count + 1)}} href={longUrl} target="_blank" rel="noopener noreferral">{shortUrl}</a></p>
              {count && (
                <div>
                  <p>Url has been clicked <strong>{count}</strong> times</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default HomeComponent;