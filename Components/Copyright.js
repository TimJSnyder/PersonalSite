export default function copyright() {
  const year = new Date().getFullYear();
  return (
    <div className="copyrightContainer">
      <p className="textCenter copyright">Copyright ⓒ {year}</p>
    </div>
  );
}
