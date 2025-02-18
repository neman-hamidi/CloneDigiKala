import "./specialItem.css";
const specialItem = ({ children }) => {
  return (
    <section className="specialItem">
      <div className="div-img-dicount">
        {children}
        <h3 className="discount">2%</h3>
      </div>
      <p className="p-specialitem pt-2 pe-1 text-secondary">
        گوشی نو بدون کارکرد با تقذیم و تا قابل
      </p>
      <h3 className="fs-6 pe-1">7,900,000 تومان</h3>
      <p className="text-secondary pe-1 p-discount">
        <del>7,750,000 تومان</del>
      </p>
    </section>
  );
};
export default specialItem;
