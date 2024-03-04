import React from "react";
import UserContext from "./UserContext";

// yaha se apan 1 provider bana rahe h, jo ki apne context ko sabhi xomponents ko provide krega

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <>
        {/* ye values m apan vo values de rahe h, jin ko apan chahte h ki inner elements access kre */}
        <UserContext.Provider value={{user, setUser}}>
            {/* jin bhi components ko apne ko data passon krna h vo automatically yaha ate jaenge, just like Outlet in router */}
        {children} 
        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;