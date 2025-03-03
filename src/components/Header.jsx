import logo from "../assets/logo/logo.webp"

export default function Header(){
    return(
        <header>
            <a href="/">
                <img src={logo} alt="image d'un mexicain qui fait de la guitarre" />
            </a>

            <nav>
                <ul>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}