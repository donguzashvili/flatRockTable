import { ReactComponent as SaveChangesBtn } from '../../Assets/img/saveChanges.svg';
import SliderBtn from '../statusSlider';
import { InputComponent, SelectComponent } from '../Input';
import { useState } from 'react';

export default function DetailsSection({ data, updateStatus, updateUser }) {
  const [role, setRole] = useState(data?.role);
  const status = data?.status === 'Inactive' ? 'Inactive_btn' : '';

  //toggle current status
  const toggleRole = () => {
    let tempStatus = data?.status;
    if (tempStatus === 'Inactive') tempStatus = 'Active';
    else if (tempStatus === 'Active') tempStatus = 'Inactive';
    updateStatus({ id: data?.id, status: tempStatus });
  };

  //modify current data and pass to parent
  const editData = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    let tempObj = { id: data?.id, role };
    for (const [name, value] of form) {
      tempObj = { ...tempObj, [name]: value };
    }
    updateUser(tempObj);
  };

  //check if input value is not empty (changes styles)
  const checkValue = (e) => {
    const input = e.currentTarget.children[1];
    const paragraph = e.currentTarget.children[0];

    if (input.value === '' && paragraph.classList.contains('activeInput')) paragraph.classList.remove('activeInput');
  };

  return (
    <form onSubmit={editData} className="detailsContainer">
      <h3>Details</h3>
      <div className="userStatusSection">
        <div onClick={toggleRole}>
          <SliderBtn status={data?.status} className={`${data?.status}_status`} />
        </div>
        <p>
          The user is <span>{data?.status}</span>
        </p>
      </div>
      <div>
        <div className="labelWrappers">
          <InputComponent
            placeholder="* First Name"
            name="name"
            checkValue={checkValue}
            defaultValue={data?.name}
            dataStatus={data?.status}
          />
        </div>

        <div className="labelWrappers">
          <InputComponent
            placeholder="* Last Name"
            name="last_name"
            checkValue={checkValue}
            defaultValue={data?.last_name}
            dataStatus={data?.status}
          />
        </div>

        <div className="labelWrappers">
          <div className="roleDropDown">
            <SelectComponent placeholder="* Role" setValue={setRole} value={role} dataStatus={data?.status} />
          </div>
        </div>
      </div>
      <button type="submit" className="saveBtn">
        <SaveChangesBtn className={status} />
      </button>
    </form>
  );
}
