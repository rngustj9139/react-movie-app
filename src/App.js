import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom' // Switch는 Route를 찾는 역할을 하는데 Route는 url을 의미한다. Link는 한 페이지에서 다른 페이지로 이동할때 react가 재실행되는 것을 막는다.(새로고침 방지)
import Home from './routes/Home'
import Details from './routes/Details'

// 배포하는법 => github page를 이용할 것임 => 1. 터미널에 npm install gh-pages 치기 => 2. 터미널에 npm run build치기 => 그럼 빌드된 패키지가 왼쪽위에 생성된다.

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
