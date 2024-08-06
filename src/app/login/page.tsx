import { Stack } from '@chakra-ui/react';
import Navbar from '../_components/navbar';
import { ExplanatorySection } from '../_components/ExplanatorySection';
import { LoginForm } from '../_components/LoginForm';
import '../globals.css';

export function LoginPage() {
    return (
        <>
            <Navbar />
            <Stack
                spacing={0}
                paddingStart={0}
                align="center"
                maxWidth="100%"
                margin="0 auto"
                bg="#A6AE4F"
                minHeight="100vh"
                direction="row"
            >
                <ExplanatorySection />
                <LoginForm />
            </Stack>
        </>
    );
}

export default LoginPage;
n