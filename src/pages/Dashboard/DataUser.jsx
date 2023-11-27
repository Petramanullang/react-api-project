import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DataUser() {
  const [user, setUser] = useState({});

  const param = useParams();
  console.log(param);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`https://reqres.in/api/users/${param.id}`)
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
        <img className="h-56" src={user.avatar} alt="" />
    </div>
  );
}
