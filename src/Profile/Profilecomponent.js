import React from 'react' ;
import Profilec from './Profilechild'
import PropTypes from 'prop-types';
function Profilecomponent ()
{ 
    const handlename = name => alert(name); 
    return(<div> 
       
     <Profilec name= "zammali" prenom="Ahmed" profession= "Etudiant" handlename ={handlename}> 
      <img src="/images/image2.png" alt = "image1 erreur" width = "40px" /> 
     </Profilec>
    </div>)
}
export default Profilecomponent ;