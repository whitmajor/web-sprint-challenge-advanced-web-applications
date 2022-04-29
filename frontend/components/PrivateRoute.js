import React from "react"
import {Route,Redirect} from "react-router-dom"

export const ProtectedRoute= {props} =>{
const{children, ...rest } =props;
<Route 
{...rest}
render= {()=>{
if(localStorage.getItem("token")){
    return children;
}else{
    <Redirect to =""/>
}
}} />
}