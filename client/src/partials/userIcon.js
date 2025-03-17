import React from "react";

function UserIcon({ username, size }) {
  return (
    <div
      className="bg-body-secondary d-flex p-4 justify-content-center border border-2 rounded-circle align-items-center"
      style={{ width: size, height: size }}
    >
      <h2 className="text-secondary m-0 text-center opacity-50">
        {username[0].toUpperCase()}
      </h2>
    </div>
  );
}

export default UserIcon;
