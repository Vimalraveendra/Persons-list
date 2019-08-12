import React from 'react';
import Person from './Person';

const PersonsList = ({personsArray}) =>{
	  
	return(
         <div>
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

		)
}


export default PersonsList;