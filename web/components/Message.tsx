
const Message = ({message, sender} : {message : string, sender : boolean}) => {
  return (
	<div className="w-full flex items-center justify-center" style={sender == true ? {backgroundColor: "#343541"} : {backgroundColor: "#444654"}}>
		<div className="m-auto w-full gap-4 md:gap-6 md:max-w-2xl lg:max-w-3xl p-4 py-6 md:py-6 lg:px-0 flex">
			<div className="w-[30px] flex flex-col relative items-end">
				<div className="w-full h-[30px] rounded-sm flex justify-center items-center" style={!sender ? {backgroundColor: "#10a37f"} : {}}>
					<img className="rounded-sm" src={sender ? "./assets/user.jpg" : "./assets/ai.svg"} style={!sender ? {width: "23px", filter: "invert(1)"} : {}} alt="" />
				</div>
			</div>
			<div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
				<p>{message}</p>
			</div>
		</div>
	</div>
  )
}

export default Message