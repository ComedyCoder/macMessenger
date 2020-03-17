// https://stackoverflow.com/questions/55366320/how-do-i-use-the-firebase-onauthstatechange-with-the-new-react-hooks

import React, { useState, useEffect }  from 'react';
const useFirebaseAuthentication = (dataBase) => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() =>{
       const unlisten = dataBase.auth.onAuthStateChanged(
          authUser => {
            authUser
              ? setAuthUser(authUser)
              : setAuthUser(null);
          },
       );
       return () => {
           unlisten();
       }
    });

    return authUser
}

export default useFirebaseAuthentication;