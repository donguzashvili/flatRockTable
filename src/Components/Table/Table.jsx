import { useState, useEffect, useMemo } from "react";

import Thead from "./Thead";
import Tbody from "./Tbody";
import Tfoot from "./Tfoot";
import "./Table.css";
import { useParams } from "react-router-dom";

const data = require("../../Assets/db.json");

export default function Table() {
  const [localData, setData] = useState();
  const [dataPerPage, setDataPerPage] = useState();
  const [pageCount, setPageCount] = useState();
  const { page } = useParams();

  const currentTableData = useMemo(() => {
    if (!dataPerPage) return [];
    const firstPageIndex = (page * 1 - 1) * dataPerPage;
    const lastPageIndex = firstPageIndex + dataPerPage;
    return localData.slice(firstPageIndex, lastPageIndex);
  }, [dataPerPage, localData, page]);

  useEffect(() => {
    setData(data.data);
  }, []);

  useEffect(() => {
    if (!localData || !dataPerPage) return;
    const count = Math.ceil(localData?.length / dataPerPage);
    let tempArr = [];
    for (let i = 1; i <= count; i++) {
      tempArr.push(i);
    }
    setPageCount(tempArr);
  }, [localData, dataPerPage]);

  return (
    <div className="tableWrapper">
      <table>
        <Thead />
        <Tbody data={currentTableData} />
        <Tfoot setDataPerPage={setDataPerPage} pageCount={pageCount} />
      </table>
    </div>
  );
}
