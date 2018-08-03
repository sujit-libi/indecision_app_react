class Counter extends React.Component{
  constructor(props){
    super(props);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0 //props.count 
    };
  }
  componentDidMount(){
    //console.log("Mounting");
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount,10);
    if(!isNaN(count)){
      this.setState(()=>({count:count}));
    }
  }
  componentDidUpdate(prevProps,prevState){
    //console.log("Updating");
    if(prevState.count !== this.state.count){
      localStorage.setItem('count',this.state.count);
    } 
  }
  add(){
    //this.state.count = this.state.count + 1;
    //console.log(this.state.count);
    //console.log('add vayo');
    this.setState((prevState) => {
      return {
        count: prevState.count+1
      };
    });
  }
  minus(){
    //console.log('minus vayo');
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  reset(){
    //console.log('reset vayo');
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
  }
  render(){
    return(
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.add}>+1</button>
        <button onClick={this.minus}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
/*Counter.defaultProps = {
  count: 0
}*/

ReactDOM.render(<Counter/>,document.getElementById('app'));


/*let counter = 0;
const someId = "my-id";

const add = () => {
  counter++;
  console.log('You Just hit Add button', counter);
  renderCounterApp();
}

const minus = () => {
  counter--;
  console.log('You Just hit Minus button', counter);
  renderCounterApp();
}

const reset = () => {
  counter=0;
  console.log('You Just hit Reset button', counter);
  renderCounterApp();
}
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Counter: {counter}</h1>
      <button id={someId} onClick={add}>+1</button>
      <button id={someId} onClick={minus}>-1</button>
      <button id={someId} onClick={reset}>reset</button>
    </div>
  )
  const appRoot = document.getElementById('app');
  ReactDOM.render(templateTwo, appRoot);
}


renderCounterApp();*/