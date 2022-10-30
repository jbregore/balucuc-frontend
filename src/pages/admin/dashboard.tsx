import React from "react";
import Card from "../../components/Card";
import Layout, { getLayout } from "../../components/Layout";
import { FiUsers } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { GiMedicines } from "react-icons/gi";
import { ImUser } from "react-icons/im";
import { DataChart } from "../../components/admin-dashboard/DataChart";
import { TbVaccine } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div>
      <p className="text-xl mb-2 text-[#525F7F] font-bold">Users</p>
      <div className="flex space-x-6 mb-10">
        <div className=" relative w-32 flex items-start justify-end text-left h-32">
          <DataChart
            datas={[19, 12]}
            colors={["#FFA384", "#EF7C8E"]}
            optionValue={["Admins", "Employees"]}
          />
        </div>

        <Card
          icon={<FiUsers size={46} color="#276195" />}
          border="#74BDCB"
          title="Number of Users"
        />
        <Card
          icon={<RiAdminLine size={46} color="#276195" />}
          border="#FFA384"
          title="Number of Admins"
        />
        <Card
          icon={<ImUser size={46} color="#276195" />}
          border="#EF7C8E"
          title="Number of Employees"
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

Dashboard.getLayout = getLayout;

export default Dashboard;
