import { NextRequest,NextResponse } from "next/server";
import connect from '@/dbconfig/dbconfig.js';
import User from '@/models/models.js';

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {name,email,message} = reqBody

        const newUser = new User({
            name:name,
            email:email,
            message:message
        })

        const saveduser = await newUser.save();
        console.log(saveduser);
        return NextResponse.json({message:'data saved',success:true});
    } 
    catch (error) {
        return console.log("something went wrong with api"+error);
    }
}