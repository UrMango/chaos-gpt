"use client"

import SideButton from "./SideButton";

const Sidebar = () => {

	return (
		<div className="hidden md:flex bg-[#202123] border-white/2 min-w-[260px] h-screen md:flex-col p-2 flex-col space-y-1">
			<SideButton border={true} text={"New chat"} icon={"./assets/plus.svg"} />
		</div>
	)
}

export default Sidebar