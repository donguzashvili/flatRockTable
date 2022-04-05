import { ReactComponent as NameIcn } from '../Assets/img/face-24px (1).svg';
import { ReactComponent as Close } from '../Assets/img/close-24px (5).svg';
import { ReactComponent as DeleteBtn } from '../Assets/img/delete.svg';

import './warn.css';

export default function Warn({ userData, closeWindow, deleteUser }) {
  return (
    <div className="warn">
      <div className="warnWrapper">
        <Close className="closeIcn" onClick={closeWindow} />
        <h3>Delete User</h3>
        <div className="deleteUserContent">
          <NameIcn />
          <div className="userNameContainer">
            <p className="user">{`${userData?.name} ${userData?.last_name}`} </p>
            <div className="userStatus">
              <p>{`${userData?.status} User`}</p>
            </div>
          </div>
        </div>
        <DeleteBtn onClick={() => deleteUser(userData?.id)} className="deleteBtn" />
      </div>
    </div>
  );
}
