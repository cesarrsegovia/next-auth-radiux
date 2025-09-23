import prisma from "@/libs/prisma"
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> } // 👈 params es Promise
) {
  const { id } = await context.params; // 👈 se espera el promise

  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // 👈 esperar params

  try {
    const projectDeleted = await prisma.project.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json(projectDeleted, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { message: "Project not found" },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; 
  const data = await request.json();

  try {
    const projectUpdated = await prisma.project.update({
      where: { id: parseInt(id) },
      data,
    });

    return NextResponse.json(projectUpdated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating project" },
      { status: 500 }
    );
  }
}