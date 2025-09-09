import { useState } from "react";
import axios from "axios";
function ChatBot({setUserInfo}) {

    const[query , setQuery] = useState("")
    const[answer , setAnswer] = useState("")

    function ChangeQuery(e) {
        setQuery(e.target.value)
    }
      function ChangeAnswer(e) {
        setAnswer(e.target.value)
    }
    async function ChatBotForm(e) {
        e.preventDefault()

        setAnswer("loading...")

    try {
        const res = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" , {
            "contents": [
      {
        "parts": [
          {
            "text": `answer to this query: ${query}`
          }
        ]
      }
    ]
        } , {
            headers:{
                "Content-Type": "application/json",
                 "X-goog-api-key": "AIzaSyBHAOQRhKMON1JlaFpi5kRjwHFiQPvOybo"
            }
        } )

        setAnswer(res.data.candidates[0].content.parts[0].text)
    }
    catch (err) {
        console.log(err)
    }
    	

        
    }

    
    return (

        <form onSubmit={ChatBotForm}>

        <div><input type="text" id="" className="querybox" placeholder="write your query here " onChange={ChangeQuery}/>

        </div>

        
       

        <div><button type="submit" className="button"> Submit </button> </div>

        <div className="answer"> {answer} </div>

       </form>
    )
}
export default ChatBot;
