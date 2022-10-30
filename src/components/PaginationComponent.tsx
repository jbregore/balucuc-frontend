import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useRouter } from "next/router";

const PaginationComponent = ({ page, numberOfPages }: any) => {
  const router = useRouter();

  const handlePaginationChange = (page: any) => {
    router.push(`/admin/users?page=${page}`);
  };

  return (
    <div className="flex items-center mt-6 justify-between">
      <div>
        <p className="text-[#525F7F]">Showing 10 out of 100 data</p>
      </div>
      <div className="">
        <Pagination
          //   classes={{
          //     ul: {
          //       justifyContent: "space-around",
          //     },
          //   }}
          count={numberOfPages ? numberOfPages : 0}
          page={Number(page) || 1}
          size="small"
          // color="primary"
          renderItem={(item: any) => (
            <PaginationItem
              style={{ color: "#525F7F" }}
              {...item}
              onClick={() => handlePaginationChange(item.page)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
