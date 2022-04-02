export default function Thead() {
  const ColumnNames = ["", "USER", "ROLE", "STATUS", "ACTIONS"];

  return (
    <thead>
      <tr>
        {ColumnNames.map((el, index) => {
          return (
            <th key={index}>
              <div>{el}</div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
