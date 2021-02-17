import logo from './logo.svg';
import './App.css';

function Header(props){
  return (
    <header>
      <h1><a href="/" onClick={function(e){
        e.preventDefault();
        props.onChangeMode();
      }}>WEB</a></h1>
    </header>
  );
}
function Nav(props){
  var lis = [];
  for(var i=0; i<props.data.length; i++){
    var d = props.data[i];
    lis.push(
      <li key={d.id}>
        <a data-id={d.id} onClick={function(e){
          props.onChangeMode(e.target.dataset.id);
          e.preventDefault();
        }}
            href={'/'+d.id}>{d.title}</a>
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
      <Header onChangeMode={function(){
        console.log('Header!!!');
        // Article 영역에 Welcome 페이지를 출력한다. 
      }}></Header>    
      <Nav 
      onChangeMode={function(topic_id){
        console.log('Nav!!!', topic_id);
        // Nav 영역에 Welcome 페이지를 출력한다. 
      }}
      data={[
        {id:1, title:'html', description:'html is ...'},
        {id:2, title:'css', description:'css is ...'},
        {id:3, title:'javascript', description:'js is ...'}
      ]}></Nav>
      <Article title="Welcome!!" description="Hello, WEB!!"></Article>
    </div>
  );
}

export default App;
