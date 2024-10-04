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
        console.log('submitted');
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit} className="flex flex-col">
                <label htmlFor="name">Enter a Linkedin URL:</label>
                <div className="flex">
                    <p>https://www.linkedin.com/in/</p>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        className="border-4 border-color:black rounded"
                    />
                </div>
                <button type="submit">Generate PDF</button>
            </form>

        </div>
    )
}