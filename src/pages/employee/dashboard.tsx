import React from "react";
import Card from "../../components/Card";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdPregnantWoman, MdOutlinePeople } from "react-icons/md";
import { FaBaby, FaWheelchair } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { DataChart } from "../../components/admin-dashboard/DataChart";
import { TbVaccine } from "react-icons/tb";
import Image from "next/image";
import { senior } from "../../images";
import { getEmployeeLayout } from "../../components/EmployeeLayout";

const EmployeeDashboard = () => {
  return (
    <div>
      <p className="text-xl mb-2 text-[#525F7F] font-bold">Populations</p>
      <div className="flex space-x-6 mb-10">
        <div className=" relative w-32 flex items-start justify-end text-left h-32">
          <DataChart
            datas={[19, 5, 30, 60, 43, 14, 7]}
            colors={[
              "#FFA384",
              "#FA26A0",
              "#74BDCB",
              "#05445E",
              "#EF7C8E",
              "#F8D210",
              "#BD97CB",
            ]}
            optionValue={[
              "Infants",
              "Pregnants",
              "Seniors",
              "Teenagers",
              "Young Adults",
              "Adults",
              `PWD's`,
            ]}
          />
        </div>

        <Card
          icon={<FaBaby size={46} color="#276195" />}
          border="#FFA384"
          title="Number of Infants"
        />
        <Card
          icon={<MdPregnantWoman size={46} color="#276195" />}
          border="#FA26A0"
          title="Number of Pregnants"
        />
        <Card
          icon={<Image src={senior} width="50px" height="50px" alt="" />}
          border="#74BDCB"
          title="Number of Seniors"
        />
      </div>

      <div className="flex space-x-6 mb-10 pl-36 h-32 ml-2">
        <Card
          icon={<MdOutlinePeople size={46} color="#276195" />}
          border="#05445E"
          title={`Number of Teenagers`}
        />
        <Card
          icon={<BsFillPeopleFill size={46} color="#276195" />}
          border="#EF7C8E"
          title="No of Young Adults"
        />
        <Card
          icon={<IoIosPeople size={50} color="#276195" />}
          border="#F8D210"
          title="Number of Adults"
        />
      </div>

      <div className="flex space-x-6 mb-10 pl-36 h-32 ml-2">
        <Card
          icon={<FaWheelchair size={46} color="#276195" />}
          border="#BD97CB"
          title={`Number of PWD's `}
        />
      </div>

      <p className="text-xl mb-2 text-[#525F7F] font-bold">Medicines</p>
      <div className="flex space-x-6 mb-10">
        <div className=" relative w-32 flex items-start justify-end text-left h-32">
          <DataChart
            colors={["#0A7029", "#DB1F48", "#E1C340"]}
            datas={[19, 12, 8]}
            optionValue={[
              "Available Medicines",
              "Expired Medicines",
              "Out of stock Medicines",
            ]}
          />
        </div>

        <Card
          icon={<GiMedicines size={46} color="#276195" />}
          border="#0A7029"
          title="Number of Medicines"
          good
        />
        <Card
          icon={<GiMedicines size={46} color="#276195" />}
          border="#DB1F48"
          title="Expired Medicines"
          expired
        />
        <Card
          icon={<GiMedicines size={46} color="#276195" />}
          border="#E1C340"
          title="Out of stock Medicines"
          outStock
        />
      </div>

      <p className="text-xl mb-2 text-[#525F7F] font-bold">Vaccines</p>
      <div className="flex space-x-6 mb-10">
        <div className=" relative w-32 flex items-start justify-end text-left h-32">
          <DataChart
            colors={["#0A7029", "#DB1F48", "#E1C340"]}
            datas={[19, 12, 8]}
            optionValue={[
              "Available Vaccines",
              "Expired Vaccines",
              "Out of stock Vaccines",
            ]}
          />
        </div>

        <Card
          icon={<TbVaccine size={46} color="#276195" />}
          border="#0A7029"
          title="Number of Vaccines"
          good
        />
        <Card
          icon={<TbVaccine size={46} color="#276195" />}
          border="#DB1F48"
          title="Expired Vaccines"
          expired
        />
        <Card
          icon={<TbVaccine size={46} color="#276195" />}
          border="#E1C340"
          title="Out of stock Vaccines"
          outStock
        />
      </div>
    </div>
  );
};

EmployeeDashboard.getLayout = getEmployeeLayout;

export default EmployeeDashboard;
