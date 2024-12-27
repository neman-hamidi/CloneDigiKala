import "./specialItem.css";
export default function specialItem({ children }) {
  return (
    <div className="specialItem">
      <div className="div-img-dicount">
        {children}
        <div className="discount">2%</div>
      </div>
      <p className="p-specialitem pt-2 pe-1 text-secondary">گوشی نو بدون کارکرد با تقذیم و تا قابل</p>
      <p className="fs-6 pe-1">7,900,000 تومان</p>
      <p className="text-secondary pe-1 p-discount">
        <del>7,750,000 تومان</del>
      </p>
    </div>
  );
}
