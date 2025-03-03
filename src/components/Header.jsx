import logo from "../assets/logo/logo.webp"

export default function Header(){
    return(
        <header>
            <a href="/">
                <img src={logo} alt="" />
            </a>

            <ul>
                <li>
                    <a href="/">Accueil</a>
                </li>
            </ul>
        </header>
    )
}