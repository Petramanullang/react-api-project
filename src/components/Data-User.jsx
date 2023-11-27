import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import "animate.css";

const CustomSpan = ({ text }) => {
  return <span className="font-normal text-sm">{text}</span>;
};

const CustomSpan2 = ({ text }) => {
  return <span className="text-sm text-yellow-800">{text}</span>;
};

export default function SidebarUser() {
  const [user, setUser] = useState([]);

  const CustomButton = () => {
    return (
      <div>
        {user.map((user) => (
          <div key={user.id}>
            <Link to={`data-user/${user.id}`}>
              <Button className="font-normal bg-[#f2ebc6] text-black shadow-none hover:shadow-none mb-[3.1rem]">
                UI DESIGN
              </Button>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios.get(`https://reqres.in/api/users`).then((res) => {
      setUser(res.data.data);
    });
  };

  return (
    <div className="left-menu">
      <div className="title">
        <h1 className="md:static relative bottom-7 left-40 text-2xl md:text-4xl ">
          User Detail
        </h1>
      </div>
    </div>
  );
}
