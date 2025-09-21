import prisma from "@/libs/prisma"
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server"


export async function DELETE(request: Request, { params }: { params: { id: string } }) {

    try {
        const projectDeleted = await prisma.project.delete({
            where: {
                id: parseInt(params.id)
            }

        })
        return NextResponse.json(projectDeleted, { status: 200 });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return NextResponse.json({ message: "Project not found" }, { status: 404 });
            }
        }
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}