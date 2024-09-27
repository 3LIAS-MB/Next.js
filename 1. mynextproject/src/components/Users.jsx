"use client";
import { useEffect } from "react";

function Users() {
  useEffect(() => {
    console.log("Loaded!");
  }, []);

  return (
    <>
      <h1>Component users</h1>
    </>
  );
}
export default Users;
