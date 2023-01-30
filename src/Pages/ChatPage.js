import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChatState } from '../Context/ChatProvider';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import { Box, Text } from "@chakra-ui/layout";
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';
function ChatPage() {

  // const [chats, setChats] = useState([]);

  // const fetchChats = async () => {
  //   const { data } = await axios.get("/api/chat");

  //   setChats(data);
  // };

  // useEffect(()=> {
  //   fetchChats();
  // },[]);

console.log("xdfff");
 const { user } =  ChatState();
 console.log(user);

  return (
    <div  style={{ width: "100%"}}>
      {/* {chats.map((chat) => {
        <div key={chat._id}>{chat.chatName}</div>
      })} */}

     { user && <SideDrawer />}
     <Box
        d="flex"
        justifyContent="space-between"
        bg="white"
        w="100%"
        p="10px"
      >
         {user && <MyChats />}
         {user && <ChatBox />}
      </Box>

      
    </div>
  );
};

export default ChatPage
