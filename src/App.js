import React, { useState } from 'react'

import GodList from './Assets'
import Main from './Main'
import Sidebar from './Sidebar'

export default function App() {

	const [godlist, setGodlist] = useState(GodList)

	const shuffle = (x) => {
		let piclistA = [...x]
		let piclistB = []
		while (piclistA.length > 0) {
			let i = Math.floor(Math.random() * piclistA.length)
			piclistB.push(...piclistA.splice(i, 1))
		}
		piclistB = piclistB.map(x => ({...x, clicked: false}))
		setGodlist(piclistB)
	}

	const handleClick = (e) => {
		if (godlist.find(x => x.id === parseInt(e.target.id)).clicked === false) {
			const newPiclist = godlist.map(x => x.id === parseInt(e.target.id) ? { ...x, clicked: true } : { ...x, clicked: false } )
			setGodlist(newPiclist)
		} else {
			const newPiclist = godlist.map(x => x.id === parseInt(e.target.id) ? { ...x, clicked: false } : x )
			setGodlist(newPiclist)
		}
	}

	return (
		<div style={{ 
			display: 'flex', 
			flexDirection:'column', 
			height: '100%', 
			//border: 'solid 3px black'
			}}>
			<main>
				<Sidebar
					shuffle={shuffle}
					godlist={godlist}
				/>
				<Main
					godlist={godlist}
					handleClick={handleClick}
				/>
			</main>
		</div>
	)
}