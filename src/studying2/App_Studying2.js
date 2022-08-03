// import {useState} from 'react'

// function App() {
//   let [toDo, setToDo] = useState("")
//   let [toDos, setToDos] = useState([])

//   const onChange = (event) => {
//     setToDo(event.target.value)
//     console.log(toDo)
//   }

//   const onSubmit = (event) => {
//     event.preventDefault() // a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행됩니다. preventDefault 를 통해 이러한 동작을 막아줄 수 있습니다.
//     if (toDo === "") {
//       return
//     }

//     setToDos((current) => [toDo, ...current]) // toDos 배열에 toDo 추가
//     console.log(toDos)

//     setToDo("") // submit을 클릭하면 input창의 텍스트가 사라진다.
//   }

//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input type="text" placeholder="Write your to do..." value={toDo} onChange={onChange} />
//         <button>Add To Do</button>
//       </form>

//       <hr />

//       <ul>
//         {toDos.map((item, index) => (<li key={index}>{item}</li>))} {/* map을 쓸때는 index도 명시해주어야 warning이 발생하지 않는다. */}
//       </ul>
//     </div>
//   );
// }

// export default App;
