const numbers = [55,101,100];
  {
    [99,98,5,4,'Sujit Kumar Libi']
  }
  {
    [<p key="1">a</p>,
      <p key="2">b</p>,
      <p key="3">c</p>]
  }
  {
    numbers.map((num) => {
      return <p key={num}>Number is: {num}</p>
    })
  }