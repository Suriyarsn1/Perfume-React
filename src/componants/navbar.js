import menubar from "../assets/images/menubar.png"
function Navbar(){
    return(
        <nav>
        <h1>Perfumy</h1>
        <ul>
        <img style={{width:"20px",}} src={menubar}></img>
            <li> Home | </li>
            <li>Products | </li>
            <li>About | </li>
            <li>Contact | </li>
        </ul>
        </nav>
 )
  }
  export default Navbar