"use client"
import React, { useState } from "react";

const ChatInput = ({disabled, onSubmit} : {disabled: boolean, onSubmit : any}) => {
	const [text, setText] = useState("");

	return (
		<div className="relative w-full flex flex-col py-2 md:py-3 md:pl-4 border border-black/10 bg-[#40414f] rounded-md shadow-[0_0_15px_rgba(0,0,0,0.10)]">
			<form onSubmit={(e) => {setText(""); onSubmit(e, text);} } className="relative space-x-5 py-1 flex w-full flex-row">
				<input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-transparent border-none outline-none"/>
				<button type="submit" className="absolute right-3 h-full p-1 rounded-md hover:text-gray-400 hover:bg-black/50 disabled:hover:bg-transparent">
					<img src="./assets/send.svg" className="invert h-5 w-5 mr-1" alt="" />
				</button>
			</form>
		</div>
	)
}

export default ChatInput;