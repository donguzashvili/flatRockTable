import { ReactComponent as Avatar } from "../../Assets/img/Group 2.svg";
import { ReactComponent as DeleteIcn } from "../../Assets/img/Path 41.svg";
import { ReactComponent as VpnKey } from "../../Assets/img/vpn_key-24px.svg";

export default function Tbody({ data }) {
  return (
    <tbody>
      {data?.map((item) => {
        return (
          <tr
            key={item.id}
            className={`${item.status === "inactive" ? "inactive" : "active"}`}
          >
            <td>
              <Avatar />
            </td>

            <td>
              <div>
                <p>{`${item.name} ${item.last_name}`}</p>
                <p>{item.mail}</p>
              </div>
            </td>
            <td>
              <div className="tdWrapper">
                {item.role === "Admin" ? (
                  <div className="vpnKey">
                    <VpnKey />
                  </div>
                ) : null}
                <p>{item.role}</p>
              </div>
            </td>
            <td>
              <div className="tdWrapper">{item.status}</div>
            </td>
            <td>
              <div className="icnWrapper tdWrapper">
                <DeleteIcn />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
