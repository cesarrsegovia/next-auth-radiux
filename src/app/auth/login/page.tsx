import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
//import { BookmarkIcon } from "@radix-ui/react-icons";
import SigninForm from "@/components/auth/SigninForm";
import  NavLink  from "next/link";

function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
            <Card className="w-full p-7">
                <Heading>Sign In</Heading>
                <SigninForm/>
                <Flex justify="between" my="4">
                  <Text>
                    No tienes cuenta?
                  </Text>
                  <Link asChild>
                    <NavLink href="/auth/register" passHref>Registrate</NavLink>
                  </Link>
                </Flex>
            </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;