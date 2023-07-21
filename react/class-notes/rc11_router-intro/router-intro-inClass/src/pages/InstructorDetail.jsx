import React from "react";
import { useLocation, useParams } from "react-router-dom";

const InstructorDetail = () => {
  //   let param = useParams();
  //* Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  //* yakalanan id'ye ait güncel veriler fetch yapılabilir
  let { id } = useParams();
  console.log({ id });
  //* navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //* Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  //   let location = useLocation();
  let { state, pathname } = useLocation();
  console.log({ state });
  return (
    <div className="p-3">
      <p>
        from useParam: I'am instructor-
        <span className="text-danger fw-bolder">{id}</span>
      </p>
      <p>
        from useLocation: I'am instructor-
        <span className="text-danger fw-bolder">{state?.name}</span>
      </p>
      <p>our path is: {pathname}</p>
    </div>
  );
};

export default InstructorDetail;
