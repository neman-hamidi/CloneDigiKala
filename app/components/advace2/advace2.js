import "./advace2.css";
import imgs from "./Text";
export default function advace2() {
  return (
    <div className="advace2">
      <div className="div-advance2">
        {imgs.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt="imgs" />
          </div>
        ))}
      </div>
    </div>
  );
}
