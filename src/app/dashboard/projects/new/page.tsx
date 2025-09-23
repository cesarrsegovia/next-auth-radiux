"use client"
import { Button, Container, TextArea, TextField, Flex, Card, Heading } from "@radix-ui/themes"
import { useForm, Controller } from "react-hook-form"
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useEffect } from "react";

function TaskNewPage() {

    const {control, handleSubmit, setValue} = useForm({
        values:{
            title: '',
            description: ''
        }
    });

    const router = useRouter();
    const params = useParams() as {projectId: string};

    const onSubmit = handleSubmit(async (data) => {
  console.log("📦 Data enviada:", data);
  console.log("🆔 projectId:", params.projectId);

  if (!params.projectId) {
    const res = await axios.post("/api/projects", data);
    if (res.status === 201) {
      router.push("/dashboard");
      router.refresh();
    }
  } else {
    const res = await axios.put(`/api/projects/${params.projectId}`, data);
    console.log("📡 Respuesta PUT:", res.data); 
    if (res.status === 200) {
      router.push("/dashboard");
      router.refresh();
    }
  }
});

    const handleDelete = async (projectId: string) => {
        console.log(projectId)
        const res = await axios.delete(`/api/projects/${projectId}`)
            if(res.status === 200){
                toast.success("Proyecto eliminado correctamente")
            }
        router.push('/dashboard')
        router.refresh();
    }

    useEffect(()=> {
        if(params.projectId){
            axios.get(`/api/projects/${params.projectId}`).then((res) => {
                console.log(res);
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            })
        }
    },[])

  return (
    <div>
        <Container size="1" height="100%" className="p-3 md:p-0">
            <Flex className="h-screen w-full items-center">
                <Card className="w-full p-7">
                    <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
                        <Heading>{params.projectId ? "Editar proyecto" : "Nuevo Proyecto"}</Heading>
                        <label>Titulo del proyecto</label>
                        <Controller 
                            name="title"
                            control={control}
                            render={({field}) => {
                                return <TextField.Root size="3" placeholder="Project title" {...field}/>
                            }}
                        />
                        <label>Descripcion</label>
                        <Controller 
                            name="description"
                            control={control}
                            render={({field}) => {
                                return <TextArea size="3" placeholder="Project description" {...field} />
                            }}
                        />

                        <Button>{params.projectId ? "Editar Proyecto" : "Crear Proyecto"}</Button>
                    </form>
                    <div className="flex justify-end my-4">{
                        params.projectId && (
                            <Button color="red" onClick={()=> handleDelete(params.projectId)}>
                                <TrashIcon/>
                                Eliminar Proyecto
                            </Button>
                        )
                    }
                    </div>
                </Card>
            </Flex>
        </Container>
    </div>
  )
}

export default TaskNewPage