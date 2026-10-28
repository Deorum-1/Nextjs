import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>
          <Link href="/dashboard/Users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/Users/2">User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/Users/3">User 3</Link>
        </li>
      </ul>
    </>
  );
};

export default Users;
