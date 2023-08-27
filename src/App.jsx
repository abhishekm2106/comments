import { useState } from 'react'
import './App.css'
import Comment from './components/Comment'
import { styled } from 'styled-components'

const Body = styled.div`
  padding: 2rem 10rem;
  form{
    display: flex;
    input{
      width: 90%;
    }
  }
`

function App() {
  const [comments, setComments] = useState([])
  const [input, setInput] = useState('')

  function onFormSubmit(e) {
    e.preventDefault();
    const newComments = [
      ...comments,
      {
        name: "Abishek Mohanty",
        comment: input,
        date: new Date().toLocaleString('en-US')
      }
    ]
    console.log(newComments)
    setComments(newComments)
    setInput('')
  }

  return (
    <Body>
      <form onSubmit={onFormSubmit}>
        <input placeholder='Join The Discussion!' type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button type='submit'>POST</button>
      </form>
      {
        comments.map(comment => <Comment data={comment} key={comment.date} setParentsComments={setComments} parentComments={comments} />)
      }
    </Body>

  )
}

export default App
