import React, { useState } from 'react'
import { VStack } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <VStack spacing={4} align='stretch'>
                <FormControl color='black'>
                    <FormLabel>Email address</FormLabel>
                    <Input  type='email' value={email} onChange={(e) => { setEmail(e.target.value); }} />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' value={password} onChange={(e) => { setPassword(e.target.value); }} />
                </FormControl>
                <Button colorScheme='teal' size='md'>
                    Login
                </Button>
                <Button colorScheme='purple' size='md'>
                    Signup
                </Button>
            </VStack>
        </div>
    )
}

export default Login
