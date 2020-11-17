export default function copyright() {
  const year = new Date().getFullYear();
  return (
    <>
      <p className="textCenter copyright">Copyright ⓒ {year}</p>
    </>
  );
}
