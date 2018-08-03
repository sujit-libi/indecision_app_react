import React from 'react';

export default class AddOption extends React.Component{
    state = {
      error: undefined
    }
    handleAddOption = (e) => {
      e.preventDefault();
      //alert('form submit vayo');
      //console.log('abc');
      const option = e.target.elements.option.value.trim();
    
      const error = this.props.handleAddOption(option);
      
      this.setState(() => ({error}));
      if(!error){
        e.target.elements.option.value = '';
      }
    }
    render(){
      return(
        <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
        <input type="text" name="option" className="add-option__input"/>
        <button className="button">Add option</button>
        </form>
        </div>
      );
    }
  }