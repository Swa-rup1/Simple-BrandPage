const Navigation = () => {
//    Calling Component
    return (
        
        <nav>
            <div className="logo">
                    
                 <img src="https://s3.amazonaws.com/www-inside-design/uploads/2019/05/woolmarkimagelogo-1024x576.png"  id="logo" alt="logo" /> 
            </div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">Services</li>
                <li href="#">Portfolio</li>
                <li href="#">Contact</li>
            </ul>

            <button>Login</button>
        </nav>
        
    );
};

export default Navigation;