export default function FooterInfo() {
  const dateYear = new Date().getFullYear();
  return (
    <div className="grid grid-col-3">
      <div>
        <p>
          <span>&copy; {dateYear}</span> Banti Inc
        </p>
      </div>
      <div>Careers</div>
      <div>Partners</div>
    </div>
  );
}
