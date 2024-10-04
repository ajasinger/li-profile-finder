'use client';
import { useState } from 'react';

export default function Form() {
    //state 
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


// Create a React web app that takes a LinkedIn URL and spits out a personalized PDF resume

// Project Requirements:
// - Deliver a Github repository, ready for npm i && npm start
// - Use any web scraper you'd like, (or even the LinkedIn API if you manage to get access)
// - Use react-pdf (https://react-pdf.org/) to generate the output
// - The resume should include the full work and/or education sections. Anything else is optional
// - Ensure the PDF contains a header and/or footer that repeats on every page
// - Include the person's profile picture somewhere in the PDF

    //function 
    //onChange
    //onSubmit

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        
        const res = await fetch('/api/websiteData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });

        if(!res.ok) {
            setError(true);
            console.log('fetch error in handleFormSubmit')
        }

        const data = await res.json();
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <label htmlFor="name">Enter a Linkedin URL:</label>
                <div className="flex items-center">
                    <p>https://www.linkedin.com/in/</p>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoComplete="name"
                        placeholder="janedoe"
                        className="border-4 border-color:black rounded"
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    className="p-6 bg-blue text-black"
                >
                    Generate PDF
                </button>
            </form>

        </div>
    )
}