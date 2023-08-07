import React from "react";
import Menubar from "./Menubar";
import {
  useShow,
  useResource,
  useNavigation,
  IResourceComponentsProps,
} from "@refinedev/core";

export const Detailcar: React.FC<IResourceComponentsProps> = () => {
  const { edit, list } = useNavigation();
  const { id, resource } = useResource();
  const { queryResult } = useShow({
    resource: "user",
    id,
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <div>
      <div className="text-white">
        <Menubar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  p-9 m-6  shadow-lg bg-slate-900 rounded-xl text-white">
        <div className="">
          <h3>ຮຸູບພາບທີ່ລ່ວງລະເມີດ</h3>
          <div className="py-2">
            <img
              src="https://media.istockphoto.com/id/1336889543/video/video-surveillance-on-the-motorway-license-plate-reading-camera.jpg?s=640x640&k=20&c=_cwc83PmbvR67RKS5atCMvP9rl43xdhukB3eZBbbylg="
              alt="My Image"
              width={500}
              className="rounded-lg"
            />
          </div>
          <div className="py-2">
            <img
              src="https://media.istockphoto.com/id/1336889543/video/video-surveillance-on-the-motorway-license-plate-reading-camera.jpg?s=640x640&k=20&c=_cwc83PmbvR67RKS5atCMvP9rl43xdhukB3eZBbbylg="
              alt="My Image"
              width={500}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="my-6 px-8 bg-slate-800 rounded-xl">
          <div className=" py-6">
            <h1 className=" text-center font-bold ">ລາຍລະອຽດ</h1>

            <div>
              <p>ປ້າຍລົດ : ກກ 9898</p>
              <p>ຍີ້ຫໍ້ລົດ: Honda</p>
              <p>ສີລົດ: ສີຂຽວ </p>
              <p>ປະເພດສີປ້າຍ: ປ້າຍຂາວ</p>
              <p>ແຂວງ: ແຂວງວຽງຈັນ</p>
              <p>ເວລາລ່ວງລະເມີດ: 2023/06/30 11:31 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
