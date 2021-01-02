import React from "react";
import BackgroundComponent from "../components/Background"
import Background from "../Assets/background.jpg"


function Portfolio() {
  return (
    <div>
    <BackgroundComponent backgroundImage = {Background} style = {{height : "8000px"}}></BackgroundComponent>

      <div className="container" id="maincontent">
            <div className="row" id="mainheader">
                <h1>
                    Portfolio
                </h1>
            </div>
            <div className="row">

            <div className="col col-sm-12 col-md-4" id="projectcard">

<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src="/Assets/Images/eMeets.jpg" alt="Card cap"/>
    <div className="card-body">
        <h4 className="card-text1">Employee Directory</h4>
        <p className="card-text">A study application made for students by students! This application allows students to join groups, schedule meetups, and facilitates in organizing students study schedules!</p>
            <a href="https://sabinehutter.github.io/React-Employee-Directory/" className="btn btn-primary">Check Out Directory</a>
            <a href="https://github.com/sabinehutter/React-Employee-Directory" className="btn btn-primary">Check Out Code</a>

    
        </div>
</div>
</div>

<div className="col col-sm-12 col-md-4" id="projectcard">

<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src="/Assets/Images/eMeets.jpg" alt="Card cap"/>
    <div className="card-body">
        <h4 className="card-text1">Budgeting Application</h4>
        <p className="card-text">A study application made for students by students! This application allows students to join groups, schedule meetups, and facilitates in organizing students study schedules!</p>
            <a href="https://budget-your-money.herokuapp.com/" className="btn btn-primary">Check Out Budget App</a>
            <a href="https://github.com/sabinehutter/Budget-App" className="btn btn-primary">Check Out Code</a>

    
        </div>
</div>
</div>

<div className="col col-sm-12 col-md-4" id="projectcard">

<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src="/Assets/Images/eMeets.jpg" alt="Card cap"/>
    <div className="card-body">
        <h4 className="card-text1">Sweat Workout Tracking Application</h4>
        <p className="card-text">A study application made for students by students! This application allows students to join groups, schedule meetups, and facilitates in organizing students study schedules!</p>
            <a href="https://sweat-workout.herokuapp.com/" className="btn btn-primary">Check Out Sweat</a>
            <a href="https://github.com/sabinehutter/Sweat-Workout-Tracker" className="btn btn-primary">Check Out Code</a>

    
        </div>
</div>
</div>


                <div className="col col-sm-12 col-md-4" id="projectcard">

                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="/Assets/Images/eMeets.jpg" alt="Card cap"/>
                        <div className="card-body">
                            <h4 className="card-text1">eMeets</h4>
                            <p className="card-text">A study application made for students by students! This application allows students to join groups, schedule meetups, and facilitates in organizing students study schedules!</p>
                                <a href="https://emeets.herokuapp.com/" className="btn btn-primary">Check Out eMeets</a>
                                <a href="https://github.com/sabinehutter/eMeets" className="btn btn-primary">Check Out Code</a>

                        
                            </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-4" id="projectcard">

                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="/Assets/Images/recipe_rolodex.jpg" alt="Card cap"/>
                        <div className="card-body">
                            <h4 className="card-text1">Recipe Rolodex</h4>
                            <p className="card-text">A one stop shop for all your recipe needs.

                                This application allows you to search recipes, favorite recipes, create a shopping list, and search recipe videos on YouTube.</p>
                                <a href="https://sabinehutter.github.io/Recipe-Rolodex/" className="btn btn-primary">Check Out Recipe Rolodex</a>
                                <a href="https://github.com/sabinehutter/Recipe-Rolodex" className="btn btn-primary">Check Out Code</a>

                        
                            </div>
                    </div>
                </div>


                <div className="col col-sm-12 col-md-4" id="projectcard">

<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src="/Assets/Images/Burger-App.jpg" alt="Card cap"/>
    <div className="card-body">
        <h4 className="card-text1">Eat-Da-Burger Application</h4>
        <p className="card-text">A fun an easy application that allows the users to track their burger consumption! Once you have entered a burger you can track and "eat" your burgers.</p>
            <a href="https://burgertracker123.herokuapp.com/burgers" className="btn btn-primary">Check Out Eat-Da-Burger</a>
            <a href="https://github.com/sabinehutter/Eat-Da-Burger-Application" className="btn btn-primary">Check Out Code</a>

    
        </div>
</div>
</div>

<div className="col col-sm-12 col-md-4" id="projectcard">

<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src="/Assets/Images/password-generator.jpg" alt="Card cap"/>
    <div className="card-body">
        <h4 className="card-text1">Secure Password Generator</h4>
        <p className="card-text">Utilize this application to automatically generate a random secure password based on the parameters that you have specificed!</p>
    
            <a href="https://sabinehutter.github.io/Secure-Password-Generator/" className="btn btn-primary">Get a Secure Password</a>
            <a href="https://github.com/sabinehutter/Secure-Password-Generator" className="btn btn-primary">Check Out Code</a>


        </div>
</div>
</div>

<div className="col col-sm-12 col-md-4" id="projectcard">

<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src="/Assets/Images/weather-dash.jpg" alt="Card cap"/>
    <div className="card-body">
        <h4 className="card-text1">Weather Search Engine</h4>
        <p className="card-text">Going on an upcoming trip or just wanna search for random cities weather?  Use this application to search the weather in any city around the world!</p>
            <a href="https://sabinehutter.github.io/Weather-Search/" className="btn btn-primary">Search the Weather!</a>
            <a href="https://github.com/sabinehutter/Weather-Search" className="btn btn-primary">Check Out Code</a>

    
        </div>
</div>
</div>

<div className="col col-sm-12 col-md-4" id="projectcard">

<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src="/Assets/Images/Code-Quiz.jpg" alt="Card cap"/>
    <div className="card-body">
        <h4 className="card-text1">Coding Quiz</h4>
        <p className="card-text">Time to test your web dev knowledge! This fun and simple quiz was created to test your web development knowledge. See how high you can rank on the leader boards!</p>
            <a href="https://sabinehutter.github.io/Web-Dev-Quiz/" className="btn btn-primary">Take the Quiz!</a>
            <a href="https://github.com/sabinehutter/Web-Dev-Quiz" className="btn btn-primary">Check Out Code</a>

        </div>
</div>
</div>

<div className="col col-sm-12 col-md-4" id="projectcard">

<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src="/Assets/Images/planner.jpg" alt="Card cap"/>
    <div className="card-body">
        <h4 className="card-text1">Personalized Day Planner</h4>
        <p className="card-text">As days blend together during this unprecident time, use this planner to keep you on track! Keep track of activities and daily tasks to make sure you never miss anything.</p>
            <a href="https://sabinehutter.github.io/Personalized-Day-Planner/" className="btn btn-primary">Plan Your Day!</a>
            <a href="https://github.com/sabinehutter/Personalized-Day-Planner" className="btn btn-primary">Check Out Code</a>

        </div>
</div>
</div>

</div>
</div>


            </div>
  );
}

export default Portfolio;
