import { useState } from "react"
import { styled } from "styled-components"

const InputBoxElement = styled.form`
    display: flex;

    button{
        background-color: black;
        color: white;
        margin-left: .5rem;
    }
`

// eslint-disable-next-line react/prop-types
function InputBox({ onSubmit }) {
    const [input, setInput] = useState('')
    return (
        <InputBoxElement onSubmit={(e) => { e.preventDefault(); onSubmit(input) }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Post</button>
        </InputBoxElement>
    )
}

export default InputBox