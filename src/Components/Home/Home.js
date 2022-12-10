import React, { createElement, useEffect, useRef, useState } from "react"
import './style.css'
let edit = false
export default function Home() {

    const [list, setList] = useState([]);
    // const [edit, setEdit] = useState(false);
    let parent = useRef()
    let text = useRef()
    let tag = useRef()
    let count = useRef()

    const hi = () => {
        const addedList = new Array(+count.current.value).fill('_')
        setList(addedList)
    }

    let saveEdit = (e) => {
        let parent = e.target.closest(".item")
        parent.firstChild.toggleAttribute('disabled'); 
        parent.lastChild.innerHtml = edit ? 'Edit':'Save'
    }

    let nk = () => {
        console.log('this is nk');
        let allELems = list.map((_, i) => {

            return <div>
           { createElement(tag.current.value,
               { key: i, className: "item" },
                <>
                    <input type="text" value={text.current.value} disabled/>
                    <button>Delete</button>
                    <button onClick = {saveEdit
                    // (e)=>{
                    //     let parent = e.target.closest(".item")
                    //     console.log(parent.firstChild.toggleAttribute('disabled')); 
                    // }
                  
                    }>  
                     {/* {edit?'Edit':'Save'} */}
                    Edit
                    </button>
                </>)}
                </div>
        })

    
        return allELems
    }

    return (
        <div >

            <input type="text" ref={tag} />
            <select name="" id="" ref={count}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <input type="text" ref={text} />
            <input type="text" />
            <button onClick={hi}>Click</button>
            <div className="childs" ref={parent}>
                {list.length ? nk() : ''}

            </div>
        </div>)
}