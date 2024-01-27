import React,{useContext} from 'react'
import userContext from '../Context/UserContext'
function Profile() {
    const {user} = useContext(userContext);
     if(!user)
         return <div className='text-center bg-slate-400'>please login</div>
     return <div>Welcome {user.userName}</div>   
}

export default Profile