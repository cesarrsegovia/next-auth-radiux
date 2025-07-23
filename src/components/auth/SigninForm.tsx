"use client"
import { Flex, TextField, Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

function SigninForm() {
  return (
    <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <TextField.Root>
            <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16"/>
            </TextField.Slot>
            <TextField.Root type="email" placeholder="email@domain.com"/>
        </TextField.Root>

        <label htmlFor="password">Password</label>
        <TextField.Root >
            <TextField.Slot >
                <LockClosedIcon height="16" width="16"/>
            </TextField.Slot>
            <TextField.Root type="password" placeholder="*******"/>
        </TextField.Root>
        <Button>
            Sign In
        </Button>
    </Flex>
  );
}
//seguir arreglando el formulario
export default SigninForm;