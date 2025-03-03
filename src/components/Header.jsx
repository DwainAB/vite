import React from "react"
import logo from "../assets/logo/logo.webp"

export default function Header(){
    return(
        <>
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </>
    )
}