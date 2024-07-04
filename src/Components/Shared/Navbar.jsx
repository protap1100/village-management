import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex gap-10">
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/member' >Member</Link></li>
                    <li><Link to='/occasions' >Occasions</Link></li>
                    <li><Link to='/projects' >Projects</Link></li>
                    <li><Link to='/aboutUs' >About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;