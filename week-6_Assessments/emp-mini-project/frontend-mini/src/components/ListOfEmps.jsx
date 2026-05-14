import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  // goto employee
  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  // goto edit employee
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  // delete employee
  const deleteEmpByID = async (id) => {
    try {
      let res = await axios.delete(
        `http://localhost:3000/employee-api/employee/${id}`
      );

      if (res.status === 200) {
        getEmps();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // get employees
  async function getEmps() {
    try {
      let res = await fetch(
        "http://localhost:3000/employee-api/employees"
      );

      const contentType = res.headers.get("content-type");

      if (
        !contentType ||
        !contentType.includes("application/json")
      ) {
        const text = await res.text();
        console.log(text);

        throw new Error("Server did not return JSON");
      }

      let resObj = await res.json();

      console.log(resObj);

      setEmps(resObj.payLoad);
    } catch (err) {
      console.log("error:", err);
    }
  }

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center mb-4">
        List of Employees
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps?.map((empObj) => (
          <div key={empObj._id} className="bg-white p-5 shadow rounded-xl">
            <p>{empObj.email}</p>

            <p className="mb-3">{empObj.name}</p>

            <div className="flex justify-around gap-2">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-green-400 p-2 rounded-2xl text-white"
              >
                View
              </button>

              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-orange-400 p-2 rounded-2xl text-white"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmpByID(empObj._id)}
                className="bg-red-400 p-2 rounded-2xl text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;