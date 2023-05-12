import React from 'react'

export default function Sidebar({shuffle, godlist}) {
    return (
        <div className='sidebar'>
			<h1>Learn some of the main Egyptian deities</h1>
            <br />
			<h3>Click on an image to learn about the deity</h3>
            <br />
        
            <button onClick={()=>shuffle(godlist)}>Shuffle</button>
            <br />
            <br />
            {godlist.find(x=>x.clicked===true)
                ?   godlist.map(x=>x.clicked===true && <div><h3>{x.name}</h3><p>{x.description}</p></div>)
                :   <div>
                        <h3>Acknowledgements</h3>
                        <p>Images are from the wonderful website, <a href="https://symbolsage.com/egyptian-gods-list/">SymbolSage</a>. Information about the gods is from <a href="https://symbolsage.com/egyptian-gods-list/">SymbolSage</a>, <a href="https://www.britannica.com/list/11-egyptian-gods-and-goddesses">Britannica</a>, and <a href="https://www.worldhistory.org/article/885/egyptian-gods---the-complete-list/">WorldHistory</a>.</p>
                    </div>
            }
        </div>
    )
}
