import logo from './logo.svg';
import './App.css';

function Header(){
  return (
    <header>
      <h1>WEB</h1>
    </header>
  );
}
function Nav(){
  return (
        <nav>
          <ul>
              <li>
              <a href="/1">html</a>
              </li>
              <li>
              <a href="/2">css</a>
              </li>
              <li>
              <a href="/3">javascript</a>
              </li>
          </ul>
      </nav>
  );
}
function Article(){
  return (
    <article>
          <h2>Welcome</h2>
          Hello, WEB!
      </article>
  );
}
function App() {
  return (
    <div>
      <Header></Header>    
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
