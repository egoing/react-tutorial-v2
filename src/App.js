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
function Article(props){
  return (
    <article>
          <h2>{props.title}</h2>
          {props.description}
      </article>
  );
}
function App() {
  return (
    <div>
      <Header></Header>    
      <Nav></Nav>
      <Article title="Welcome!!" description="Hello, WEB!!"></Article>
    </div>
  );
}

export default App;
