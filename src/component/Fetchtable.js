import { useEffect, useState } from "react"

const Fetchtable=()=>{

    const[users,setusers]=useState([]);

    useEffect(()=>{
        async function Api(){
            const response=await fetch("http://localhost:8000/students")
            console.log(response);
            const result=await response.json()
            console.log(result)
            setusers(result);
        }
        Api();
    },[])
    return(
        <>
        <hr/>
            <h2>FETCH API IN TABLE FORMATE</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>EMAIL</th>
                        <th>AVATAR</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>{
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td><img src={user.avatar} alt="employeedata"/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Fetchtable;