import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers'

export async function GET(request) {

    //delete existing 'access_token' cookie
    cookies().delete('access_token');
    
    try{
        const baseUrl = 'https://www.linkedin.com/oauth/v2/authorization';
        const generateState = uuidv4();

        const queryParams = new URLSearchParams({
            response_type: 'code',
            client_id: process.env.LINKEDIN_CLIENT_ID,
            redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
            scope: 'openid email profile',
            state: generateState,
        });

        return NextResponse.redirect(`${baseUrl}?${queryParams}`);
    
    } catch(error){
        console.log("error in Oauth", error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}