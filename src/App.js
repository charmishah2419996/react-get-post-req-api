import React, { Component } from 'react';

import './App.css';

class App extends Component{

  constructor()
  {
    super();
    this.state={
      data:[],
  }
  }
  componentDidMount(){

      fetch('https://reqres.in/api/users').
      then((Response)=>Response.json()).
      then((findresponse)=>
        {
              console.log(findresponse);
              this.setState({
                data:findresponse.data,
              })
        })  
  }

   render() {
       return(
         <div>
           <table></table>
           {
             this.state.data.map((dynamicdata,key) =>
                <tr>
                   <td><img src={dynamicdata.avatar}></img></td>
                   <td> {dynamicdata.first_name}</td>
                   <td> {dynamicdata.last_name}</td>
                </tr>
             )
           }
          
         </div>
       );
   }

}




export default App;
