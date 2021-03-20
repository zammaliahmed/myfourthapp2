import React from 'react' ;
import PropTypes from 'prop-types';

function Profilechild (props)
{
    console.log("props", props) ;
    return(
    <div>
    <h1> {props.name } </h1> 
    <h1> {props.prenom } </h1> 
    <h1> {props.profession } </h1> 
    <h1>Welcome {props.children}</h1>
    <button onClick={() => props.handlename('My name is ' + props.name + ' ' + props.prenom)}>
     ClickMe
   </button>

    

    </div>)   
}
Profilechild.propTypes = {
  name: PropTypes.string,
  prenom: PropTypes.string,
  name: PropTypes.string }
export default Profilechild ;