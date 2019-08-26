import * as ActionTypes from './ActionType';
import axios from 'axios';

export const authStart=()=>{
    return{
        type:ActionTypes.AUTH_START
    };
};

export const authSuccess=(token,userId)=>{
    return{
        type:ActionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    };
};

export const authFail=(error)=>{
    return{
        type:ActionTypes.AUTH_FAIL,
        error:error
    };
};

export const logout=()=>{
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        type:ActionTypes.AUTH_LOGOUT
    }
}

export const auth=(authData)=>{
    return dispatch=>{
        dispatch(authStart());
        console.log("auth : ",authData);
        let url='';
        {
            console.log("seller");
            url='https://localhost:5001/api/UserAuth/Signup-Seller';
            axios.post(url,authData)
                .then(response=>{
            console.log(response);
            dispatch(authSuccess(response.data.data.token,response.data.data.id));
            dispatch(checkAuthTImeout(3600/*response.data.expiresIn*/));
        })
        .catch(err=>{
            console.log(err);
            dispatch(authFail(err));
        });
        }
    }
}


export const authVerify=(authData)=>{
    console.log(authData)
    return dispatch=>{
        dispatch(authStart());      
        let url='https://backend-webapi20190825122524.azurewebsites.net/api/UserAuth/signin';
        axios(
           { method:'get',
            url,
            authData})
        .then(response=>{
           console.log(response);
            // localStorage.setItem('token',response.data.token);
            // localStorage.setItem('expirationDate',expirationDate);
            // localStorage.setItem('userId',response.data.localId);
            dispatch(authSuccess(response.data.data.token,response.data.data.id));
        })
        .catch(err=>{
            console.log(err);
            alert(err);
            dispatch(authFail(err));
        });
    };
};