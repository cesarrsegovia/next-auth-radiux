import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page description',
}

async function HomePage(){

  const session = await getServerSession(authOptions);

  if(session) redirect('/dashboard');

  return (
    <Container className="px-5 md:px-0">
      <header className="my-4 bgs-slate-900 p-10 rounded-md">
        <h1 className="text-7xl my-10">Gestión de proyectos</h1>
        <p>Sistema para crear, editar y eliminar proyectos.</p>
      </header>
      <div className="mt-5">
        <Link href="/auth/login" className="text-white bg-blue-500 px-2 py-1 rounded-md">Ingresar</Link>
      </div>
    </Container>
  )
}

export default HomePage;