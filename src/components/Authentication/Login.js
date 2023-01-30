import React, { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react';
import { FormControl,FormLabel,Input , useToast} from '@chakra-ui/react';
import { useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from '@chakra-ui/react';
import { userLogin } from '../../redux/action/userAction';
import Swal from 'sweetalert2';
const Login = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => { setShow(!show)};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const history = useHistory();


    const { loading, userInfo, error } = useSelector((state) => state.userLogin)

    const handleSubmit = () =>{

        const userData = {
            email,
            password
        };
        dispatch(userLogin(userData));
    }

    useEffect(()=> {
        if(userInfo) {
            Swal.fire({
                icon: 'success',
                title: 'Login Done'
            });
            navigate("/chats");
        }
       
    },[userInfo,navigate]);


    useEffect(()=> {
        if(error) {
            Swal.fire({
                icon: 'error',
                title: 'Try Again'
            });
        }
    },[error]);



    

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
                <Button colorScheme='teal' size='md' onClick={handleSubmit}>
                    Login
                </Button>
                <Button colorScheme='purple' size='md' >
                    Signup
                </Button>
            </VStack>
        </div>
    )
}

export default Login
