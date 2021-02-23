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
          props.onChangeMode(Number(e.target.dataset.id));
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
function Control(props){
  return <ul>
    <li><a href="/create/topics" onClick={function(e){
      e.preventDefault();
      props.onChangeMode('CREATE');
    }}>create</a></li>
  </ul>
}
function Create(props){
  return <article>
    <h1>Create</h1>
    <form action="/topics/create" method="POST" onSubmit={function(e){
      e.preventDefault();
      props.onSubmit({
        title:e.target.title.value,
        description:e.target.description.value
      })
    }}>
      <p><input type="text" name="title" placeholder="title"></input></p>
      <p><textarea name="description" placeholder="description"></textarea></p>
      <p><input type="submit"></input></p>
    </form>
  </article>
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
  const [selectedId, setSelectedId] = useState(null);
  const [topics, setTopics] = useState([
    {id:1, title:'html', description:'html is ...'},
    {id:2, title:'css', description:'css is ...'},
    {id:3, title:'javascript', description:'js is ...'}
  ]);
  var article = null;
  if(mode === 'WELCOME'){
    article = <Article title="Welcome!!" description="Hello, WEB!!"></Article>;
  } else if(mode === 'READ'){
    for(var i=0; i<topics.length; i++){
      var d = topics[i];
      if(d.id === selectedId){
        article = <Article title={d.title} description={d.description}></Article>
      }
    }
  } else if(mode === 'CREATE'){
    article = <Create onSubmit={function(data){
      console.log('data', data);
      var newTopics = [...topics];
      newTopics.push(
        {id:0, title:data.title, description:data.description}
      );
      setTopics(newTopics);
    }}></Create>
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
        setSelectedId(topic_id);
      }}
      data={topics}></Nav>
      {article}
      <Control onChangeMode={function(mode){
        console.log('mode', mode);
        setMode(mode);
      }}></Control>
    </div>
  );
}

export default App;
