import React from 'react'

function God({clicked, name, id}){
	if (clicked){
		return <h3 id={id}>{name}</h3>
	}
	return null;
}

export default function Main({godlist, handleClick}) {
    
    let images = godlist.map( ({ id, url, name, clicked }) => (
		<div
			className='single_pic_div'
			key={id}
			id={id}
			name={name}
			onClick={(e) => handleClick(e)}
			// style={clicked === true ? { background: 'grey' } : { background: 'white' }}
		>
			<img
				id={id}
				src={url}
				alt={name}
				style={{ height: name==='Set' ? "90%" : "100%", marginTop: name==='Set' ? "7%" : "", }}
				/>
			{/* <h3 id={id}>{clicked === true ? `${name}` : ''}</h3> */}
			<God
				id={id}
				name={name}
				clicked={clicked}
			/>
		</div>
	))

    return (
    <div className='all_pics_div'>
			{images}
		</div>
    )
}
