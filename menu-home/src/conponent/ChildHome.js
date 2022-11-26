import { Routes, Route, Link, useLocation , Outlet} from "react-router-dom";

//conponent con của Home
function Hopital() {
  return (
    <>
      <h3>Hopital</h3>
      <p>
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </p>
    </>
  );
}

function Pediatrics() {
  return (
    <>
      <h3>Pediatrics</h3>
      <p>
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </p>
    </>
  );
}

function CriticalCare() {
  return (
    <>
      <h3>Critical Care</h3>
      <p>
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </p>
    </>
  );
}

function Laboratory() {
  return (
    <>
      <h3>Laboratory</h3>
      <p>
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </p>
    </>
  );
}

function ListComponent() {
//   const location = useLocation();
//   console.log(11, location);
  return (
    <>
      <ul className="list-child">
        <li>
          <Link className="list-child_iteam" to="hopital">Hopital</Link>
        </li>
        <li>
          <Link className="list-child_iteam" to="perdiatrics">Perdiatrics</Link>
        </li>
        <li>
          <Link className="list-child_iteam" to="criticalcare">CriticalCare</Link>
        </li>
        <li>
          <Link className="list-child_iteam" to="laboratory">Laboratory</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="hopital" element={<Hopital ></Hopital>} />
          <Route path="perdiatrics" element={<Pediatrics />} />
          <Route path="criticalcare" element={<CriticalCare />} />
          <Route path="laboratory" element={<Laboratory />} />
        </Routes>
        <Outlet />
      </div>
    </>
  );
}

export default ListComponent;
