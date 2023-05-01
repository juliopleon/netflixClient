import "./login.scss"

export default function Login() {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                        src=""
                        alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                </form>
            </div>
        </div>
    )
}