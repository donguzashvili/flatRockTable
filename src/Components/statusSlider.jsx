import { ReactComponent as Active } from '../Assets/img/activeBtn.svg';
import { ReactComponent as Inactive } from '../Assets/img/inactiveBtn.svg';

export default function SliderBtn({ status, className, dataStatus }) {
  const disableStatus = dataStatus === 'Inactive' ? `${className} Inactive_slider` : className;

  switch (status) {
    case 'Active':
      return <Active className={disableStatus} />;
    case 'Inactive':
      return <Inactive className={disableStatus} />;
    default:
      break;
  }
}
