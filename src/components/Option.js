import React from 'react';

//Stateless Functional Component
const Option = (props) => {
    return(
      <div className="option">
      <p className="option__text">{props.count}.{props.optionText}</p>
      <button 
      className="button button--link"
      onClick={(e) => {
        props.handleToRemoveOption(props.optionText);
      }}
      >Remove</button>
      </div>
    );
  };

  export default Option;