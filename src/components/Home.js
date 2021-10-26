import React, { useState } from 'react'

export default function Home() {
    const [searchtext, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchtext.length === 0) {
            alert("Enter text")
            return;
        }
        console.log(searchtext);
        setText("");
    }
    return (
        <div style={{ backgroundColor: "#120f1a", height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
                <input id="search-box" type="text" value={searchtext} onChange={(e) => setText(e.target.value)} placeholder="Enter you text" />
                <input style={{ backgroundColor: "black", color: "white", borderColor: "white" }} type='submit' />
            </form>
        </div>
    )
}
