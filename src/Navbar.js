const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="branding">My Todo Page</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Create Todo</a>
                <a href="/about">About</a>
            </div>
        </nav>
     );
}
 
export default Navbar;