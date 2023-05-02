
const Header =({user, setUser}) =>{
    return(
        <div>
            <span>Welcome {user}!</span>
            <button onClick={() => setUser ("")} >LogOut</button>
        </div>

    );
}
export default Header;