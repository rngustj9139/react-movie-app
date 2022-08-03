// import Button from "./studying1/components/Button"
// import styles from "./studying1/components/App.module.css"
// import {useState} from 'react'
// import {useEffect} from 'react'

// function ShowHello() { // App() 함수에서 이걸 불러들이므로 useEffect 안의 콘솔내용이 버튼을 클릭할때마다 계속 실행된다.
//   useEffect(() => {
//     console.log("created :)")

//     return () => {console.log("destroyed")} // 버튼을 눌러 버튼 위의 내용이 삭제될때(컴포넌트가 사라질때) 실행할 함수이다. (clean up 함수라고 부른다.)
//   }, [])

//   return (
//     <h1>Hello</h1>
//   )
// }

// function App() {
//   let [counter, setCounter] = useState(0)
//   let [keyword, setKeyword] = useState("")
//   let [show, setShow] = useState(false)

//   const countUp = () => {
//     setCounter((prev) => prev + 1)
//   }

//   const onChange = (event) => {
//     setKeyword(event.target.value)
//   }

//   const onClick = () => {
//     setShow((prev) => !prev)
//   }

//   /* state의 값이 변할때마다 리렌더링 되므로 이 콘솔은 계속 나타날것임 
//   => 처음 코드가 실행될때만 렌더링하고 나중에 state가 바뀌어도 재실행되지 않게 하기 위해서는 useEffect를 사용해야한다. */
//   console.log("I'm re rendered when state updates") 

//   // const imRenderedOnlyOnce = () => {
//   //   console.log("I'm rendered only once")
//   // }

//   // useEffect(imRenderedOnlyOnce, [])

//   useEffect(() => { // state가 변화해도 아래 코드는 딱 처음에 코드가 실행 될때만 랜더링 된다.
//     console.log("I'm rendered only once")
//   }, [])

//   useEffect(() => { // keyword라는 state만 변경될때 console.log를 실행하고 싶으면(리렌더링) 아래와 같이 해야한다.
//     console.log("Search for", keyword)
//   }, [keyword])

//   return (
//     <div>
//       <h1 className={styles.title}>Hello, World!</h1>
//       <Button text={"Continue"}/>

//       <h1>{counter}</h1>
//       <button onClick={countUp}>Click me!</button>

//       <input type="text" placeholder="Search here..." onChange={onChange} value={keyword} />

//       <br />

//       {show ? <ShowHello /> : null}
//       <button onClick={onClick}>{show ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// export default App;
