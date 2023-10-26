import Button from "../button";
import bg from "./background.jpg";
import bank from "./bank.png";
import "./index.css";

function Welcome() {
    return (
        <div className="welcome d-flex flex-column">
            <img src={bg} className="welcome__bg"/>
            
            <div className="header d-flex flex-column align-items-center">
                <h1 className="header__title">Hello</h1>
                <h3 className="header__subtitle">Welcome to bank app</h3>
            </div>

            <img src={bank} className="welcome__img"/>

            <div className="welcome__buttons d-flex flex-column">
                <Button>Sign Up</Button>
                <Button>Sign In</Button>
            </div>
        </div>
    );
}

export default Welcome;