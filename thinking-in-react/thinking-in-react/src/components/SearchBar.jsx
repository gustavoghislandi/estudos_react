export default function SearchBar({
  filterText, 
  inStockOnly, 
  onFilterTextChange, 
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
      type="text" 
      value={filterText}
      placeholder="Search..."
      onChange={(e) => onFilterTextChange(e.target.value)} />
      <label style={{display: "block", margin: "10px 0px"}}>
        <input 
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}