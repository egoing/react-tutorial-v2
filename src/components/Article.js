function Article(props){
    return (
      <article>
            <h2>{props.title}</h2>
            {props.description}
        </article>
    );
  }
export default Article;