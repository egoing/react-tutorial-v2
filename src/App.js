import logo from './logo.svg';
import './App.css';

function Header(){
  return (
    <header>
      <h1>WEB</h1>
    </header>
  );
}
function Nav(props){
  var lis = [];
  for(var i=0; i<props.data.length; i++){
    var d = props.data[i];
    lis.push(
      <li key={d.id}>
        <a href={'/'+d.id}>{d.title}</a>
      </li>);
  }
  return (
        <nav>
          <ul>
              {lis}
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
      <Nav data={[
        {id:1, title:'html', description:'html is ...'},
        {id:2, title:'css', description:'css is ...'},
        {id:3, title:'javascript', description:'js is ...'}
      ]}></Nav>
      <Article title="Welcome!!" description="Hello, WEB!!"></Article>
    </div>
  );
}

export default App;
