import React from "react"
import "./App.css"
import {Button}  from "./Button"
import {Outlet} from "react-router-dom"
export function App(){
return <div>
<div className="appTopBar">
    <Button Name="Products"/>
    <Button Name="Insights"/>
    <Button Name="Suplliers"/>
</div>

<section><Outlet/></section>

</div>

}