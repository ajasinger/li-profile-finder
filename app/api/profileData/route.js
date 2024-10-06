import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { cookies } from 'next/headers';

export async function POST(request) {
    const {name} = await request.json();

    try{

        // const cookie = cookies()
        // const accessToken = cookie.get('access_token')

        const res = await fetch('https://www.linkedin.com/in/ceonyc');
        const html = await res.text();

        console.log(html);


        // Launch the browser, open a new blank page, navigate the page to a URL & wait for page to load
        // const browser = await puppeteer.launch({ headless: false });
        // const page = await browser.newPage();
        // await page.goto('https://www.linkedin.com/in/ajasinger', {
        //     waitUntil: 'networkidle2',
        //   });

        // // Extract data from the page using evaluate
        // const profileData = await page.evaluate(() => {
        //     // You can customize the selectors based on what you need to scrape
        //     const name = document.querySelector('.pv-text-details__left-panel h1')?.innerText;
        //     const headline = document.querySelector('.text-body-medium')?.innerText;
        //     const location = document.querySelector('.pv-top-card--list-bullet li')?.innerText;
        //     return {
        //     name,
        //     headline,
        //     location,
        //     };
        // });

        // // Log the scraped profile data
        // console.log('Profile Data:', profileData);
        
        // await browser.close();

    }catch(error) {
        console.log(error)
    }

    return NextResponse.json("");
}


// Fetch LinkedIn profile data
// const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
//   const profileData = await profileResponse.json();
//   console.log('profileData', profileData);

//   // Fetch LinkedIn email data
//   const emailResponse = await fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
//   const emailData = await emailResponse.json();
//   console.log('emailData', emailData)
// const emailAddress = emailData.elements[0]['handle~'].emailAddress;

//   // Return the profile and email data
//   return NextResponse.json({
//     profile: profileData,
//     email: emailAddress,
//   });