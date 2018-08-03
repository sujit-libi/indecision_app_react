import React from 'react';

//StateLess FunctionaL Component
const Header = (props) => {
    return(
      
      <div className="header">
      <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">{props.subtitle && <p>{props.subtitle}</p>}</h2>
      </div>
      </div>
    );
  };
  Header.defaultProps = {
    title:'In-Decision Application'
  }
  export default Header;