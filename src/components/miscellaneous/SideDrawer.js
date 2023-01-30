import React, { useState } from 'react'
import { Box, Text } from "@chakra-ui/layout";
import { BellIcon , ChevronDownIcon } from "@chakra-ui/icons";
import { Tooltip , Button, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { ChatState } from '../../Context/ChatProvider';
import userEvent from '@testing-library/user-event';
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@chakra-ui/input";
import UserListItem from "../UserAvatar/UserListItem";
import ChatLoading from "../ChatLoading";
import { useToast } from "@chakra-ui/toast";
import NotificationBadge from "react-notification-badge";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Spinner } from "@chakra-ui/spinner";
import axios from 'axios';
const SideDrawer = () => {
   const [search , setSearch] = useState("");
   const [searchResult, setSearchResult] = useState([]);
   const [loading, setLoading] = useState(false);
   const [loadingChat, setLoadingChat] = useState(false);

   const { user , setSelectedChat , chats , setChats} = ChatState();

   const navigate = useNavigate();

   const logoutHandler = () => {
     localStorage.removeItem("userInfo");
     navigate("/");
   }

   const { isOpen , onOpen , onClose } = useDisclosure;

   const toast = useToast();

   const handleSearch = async() => {

    if(!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left"
      });
      return;
    }
      try {
        setLoading(true);

        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.get(`/api/user?search=${search}`, config);
        
        if(!chats.find((c)=> c._id === data._id)){
          setChats([data,...chats]);
        }

        setSelectedChat(data);
        setLoadingChat(false);
        setSearchResult(data);
      } catch (error) {
        toast({
          title: "Error Occured",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left"
        });
      }

   }

   const accessChat = async(userId) => {
      try {
          setLoadingChat(true);

          
          const config = {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          };

          const { data } = await axios.post('/api/chat' , {userId},config);

          setSelectedChat(data);
          setLoadingChat(false);
          onClose()
      } catch (error) {
        toast({
          title: "Error fetching the chat",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left"
        });
      }
   };


  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
       <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
           <Button variant="ghost" onClick={onOpen}> 
              <i className='fas fa-search'></i>
              <Text d={{ base: "none" , md: "flex" }}>Search User</Text>
           </Button>
       </Tooltip>
       <Text fontSize="2xl" fontFamily="Work sans">
           Talk-A-Tive
       </Text>

       <div>
           <Menu>
               <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                 <Avatar size="sm" cursor="pointer" 
                 name={user.name}
                 src={user.pic} />
               </MenuButton>
               <MenuList>
                  <MenuItem>My Profile</MenuItem>
                  <MenuDivider/>
                  <MenuItem  onClick={logoutHandler} >Logout</MenuItem>
               </MenuList>
           </Menu>
       </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box d="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer
