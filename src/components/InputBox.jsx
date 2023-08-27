import { useState } from "react"
import { styled } from "styled-components"

const InputBoxElement = styled.div`
    display: flex;

    button{
        background-color: black;
        color: white;
        margin-left: .5rem;
    }
`

// eslint-disable-next-line react/prop-types
function InputBox({ onClick }) {
    const [input, setInput] = useState('')
    return (
        <InputBoxElement>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => onClick(input)}>Post</button>
        </InputBoxElement>
    )
}

export default InputBox