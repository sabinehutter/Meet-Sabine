import React from "react";
import ContactForm from '../components/ContactForm'
import BackgroundComponent from '../components/Background'
import Background from "../Assets/background.jpg"


function Contact() {


  return (
    <div >
      <BackgroundComponent backgroundImage = {Background} style = {{height : "2000px"}}></BackgroundComponent>
      <ContactForm/>
    </div>
  );
}

export default Contact;
