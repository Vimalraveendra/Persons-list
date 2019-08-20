import React from 'react';
import Person from './Person';
import './PersonsList.css';

const PersonsList = ({personsArray}) =>{
	  
	return(
        <React.Fragment>
         <div className='grid-container'>
           {
             personsArray.map(user=>{
             	return <Person
             	key={user.id} 
             	id= {user.id}
             	name={user.username}
             	email={user.email}
             	website={user.website}

             	 />
             	
             	
             	
             })

           }
          </div>
       </React.Fragment>
		)
}


export default PersonsList;