import { useEffect, useState } from "react"

const Fetch=()=>{

    const[users,setusers]=useState([]);

    useEffect (()=>{
        async function Api(){
            const response=await fetch("https://reqres.in/api/users")
            console.log(response)
            const result=await response.json()
            console.log(result.data)
            setusers(result.data)

        }
        Api();
    },[])
    return(
        <>
            <h2>FETCH API IN INCORRECT WAY</h2>
            {
                users.map(user=>{
                    return(
                        <h4 key={user.id}>
                           ID: {user.id}<br/>
                            FIRSTNAME:{user.first_name}<br/>
                           LASTNAME: {user.last_name}<br/>
                           EMAIL: {user.email}<br/>
                           AVATAR:<img src= {user.avatar} alt="employeedata"/>
                        </h4>
                    )
                })
            }
        </>
    )
}
export default Fetch;