import React from "react";

function Contact() {
    return (
        <div className="container" id ="maincontent">
        <form>

            <div className="form-group"/>
                <label for="exampleInputPassword1">Name</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Name"/>
            <div/>
            <div classNamee="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">Your email will not be shared.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Message</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Message" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default Contact;