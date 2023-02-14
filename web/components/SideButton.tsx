const SideButton = ({border, icon, text} : {border: boolean, icon:string, text: string}) => {
	if(border) {
		return (
			<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
				<img className="invert h-4 w-4" src={icon} alt="" />
				{text}
			</a>
		)
	} else {
		return (
			<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
				<img className="invert h-4 w-4" src={icon} alt="" />
				{text}
			</a>
		)
	}
}

export default SideButton