"use client"
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

function SigninForm() {

    const { control, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })
  return (
    <form onSubmit={onSubmit}>
        <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <TextField.Root>
            <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16"/>
            </TextField.Slot>
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={(field) => {
                    return(
                        <TextField.Root type="email" placeholder="email@domain.com" {...field} />
                    )
                }}
            />
        </TextField.Root>

        {errors.email && <Text color="red">Email is required</Text>}

        <label htmlFor="password">Password</label>
        <TextField.Root >
            <TextField.Slot >
                <LockClosedIcon height="16" width="16"/>
            </TextField.Slot>
            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={(field) => {
                    return(
                        <TextField.Root type="password" placeholder="*******" {...field} />
                    )
                }}
            />
        </TextField.Root>
        {errors.password && <Text color="red">Password is required</Text>}
        <Button>
            Sign In
        </Button>
    </Flex>
    </form>
  );
}
//seguir arreglando el formulario
export default SigninForm;