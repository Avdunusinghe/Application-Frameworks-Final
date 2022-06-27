import React, { Component, useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import userService from "../../../service/user/user.service";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getAllusers();
  }, [getAllusers]);

  const getAllusers = useCallback((searchFilter) => {
    setSearchText(searchFilter);

    const userFilterModel = {
      searchText: searchText,
    };

    userService.getUserDetails(userFilterModel).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    userService.deleteUser(id).then((response) => {
      if (response.data.isSuccess === true) {
        getAllusers();
      } else {
      }
    });
  };

  const handleUpdateUser = (id) => {};
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            <tr key={key}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
              <th>
                <button>Update</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </th>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
