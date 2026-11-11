import { useState } from "react";
import type { UserModel } from "../../../models/UserModel";

export const TestComponent = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data: UserModel[] = await response.json();

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <span>To get list of users, click here!</span>
          <button type="button" className="btn btn-primary" onClick={getUser}>
            CLICK HERE!
          </button>
        </div>
        <div className="d-flex flex-wrap gap-3 mt-3">
          {users.map((user) => (
            <section
              className="card"
              style={{ maxWidth: "350px" }}
              key={user.id}
            >
              <div className="card-body">
                <h4 className="card-title">
                  {user.firstName} {user.lastName}
                </h4>

                <p className="card-text">{user.email}</p>

                <button className="btn btn-primary">View User</button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};
