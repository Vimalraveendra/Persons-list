import React from 'react';


const Person = ({id,name,email,website}) =>{
	return(
         <div className= 'tc bg-light-blue br3 pa3 ma2 grow bw2 shadow-5'>
              <img className='br3' alt='person'src={`https://randomuser.me/api/portraits/thumb/men/${id}.jpg`}/>
           <div>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Website:{website}</p>
            </div>
          </div>

		)
}


export default Person;