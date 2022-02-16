import React from "react";
import Card from "./Card";
import contacts from "../contacts";//For import variables
//Use {../}
import Avatar from "./Avatar";

function createCard(contacts){
  return <Card
    id={contacts.id}//We can only use a custom id key component
    //since the {key} element is not for us to use.
    // key={contacts.id}//This is important to keep track and to maintain each 
    //element to have a unique key property across repeated components,
    //We know we need this because upon checking
    //into the Dev tools it shows a warning and the solution for this and also we cannot use {key} as props 
    //but rather use a custom one.
    name={contacts.name}
    img={contacts.imgURL}
    tel={contacts.tel}
    email={contacts.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
   
   {contacts.map(createCard)}
   {/* This is a functional loop so rather than passing
   values we will be passing functions through it
   this helps us loop the contacts.js array properties
   in a loop and just like the commented-out array structure
   below the {createCard} function will loop them rather
   than for us to keep on structuring every array element
   one by one */}



    {/* <Card
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].tel}
      email={contacts[0].email}
    />
    <Card
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].tel}
      email={contacts[1].email}
    />
    <Card
      name={contacts[2].name}
      img={contacts[2].imgURL}
      tel={contacts[2].tel}
      email={contacts[2].email}
    /> */}
    </div>
  );
}

export default App;
