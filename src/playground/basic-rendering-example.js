var user = {
    name: 'Sujit Kumar Libi',
    age: 22,
    location: 'Chitwan'
  }
  
  function location(location){
    if(location){
      return location;
    }else{
      return 'Unknown';
    }
  }
  //Assignment: Create a TemplateTwo variable JSX expression with so information of yourself n render templateTwo instead of template variable
  var templateTwo = 
    <div>
      <h1>{user.name}</h1>
      <p>Age : {user.age}</p>
      <p>Location : {location(user.location)}</p>
    </div>;