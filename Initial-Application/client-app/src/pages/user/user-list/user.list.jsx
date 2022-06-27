import React, { Component, useState } from "react";
import { useEffect } from "react";
import userService from "../../../service/user/user.service";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {});

  const getAllusers = async (searchText) => {
    setSearchText(searchText);

    const UserFilterModel = {
      searchText: searchText,
    };
    userService.getUserDetails(UserFilterModel).then((response) => {
      setUsers(response.data);
    });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            <tr key={key}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
