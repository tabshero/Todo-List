import React from 'react'

export default function Footer() {
    let footerStyle ={
    position: "relative",
    width: "100%",

    top: "95vh"
    }
    return (
        <footer className = "bg-dark text-light" style = {footerStyle}>
        <p className = "text-center">
           Copyright &copy; Akhil
        </p>   
        </footer>
    )
}
