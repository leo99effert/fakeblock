import { dbConnect } from "@/app/lib/db";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET() {
  const con = await dbConnect();
  return new NextResponse('connected');
}

export async function POST(request : any) {
  try {
    const userData = await request.json();
    await dbConnect();
    const user = new User(userData);
    await user.save();
    return new NextResponse(user, {status: 201});
  } catch (error) {
    console.log('Error conntection to databe', error);
    return new NextResponse('Error connceting to database', {status: 500});
  }
}