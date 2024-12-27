import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import "./footer.css";
export default function footer() {
  return (
    <footer>
      <div className="div-footer">
        <div className="pe-2">
          <SupportAgentOutlinedIcon />
        </div>
        <div className="p-footer">
          <p>7 روز هفته ، 24 ساعت</p>
          <p>تماس با پشتیبانی</p>
        </div>
        <div>
          <button className="btn btn-outline-dark">تماس</button>
        </div>
      </div>
      <div className="div-footer">
        <div className="pe-2">
          <img src="/images/Neman.webp" alt="" />
        </div>
        <div className="p-footer">
          <p>تجربه خرید بهتر</p>
          <p>اپلیکیشن دیجی کالا</p>
        </div>
        <div>
          <button className="btn btn-dark">دانلود</button>
        </div>
      </div>
      <div className="mt-4 accordion-footer">
        <Accordion slotProps={{ heading: { component: "h4" } }} className="mb-3">
          <AccordionSummary expandIcon={<ExpandLessIcon />} id="panel1-header">
            با نعمان کالا
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ heading: { component: "h4" } }} className="mb-3">
          <AccordionSummary expandIcon={<ExpandLessIcon />} id="panel1-header">
            خدمات مشتریان
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ heading: { component: "h4" } }} className="mb-3">
          <AccordionSummary expandIcon={<ExpandLessIcon />} id="panel1-header">
            راهنمای خرید از ما
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ heading: { component: "h4" } }} className="mb-3">
          <AccordionSummary expandIcon={<ExpandLessIcon />} id="panel1-header">
            شرکت تجاری  
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </footer>
  );
}
