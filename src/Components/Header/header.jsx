import { useParams } from "react-router-dom";
import Icon from "./Icon";

import "./header.css";

export default function Header() {
  const { page } = useParams();

  return (
    <header>
      <div className="headerWrapper">
        <div>
          <h1>{!page ? "Project Access" : "User Setup"}</h1>
        </div>
        {page === "table" ? (
          <div>
            <input type="text" />
          </div>
        ) : null}
        <Icon />
      </div>
    </header>
  );
}
