import  {Table}  from "@components/Mone/table"
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import { FC } from "react";
import "@styles/globals.css";

export const List: typeof Table = (args) => <Table />;

export default {
  title: "Reportlist/table",
  component: Table,
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
