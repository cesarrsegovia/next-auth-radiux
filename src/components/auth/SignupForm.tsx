"use client"
import { Flex, TextField, Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

function SignupForm() {

    const {control, handleSubmit} = useForm({
        values: {
            name: '',
            email: '',
            password: ''
        }
    })
    // asdad
    const onSubmit = handleSubmit(data => {
        console.log(data);
    });

  return (
    <form onSubmit={onSubmit}>
        <Flex direction="column" gap="2">
        <label htmlFor="name">Name:</label>
        <TextField.Root>
            <TextField.Slot>
                <PersonIcon height="16" width="16"/>
            </TextField.Slot>
            <Controller
                name="name"
                control={control} 
                rules={{ required: {
                    value: true,
                    message: "Name is required"
                } }}
                render={({field}) => {
                    return(
                        <TextField.Root type="text" placeholder="Escribe tu nombre" autoFocus {...field}/>
                    )
                }}
            />
        </TextField.Root>

        <label htmlFor="email">Email</label>
        <TextField.Root>
            <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16"/>
            </TextField.Slot>
            <Controller 
                name="email"
                control={control}
                rules={{ required: {
                    value: true,
                    message: "Email is required"
                } }}
                render={({field}) => {
                    return(
                        <TextField.Root type="email" placeholder="hola@asd.com" {...field}/>
                    )}}
            />
        </TextField.Root>

        <label htmlFor="password">Password</label>
        <TextField.Root >
            <TextField.Slot >
                <LockClosedIcon height="16" width="16"/>
            </TextField.Slot>
            <Controller 
                name="password"
                control={control}
                rules={
                    { required: {
                        value: true,
                        message: "Password is required"
                    },
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                    } }
                }
                render={({field}) => {
                    return(
                        <TextField.Root type="password" placeholder="*******" {...field}/>
                    )}}
            />
        </TextField.Root>
        <Button type="submit" mt="4">
            Sign Up
        </Button>
    </Flex>
    </form>
  );
}
//seguir arreglando el formulario
export default SignupForm;