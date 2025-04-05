import React from "react";

function UserIcon({ username, size }) {
  if (!username) {
    return <div>Loading...</div>; // Or a fallback UI
  } else
    return (
      <div
        className="bg-body-secondary d-flex p-3 justify-content-center border border-2 rounded-circle align-items-center"
        style={{ width: size, height: size }}
      >
        <h2 className="text-secondary  text-center opacity-50 fs-6">
          {username[0].toUpperCase()}
        </h2>
      </div>
    );
}

export default UserIcon;
