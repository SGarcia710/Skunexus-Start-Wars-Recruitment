function Grid({ data: { header = [], values = [], actions = [] } }) {
  return (
    <table className="gridTable w-full">
      <thead className="justify-between">
        <tr className="bg-gray-800">
          {header.map((colName) => (
            <th className="px-6 py-2 text-gray-300 uppercase" key={colName}>
              {colName}
            </th>
          ))}
          {!!actions.length && (
            <th className="px-16 py-2 text-gray-300 uppercase">Actions</th>
          )}
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {values.map((row, index) => (
          <tr className="bg-white border-4 border-gray-200" key={index}>
            {header.map((colName) => {
              const element = row[colName];
              return (
                <td
                  className={`w-20 py-2 ${
                    !isNaN(element) || Array.isArray(element)
                      ? 'text-right'
                      : ''
                  }`}
                  key={colName}
                >
                  {Array.isArray(element) ? element.length : element}
                </td>
              );
            })}
            {!!actions.length && (
              <td className="py-2">
                {actions.map(({ label, action, type }) => {
                  if (!!type) {
                    const qty = row[type].length;
                    if (qty > 0) {
                      return (
                        <Button
                          key={`button__${row.name}_${label}`}
                          onClick={() => action(row)}
                          label={label}
                        />
                      );
                    }
                  } else {
                    return (
                      <Button
                        key={`button__${row.name}_${label}`}
                        onClick={() => action(row)}
                        label={label}
                      />
                    );
                  }
                })}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const Button = ({ label, onClick }) => {
  return (
    <button
      className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Grid;
