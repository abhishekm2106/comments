/* eslint-disable react/prop-types */
import { useState } from "react"
import { styled } from "styled-components"
import InputBox from "./InputBox"


const FlexContainer = styled.div`
        
        display: flex;
        
    `

const CommentContainer = styled(FlexContainer)`
padding: .5rem;
    img{
        width:auto; 
        height:50px;
        margin-right:1rem;
    }

    button{
        margin-right: 5px;
        padding: 2px 5px;
    }
`



// eslint-disable-next-line react/prop-types
function Comment({ data, setParentsComments, parentComments }) {
    const [reply, setReply] = useState(false)
    const [comments, setComments] = useState([])
    function onPost(input) {
        console.log("on post called")
        const newComments = [
            ...comments,
            {
                name: "Abishek Mohanty",
                comment: input,
                date: new Date().toLocaleString('en-US')
            }
        ]
        setComments(newComments)
        setReply(false)
        console.log(this)
    }

    function handleDelete(id) {
        console.log("delete called ", id)
        console.log(comments)
        let newCommentList = parentComments.filter(comment => comment.date !== id)
        setParentsComments(newCommentList)
    }
    return (
        <CommentContainer>
            <img src="https://lh3.googleusercontent.com/ogw/AGvuzYYYNMR4PI_sGzUXo8HCzyRrigOoP1I8rOKYg2iKJRc=s32-c-mo" alt="" />
            <div>
                <FlexContainer style={{ alignItems: 'center' }}>
                    <h3>{data.name} </h3><p style={{ marginLeft: '5px', fontSize: '10px', fontWeight: 'bold' }}> {data.date}</p>
                </FlexContainer>

                <p>{data.comment}</p>
                <FlexContainer>
                    <button onClick={() => handleDelete(data.date)}>delete</button>
                    {/* <button>edit</button> */}
                    <button onClick={() => setReply(!reply)}>reply</button>
                </FlexContainer>
                {reply && <InputBox onSubmit={onPost} />}
                {
                    comments.map(comment => <Comment data={comment} key={comment.date} setParentsComments={setComments} parentComments={comments} />)
                }
            </div>
        </CommentContainer>
    )
}

export default Comment