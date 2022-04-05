import { ReactComponent as Settings } from '../../Assets/img/settings.svg';

export default function Icon({ addData }) {
  const url = window.location.href;

  return (
    <div onClick={addData} className={`CustomIcon ${url.includes('table') ? 'addIcon' : 'userSettingIcon'}`}>
      {url.includes('table') ? <p>+</p> : <Settings />}
    </div>
  );
}
