import React from "react";

function LoginPage() {
    function handleSubmit(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
    
        if (!username || !password) {
            alert("Please fill in both email and password fields.");
        } else {
            window.location.href = "/resources";
        }
    }

    return (
        <div className="form-container">
            <div className="form-card">
                <h2>Login</h2>
                <form className="form-login" onSubmit={handleSubmit}>
                    <input type="email" id="username" name="username" placeholder="Username" className="form-input" required />
                    <input type="password" id="password" name="password" placeholder="Password" className="form-input" required />
                    <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
