import { Link } from "react-router-dom"

const navigation = [
    {component: "/", name:"Home"},
    {component: "/contact", name:"Contato"},
    {component: "/sobre", name:"Sobre"},
    {component: "/login", name:"Login"},
    
]

const Header = () => {
  return (
<nav>
{navigation.map((nav)=>(
<Link key={nav.name} to ={nav.component}>{nav.name}</Link>
))}
</nav> 
 )
}

{/* <Link to={"/"}>Home</Link>  MÉTODO PARA FAZER UM A UM NA MÃO
<Link to={"/contact"}>Contato</Link> */}
export default Header