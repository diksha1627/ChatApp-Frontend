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

const Signup = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword,setCpassword] = useState('');


  return (
    <div>
       <VStack spacing={4} align='stretch'>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type='name' value={name} onChange={(e)=>{ setName(e.target.value);}} />
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' value={email} onChange={(e)=>{ setEmail(e.target.value);}}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' value={password} onChange={(e)=>{ setPassword(e.target.value);}}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type='password' value={cpassword} onChange={(e)=>{ setCpassword(e.target.value);}}/>
                </FormControl>
                <Button colorScheme='teal' size='md'>
                    Signup
                </Button>
                <Button colorScheme='purple' size='md'>
                    Already signed up ? Login !
                </Button>
            </VStack>
    </div>
  )
}

export default Signup
