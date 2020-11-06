import React, { useState, useEffect } from "react";

export default function Character({characterData}){
   //want to return Name
    return(
        <div className = "character-container">
            {characterData}
             </div>
    );

}