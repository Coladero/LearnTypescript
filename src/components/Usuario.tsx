import { useState } from "react"

interface User {
    uid:string;
    name:string;
}
export const Usuario= () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: "1234AA",
            name:"Juan"
        })
    }
  return (
    <div className="mt-5">
        <h3>Usur: useState</h3>

        <button
        onClick={login} 
        className="btn btn-outline-primary">
            Login
        </button>
        {
        (!user)
            ?<pre>Click login for show the User</pre>
            :<pre>{JSON.stringify(user)}</pre>
        }   
    </div>
  )
}
