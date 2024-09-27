"use client";
import { useEffect } from "react";

function Users() {
  useEffect(() => {
    console.log("Loaded!");
  }, []);

  return (
    <>
      <h1> - ComponentUsers</h1>
    </>
  );
}
export default Users;
