"use client";
import React from "react";
import { geminiPrompt } from "../backend/geminiai";

function page() {
  const onClick = async () => {
    // Example usage:
    const userInput = "Please fetch all users from the database.";
    const vv = await geminiPrompt(userInput);
    console.log(vv);
  };
  return (
    <div>
      <button onClick={onClick}>Send</button>
    </div>
  );
}

export default page;
