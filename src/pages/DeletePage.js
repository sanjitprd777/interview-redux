import React from 'react';

function DeleteFunction(id){
  const options = 
  {
      method: 'DELETE',            
  };
  const response = fetch(`http://localhost:3000/interviews/${id}`, options);
  console.log(response);
  window.location = "/";
} 


function Delete() {
    const pageUrl = window.location.href
    const id = pageUrl.substring(33,36);
    // const id = this.props.match.params.id;

  return (
      <div>
          <p>Deleting event...</p>
          { DeleteFunction(id) }
      </div>
  )

  
}
export default Delete; 
