import React from 'react';
import {Redirect,Route} from 'react-router-dom';
const ProtectedRouting=({isAuth:isAuth,component:Component,logout:logout,...rest})=>{
    return (
       <Route 
       {...rest}
       render={(props)=>{
           if(isAuth){
               return <Component logout={logout}/>
           }else{
               return(
                   <>
                   <Redirect to={{pathname:'/signin' ,state:{from:props.location}}}/>
                
                   </>
               ) 
           }
       }}/>
    )
}
export default ProtectedRouting;