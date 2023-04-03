
import React from 'react';

export default class UsersList extends React.Component {

    constructor() {
        super()
        this.state = {
            isAuth: true,
            users: [

                { name: "ali", email: "ali@gmail.com", isAdmin: false },
                { name: "salma", email: "salma@gmail.com", isAdmin: true },
                { name: "karim", email: "karim@gmail.com", isAdmin: true },
                { name: "lara", email: "lara@gmail.com", isAdmin: true }
            ]
        }
    }

    handleChange = () => {
        this.setState({ isAuth: (this.state.isAuth) ? false : true })
    }
componentDidMount() {

    const x= this.props;
console.log(x);
}
    render() {

        return <>
            {/*    
            {this.state.isAuth && <ul>

                {this.state.users.map(function (user, index) {
                    if (user.isAdmin) {
                        return <li key={index}>{user.name}</li>
                    }


                })}

            </ul>} */}

            {(this.state.isAuth) ? <ul>

                {this.state.users.map(function (user, index) {
                    if (user.isAdmin) {
                        return <li key={index}>{user.name}</li>
                    }


                })}

            </ul> : <h1 className="text-danger">You have to login first</h1>}

            <button className="btn btn-primary" onClick={() =>{this.handleChange()} }>
                Toggle Authentication</button>

        </>
    }


}


