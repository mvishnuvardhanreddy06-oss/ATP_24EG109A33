import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL || "https://atp-24eg109a33-1-8c9m.onrender.com";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // FORM SUBMIT
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      setError("");

      // API CALL
      const res = await fetch(
        `${API}/employee-api/employee`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEmpObj),
        }
      );

      // SUCCESS
      if (res.status === 201) {
        navigate("/list");
        return;
      }

      // SAFE ERROR HANDLING
      const contentType = res.headers.get("content-type");

      let errorData;

      if (contentType && contentType.includes("application/json")) {
        errorData = await res.json();

        console.log("error response is", errorData);

        throw new Error(errorData.error || errorData.message);
      } else {
        const text = await res.text();

        console.log("server returned html/text:", text);

        throw new Error("Server returned invalid response");
      }
    } catch (err) {
      console.log("err in catch", err);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // LOADING
  if (loading) {
    return <p className="text-center text-4xl mt-10">Loading...</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-5xl text-center text-gray-600 mb-10">
        Create New Employee
      </h1>

      {/* ERROR */}
      {error && (
        <p className="text-red-500 text-center text-2xl mb-5">{error}</p>
      )}

      {/* FORM */}
      <form
        className="max-w-md mx-auto"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        {/* NAME */}
        <input
          type="text"
          placeholder="Enter name"
          {...register("name", {
            required: "Name is required",
          })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter email"
          {...register("email", {
            required: "Email is required",
          })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* MOBILE */}
        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile", {
            required: "Mobile number is required",
          })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* DESIGNATION */}
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation", {
            required: "Designation is required",
          })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* COMPANY NAME */}
        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName", {
            required: "Company name is required",
            minLength: {
              value: 4,
              message: "Company name must contain at least 4 characters",
            },
          })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* VALIDATION ERRORS */}
        {errors.companyName && (
          <p className="text-red-500 mb-2">
            {errors.companyName.message}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4 hover:bg-gray-800"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;