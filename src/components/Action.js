import React from 'react';

//Stateless Functional Component
const Action = (props) =>{
    return(
      <div>
      <button 
      className="big-button"
      disabled = {!props.hasOptions}
      onClick={props.handlePickOption}
      >What should I Do</button>
      </div>
    );
  };

  export default Action;