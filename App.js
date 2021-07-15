
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import ColisReport from './ColisReport'

import { Viewer } from '@grapecity/activereports-react';
import '@grapecity/activereports/styles/ar-js-ui.css';
import '@grapecity/activereports/styles/ar-js-viewer.css';
import { } from '@grapecity/activereports-localization';

import { PdfExport, HtmlExport, XlsxExport, Core } from '@grapecity/activereports';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ColisListPrint from './ColisToPrintA5';


import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';



function App() {
    const componentRef = useRef();

    const pageStyle = `
  @page {
    size: 148mm 210mm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }
`;

    // event to print :
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    }
    );

    const rightContents = (

        <React.Fragment>
            <Button label="Print" icon="pi pi-print" className="p-button-danger p-mr-2" onClick={handlePrint}></Button>
        </React.Fragment>
    );

    return (
        //style={{ size: "148mm 210mm" }}
        <div >
            <Toolbar right={rightContents} />
            <div ><ColisListPrint ref={componentRef} /></div>
        </div>
    );
}

export default App;
