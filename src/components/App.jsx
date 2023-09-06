import React from "react"
import "./App.css"
import {Button}  from "./Button"
import {Link, Outlet} from "react-router-dom"
function App(){
return <div>
<div className="appTopBar">
    <Link to="/products" >
    <Button Name="Products"/>
</Link>
    <Link to="/insights">
    <Button Name="Insights"/>
</Link>
<Link to="/supplier" >
    <Button Name="Suppliers"/>
    </Link>
</div>

<section><Outlet/></section>

</div>

}

export default App