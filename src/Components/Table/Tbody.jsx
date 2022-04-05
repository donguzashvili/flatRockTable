import { ReactComponent as Avatar } from '../../Assets/img/Group 2.svg';
import { ReactComponent as DeleteIcn } from '../../Assets/img/Path 41.svg';
import { ReactComponent as VpnKey } from '../../Assets/img/vpn_key-24px.svg';
import { ReactComponent as Settings } from '../../Assets/img/settings.svg';
import SliderBtn from '../statusSlider';
import { useNavigate } from 'react-router-dom';

export default function Tbody({ data, deleteData, editUser }) {
  const navigate = useNavigate();

  //edit user
  const changeUser = (id) => {
    navigate(`/user/${id}`);
    editUser(id);
  };

  return (
    <tbody>
      {data?.map((item, index) => {
        return (
          <tr key={index} className={`${item.status === 'Inactive' ? 'Inactive' : 'Active'}`}>
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
                <div className="centerWrapper">
                  {item.role === 'Admin' ? (
                    <div className="vpnKey">
                      <VpnKey />
                    </div>
                  ) : null}
                  <p>{item.role}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="tdWrapper">
                <SliderBtn status={item.status} className={`${item.status}_status`} />
              </div>
            </td>
            <td>
              <div className="icnWrapper tdWrapper">
                <Settings onClick={() => changeUser(item.id)} />
                <DeleteIcn onClick={() => deleteData(index)} />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
