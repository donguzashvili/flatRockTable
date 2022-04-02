import { useEffect, useState } from "react";
import { ReactComponent as DropIcon } from "../../Assets/img/Polygon 6.svg";

import Pagination from "./Pagination";

export default function Tfoot({ setDataPerPage, pageCount }) {
  const [showData, setShowData] = useState(5);
  const [showOptions, setShowOptions] = useState(true);

  useEffect(() => {
    setShowOptions(!showOptions);
    setDataPerPage(showData);
  }, [showData]);

  return (
    <tfoot>
      <tr>
        <td></td>
        <td colSpan={2}>
          <div className="dropDownWrapper">
            <p>Records per Page</p>
            <div className="dropDown">
              <button onClick={() => setShowOptions(!showOptions)}>
                <p>{showData}</p>{" "}
                <DropIcon className={showOptions ? "rotateArrow" : ""} />
              </button>
              <div className={`options ${showOptions ? "showOptions" : ""}`}>
                <span onClick={() => setShowData(5)}>5</span>
                <span onClick={() => setShowData(10)}>10</span>
                <span onClick={() => setShowData(15)}>15</span>
              </div>
            </div>
          </div>
        </td>
        <td colSpan={2}>
          <Pagination pageCount={pageCount} />
        </td>
      </tr>
    </tfoot>
  );
}
