import { useState } from "react";
import { useForm } from "react-hook-form";

function HandsOn1() {

  const [users, setUsers] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // form submit
  const onFormSubmit = (obj) => {
    setUsers([...users, obj]);
  };

  return (
    <div className="bg-red-600">

      <h1 className="text-center text-3xl m-3">Create user name</h1>

      <form
        className="max-w-md mx-auto mt-10 bg-amber-500 mx-30 p-10"
        onSubmit={handleSubmit(onFormSubmit)}
      >

        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            {...register("Username")}
            id="Firstname"
            className="border w-full p-3"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="border w-full p-3"
          />
        </div>

        {/* DOB */}
        <div className="mb-3">
          <label htmlFor="dateofbirth">DOB</label>
          <input
            type="date"
            {...register("dateofbirth")}
            id="dateofbirth"
            className="border w-full p-3"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="text-xl bg-green-400 block m-auto p-2 rounded-4xl"
          >
            Add User
          </button>
        </div>

      </form>

      {/* Table */}
      <table className=" mx-auto border mt-10 bg-gray-400  ">

        <thead>
          <tr>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">DOB</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((userObj, index) => (
              <tr key={index}>
                <td className="border p-2">{userObj.Username}</td>
                <td className="border p-2">{userObj.email}</td>
                <td className="border p-2">{userObj.dateofbirth}</td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>
  );
}

export default HandsOn1;