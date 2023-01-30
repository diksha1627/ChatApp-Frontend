import React, { useEffect , useState } from 'react'
import { VStack } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from "../../redux/action/userAction";
import Swal from 'sweetalert2';
const Signup = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword,setCpassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, userInfo, error } = useSelector((state) => state.userSignUp)


  const handleSubmit = (e) =>{

    const userData = {
        name,
        email,
        password
    };

    dispatch(userSignUp(userData));
  }
  useEffect(()=> {
    if(userInfo) {
        Swal.fire({
            icon: 'success',
            title: 'Signup Done'
        });
    }
},[userInfo]);


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
                <Button colorScheme='teal' size='md' onClick={handleSubmit}>
                    Signup
                </Button>
                <Button colorScheme='purple' size='md' >
                    Already signed up ? Login !
                </Button>
            </VStack>
    </div>
  )
}

export default Signup
