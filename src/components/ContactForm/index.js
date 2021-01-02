import React from "react";
import "./style.css";


function ContactForm() {
    return (
<div className="container" id ="contactform">
<form>

    <div className="form-group">
        <label>Name</label>
        <input type="password" className="form-control" placeholder="Name"/>
    </div>
    <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp"
            placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">Your email will not be shared.</small>
    </div>
    <div className="form-group">
        <label >Message</label>
        <input type="password" className="form-control" placeholder="Message"/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    )
}

export default ContactForm;
