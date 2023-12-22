import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import  { Hourglass } from "react-loader-spinner";


(<Hourglass
    visible={true}
    height="80"
    width="80"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#306cce', '#72a1ed']}
    />)

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Hourglass></Hourglass>
    }

    if(user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;