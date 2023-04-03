import { useState, useEffect } from "react"
export default function UsersListFunctional() {

    const [users, setUsers] = useState([

        { name: "ali", email: "ali@gmail.com", isAdmin: false },
        { name: "salma", email: "salma@gmail.com", isAdmin: true },
        { name: "karim", email: "karim@gmail.com", isAdmin: true },
        { name: "lara", email: "lara@gmail.com", isAdmin: true }
    ])


    const [isAuth, setIsAuth] = useState(true)

    const handleChange = () => {

        setIsAuth(isAuth ? false : true)

    }

    useEffect(function () { //Mounting
        console.log("from DidMount");

        return ()=>{ //unMounting
           console.log("from unMount");
        }
       
    }, [])//array of dependencies

    
    useEffect(function () {//updating


    //    if(isAuth){
    //     localStorage.setItem()
    //    }else{
    //     localStorage.removeItem()
    //    }

    },[isAuth])

    useEffect(function () {


    },[users])



    // const test=()=>{
    //     console.log("test");
    // }
    // test()

    return (<>
        {isAuth ? <ul>

            {users.map(function (user, i) {
                if (user.isAdmin) {
                    return <li key={i}>{user.name}</li>
                }

            })}
        </ul> : <h1 className="text-danger">You have to login first</h1>}

        <button className="btn btn-primary" onClick={() => { handleChange() }}>
            Toggle Authentication</button>

    </>)
}