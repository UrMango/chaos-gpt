const Welcome = () => {
	const columns = [
		{
			title: "Examples",
			icon: "./assets/examples.svg",
			isButton: true,
			buttons: [
				"Explain quantum computing in simple terms",
				"Explain quantum computing in simple terms",
				"Explain quantum computing in simple terms",
			]
		},
		{
			title: "Capabilities",
			icon: "./assets/capabilities.svg",
			isButton: false,
			buttons: [
				"Explain quantum computing in simple terms",
				"Explain quantum computing in simple terms",
				"Explain quantum computing in simple terms",
			]
		},
		{
			title: "Limitations",
			icon: "./assets/limitations.svg",
			isButton: false,
			buttons: [
				"Explain quantum computing in simple terms",
				"Explain quantum computing in simple terms",
				"Explain quantum computing in simple terms",
			]
		}
	]

	return (
		<div className='px-6 text-gray-100 w-full md:max-w-3xl'>
			<h1 className='text-4xl font-semibold text-center mt-6 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center'>ChaosGPT</h1>
			<div className='md:flex items-start text-center gap-3.5'>
				{columns.map((coll) => {
					return (
						<div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
							<h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
								<img className='invert h-6 w-6' src={coll.icon}></img>
								{coll.title}
							</h2>
							<ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
								{coll.buttons.map((text) => {
									if(coll.isButton)
										return <button className='w-full bg-gray-50 bg-white/5 p-3 rounded-md hover:bg-black/10 hover:bg-]'>"{text}" →</button>
									else
										return <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">{text}</li>
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