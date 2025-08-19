import "./firstproduct.css";
const firstproduct = ({ children }) => (
  <section className="mt-4">
    <div className="introduction-product">{children}</div>
    <div className="underline-div"></div>
  </section>
);
export default firstproduct;
