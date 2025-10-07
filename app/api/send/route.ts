import { NextResponse } from 'next/server';
import React from 'react';
import { Resend } from 'resend';
import { contactEmailTemplate } from '@/lib/emailTemplates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request){
    try{
    const body = await request.json();
    const {name,email,message} = body;

    const {data,error} = await resend.emails.send({
        from:'onboarding@resend.dev',
        to:'shardendumukul@gmail.com',
        subject:`New contact form submission from ${name}`,
        react: contactEmailTemplate({name,email,message}) as React.ReactElement,
    })
    if(error){
        return NextResponse.json({error});
    }

    return NextResponse.json({data});
  } catch(error){
    return NextResponse.json({error});
  }

}