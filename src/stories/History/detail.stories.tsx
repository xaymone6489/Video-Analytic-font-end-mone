import { Detailcar } from "@components/Mone/Detailcar";
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import "@styles/globals.css";

import { FC } from "react";

export const List: typeof Detailcar = (args) => <Detailcar />;

export default {
  title: "History/car",
  component: Detailcar,
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
