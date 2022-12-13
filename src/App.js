import { Route ,
  Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
   
    <Routes>
     <Route path='/' element={ <Homepage />}  exact/>
     <Route path='/chats' element={ <ChatPage/>} />
     </Routes>
  );
}

export default App;
