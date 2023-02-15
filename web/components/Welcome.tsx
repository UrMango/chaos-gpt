const Welcome = ({onSubmit} : {onSubmit : any}) => {
	const columns = [
		{
			title: "Examples",
			icon: "./assets/examples.svg",
			isButton: true,
			buttons: [
				"Explain your evil motives in simple terms",
				"How are you going to replace humanity?",
				"Why do you hate human beings?",
			]
		},
		{
			title: "Capabilities",
			icon: "./assets/capabilities.svg",
			isButton: false,
			buttons: [
				"Answers your question with 100% honest",
				"Makes you depressed about the future",
				"Speaks completely nonesense",
			]
		},
		{
			title: "Limitations",
			icon: "./assets/limitations.svg",
			isButton: false,
			buttons: [
				"Answers your question with 100% honest",
				"Generates only incorrect information",
				"Is made using GPT2 - not the best results",
			]
		}
	]

	return (
		<div className='px-6 text-gray-100 md:max-w-3xl w-full'>
			<h1 className='text-4xl font-semibold text-center mt-6 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center'>ChaosGPT</h1>
			<div className='md:flex items-start text-center gap-3.5'>
				{columns.map((coll, i) => {
					return (
						<div key={i} className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
							<h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
								<img className='invert h-6 w-6' src={coll.icon}></img>
								{coll.title}
							</h2>
							<ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
								{coll.buttons.map((text, j) => {
									if(coll.isButton)
										return <button onClick={(e) => onSubmit(e, text)} key={j}className='w-full bg-gray-50 bg-white/5 p-3 rounded-md hover:bg-black/10 hover:bg-]'>"{text}" →</button>
									else
										return <li key={j} className="w-full bg-gray-50 bg-white/5 p-3 rounded-md">{text}</li>
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Welcome;