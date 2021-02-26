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
  export default Nav;