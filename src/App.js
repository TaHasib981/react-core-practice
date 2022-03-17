import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <Comments></Comments>
    </div>
  )
}



function Counter (){
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1)
  const handleDicrease = () => setCount(count - 1)
  return(
    <div>
      <h2>Counting Here</h2>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDicrease}>Dicrease</button>
    </div>
  )
}

function Comments (){
  const [comments, setComment] = useState([])
  console.log(comments);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComment(data) )
  },[])

  return(
    <div>
      <h1>Comments </h1>
      <h3>Total Comments: {comments.length}</h3>
      {
        comments.map(comment => <AllComment email={comment.email} body={comment.body} ></AllComment> )
      }
    </div>
  )
}
function AllComment (props){
  return(
    <div style={{border:'2px solid red', margin: '20px', padding:'15px'}}>
      <p>{props.email}</p>
      <p>{props.body}</p>
    </div>
  )
}
export default App;