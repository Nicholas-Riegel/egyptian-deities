import React from 'react'

export default function Sidebar({shuffle, godlist}) {
    return (
        <div className='sidebar'>
			<h1>Learn about the Egyptian deities!</h1>
            <br />
			<h3 style={{ marginTop: '2rem' }}>Click an image to test your memory and learn more!</h3>
            <br />
        
            <button onClick={()=>shuffle(godlist)} style={{ width: '4rem', marginTop: '1rem', marginBottom: '2rem'}}>Shuffle</button>
            <br />
            <br />
            {godlist.find(x=>x.clicked===true)
                ?   godlist.map(x=>x.clicked===true && <div><h3>{x.name}</h3><p>{x.description}</p></div>)
                :   <div>
                        <h3>Acknowledgements</h3>
                        <p>Images: <a href="https://symbolsage.com/egyptian-gods-list/">SymbolSage</a>.</p> <p>Information: <a href="https://symbolsage.com/egyptian-gods-list/">SymbolSage</a>, <a href="https://www.britannica.com/list/11-egyptian-gods-and-goddesses">Britannica</a>, <a href="https://www.worldhistory.org/article/885/egyptian-gods---the-complete-list/">WorldHistory</a>.</p>
                    </div>
            }
        </div>
    )
}
