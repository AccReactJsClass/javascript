import React  from 'react'
import HelloFunc from './HelloFunc';

//class components
class Hello1 extends React.Component{
  render(){
    return (
      <div>
         <h1>Helllo World class</h1>
         <HelloFunc/>
      </div>
    )
  }
}
export default Hello1;
// functional components
// const Hello6 =()=> {
//   return ( <h1> Hello</h1>)
// };

//life cycle method