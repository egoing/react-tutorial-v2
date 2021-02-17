import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
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
  const [mode, setMode] = useState('READ');
  var article = null;
  if(mode === 'WELCOME'){
    article = <Article title="Welcome!!" description="Hello, WEB!!"></Article>;
  } else if(mode === 'READ'){
    article = <Article title="READ!!" description="Hello, WEB!!"></Article>
  }
  return (
    <div>
      <Header onChangeMode={function(){
        console.log('Header!!!');
        setMode('WELCOME');
      }}></Header>    
      <Nav 
      onChangeMode={function(topic_id){
        console.log('Nav!!!', topic_id);
        setMode('READ');
      }}
      data={[
        {id:1, title:'html', description:'html is ...'},
        {id:2, title:'css', description:'css is ...'},
        {id:3, title:'javascript', description:'js is ...'}
      ]}></Nav>
      {article}
    </div>
  );
}

export default App;
