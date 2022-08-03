// import {useState} from 'react'
// import {useEffect} from 'react'

// function App() {
//   let [loading, setLoading] = useState(true)
//   let [coins, setCoins] = useState([])

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers") // fetch는 특정 Api로부터 json 데이터를 받아오는 역할을 한다.
//           .then((response) => response.json())
//           .then((json) => {
//             setCoins(json); 
//             setLoading(false);
//           })
          
//   }, [])

//   return (
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading ? <strong>Loading...</strong> : null} 

//       <ul>
//         {coins.map((coin, index) => <li key={index}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</li>)} 
//       </ul>
//     </div>
//   );
// }

// export default App;
