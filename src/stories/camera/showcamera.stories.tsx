import { Camera }  from "@components/Mone/showcamera"
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import { FC } from "react";
import "@styles/globals.css";

export const List: typeof Camera = (args) => <Camera />;

export default {
  title: "Camera/showCamera",
  component: Camera,
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