import React from 'react';
import Option from './Option';
//Stateless Functional Component
const Options = (props) => {
    return(
      <div>
      <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button 
      className="button button--link"
      onClick={props.handleDeleteOptions}>Remove All</button>
      </div>
      {props.options.length === 0 && <p className="widget__message">Please Add an Option to get started</p>}
      {
        props.options.map((option,index) => {
          //return <p key={abc}>{abc}</p>;
          return (
            <Option 
            key={option} 
            optionText = {option} 
            count = {index+1}
            handleToRemoveOption = {props.handleToRemoveOption}
            />
          )
        })
      }
     
      </div>
    );
  };
  export default Options;