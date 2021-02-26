function Control(props){
    return <ul>
      <li><a href="/topics/create" onClick={function(e){
        e.preventDefault();
        props.onChangeMode('CREATE');
      }}>create</a></li>
      <li><a href="/topics/update" onClick={function(e){
        e.preventDefault();
        props.onChangeMode('UPDATE');
      }}>update</a></li>
      <li><input type="button" value="delete" onClick={function(){
        props.onChangeMode('DELETE');
      }}/></li>
    </ul>
  }
export default Control;