import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const {nome,email,cidade,telefone} = await req.json();
    try{
        const inscrito = await prisma.inscrito.create({
            data:{
                nome,
                email,
                cidade,
                telefone
            },
        });
        return Response.json({message:'OK',inscrito });
    }catch(err){
        return NextResponse.json(
            {
                message: 'Error',
                err
            },
            {
                status:500,
            }
        )

    }
}