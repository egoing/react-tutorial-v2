import {useState} from 'react';

function Update(props){
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    return <article>
      <h1>Update</h1>
      <form action="/topics/create" method="POST" onSubmit={function(e){
        e.preventDefault();
        props.onSubmit({
          title:e.target.title.value,
          description:e.target.description.value
        })
      }}>
        <p>
          <input 
            type="text" 
            name="title" 
            placeholder="title"
            value={title}
            onChange={function(e){
              setTitle(e.target.value);
            }}
            ></input></p>
        <p>
          <textarea 
            name="description" 
            placeholder="description"
            value={description}
            onChange={function(e){
              setDescription(e.target.value);
            }}
          ></textarea></p>
        <p><input type="submit"></input></p>
      </form>
    </article>
  }
  export default Update;