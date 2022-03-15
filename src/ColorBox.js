export function ColorBox({ colors }) {
  const styl = {
    backgroundColor: colors,
    height: "25px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style={styl}></div>;
}
