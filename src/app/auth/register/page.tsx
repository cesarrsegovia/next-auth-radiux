import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
//import { BookmarkIcon } from "@radix-ui/react-icons";
import  NavLink  from "next/link";
import SignupForm from "@/components/auth/SignupForm";

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-[calc(100vh-10rem)] w-full items-center">
            <Card className="w-full p-7">
                <Heading>Sign Up</Heading>
                <SignupForm/>
                <Flex justify="between" my="4">
                  <Text>
                    Ya tienes cuenta?
                  </Text>
                  <Link asChild>
                    <NavLink href="/auth/login" passHref>Logueate</NavLink>
                  </Link>
                </Flex>
            </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;