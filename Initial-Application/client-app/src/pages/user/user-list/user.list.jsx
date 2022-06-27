import React, { Component, useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import userService from "../../../service/user/user.service";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllusers(searchText);
  }, []);

  const getAllusers = useCallback((searchFilter) => {
    const userFilterModel = {
      searchText: searchFilter,
    };

    userService.getUserDetails(userFilterModel).then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    userService.deleteUser(id).then((response) => {
      if (response.data.isSuccess === true) {
        getAllusers(searchText);
      } else {
      }
    });
  };

  const onChangeSearchText = (searchFilter) => {
    getAllusers(searchFilter);
  };

  const handleUpdateUser = (id) => {};
  return (
    <div>
      <label>Search</label>
      <input
        type="text"
        onChange={(e) => onChangeSearchText(e.target.value)}
      ></input>
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
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
              <td>
                <button>Update</button>
                <button onClick={() => handleDelete(user._id)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
