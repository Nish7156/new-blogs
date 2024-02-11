import Breadcrumb from "@/components/Pages/Categories/Breadcrumb";
import React from "react";

function layout({ children }: any) {
  return (
    <div>
      <Breadcrumb />
      {children}
    </div>
  );
}

export default layout;
