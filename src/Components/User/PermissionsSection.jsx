import SliderBtn from '../statusSlider';
import { ReactComponent as ArrowDown } from '../../Assets/img/arrowDown.svg';

export default function PermissionSection({ data, permissions }) {
  const dataStatus = data?.status === 'Inactive' ? 'Inactive' : '';

  //toggle dropdown options options
  const showOptions = (number) => {
    const optionContainer = document.getElementsByClassName(`options_N_${number}`)[0];
    optionContainer.classList.toggle('showOptions');
  };

  return (
    <div className="permissionsContainer">
      <div className="permissionsheader">
        <h3>Permissions</h3>
        <p>{data?.role}</p>
      </div>
      <div className="superAdmin">
        <p className={dataStatus}>Super Admin</p>

        <SliderBtn status={'Inactive'} className="Inactive_status" dataStatus={dataStatus} />
      </div>
      <div className="permissionGroups">
        {permissions && permissions[data?.id]
          ? permissions[data?.id].map((item, index) => {
              const status = item.status === false ? 'Inactive' : 'Active';
              const defaultOpen = index === 0 ? 'showOptions' : '';
              return (
                <div className="statusGroups" key={index}>
                  <div className="statusGroupHeader">
                    <div onClick={() => showOptions(index + 1)}>
                      <ArrowDown className={`keyDownArrow ${dataStatus}_arrow`} />
                      <h4 className={dataStatus}>Permission Group {index + 1}</h4>
                    </div>
                    <SliderBtn status={status} className={`${status}_status`} dataStatus={dataStatus} />
                  </div>
                  <div className={`statusGroupBody options_N_${index + 1} ${defaultOpen}`}>
                    {item.group.map((el, key) => {
                      const elementStatus = el[`permission_${key + 1}`] === false ? 'Inactive' : 'Active';
                      return (
                        <div className={`statusElement ${elementStatus}_element`} key={key}>
                          <div>
                            <span className={`statusCircle ${dataStatus}_Circle`}></span>
                            <p className={dataStatus}>
                              Permission {index + 1}
                              {key + 1}
                            </p>
                          </div>
                          <SliderBtn status={elementStatus} className={`${elementStatus}_status `} dataStatus={dataStatus} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
