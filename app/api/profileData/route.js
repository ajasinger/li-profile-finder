import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request) {
    const {name} = await request.json();

    try{
        // Launch the browser, open a new blank page, navigate the page to a URL & wait for page to load
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.linkedin.com/in/ajasinger', {
            waitUntil: 'networkidle2',
          });

        // Extract data from the page using evaluate
        const profileData = await page.evaluate(() => {
            // You can customize the selectors based on what you need to scrape
            const name = document.querySelector('.pv-text-details__left-panel h1')?.innerText;
            const headline = document.querySelector('.text-body-medium')?.innerText;
            const location = document.querySelector('.pv-top-card--list-bullet li')?.innerText;
            return {
            name,
            headline,
            location,
            };
        });

        // Log the scraped profile data
        console.log('Profile Data:', profileData);
        
        await browser.close();

    }catch(error) {
        console.log(error)
    }

    return NextResponse.json("");
}