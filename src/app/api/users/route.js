import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Hola desde API Users",
    });
}

export async function POST() {
    const body = await request.json();

    return NextResponse.json({
        received: body,
    });
}