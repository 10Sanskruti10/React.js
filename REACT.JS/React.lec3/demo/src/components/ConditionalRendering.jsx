import React from 'react'

const ConditionalRendering = ({isLogged}) => {
  
    //if-else condition
      if (isLogged) {
        return <h2>Welcome</h2>
      } else {
        return <h2>Login again</h2>
      }


    //ternary condition
    return(
        <>      {
        isLogged ? <h2>Login Successful</h2> : <h2>Login fail</h2>
      }
      </>
    )



    //Logical Operator Conditon
    return( <> 
      {isLogged && <h2>Welcome :</h2>}
    </>
    )
  
}

export default ConditionalRendering
