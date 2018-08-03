/*const toggleVisibility = () =>{
    visibility = !visibility;
    renderThis();
  }
  let visibility = false;
  const renderThis = () => {
  
    const jsx = (
      <div>
      <h1>Visibility Toggle</h1>
      <h1>This is new page hai </h1>
      <button onClick={toggleVisibility}>{visibility?'Hide detail':'Show detail'}</button>
      {visibility && (
        <div>
        <p>Information information</p>
        </div>
      )}
      </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(jsx, appRoot);
    }
    
    renderThis();*/

    class VisibilityToggle extends React.Component {
        constructor(props){
            super(props);
            this.toggleButton = this.toggleButton.bind(this);
            this.state = {
                visibility: false
            }
        }
        toggleButton(){
            //console.log('toggle button bitra gayo');
            //console.log(this.state.visibility);
           this.setState((prevState)=>{
                return{
                    visibility: !prevState.visibility
                }      
            });
        }
        render(){
            //let visibility = false;
            return (
                <div>
                    <h1>Visibility Toggle Button </h1>
                    <button onClick={this.toggleButton}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                    {this.state.visibility && (
                        <div>
                        <p>Information information</p>
                        </div>
                      )}
                </div>
             );
        }
        

    }

    ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));