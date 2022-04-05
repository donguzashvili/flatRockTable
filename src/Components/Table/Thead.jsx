import { ReactComponent as DropIcon } from '../../Assets/img/Polygon 6.svg';

export default function Thead({ sortData }) {
  const ColumnNames = [
    { name: '', key: '' },
    { name: 'USER', key: 'name' },
    { name: 'ROLE', key: 'role' },
    { name: 'STATUS', key: 'status' },
    { name: 'ACTIONS', key: '' },
  ];

  //sort data
  const updateSort = (e, key) => {
    sortData(key);
    e.currentTarget.classList.toggle('sortData');
  };

  return (
    <thead>
      <tr>
        {ColumnNames.map((el, index) => {
          return (
            <th key={index}>
              {index !== 0 && index !== ColumnNames.length - 1 ? (
                <div onClick={(e) => updateSort(e, el.key)}>
                  {el.name}
                  <DropIcon />
                </div>
              ) : (
                <div>{el.name}</div>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
