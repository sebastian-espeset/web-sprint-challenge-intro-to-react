import React, { useState, useEffect } from "react";

import CharacterInfo from './components/Character_info';

//So how do I map over the individual element to grab name:{name}, like that?

export default function Character({characterData}){
   //want to return Name
    return(
        <div className = "character-container">
           <h1> {characterData}</h1>
             </div>
    );

}