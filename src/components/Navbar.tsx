import { Heading, Link, Flex, Container } from '@radix-ui/themes'
import NextLink from 'next/link'
//asdas
function Navbar() {
  return (
    <nav className='bg-zinc-950 py-4'>
        <Container>
            <Flex justify="between" align="center">
                <NextLink href="/" passHref>
                    <Heading>RadixNext</Heading>
                </NextLink> 
                    <ul className='flex gap-x-2'>
                        <li>
                            <Link asChild>
                                <NextLink href="/auth/login" passHref>
                                    Login
                                </NextLink>
                            </Link>
                        </li>
                        <li>
                            <Link asChild>
                                <NextLink href="/auth/register" passHref>
                                    Register
                                </NextLink>
                            </Link>
                        </li>
                        <li>
                            <Link asChild>
                                <NextLink href="/dashboard" passHref>
                                    Dashboard
                                </NextLink>
                            </Link>
                        </li>
                    </ul>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar