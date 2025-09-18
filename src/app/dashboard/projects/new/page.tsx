"use client"
import { Button, Container, TextArea, TextField, Flex, Card, Heading } from "@radix-ui/themes"
import { useForm, Controller } from "react-hook-form"
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";

function TaskNewPage() {

    const router = useRouter();
    const params = useParams();

    const {control, handleSubmit} = useForm({
        values:{
            title: '',
            description: ''
        }
    });

    const onSubmit = handleSubmit(async(data) => {
        console.log(data)
        if(params.projectId){
            const res = await axios.post('/api/projects', data)
            if(res.status === 201){
                router.push('/dashboard')
                router.refresh(); //refresca la pagina para que se vea el nuevo proyecto -- borra el cache y vuelve a cargar la pagina
        }else{
            console.log("actualizando")
        }
        }
    })

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
                            <Button color="red">
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