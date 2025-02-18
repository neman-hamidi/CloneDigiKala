import "./fixNavbar.css";
import navbarText from "./Text";
export default function fixNavbar() {
  return (
    <div className="fixNavbar">
      <div className="div-fixNavbar">
        {navbarText.map((item, index) => (
          <div key={index}>
            {item.icon}
            <p className="text-secondary">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
