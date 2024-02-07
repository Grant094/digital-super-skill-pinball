"use client"

import React, { useState, useEffect } from "react";
import Game from "./Game";

export default function Home(props) {
  const DIE_VALUES = [
    [1, 1], // final roll
  ];

  return (
    <div>
      <Game />
    </div>
  );
}
