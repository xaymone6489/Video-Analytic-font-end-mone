import { History }  from "@components/Mone/history"
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import { FC } from "react";
import "@styles/globals.css";

export const List: typeof History = (args) => <History />;

export default {
  title: "History/history",
  component: History,
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