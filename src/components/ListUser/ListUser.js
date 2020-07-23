import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./listUser.css";

const ListUser = (props) => {
  const [users, setUsers] = useState([]);
  const { getUsers } = props;
  // const { user } = getStateUser;

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await getUsers();
      setUsers(data.result);
    };

    getAllUsers();
  }, [getUsers]);

  return (
    <div className="cntr-list-users">
      <h1>User list</h1>
      <div>
        <ul className="ul-list-users">
          {users.map((name) => (
            <li key={name}>
              <Link
                to={{
                  pathname: `/userads/${name}`,
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Button onClick={() => props.history.push("/")} className="btn-back">
        <h1 className="h1-btn-back">&#9668;</h1>back
      </Button>
    </div>
  );
};

export default ListUser;
