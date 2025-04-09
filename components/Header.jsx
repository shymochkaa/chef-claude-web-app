import chefClaudeLogo from "/images/chef-claude-icon.png"

export default function Header(){
    return(
        <header>
            <nav>
                <img src={chefClaudeLogo} alt="a face of a chef robot" />
                <a href="#">Chef Claude</a>
            </nav>
        </header>
    )
}