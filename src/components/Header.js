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

export default Header;