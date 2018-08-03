//console.log("content from App.js File");

//JSX - JavaScript XML
//var template = <p>this is JSX - JavaScript XML JavaScript Syntax Extension hehehehehe hahahahahaha</p>;

const onFormSubmit = (e) => {
    
    e.preventDefault();
  
    //console.log('Form Submitted');
    const option = e.target.elements.option.value;
    
    console.log(option);
    if(option){
      app.options.push(option);
      e.target.elements.option.value='';
      renderThis();
    }
  };
  const onRemoveAll = () => {
    app.options = [];
    renderThis();
  }
  const onMakingDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const decision = app.options[randomNum];
    alert(decision);
  }
  const app = {
    title: 'Indecision Application',
    subtitle: 'Put your Life in the hand of a computer',
    options: []
  }
  const toggleVisibility = () =>{
    visibility = !visibility;
    renderThis();
  }
  let visibility = false;
  const renderThis = () => {
  
    const jsx = (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility?'Hide detail':'Show detail'}</button>
      {visibility && (
        <div>
        <p>Information information</p>
        </div>
      )}
      </div>
    );
    const template = 
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your option' : 'No option available'}</p>
  
    <hr />
    <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
        })
      }
    </ol>
    <hr />
    <form onSubmit = {onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add option</button>
      <button onClick={onRemoveAll}>Remove All Option</button>
      <button disabled={app.options.length===0} onClick={onMakingDecision}>What Should I do????</button>
    </form>
    </div>
  
  const appRoot = document.getElementById('app');
  ReactDOM.render(jsx, appRoot);
  }
  
  renderThis();

