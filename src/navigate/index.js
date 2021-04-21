import React from "react"
import { useSelector } from "react-redux"
import Guest from "./Guest"
import Client from "./Client"

export default () =>{
	const {isLogin} = useSelector(state => state.auth)
	if(!isLogin){
		return <Guest/>
	}else{
		return <Client/>
	}
}