import { ReactComponent as Avatar } from '../../Assets/img/Group 2.svg';
import { ReactComponent as Key } from '../../Assets/img/vpn_key-24px.svg';
import { ReactComponent as ResendBtn } from '../../Assets/img/resend.svg';

export default function AvatarSection({ data }) {
  const status = data?.status === 'Inactive' ? 'Inactive' : '';

  return (
    <div className="avatarSection">
      <div className="avatarContainer">
        <Avatar />
        {data?.role === 'Admin' ? (
          <span>
            <Key />
          </span>
        ) : null}
      </div>
      <p className={`uploadText ${status}_hidden`}>upload a photo</p>
      <div className="persInfo">
        <p className={status}>{data?.name}</p>
        <p className={status}>{data?.last_name}</p>
        <span className={status}>{data?.mail}</span>
      </div>
      <ResendBtn className={`resend ${status}_btn`} />
    </div>
  );
}
