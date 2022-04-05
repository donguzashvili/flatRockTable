import { useState, useEffect, useMemo } from 'react';

import Thead from './Thead';
import Tbody from './Tbody';
import Tfoot from './Tfoot';
import './Table.css';
import { useParams } from 'react-router-dom';

export default function Table({ data, setDeleteUser, editUser, setRoute }) {
  const [localData, setData] = useState();
  const [dataPerPage, setDataPerPage] = useState();
  const [pageCount, setPageCount] = useState();
  const [sortDirection, setSortDirection] = useState('ascending');
  const { page } = useParams();

  //slice data for pagination
  const currentTableData = useMemo(() => {
    if (!dataPerPage || !localData) return [];

    const firstPageIndex = (page * 1 - 1) * dataPerPage;
    const lastPageIndex = firstPageIndex + dataPerPage;

    return localData.slice(firstPageIndex, lastPageIndex);
  }, [dataPerPage, localData, page]);

  // delete data from table
  const deleteData = (id) => {
    setDeleteUser(localData[id]);
  };

  //on componetmount fill data and render parent component
  useEffect(() => {
    setData(data);
    setRoute('table');
  }, [data, setRoute]);

  //sort data
  const sortData = (key) => {
    if (sortDirection === 'ascending') setSortDirection('descending');
    else setSortDirection('ascending');
    let tempData = [...localData];
    tempData.sort((a, b) => {
      if (sortDirection === 'ascending') {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      } else {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      }
    });
    setData(tempData);
  };

  //calculate page length
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
        <Thead sortData={sortData} />
        <Tbody data={currentTableData} deleteData={deleteData} editUser={editUser} />
        <Tfoot setDataPerPage={setDataPerPage} pageCount={pageCount} />
      </table>
    </div>
  );
}
