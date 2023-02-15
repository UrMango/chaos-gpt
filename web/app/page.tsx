"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Chat from '../components/Chat';
import ChatInput from '../components/ChatInput';

import Welcome from '../components/Welcome';

const Home = () => {
	const [messagesList, setMessagesList] = useState<any[]>([]);
	const [thinking, setThinking] = useState(false);

	const onSubmit = (e:any, text:string) => {
		e.preventDefault();
		if(thinking) return;
		setThinking(true);

		let newMessageList = [...messagesList];
		newMessageList.push({
			text: text,
			sender: true
		});
		
		newMessageList.push({
			text: "Thinking...",
			sender: false
		});
		setMessagesList(newMessageList);

		// send message to server
		(async () => {
			try {
				const req = await fetch(`http://127.0.0.1:8080/send`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: JSON.stringify({
						text: text
					})
				});
			
				const res = (await req.json()).res.trimStart();
				setThinking(false);
				newMessageList = [...newMessageList];
				newMessageList[newMessageList.length-1].text = res;
				setMessagesList(newMessageList);
			} catch (e) {
				setThinking(false);
			}
		})();
	}
	
	return ( 
		<main className='h-full w-full bg-[#343541] flex-1 items-stretch overflow-hidden'>
			<div className='flex flex-col w-full items-center justify-center h-full text-white'>
				<div className='relative flex flex-col h-screen w-full items-center justify-center md:min-w-[768px] overflow-hidden'>
					{messagesList.length < 1 ? <>
						<div className='w-full flex items-center justify-center md:w-2/3'>
							<Welcome onSubmit={onSubmit} />
						</div>
					</> : <Chat chatHistory={messagesList} />}
					<div className='w-full h-32 md:h-48 flex-shrink-0'></div>
					<div className='absolute bottom-0 w-full md:max-w-3xl md:w-2/3 flex flex-col items-center justify-center'>
						<ChatInput disabled={thinking} onSubmit={onSubmit} />
						<p className='text-xs mt-3 text-white/50 whitespace-nowrap text-center'>ChaosGPT Feb 15 Version. Free Research Preview. Our goal is to make AI systems more honest and realistic with the end-customer. Your feedback will help us improve.</p>
						<p className='text-xs mb-4 text-white/50 whitespace-nowrap text-center'>This is NOT an official OpenAI product, and all the rights reserved to them. This is a parody.</p>
					</div>
				</div>
			</div>
		</main>
		
	)
}

export default Home;