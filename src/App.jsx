import './app.css'
import ChatBot from './assets/Chatbot';

import { useState } from 'react';

function App() {
const [userInfo, setUserInfo] = useState(null)

  return (
    <>
    <div>

   <h1> AI chatBot </h1>

<ChatBot />



 </div>
  </>
  )
}
export default App;