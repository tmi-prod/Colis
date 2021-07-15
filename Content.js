import 'primeflex/primeflex.css';
import React from "react";
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { format, parse } from "date-fns";


const QRCode = require('qrcode.react');
const Barcode = require('react-barcode');

const Content = (props) => { 

 
  return (
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center', padding: '30px', margin: '15px',marginTop: '40px', borderStyle: 'ridge', }}>
 
      <div className="card">
        <div className="p-d-flex">

          <div style={{ width: '20%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }} >
            <QRCode style={{ width: '100%', height: "auto",maxWidth: '250px' }} alt="logo" className="p-d-block " value={"00000"+props.indexPartie} />
            <br />
            <div className="p-mt-2 p-text-center p-text-bold">{"00000"+props.indexPartie}</div>
            <br />
            <Barcode style={{ width: '100%', height: "auto",maxWidth: '220px' }}  displayValue={false} value={"00000"+props.indexPartie} />
            <br />
            <div className="p-mt-2 p-text-center p-text-bold">Powered By Silwane</div>
          </div>

          <Divider layout="vertical" />

          <div className="card">
            <div style={{ width: '100%' }} className="card">
              <div className="p-d-flex">
                <div className="p-fluid p-formgrid p-grid">
                  
                  {/* Date de commande -------------------------------------------------------------------------------------------------------- */} 
                  <div className=" p-col-6 p-md-12">
                    <label >Date de commande : {new Intl.DateTimeFormat('fr-GB', { month: '2-digit', day: '2-digit', year: 'numeric', }).format(new Date(props.colis.CreationDate))}</label>
                  </div>
                  {/* Echéance -------------------------------------------------------------------------------------------------------- */}
                  <div  className="p-col-6 p-md-12 p-mb-2">
                    <label >Echéance : {new Intl.DateTimeFormat('fr-GB', { month: '2-digit', day: '2-digit', year: 'numeric', }).format(new Date(props.colis.ConditioningDate))}</label>
                  </div>
                  <br/>
                  {/* Produit principal -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-6 p-md-12 p-mb-2">
                    <label className="p-text-bold">{props.colis.COM_Item.Label1}</label>
                  </div>
                  {/* Nombre de parties -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-6 p-md-12 p-mb-2">
                    <label className="p-text-bold">Partie {props.indexPartie} / {parseInt(props.colis.UnitsNumber)}</label>
                  </div>
                  {/* Poids -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-6 p-md-12 p-mb-2">
                    <label >Poids : {parseFloat(props.colis.Weight)}</label>
                  </div>
                  {/* Volume -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-6 p-md-12 p-mb-2">
                    <label >Volume : {parseFloat(props.colis.Volume)}</label>
                  </div>



                  {/* Description -------------------------------------------------------------------------------------------------------- */}
                  {props.colis.Label1 != null && props.colis.Label1 !== "" ?
                    <div className=" p-col-12 p-md-12 ">
                      <label htmlFor="des">Description :</label>
                      <InputTextarea className="p-mt-1" id="des" rows={3} value={props.colis.Label1} />
                    </div> : null
                  }

                </div>
              </div>
            </div>

            <Divider layout="horizontal" />      

            <div style={{ width: '100%' }} className="card">
              <div className="p-d-flex">
                <div className="p-fluid p-formgrid p-grid">
                  {/* Nom -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-12 p-md-12 p-mb-2">
                    <label className="p-text-bold">	Expéditeur : {props.colis.COM_ThirdParty.Label1}</label>
                  </div>
                  {/* Adresse -------------------------------------------------------------------------------------------------------- */}
                  {props.colis.COM_ThirdParty.Label2 != null && props.colis.COM_ThirdParty.Label2 !== "" ?
                    <div className="p-col-12 p-md-12">
                      <label>Adresse : {props.colis.COM_ThirdParty.Label2}</label>
                    </div> : null
                  }

                  {/* Commune -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-12 p-md-12 p-mb-2">
                    {/*props.COM_ThirdParty.Commune != null && props.COM_ThirdParty.Commune !== "" ?
                        <div className="p-field p-col-12 p-md-12">
                          <label><span className="p-text-bold">Commune</span>: {props.commune.find(element => element.Oid === props.colis.COM_ThirdParty.Commune)}</label>
                        </div> : null
                        */}

                    <label> <span className="p-text-bold"> Wilaya :</span>   {/*props.wilayas.find(element => element.Oid === props.colis.RecipientDepartment).Label1*/} <span className="p-text-bold"> Pays :</span>   {/*props.pays.find(element => element.Oid === props.colis.RecipientCountry).Label1*/}</label>

                  </div>
                  {/* Tel -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-12 p-md-12">
                    <label ><span className="p-text-bold">Tel</span> : {props.colis.COM_ThirdParty.Tel1} <span className="p-text-bold">  Mobile : </span> {props.colis.COM_ThirdParty.Tel2} <span className="p-text-bold"> Email : </span>  {props.colis.COM_ThirdParty.Email}</label>
                  </div>

                </div>
              </div>
            </div>

            <Divider layout="horizontal" />

            <div style={{ width: '100%' }} className="card">
              <div className="p-d-flex">
                <div className="p-fluid p-formgrid p-grid">
                  {/* Nom -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-12 p-md-12 p-mb-2">
                    <label className="p-text-bold">Destinataire : {props.colis.RecipientName}</label>
                  </div>
                  {/* Adresse -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-12 p-md-12">
                    {props.colis.RecipientAddress != null && props.colis.RecipientAddress !== "" ?
                      <div>
                        <label><span className="p-text-bold">Adresse : </span> {props.colis.RecipientAddress}</label>
                      </div> : null
                    }
                  </div>
                  {/* Commune Wilaya Pays -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-col-12 p-md-12">

                    {props.commune.find(element => element.Oid === props.colis.RecipientCommune).Label1 != null && props.commune.find(element => element.Oid === props.colis.RecipientCommune).Label1 !== "" ?
                      <div >
                        <label><span className="p-text-bold">Commune :</span> {props.commune.find(element => element.Oid === props.colis.RecipientCommune).Label1} <span className="p-text-bold"> Wilaya : </span>  {props.wilayas.find(element => element.Oid === props.colis.RecipientDepartment).Label1} <span className="p-text-bold"> Pays : </span> {props.pays.find(element => element.Oid === props.colis.RecipientCountry).Label1}</label>
                      </div> :
                      <div >
                        <label><span className="p-text-bold">Wilaya : </span> {props.wilayas.find(element => element.Oid === props.colis.RecipientDepartment).Label1} <span className="p-text-bold"> Pays : </span> {props.pays.find(element => element.Oid === props.colis.RecipientCountry).Label1}</label>
                      </div>
                    }


                  </div>
                  {/* Tel -------------------------------------------------------------------------------------------------------- */}
                  <div className="p-d-inline p-col-12 p-md-12 p-mt-2">
                    {props.colis.RecipientTel1 != null && props.colis.RecipientTel1 !== "" ?
                      <div className="p-d-inline">
                        <label ><span className="p-text-bold">Tel : </span> {props.colis.RecipientTel1}</label>
                      </div> : null
                    }
                    {props.colis.RecipientTel2 != null && props.colis.RecipientTel2 !== "" ?
                      <div className="p-d-inline">
                        <label ><span className="p-text-bold"> Mobile : </span> {props.colis.RecipientTel2}</label>
                      </div> : null
                    }
                    {props.colis.RecipientEmail != null && props.colis.RecipientEmail !== "" ?
                      <div className="p-d-inline">
                        <label ><span className="p-text-bold"> Email : </span> {props.colis.RecipientEmail}</label>
                      </div> : null
                    }
                  </div>

                </div>
              </div>
            </div>


          </div>





        </div>
      </div>




    </div >

  );
}


export default Content;


/*

export function ColisToPrint(props) {
  return (
    <div >

      <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 44</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default ColisToPrint;*/

