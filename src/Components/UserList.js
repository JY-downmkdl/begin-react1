import React from "react";  

function User({user}){
    return(
        <div>
            {user.username} <span>({user.email})</span>
        </div>
    )
}


function UserList (){
    // 배열 만들기
    const users= [
        {
            id : 1,
            username: "green",
            email: "green@gmail.com"
        },
        {
            id : 2,
            username: "blue",
            email: "blue@gmail.com"
        },
        {
            id : 3,
            username: "yellow",
            email: "yellow@gmail.com"
        }
    ];
    return(
        <div>
            {users.map(user =>(
                <User key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList;