import React from "react";
import { Container } from "reactstrap";

function PagesStarter() {
  // meta title
  document.title = "Stater Page | Skote - React Admin & Dashboard Template";

  return (
    <div className="page-content">
      <Container fluid>{/* Render Breadcrumbs */}</Container>
    </div>
  );
}

export default PagesStarter;
