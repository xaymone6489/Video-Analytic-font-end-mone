import React from "react";
import { useNavigation } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const UserCreate: React.FC = () => {
  const { list } = useNavigation();

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  return (
    
    <div style={{ padding: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>User Create</h1>
        <div>
          <button
            onClick={() => {
              list("user");
            }}
          >
            Users List
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onFinish)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <label>
            <span style={{ marginRight: "8px" }}>Username</span>
            <input
              type="text"
              {...register("username", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.username?.message as string}
            </span>
          </label>
          <label>
            <span style={{ marginRight: "8px" }}>Is Active</span>
            <input
              type="checkbox"
              {...register("is_active", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {errors?.is_active?.message as string}
            </span>
          </label>
          <label>
            <span style={{ marginRight: "8px" }}>Is Staff</span>
            <input
              type="checkbox"
              {...register("is_staff", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {errors?.is_staff?.message as string}
            </span>
          </label>
          <label>
            <span style={{ marginRight: "8px" }}>Password</span>
            <input
              type="text"
              {...register("password", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.password?.message as string}
            </span>
          </label>
          <label>
            <span style={{ marginRight: "8px" }}>Date Joined</span>
            <input
              {...register("date_joined", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.date_joined?.message as string}
            </span>
          </label>
          <div>
            <button type="submit" value="Save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};
