import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ChatPage = () => {
  const { user, setUser } = ChatState();
  const history = useHistory();
  const [fetchAgain, setFetchAgain] = useState(false);

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
      setFetchAgain(false);
    }, [history]);
    
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;