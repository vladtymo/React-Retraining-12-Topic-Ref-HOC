import React from 'react'

function RefExample() {
    const [name, setName] = React.useState('')
    const inputRef = React.useRef()

    // const onNameChanges = (event) => {
    //     setName(event.target.value)
    // }

    const handleClick = () => {
        //console.log(inputRef.current.value)
        inputRef.current.focus()

        if (inputRef.current)
            alert(`Hello dear ${inputRef.current.value}`);
    }
    return (
        <>
            <h2>Ref Example</h2>
            <label>Enter your name: </label>
            <input type='text' ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} /*onChange={onNameChanges}*/ />
            <button onClick={handleClick}>OK</button>
            <hr />
            <p>Hello dear, {inputRef.current?.value}!</p>
        </>
    )
}

export default RefExample