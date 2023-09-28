import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to={"/movies/gatinhos"}>
        <h1>gatinhos</h1>
      </Link>
      <Link to={"/movies/cachorrinhos"}>
        <h1>cachorrinhos</h1>
      </Link>
    </div>
  );
}
