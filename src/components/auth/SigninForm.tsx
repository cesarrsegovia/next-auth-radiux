"use client"
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function SigninForm() {

    const { control, handleSubmit, formState: {errors} } = useForm(
        {
            values: {
            email: '',
            password: ''
        }
        }
    );

    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if(!res?.ok){
            console.log(res);
        }

        router.push('/dashboard');
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
                rules={{ required: {
                    value: true,
                    message: "Email is required"
                } }}
                render={({field}) => {
                    return(
                        <TextField.Root type="email" placeholder="email@domain.com" {...field} />
                    )
                }}
            />
        </TextField.Root>

        {errors.email && (<Text color="red" className="text-xs">{errors.email.message}</Text>)}

        <label htmlFor="password">Password</label>
        <TextField.Root>
            <TextField.Slot >
                <LockClosedIcon height="16" width="16"/>
            </TextField.Slot>
            <Controller
                name="password"
                control={control}
                rules={{ required: {
                    value: true,
                    message: "Password is required"
                },
                minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                }}}
                render={({field}) => {
                    return(
                        <TextField.Root type="password" placeholder="*******" {...field} />
                    )
                }}
            />
        </TextField.Root>
        {errors.password && (<Text color="red" className="text-xs">{errors.password.message}</Text>)}
        <Button type="submit" mt="4">
            Sign In
        </Button>
    </Flex>
    </form>
  );
}
//seguir arreglando el formulario
export default SigninForm;