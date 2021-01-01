import React from "react";

function Portfolio() {
  return (
      <div className="container" id="maincontent">
            <div className="row" id="mainheader">
                <h1>
                    Portfolio
                </h1>
            </div>
            <div className="row">
                <div className="col col-sm-12 col-md-6" id="projectcard">

                    <div className="card" style={{width: "18rem;"}}>
                        <img className="card-img-top" src="/Assets/Images/eMeets.jpg" alt="Card cap"/>
                        <div className="card-body">
                            <h4 className="card-text1">eMeets</h4>
                            <p className="card-text">A study application made for students by students! This application allows students to join groups, schedule meetups, and facilitates in organizing students study schedules!</p>
                                <a href="https://emeets.herokuapp.com/" className="btn btn-primary">Check Out eMeets</a>
                                <a href="https://github.com/sabinehutter/eMeets" className="btn btn-primary">Check Out Code</a>

                        
                            </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-6" id="projectcard">

                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="/Assets/Images/recipe_rolodex.jpg" alt="Card cap"/>
                        <div className="card-body">
                            <h4 className="card-text1">Recipe Rolodex</h4>
                            <p className="card-text">A one stop shop for all your recipe needs.

                                This application allows you to search recipes, favorite recipes, create a shopping list, and search recipe videos on YouTube.</p>
                                <a href="https://sabinehutter.github.io/Recipe-Rolodex/" class="btn btn-primary">Check Out Recipe Rolodex</a>
                                <a href="https://github.com/sabinehutter/Recipe-Rolodex" class="btn btn-primary">Check Out Code</a>

                        
                            </div>
                    </div>
                </div>
            </div>
        </div>

  );
}

export default Portfolio;
