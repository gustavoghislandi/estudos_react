export default function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label style={{display: "block", margin: "10px 0px"}}>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}