import React, {useState} from 'react'

export default function Item () {

    const [itemArray, setItemArray] = useState(["Item 1", "Item 2"])
    function addItem () {
        setItemArray(myArray => [...myArray, `Item ${myArray.length + 1}`])
    }

    let itemsHtml = itemArray.map(item => <p key={item}>{item}</p>)

    return (
        <div>
            <button onClick={addItem}> Add Item</button>
            {itemsHtml}
        </div>
    )
}