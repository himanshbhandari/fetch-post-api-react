import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
    let pincode=localStorage.getItem('pincode');

    if(pincode){
        return(
            <Outlet/>
        )
    }
    else{
        return  <Navigate to={'/'}/>
    }
}

export default PrivateRoute