const obj = {
  name: 'Sujit Kumar Libi',
  getName(){
    return this.name;
  }
}
const getName = obj.getName.bind(obj);
console.log(getName());

class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleToRemoveOption = this.handleToRemoveOption.bind(this);
    this.state = {
      options : props.options //[] // ['thing one', 'thing two','thing four']
    };
  }
  handleDeleteOptions(){
    /*this.setState(()=>{
      return {
        options: []
      };
    });*/
    this.setState(()=>({options: []}));
  }
  handlePickOption(){
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const decision = this.state.options[randomNum];
    alert(decision);
  }
  handleAddOption(option){
    //console.log("testing");
    if(!option){
      return 'Enter Valid value to add item'
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'this option is already exist'
    }
    /*this.setState((prevState) => {
      //prevState.option.push(option);
      return{
        options: prevState.options.concat([option])
      };
    });*/
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
      <Action 
      hasOptions = {this.state.options.length > 0}
      handlePickOption = {this.handlePickOption}
      />
      <Options 
      options = {this.state.options}
      handleDeleteOptions = {this.handleDeleteOptions}
      handleToRemoveOption = {this.handleToRemoveOption}
      />
      <AddOption 
      handleAddOption = {this.handleAddOption}
      />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}
//StateLess FunctionaL Component
const Header = (props) => {
  return(
    <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle && <p>{props.subtitle}</p>}</h2>
    </div>
  );
};
Header.defaultProps = {
  title:'InDecision Application'
}
//Class Based Component
/*class Header extends React.Component{
  render(){
    //console.log(this.props.msg);
    return(
      <div>
    
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}*/

//Stateless Functional Component
const Action = (props) =>{
  return(
    <div>
    <button 
    disabled = {!props.hasOptions}
    onClick={props.handlePickOption}
    >What should I Do</button>
    </div>
  );
};

//Class Based Component
/*class Action extends React.Component{
  handlePick(){
    alert('Something Just Happen When This Butoon is Click');
  }
  render(){
    return(
      <div>
      <button 
      disabled = {!this.props.hasOptions}
      onClick={this.props.handlePickOption}
      >What should I Do</button>
      </div>
    );
  }
}*/

//Stateless Functional Component
const Options = (props) => {
  return(
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please Add an Option to get started</p>}
    {
      props.options.map((option) => {
        //return <p key={abc}>{abc}</p>;
        return (
          <Option 
          key={option} 
          optionText = {option} 
          handleToRemoveOption = {props.handleToRemoveOption}
          />
        )
      })
    }
    </div>
  );
};
//Class Based Component
/*class Options extends React.Component{
  render(){
    //console.log(this.props);
    //console.log(this.props.options);
    //console.log(this.props.options.length);
    return(
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      
      {
        this.props.options.map((option) => {
          //return <p key={abc}>{abc}</p>;
          return <Option key={option} optionText = {option} />;
        })
      }
      
      </div>
    );
  }
}*/
//Stateless Functional Component
const Option = (props) => {
  return(
    <div>
    {props.optionText}
    <button 
    onClick={(e) => {
      props.handleToRemoveOption(props.optionText);
    }}
    >Remove</button>
    </div>
  );
};
//Class Based Component
/*class Option extends React.Component{
  render(){
    return(
      <div>
      {this.props.optionText}
      </div>
    );
  }
}*/

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    //alert('form submit vayo');
    const option = e.target.elements.option.value.trim();
    /*if(option){
      this.props.handleAddOption(option);
    }*/
    const error = this.props.handleAddOption(option);
    /*this.setState(() => {
      return{
        error:error
      };
    });*/

    this.setState(() => ({error}));
    if(!error){
      e.target.elements.option.value = '';
    }
    /*if(!option){
      alert("empty field please add some value");
    }
    else{
      alert(option);
    }*/
  }
  render(){
    return(
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option" />
      <button>Add option</button>
      </form>
      </div>
    );
  }
}
/*const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);*/
//StatelessFunctionalComponent ko example
/*
const User = () => {
  return(
    <div>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
};
ReactDOM.render(<User />,document.getElementById('app'));
*/
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));