import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sidebar() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios.get(`https://reqres.in/api/users`).then((res) => {
      setUser(res.data.data);
      // console.log(res.data.data);
    });
  };

  return (
    <div className="left-menu">
      <div className="title">
        <h1 className="md:static relative bottom-7 left-40 text-2xl md:text-4xl ">
          Dashboard
        </h1>
      </div>
      <div className="member mt-20">
        <p className="text-[#9CA3AF] font-normal">User name</p>
        {user.map((user) => (
          <div key={user.id} className="member py-4 ">
            <Link to={`/data-user/${user.id}`}>
              <button className="flex items-center">
                <div className="user-name">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="avatar h-14 rounded-full border"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="ml-5 font-normal text-sm">
                      {user.first_name}
                    </p>
                    <p className="ml-1 font-normal text-sm">{user.last_name}</p>
                  </div>
                  <p className="ml-5 font-normal text-xs text-[#9CA3AF]">
                    {user.email}
                  </p>
                </div>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
