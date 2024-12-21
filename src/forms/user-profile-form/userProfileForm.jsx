import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UserProfileForm = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:7000/api/my/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.headers.get("content-type")?.includes("application/json")) {
        const result = await response.json();
        console.log("Server Response:", result);
      } else {
        console.error("Unexpected response format:", await response.text());
      }
    } catch (error) {
      console.error("Error during API call:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-gray-50 rounded-lg p-4"
    >
      <h2 className="text-2xl font-bold">User Profile Form</h2>

      {/* Name Field */}
      <div className="form-field">
        <label className="form-label">Name</label>
        <input
          {...register("name", { required: true })}
          disabled={isLoading}
          className="bg-white w-full p-2 border rounded"
          type="text"
        />
      </div>

      {/* Email Field */}
      <div className="form-field">
        <label className="form-label">Email</label>
        <input
          {...register("email")}
          disabled={isLoading}
          className="bg-white w-full p-2 border rounded"
          type="email"
        />
      </div>

      {/* Address Line 1 Field */}
      <div className="form-field">
        <label className="form-label">Address Line 1</label>
        <input
          {...register("addressLine1", { required: true })}
          disabled={isLoading}
          className="bg-white w-full p-2 border rounded"
          type="text"
        />
      </div>

      {/* City Field */}
      <div className="form-field">
        <label className="form-label">City</label>
        <input
          {...register("city", { required: true })}
          disabled={isLoading}
          className="bg-white w-full p-2 border rounded"
          type="text"
        />
      </div>

      {/* Country Field */}
      <div className="form-field">
        <label className="form-label">Country</label>
        <input
          {...register("country", { required: true })}
          disabled={isLoading}
          className="bg-white w-full p-2 border rounded"
          type="text"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-orange-500 text-white py-2 px-4 rounded"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default UserProfileForm;
