import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


export async function PUT(req: Request) {
    const { name, email, gender, description } = await req.json();
    const prisma = new PrismaClient();
    console.log(name, email);
    try {
        await prisma.user.upsert({
            where: { email: email },
            update: { name, email, gender, description },
            create: { name, email, gender, description },
        });
        console.log("Profile updated successfully!");
    } catch (error) {
        console.error("Failed to update profile.", error);
    }
    return new NextResponse('PUT /profile')
}

export async function DELETE(req: Request) {
    console.log("block 1");
    const { email } = await req.json();
    const prisma = new PrismaClient();
    try {
        await prisma.user.delete({
            where: { email },
        });
        console.log("Profile deleted successfully!");
    } catch (error) {
        console.error("Failed to delete profile.", error);
    }
    return new NextResponse('DELETE /profile')
}