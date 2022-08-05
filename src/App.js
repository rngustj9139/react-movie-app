import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom' // Switch는 Route를 찾는 역할을 하는데 Route는 url을 의미한다. Link는 한 페이지에서 다른 페이지로 이동할때 react가 재실행되는 것을 막는다.(새로고침 방지)
import Home from './routes/Home'
import Details from './routes/Details'
import './App.css'

/* 배포하는법 => github page를 이용할 것임 => 1. 터미널에 npm install gh-pages 치기 => 2. 터미널에 npm run build치기 => 그럼 빌드된 패키지가 왼쪽위에 생성된다.
=> package.json파일에 "homepage":"https://rngustj9139.github.io/react-movie-app"추가하기(맨뒤는 repo이름) => package.json의 scripts에서 "deploy": "gh-pages -d build" 추가하기
(깃허브 페이지를 실행시키고 build라는 디렉터리를 가져가라는 의미이다. "predeploy":"npm run build"를 붙이면 deploy를 실행하기 전에 predeploy가 자동으로 실행된다.)
=> 터미널에 npm run deploy 실행하기(변경사항 업데이트는 deploy를 하면 predeploy가 자동으로 실행되서 가능하다.) */
function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Details />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}> {/* React router 6버전 사용 중 깃허브 페이지 배포가 안된다면 Route컴포넌트의 path경로 앞에 process.env.PUBLIC_URL을 추가해야함 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
