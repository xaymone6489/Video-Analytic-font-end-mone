import { Detail } from "@components/Mone/detail";
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import "@styles/globals.css";

import { FC } from "react";

export const List: typeof Detail = (args) => <Detail />;

export default {
  title: "Reportlist/Detail",
  component: Detail,
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
