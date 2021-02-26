import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Control from './components/Control';
import Create from './components/Create';
import Update from './components/Update';
import Article from './components/Article';

function App() {
  const [nextId, setNextId] = useState(4);
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
      var newTopics = [...topics];
      newTopics.push(
        {id:nextId, title:data.title, description:data.description}
      );
      setTopics(newTopics);      
      setMode('READ');
      setSelectedId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if(mode === 'UPDATE'){
    for(var i=0; i<topics.length; i++){
      var d = topics[i];
      if(d.id === selectedId){
        article = <Update 
          title={d.title}
          description={d.description}
          onSubmit={function(data){
            var newTopics = [...topics];
            for(var i=0; i<newTopics.length; i++){
              var d = newTopics[i];
              if(d.id === selectedId){
                newTopics[i] = {id:selectedId, title:data.title, description:data.description};
                break;
              }
            }
            setTopics(newTopics);
            setMode('READ');
        }}></Update>
      }
    }
    
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
        if(mode === 'DELETE'){
          if(window.confirm('Really?')){
            var newTopics = [];
            for(var i=0; i<topics.length; i++){
              var d = topics[i];
              if(d.id !== selectedId){
                newTopics.push(d);
              }
            }
            setTopics(newTopics);
            mode = 'WELCOME';
          } else {
            mode = 'READ';
          }
        }
        setMode(mode);
      }}></Control>
    </div>
  );
}

export default App;
