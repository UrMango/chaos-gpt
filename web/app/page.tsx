import Link from 'next/link';
import React from 'react';

import Welcome from '../components/Welcome';

const Home = () => {

	return ( 
		<main className='bg-[#343541] flex-1'>
			<div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
				<div className='flex flex-col items-center justify-center h-screen md:min-w-[768px] w-full md:w-2/3'>
					<Welcome />

				</div>
			</div>
		</main>
		
	)
}

export default Home;