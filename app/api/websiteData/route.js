import { NextResponse } from 'next/server';

export async function POST(request) {
    const {name} = await request.json();

    const res = await fetch('https://www.linkedin.com/in/ajasinger');
    const html = res.text();
    console.log('html', html);

    return NextResponse.json("");
}