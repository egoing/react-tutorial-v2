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
  
export default Create;