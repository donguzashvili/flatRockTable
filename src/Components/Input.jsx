import { ReactComponent as DropIcon } from '../Assets/img/Polygon 6.svg';

import './input.css';

export function InputComponent({ checkValue, name, placeholder, defaultValue, dataStatus }) {
  const status = dataStatus === 'Inactive' ? 'Inactive' : '';

  return (
    <label onFocus={(e) => activateInput(e)} onBlur={(e) => checkValue(e)} htmlFor={name}>
      <p className={defaultValue ? `activeInput ${status}` : `${status}`}>{placeholder}</p>
      <input type="text" name={name} defaultValue={defaultValue} placeholder={placeholder} disabled={dataStatus === 'Inactive'} />
    </label>
  );
}

export function SelectComponent({ placeholder, value, setValue, dataStatus }) {
  //on clicking window close dropdown menu
  window.addEventListener('click', closeOptions);

  const status = dataStatus === 'Inactive' ? 'Inactive' : '';

  return (
    <label htmlFor="role" onClick={(e) => activateInput(e)} className="dropDown">
      <p className={value ? `activeInput ${status}` : ''}>{placeholder}</p>
      <div className="dropDownOptionsWrapper">
        <input placeholder={placeholder} value={value} type="text" disabled />
        <div style={dataStatus === 'Inactive' ? { display: 'none' } : null} className="dropdownOptions">
          <span onClick={() => setValue('Admin')}>Admin</span>
          <span onClick={() => setValue('User')}>User</span>
        </div>
        <DropIcon />
      </div>
    </label>
  );
}

function closeOptions() {
  const options = document.getElementsByClassName('openOptions')[0];
  const active = document.getElementsByClassName('activeInput')[0];
  const dropDown = document.getElementsByClassName('dropDown')[0]?.querySelectorAll('input')[0];
  if (active?.classList.contains('activeInput') && dropDown?.value === '') active.classList.remove('activeInput');
  if (options?.classList.contains('openOptions')) options.classList.remove('openOptions');
}

//change style of input
function activateInput(e) {
  e.stopPropagation();
  const label = e.currentTarget;
  if (label.classList.contains('dropDown')) e.currentTarget.classList.toggle('openOptions');
  const paragraph = e.currentTarget.children[0];
  paragraph.classList.add('activeInput');
}
