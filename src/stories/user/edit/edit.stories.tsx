import { UserEdit } from "@components/user/edit";
import { RefineWithoutLayout } from "../../../../.storybook/RefineWithoutLayout";
import { FC } from "react";
import "@styles/globals.css";

export const List: typeof UserEdit = (args) => <UserEdit />;

export default {
  title: "User/edit",
  component: UserEdit,
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
