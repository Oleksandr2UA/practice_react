export const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      style={{ marginTop: '20px' }}
      value={filter}
      onChange={onFilterChange}
    />
  );
};
