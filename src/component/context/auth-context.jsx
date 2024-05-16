import React,{useState} from "react"

const AuthContext = React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
})

export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem("token")
    const [token,setToken] = useState(initialToken)

    const userIsLoggedIn = !!token
    const loginHandler = (token) => {

        setToken(token) 
        localStorage.setItem('token',token)
        console.log("Logged in and saved token")
        console.log("Log out status: ",userIsLoggedIn)

    }

    const logoutHandler = () => {
        setToken(null) 
        localStorage.removeItem('token')
        console.log("Logged out and removed token")
        console.log("Log out status: ",userIsLoggedIn)


    }

    const contextValue = {
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        

    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext