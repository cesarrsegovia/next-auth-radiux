"use client"
import { Button, Container, TextArea, TextField, Flex, Card, Heading } from "@radix-ui/themes"
import { useForm, Controller } from "react-hook-form"
import axios from "axios";

function TaskNewPage() {

    const {control, handleSubmit} = useForm({
        values:{
            title: '',
            description: ''
        }
    });

    const onSubmit = handleSubmit(async(data) => {
        console.log(data)
        const res = await axios.post('/api/projects', data)
        console.log(res)
    })

  return (
    <div>
        <Container size="1" height="100%" className="p-3 md:p-0">
            <Flex className="h-screen w-full items-center">
                <Card className="w-full p-7">
                    <Heading>Crear proyecto</Heading>
                    <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
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

                        <Button>Crear tarea</Button>
                    </form>
                </Card>
            </Flex>
        </Container>
    </div>
  )
}

export default TaskNewPage