import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePickOption = this.handlePickOption.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleToRemoveOption = this.handleToRemoveOption.bind(this);
      this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
      this.state = {
        options : props.options,
        selectedOption: undefined
         //[] // ['thing one', 'thing two','thing four']
      };
    }
    handleDeleteOptions(){
      this.setState(()=>({options: []}));
    }
    handlePickOption(){
      const randomNum = Math.floor(Math.random()*this.state.options.length);
      const decision = this.state.options[randomNum];
      this.setState(()=>({
        selectedOption: decision
      }));
      //alert(decision);

    }
    handleAddOption(option){
      //console.log("testing");
      if(!option){
        return 'Enter Valid value to add item'
      }
      else if(this.state.options.indexOf(option) > -1){
        return 'this option is already exist'
      }

      this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    handleToRemoveOption(optionToRemove){
      //console.log(optionToRemove);
      this.setState((prevState)=>({
        options: prevState.options.filter((option)=>{
          //console.log(option);
          return optionToRemove !== option;
        })
      }));
    }
    handleClearSelectedOption(){
      this.setState(()=>({
        selectedOption: undefined
      }));
    }
    componentDidMount(){
      //console.log('fetching Data');
      try {
        const json = localStorage.getItem('options');
        const options  = JSON.parse(json);
        if(options){
          this.setState(() => ({options}));
        }
      } catch (error) {
        //Do whatever u like ok dear
      }
    }
    componentDidUpdate(prevProps,prevState){
      //console.log('saving data');
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
      }
    }
    render(){
      const subtitle = 'Put Your Life in the hand of Computer';
      return(
        <div>
        <Header subtitle={subtitle}/>
        <div className="container">
        <Action 
        hasOptions = {this.state.options.length > 0}
        handlePickOption = {this.handlePickOption}
        />
        <div className="widget">
        <Options 
        options = {this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions}
        handleToRemoveOption = {this.handleToRemoveOption}
        selectedOption = {this.state.selectedOption}
        />
        <AddOption 
        handleAddOption = {this.handleAddOption}
        />
        </div>
        </div>
        
        <OptionModal 
        selectedOption = {this.state.selectedOption}
        handleClearSelectedOption = {this.handleClearSelectedOption}
        />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  }