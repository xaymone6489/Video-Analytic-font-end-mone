import  {Login}  from "@components/Mone/login"
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import { FC } from "react";
import "@styles/globals.css";

export const List: typeof Login = (args) => <Login />;

export default {
  title: "Login/Login",
  component: Login,
  parameters: {
    nextjs: {
      router: {
        basePath: "",
      },
    },
  },

  argTypes: {
    title: {
      type: "string",
    },
  },

  decorators: [(Story: FC) => RefineWithoutLayout(Story)],
};
