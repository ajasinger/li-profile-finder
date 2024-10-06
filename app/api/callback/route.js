import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request) {
    
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
        return NextResponse.json({ error: 'No code received.' }, { status: 400 });
    }

    try{
        const tokenRes = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
                client_id: process.env.LINKEDIN_CLIENT_ID,
                client_secret: process.env.LINKEDIN_CLIENT_SECRET,
            }),
        });
    
        const tokenData = await tokenRes.json();
        console.log('token_data', tokenData)
        const accessToken = tokenData;

        //set cookie with access token
        const cookie = cookies();
        cookie.set('access_token', accessToken, {
            path: '/',
            httpOnly: true,
        });
    
        //check if cookie exists 
        const hasCookie = cookieStore.has('access_token');
        console.log('hasCookie', hasCookie)

        return NextResponse.json({ message: 'Access token set' }, { status: 200 });
  
    } catch (error) {
        console.error('Error setting cookie with access token', error);
        return NextResponse.json({ error: 'Error setting cookie with access token' }, { status: 500 });
    }
}