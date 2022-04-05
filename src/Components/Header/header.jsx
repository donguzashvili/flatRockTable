import { ReactComponent as Search } from '../../Assets/img/search-24px (2).svg';
import Icon from './Icon';

import './header.css';

export default function Header({ searchData, addData }) {
  const url = window.location.href;

  return (
    <header>
      <div className="headerWrapper">
        <div>
          <h1>{url?.includes('table') ? 'Project Access' : 'User Setup'}</h1>
        </div>

        {url?.includes('table') ? (
          <div className="tableSearch">
            <label htmlFor="">
              <input type="text" placeholder="Type to filter the table" onInput={searchData} />
              <Search />
            </label>
          </div>
        ) : null}

        <Icon addData={addData} />
      </div>
    </header>
  );
}
