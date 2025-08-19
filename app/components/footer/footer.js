import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { footerText, details } from "./Text";
import "./footer.css";
export default function footer() {
  return (
    <footer>
      {footerText.map((item, index) => (
        <div key={index} className="div-footer">
          <div className="pe-2">{item.icon}</div>
          <div className="p-footer w-full">
            <h3 className="text-xs md:text-sm">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
          <button className="btn btn-outline-dark">{item.btn}</button>
        </div>
      ))}

      <div className="mt-4 accordion-footer">
        {details.map((item, index) => (
          <Accordion
            key={index}
            slotProps={{ heading: { component: "h4" } }}
            className="mb-3"
          >
            <AccordionSummary
              expandIcon={<ExpandLessIcon />}
              id="panel1-header"
              
            >
              <p className="text-sm">{item.title}</p>
            </AccordionSummary>
            <AccordionDetails className="text-xs">{item.desc}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </footer>
  );
}
