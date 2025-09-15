"use client"
import { Button, Container, Heading } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

function DashboardPage(){

    const router = useRouter();

    return(
        <Container className="mt-10">
            <div className="flex justify-between">
                <Heading>Tareas</Heading>
                <Button onClick={()=> router.push('/dashboard/tasks/new')}>Agragar tarea</Button>
            </div>
        </Container>
    )
}

export default DashboardPage;