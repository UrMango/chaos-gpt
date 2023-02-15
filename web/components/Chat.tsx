"use client"

import { useEffect, useRef } from "react"
import Message from "./Message"

const Chat = ({chatHistory} : {chatHistory : any[]}) => {
	const messagesEndRef = useRef<any>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [chatHistory]);

	return (	
		<div className="w-full h-full overflow-y-auto">
			{chatHistory.map((message, i) => {
				return <Message	message={message.text} sender={message.sender} />
			})}
			<div ref={messagesEndRef} />
		</div>
  )
}

export default Chat