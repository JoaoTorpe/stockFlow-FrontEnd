import React from "react"
import "./App.css"
import {Button}  from "./Button"
import {Link, Outlet} from "react-router-dom"
export function App(){
return <div>
<div className="appTopBar">
    <Link to="/products" >
    <Button Name="Products"/>
</Link>
    <Link to="/insights">
    <Button Name="Insights"/>
</Link>
<Link to="/supllier" >
    <Button Name="Suplliers"/>
    </Link>
</div>

<section><Outlet/></section>

</div>

}