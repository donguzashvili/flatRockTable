import { ReactComponent as Close } from '../Assets/img/close-24px (5).svg';
import { ReactComponent as NameIcn } from '../Assets/img/face-24px (1).svg';
import { ReactComponent as MailIcn } from '../Assets/img/alternate_email-24px.svg';
import { ReactComponent as RoleIcn } from '../Assets/img/vpn_key-24px.svg';
import { ReactComponent as Button } from '../Assets/img/Group 6.svg';

import { InputComponent, SelectComponent } from './Input';

import { useEffect, useState } from 'react';

import './adduser.css';

export default function AddUser({ closeWindow, addUser }) {
  const [validate, setValidate] = useState(false);
  const [inputData, setNewInputData] = useState();
  const [role, setRole] = useState();
  const [formData, setFormData] = useState();

  //validate form
  const checkValue = (e) => {
    const input = e.currentTarget.children[1];
    const paragraph = e.currentTarget.children[0];

    if (input.value === '' && paragraph.classList.contains('activeInput')) paragraph.classList.remove('activeInput');

    const form = new FormData(document.forms[0]);
    let tempObj = {};

    for (const [name, value] of form) {
      if (value === '') break;
      tempObj[name] = value;
      //make first chars to convert uppercase
      if (name === 'name' || name === 'last_name') tempObj[name] = capitalizeFirstLetter(value);
    }

    setNewInputData(tempObj);
  };

  //send form to parent
  const addNewUser = (e) => {
    const btn = e.nativeEvent.submitter.value;
    e.preventDefault();
    if (btn === false) return;
    addUser(formData);
  };

  //validate form pt2
  useEffect(() => {
    if (!inputData || !role) return setValidate(false);
    const arrLength = Object.keys(inputData).length;
    if (arrLength < 3 || !role) return setValidate(false);
    setFormData({ ...inputData, role });
    return setValidate(true);
  }, [inputData, role]);

  return (
    <div className="addUser">
      <div className="addUserWrapper">
        <Close className="closeIcn" onClick={closeWindow} />
        <form onSubmit={(e) => addNewUser(e)}>
          <h2>Invite New User</h2>
          <div>
            <NameIcn />
            <InputComponent checkValue={checkValue} name="name" placeholder="* First Name" />
            <InputComponent checkValue={checkValue} name="last_name" placeholder="* Last Name" />
          </div>
          <div>
            <MailIcn />

            <InputComponent checkValue={checkValue} name="mail" placeholder="* Email" />
          </div>
          <div className="roleDropDown">
            <RoleIcn />

            <SelectComponent placeholder="* Role" setValue={setRole} defaultValue={role} />
          </div>
          {validate === false ? (
            <div className="send validateFalse">
              <button value={false}>
                <Button />
              </button>
              <p>Fill in all the fields</p>
            </div>
          ) : null}
          {validate === true ? (
            <div className="send validateTrue">
              <button value={true} type="submit">
                <Button />
              </button>
              <p>Good to go</p>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

function capitalizeFirstLetter(string) {
  const res = string.charAt(0).toUpperCase() + string.slice(1);
  return res;
}
