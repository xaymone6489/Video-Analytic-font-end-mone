import { ReportList } from "@components/report";
import { RefineWithoutLayout } from "../../../../.storybook/RefineWithoutLayout";
import "@styles/globals.css";

import { FC } from "react";

export const List: typeof ReportList = (args) => <ReportList />;

export default {
  title: "Report/list",
  component: ReportList,
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
