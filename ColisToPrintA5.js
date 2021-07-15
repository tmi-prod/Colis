import 'primeflex/primeflex.css';
import React, { useRef } from "react";
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import Content from './Content';



export class ColisListPrint extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log()
  }


  render(props) {
    const QRCode = require('qrcode.react')
    const Barcode = require('react-barcode')
    const colisCodeList = [];

    const colis = {
      "Oid": "30",
      "SyncId": "d9ba356c-bf60-4402-8f73-fff128eb4dec",
      "Item": "3",
      "Reference": null,
      "Number": "IX1000000020-1-3",
      "State": 0,
      "Cost": "100.00000000",
      "Label1": "Test multiple parts",
      "Label2": "",
      "RecipientAddress": "",
      "RecipientEmail": "abir@gmail.com",
      "RecipientTel1": "0776669008",
      "RecipientTel2": "",
      "RecipientLatitude": 0,
      "RecipientLongitude": 0,
      "RecipientName": "Abir Hammache",
      "ResponsibilityCenterActual": null,
      "ThirdParty": "2",
      "Volume": "100.00000000",
      "Weight": "100.00000000",
      "RecipientCommune": "2",
      "RecipientDepartment": "2",
      "RecipientCountry": "2",
      "IsBatch": null,
      "Batch": null,
      "Parent": null,
      "NetWeight": null,
      "NetVolume": null,
      "UnitsNumber": "3.00000000",
      "IsAvailable": null,
      "ProducedBy": null,
      "ProductionDate": null,
      "ConditionedBy": null,
      "ConditioningDate": "2021-07-26T10:14:16.533Z",
      "BlockedBy": null,
      "BlockedDate": null,
      "Blocked": null,
      "Remark": null,
      "Note": null,
      "Length": null,
      "Height": null,
      "Width": null,
      "Warehouse": null,
      "Density": null,
      "Color": null,
      "ColorRef": null,
      "BlockReason": null,
      "CreationDate": "2021-07-11T10:14:16.533Z",
      "CreatedBy": "FMK",
      "LastModificationDate": "2021-07-12T10:49:54.138Z",
      "ModifiedBy": "FMK",
      "COM_Item": {
        "Oid": "3",
        "SyncId": "1094192f-0d1f-44c4-bc32-d431bcda6bb8",
        "Code": "000003",
        "Label1": "Colis sous Froid",
        "Label2": null,
        "VAT": "3",
        "VWAP": null,
        "UnitWeight": 0,
        "IsUnderCommission": false,
        "Type": 0,
        "CreationDate": "2021-06-23T11:39:16.848Z",
        "CreatedBy": "admin",
        "LastModificationDate": "2021-06-24T11:28:22.599Z",
        "ModifiedBy": "admin",
        "Family": "2"
      },
      "COM_Warehouse": null,
      "COM_ThirdParty": {
        "Oid": "2",
        "SyncId": "da8f90c0-b0f7-476d-975e-ec475b879c9d",
        "Code": "000009",
        "Label1": "FMK",
        "Label2": null,
        "Email": null,
        "Latitude": null,
        "Longitude": null,
        "TariffType": 3,
        "Blocked": 0,
        "Tariff": null,
        "Family": "-3",
        "Commune": null,
        "Department": "2",
        "Tel1": "0550507777",
        "Tel2": null,
        "Image": null,
        "Password": null,
        "CreationDate": "2021-06-23T13:24:23.177Z",
        "CreatedBy": "admin",
        "LastModificationDate": null,
        "ModifiedBy": null,
        "COM_ThirdPartyFamily": {
          "Oid": "-3",
          "SyncId": "5599b173-acad-4131-afc7-7627866052b5",
          "Code": "000001",
          "AccountingCode": null,
          "Label1": "Divers",
          "Label2": null,
          "Type": 0,
          "CreationDate": "2021-06-23T14:33:44.120Z",
          "CreatedBy": "IntelliX",
          "LastModificationDate": null,
          "ModifiedBy": null,
          "Tariff": "2",
          "COM_Tariff": {
            "Oid": "2",
            "SyncId": "7accdb7d-286a-4b0f-bd2f-6529491f8740",
            "Code": "000001",
            "Label1": "Public",
            "Label2": null,
            "CreationDate": "2021-06-23T14:31:41.384Z",
            "CreatedBy": "admin",
            "LastModification": null,
            "ModifiedBy": null
          }
        },
        "COM_Tariff": null
      },
      "SerialNumberParts": [
        {
          "Oid": "32",
          "SyncId": "d3f9f90d-d776-4f76-a3d6-b710108c353f",
          "Item": "5",
          "Reference": null,
          "Number": "IX1000000022-3-3",
          "State": 0,
          "Cost": null,
          "Label1": "Test multiple parts",
          "Label2": "",
          "RecipientAddress": "",
          "RecipientEmail": "",
          "RecipientTel1": "0776669008",
          "RecipientTel2": "",
          "RecipientLatitude": 0,
          "RecipientLongitude": 0,
          "RecipientName": "Abir Hammache",
          "ResponsibilityCenterActual": null,
          "ThirdParty": "2",
          "Volume": null,
          "Weight": null,
          "RecipientCommune": "2",
          "RecipientDepartment": "2",
          "RecipientCountry": null,
          "IsBatch": null,
          "Batch": null,
          "Parent": "30",
          "NetWeight": null,
          "NetVolume": null,
          "UnitsNumber": null,
          "IsAvailable": null,
          "ProducedBy": null,
          "ProductionDate": null,
          "ConditionedBy": null,
          "ConditioningDate": "2021-07-26T10:14:16.533Z",
          "BlockedBy": null,
          "BlockedDate": null,
          "Blocked": null,
          "Remark": null,
          "Note": null,
          "Length": null,
          "Height": null,
          "Width": null,
          "Warehouse": null,
          "Density": null,
          "Color": null,
          "ColorRef": null,
          "BlockReason": null,
          "CreationDate": "2021-07-11T10:14:16.533Z",
          "CreatedBy": "FMK",
          "LastModificationDate": null,
          "ModifiedBy": null
        },
        {
          "Oid": "31",
          "SyncId": "d953445e-1055-4cc6-b647-6e61aef7de2e",
          "Item": "5",
          "Reference": null,
          "Number": "IX1000000021-2-3",
          "State": 0,
          "Cost": null,
          "Label1": "Test multiple parts",
          "Label2": "",
          "RecipientAddress": "",
          "RecipientEmail": "",
          "RecipientTel1": "0776669008",
          "RecipientTel2": "",
          "RecipientLatitude": 0,
          "RecipientLongitude": 0,
          "RecipientName": "Abir Hammache",
          "ResponsibilityCenterActual": null,
          "ThirdParty": "2",
          "Volume": null,
          "Weight": null,
          "RecipientCommune": "2",
          "RecipientDepartment": "2",
          "RecipientCountry": null,
          "IsBatch": null,
          "Batch": null,
          "Parent": "30",
          "NetWeight": null,
          "NetVolume": null,
          "UnitsNumber": null,
          "IsAvailable": null,
          "ProducedBy": null,
          "ProductionDate": null,
          "ConditionedBy": null,
          "ConditioningDate": "2021-07-26T10:14:16.533Z",
          "BlockedBy": null,
          "BlockedDate": null,
          "Blocked": null,
          "Remark": null,
          "Note": null,
          "Length": null,
          "Height": null,
          "Width": null,
          "Warehouse": null,
          "Density": null,
          "Color": null,
          "ColorRef": null,
          "BlockReason": null,
          "CreationDate": "2021-07-11T10:14:16.533Z",
          "CreatedBy": "FMK",
          "LastModificationDate": null,
          "ModifiedBy": null
        }
      ],
      "ServiceSerials": [
        {
          "Oid": "106",
          "SyncId": "024a372a-e446-4c1a-82f9-473125f40ed1",
          "Item": "12",
          "Serial": "30",
          "Quantity": "1.00000000",
          "UnitPrice": "2500.00000000000000000000",
          "DiscountPercent": "20.000000000000000",
          "Amount": "2000.00000000",
          "ResponsibilityOf": true,
          "ExpeditorAmount": "0.00000000",
          "CreationDate": "2021-07-12T10:49:54.157Z",
          "CreatedBy": "FMK",
          "LastModificationDate": null,
          "ModifiedBy": null,
          "COM_Item": {
            "Oid": "12",
            "SyncId": "106e32dd-0cfc-4a1d-8c85-c6cab92f3f09",
            "Code": "000012",
            "Label1": "Frais de livraison",
            "Label2": null,
            "VAT": "3",
            "VWAP": null,
            "UnitWeight": 0,
            "IsUnderCommission": false,
            "Type": 2,
            "CreationDate": "2021-06-23T13:20:11.961Z",
            "CreatedBy": "admin",
            "LastModificationDate": "2021-06-24T16:31:42.545Z",
            "ModifiedBy": "admin",
            "Family": "3",
            "PriceLists": []
          }
        },
        {
          "Oid": "107",
          "SyncId": "d134be83-910c-4c9b-9783-da6f6cd3cb00",
          "Item": "3",
          "Serial": "30",
          "Quantity": "1.00000000",
          "UnitPrice": "100.00000000000000000000",
          "DiscountPercent": "0.000000000000000",
          "Amount": "0.00000000",
          "ResponsibilityOf": false,
          "ExpeditorAmount": "100.00000000",
          "CreationDate": "2021-07-12T10:49:54.159Z",
          "CreatedBy": "FMK",
          "LastModificationDate": null,
          "ModifiedBy": null,
          "COM_Item": {
            "Oid": "3",
            "SyncId": "1094192f-0d1f-44c4-bc32-d431bcda6bb8",
            "Code": "000003",
            "Label1": "Colis sous Froid",
            "Label2": null,
            "VAT": "3",
            "VWAP": null,
            "UnitWeight": 0,
            "IsUnderCommission": false,
            "Type": 0,
            "CreationDate": "2021-06-23T11:39:16.848Z",
            "CreatedBy": "admin",
            "LastModificationDate": "2021-06-24T11:28:22.599Z",
            "ModifiedBy": "admin",
            "Family": "2",
            "PriceLists": []
          }
        },
        {
          "Oid": "108",
          "SyncId": "7604e766-c70e-4285-87fc-00367d9d3a66",
          "Item": "8",
          "Serial": "30",
          "Quantity": "1.00000000",
          "UnitPrice": "600.00000000000000000000",
          "DiscountPercent": "18.000000000000000",
          "Amount": "492.00000000",
          "ResponsibilityOf": true,
          "ExpeditorAmount": "0.00000000",
          "CreationDate": "2021-07-12T10:49:54.164Z",
          "CreatedBy": "FMK",
          "LastModificationDate": null,
          "ModifiedBy": null,
          "COM_Item": {
            "Oid": "8",
            "SyncId": "385c7c42-5c51-480c-9793-f88ebc88cdf6",
            "Code": "000008",
            "Label1": "Emballage Cadeau",
            "Label2": null,
            "VAT": "3",
            "VWAP": null,
            "UnitWeight": 0,
            "IsUnderCommission": false,
            "Type": 2,
            "CreationDate": "2021-06-23T11:46:27.137Z",
            "CreatedBy": "admin",
            "LastModificationDate": "2021-06-23T11:46:58.030Z",
            "ModifiedBy": "admin",
            "Family": "3",
            "PriceLists": [
              {
                "Oid": "2",
                "SyncId": "f4ed12e4-5e56-4c0a-bb34-00b98b636cfb",
                "Item": "8",
                "Tariff": "2",
                "Price": "600.00000000",
                "CustomerBonus": "0.00000000",
                "CommercialBonus": "0.00000000",
                "CreationDate": "2021-06-23T14:32:34.209Z",
                "CreatedBy": "admin",
                "LastModificationDate": null,
                "ModifiedBy": null
              }
            ]
          }
        },
        {
          "Oid": "109",
          "SyncId": "fd9b3933-13e2-426a-918a-408550c650c5",
          "Item": "9",
          "Serial": "30",
          "Quantity": "1.00000000",
          "UnitPrice": "700.00000000000000000000",
          "DiscountPercent": "0.000000000000000",
          "Amount": "700.00000000",
          "ResponsibilityOf": true,
          "ExpeditorAmount": "0.00000000",
          "CreationDate": "2021-07-12T10:49:54.161Z",
          "CreatedBy": "FMK",
          "LastModificationDate": null,
          "ModifiedBy": null,
          "COM_Item": {
            "Oid": "9",
            "SyncId": "bb7c0828-cd22-4675-b954-3e3fcd154492",
            "Code": "000009",
            "Label1": "Livraison Féminin",
            "Label2": null,
            "VAT": "3",
            "VWAP": null,
            "UnitWeight": 0,
            "IsUnderCommission": false,
            "Type": 2,
            "CreationDate": "2021-06-23T12:59:56.323Z",
            "CreatedBy": "admin",
            "LastModificationDate": "2021-06-23T14:32:45.154Z",
            "ModifiedBy": "admin",
            "Family": "3",
            "PriceLists": [
              {
                "Oid": "3",
                "SyncId": "caca0452-d6f0-4cbd-830c-179b70aec608",
                "Item": "9",
                "Tariff": "2",
                "Price": "700.00000000",
                "CustomerBonus": "0.00000000",
                "CommercialBonus": "0.00000000",
                "CreationDate": "2021-06-23T14:32:45.150Z",
                "CreatedBy": "admin",
                "LastModificationDate": "2021-06-24T16:39:24.032Z",
                "ModifiedBy": "admin"
              }
            ]
          }
        }
      ],
      "COM_ResponsibilityCenter": null
    }

    const communes = [
      {
        "Oid": "2",
        "SyncId": "cc771982-0e02-4212-ab3b-27ace8e43fef",
        "Code": "01",
        "Label1": "ALGER",
        "Label2": null
      }
    ]

    const wilayas = [
      {
        "Oid": "2",
        "SyncId": "855c12fc-7fbb-4d5d-8d18-23d21a947c27",
        "Code": "16",
        "Label1": "Alger",
        "Label2": null,
        "DeliveryValue": "500.00000000"
      },
      {
        "Oid": "3",
        "SyncId": "0d1cf64c-3e91-4c43-8990-3727d117bf70",
        "Code": "44",
        "Label1": "Ain defla",
        "Label2": null,
        "DeliveryValue": "700.00000000"
      },
      {
        "Oid": "4",
        "SyncId": "6f8e4d61-e829-4c2a-8be0-272a19bb0368",
        "Code": "31",
        "Label1": "Oran",
        "Label2": null,
        "DeliveryValue": "1500.00000000"
      },
      {
        "Oid": "5",
        "SyncId": "37935610-b7d5-4881-a1b0-9e643fb9f1dd",
        "Code": "19",
        "Label1": "Setif",
        "Label2": null,
        "DeliveryValue": "1500.00000000"
      },
      {
        "Oid": "6",
        "SyncId": "a7bf6e92-3879-4341-8c08-a776c58faf13",
        "Code": "25",
        "Label1": "Constantine",
        "Label2": null,
        "DeliveryValue": null
      },
      {
        "Oid": "7",
        "SyncId": "71c8ed02-5387-4921-af04-53a951e320bd",
        "Code": "15",
        "Label1": "Tizi Ouzou",
        "Label2": null,
        "DeliveryValue": null
      }
    ]

    const pays = [
      {
        "Oid": "1",
        "SyncId": "b19b8e2c-c169-4891-9a7e-0018ac8eba39",
        "Code": "CO",
        "Label1": "Colombie",
        "Label2": "كولومبيا"
      },
      {
        "Oid": "2",
        "SyncId": "4f4ae499-bf66-4adf-b101-01ec4d5b8c05",
        "Code": "TM",
        "Label1": "Turkménista",
        "Label2": "تركمانستان"
      },
      {
        "Oid": "3",
        "SyncId": "4042e225-8a73-4df5-81aa-022a3d36b857",
        "Code": "IS",
        "Label1": "Islande",
        "Label2": "آيسلندا"
      },
      {
        "Oid": "4",
        "SyncId": "ff0525d7-e42b-4e15-85a9-02660873dbe0",
        "Code": "NF",
        "Label1": "Norfolk, île",
        "Label2": "نورفولك"
      },
      {
        "Oid": "5",
        "SyncId": "a856dbd4-025a-45fc-9740-03d5e7946392",
        "Code": "TW",
        "Label1": "Taïwan, province de chine",
        "Label2": "تايوان"
      },
      {
        "Oid": "6",
        "SyncId": "54983abf-d62a-4a9e-b8cf-05d1a4ed9168",
        "Code": "AF",
        "Label1": "Afghanista",
        "Label2": "أفغانستان"
      },
      {
        "Oid": "7",
        "SyncId": "e693da52-6668-41ed-ba3b-0630166e3fdb",
        "Code": "CH",
        "Label1": "Suisse",
        "Label2": "سويسرا"
      },
      {
        "Oid": "8",
        "SyncId": "098c1bf6-1292-43f7-a04a-067544b8e259",
        "Code": "SY",
        "Label1": "Syrienne, république arabe",
        "Label2": "سوريا"
      },
      {
        "Oid": "9",
        "SyncId": "6a5617c3-892a-4b8b-b27d-0695a70b8127",
        "Code": "KI",
        "Label1": "Kiribati",
        "Label2": "كيريباتي"
      },
      {
        "Oid": "10",
        "SyncId": "40fcc750-cb28-466c-a4f2-08721b556ba0",
        "Code": "EE",
        "Label1": "Estonie",
        "Label2": "استونيا"
      },
      {
        "Oid": "11",
        "SyncId": "e67e5513-4119-41b9-833d-0a15681b7310",
        "Code": "LV",
        "Label1": "Lettonie",
        "Label2": "لاتفيا"
      },
      {
        "Oid": "12",
        "SyncId": "c99440ad-fa6c-4375-bd39-0c6d34ce44e9",
        "Code": "DE",
        "Label1": "Allemagne",
        "Label2": "ألمانيا"
      },
      {
        "Oid": "13",
        "SyncId": "701efa96-fc70-4959-9b7d-0d20fc03ae90",
        "Code": "NG",
        "Label1": "Nigéria",
        "Label2": "نيجيريا"
      },
      {
        "Oid": "14",
        "SyncId": "3d0bc7e8-bc2a-4b68-a09e-0da43c835366",
        "Code": "BT",
        "Label1": "Bhouta",
        "Label2": "بوتان"
      },
      {
        "Oid": "15",
        "SyncId": "109cf2e5-aed4-4d0a-b3c0-0ed6c1ffd2ea",
        "Code": "PL",
        "Label1": "Pologne",
        "Label2": "بولونيا"
      },
      {
        "Oid": "16",
        "SyncId": "cf907ef8-51a6-4f2e-a885-1000cf42c768",
        "Code": "LS",
        "Label1": "Lesotho",
        "Label2": "ليسوتو"
      },
      {
        "Oid": "17",
        "SyncId": "6b4c9985-fbc0-4f6f-a84a-113b9e76ab8c",
        "Code": "DM",
        "Label1": "Dominique",
        "Label2": "دومينيكا"
      },
      {
        "Oid": "18",
        "SyncId": "8f077624-f042-4265-9408-11fa4aeba128",
        "Code": "MR",
        "Label1": "Mauritanie",
        "Label2": "موريتانيا"
      },
      {
        "Oid": "19",
        "SyncId": "b880b20d-8bf2-4b8d-8fb3-1235b98bd32f",
        "Code": "CZ",
        "Label1": "Tchèque, république",
        "Label2": "التشيك"
      },
      {
        "Oid": "20",
        "SyncId": "f952f18a-d7c4-4fcb-a10f-12583e053b42",
        "Code": "RU",
        "Label1": "Russie, fédération de",
        "Label2": "روسيا"
      },
      {
        "Oid": "21",
        "SyncId": "642e2e32-384e-4f96-b11f-13b9b42ac4df",
        "Code": "B",
        "Label1": "Brunéi darussalam",
        "Label2": "بروني"
      },
      {
        "Oid": "22",
        "SyncId": "d7d78594-8ab6-426c-b039-1403baebc176",
        "Code": "MS",
        "Label1": "Montserrat",
        "Label2": "مونتسيرات"
      },
      {
        "Oid": "23",
        "SyncId": "7dfc23f5-9bd0-4cba-a7ac-14b7505a8f43",
        "Code": "LA",
        "Label1": "Lao, république démocratique populaire",
        "Label2": "لاوس"
      },
      {
        "Oid": "24",
        "SyncId": "2ee09905-a658-4953-b769-1516ffe8d841",
        "Code": "SM",
        "Label1": "Saint-mari",
        "Label2": "سان مارينو"
      },
      {
        "Oid": "25",
        "SyncId": "c7af554a-f3ba-4713-ac86-153396bab452",
        "Code": "CA",
        "Label1": "Canada",
        "Label2": "كندا"
      },
      {
        "Oid": "26",
        "SyncId": "0f682505-540a-4cc6-a779-15f64f52c0a3",
        "Code": "FK",
        "Label1": "Falkland, îles (malvinas)",
        "Label2": "جزر فارو"
      },
      {
        "Oid": "27",
        "SyncId": "3f4e8470-c7b2-4689-9f1c-161e3232a069",
        "Code": "WS",
        "Label1": "Samoa",
        "Label2": "ساموا"
      },
      {
        "Oid": "28",
        "SyncId": "f17a10f9-e55b-4dd3-98dc-180280539609",
        "Code": "OM",
        "Label1": "Oma",
        "Label2": "عُمان"
      },
      {
        "Oid": "29",
        "SyncId": "4b37e268-7ad3-4ffb-9203-18525afaeebe",
        "Code": "MG",
        "Label1": "Madagascar",
        "Label2": "مدغشقر"
      },
      {
        "Oid": "30",
        "SyncId": "92875509-f02e-4997-b3a2-1a0effc3a99a",
        "Code": "CF",
        "Label1": "Centrafricaine, république",
        "Label2": "جمهورية أفريقيا الوسطى"
      },
      {
        "Oid": "31",
        "SyncId": "9f36609b-d39a-4551-b791-1a5e6ed05ac8",
        "Code": "ST",
        "Label1": "Sao tomé-et-principe",
        "Label2": "ساو تومي وبرينسيبي"
      },
      {
        "Oid": "32",
        "SyncId": "ead2b786-93a1-442a-aac2-1b13258e3008",
        "Code": "CM",
        "Label1": "Camerou",
        "Label2": "كاميرون"
      },
      {
        "Oid": "33",
        "SyncId": "e5eff7b9-2330-4aa9-94c8-1d06733343aa",
        "Code": "TK",
        "Label1": "Tokelau",
        "Label2": "توكلو"
      },
      {
        "Oid": "34",
        "SyncId": "b8d5ae8d-5ca2-4711-b2d9-1d9104d23b4c",
        "Code": "BO",
        "Label1": "Bolivie",
        "Label2": "بوليفيا"
      },
      {
        "Oid": "35",
        "SyncId": "ed95e465-bcfe-476c-a52d-1e33f381be2c",
        "Code": "RW",
        "Label1": "Rwanda",
        "Label2": "رواندا"
      },
      {
        "Oid": "36",
        "SyncId": "811cf401-acf3-4adf-9af5-1ea684c0471b",
        "Code": "V",
        "Label1": "Viet nam",
        "Label2": "فيتنام"
      },
      {
        "Oid": "37",
        "SyncId": "bb6d26d0-dc61-49a3-a011-20b8482f299d",
        "Code": "KG",
        "Label1": "Kirghizista",
        "Label2": "قيرغيزستان"
      },
      {
        "Oid": "38",
        "SyncId": "b3b713b1-a7c2-42f6-a12b-20e359f38637",
        "Code": "GY",
        "Label1": "Guyana",
        "Label2": "غيانا"
      },
      {
        "Oid": "39",
        "SyncId": "dd030f03-e878-4c51-835e-2183053aef52",
        "Code": "KZ",
        "Label1": "Kazakhsta",
        "Label2": "كازاخستان"
      },
      {
        "Oid": "40",
        "SyncId": "cf9fac49-251a-440e-847e-21b072a0087e",
        "Code": "KP",
        "Label1": "Corée, république populaire démocratique de",
        "Label2": "كوريا الشمالية"
      },
      {
        "Oid": "41",
        "SyncId": "cf594a04-03e3-4868-8949-2594a0e847e0",
        "Code": "AM",
        "Label1": "Arménie",
        "Label2": "أرمينيا"
      },
      {
        "Oid": "42",
        "SyncId": "0acbfb9d-37d9-4a9c-b356-28ab6990289c",
        "Code": "UA",
        "Label1": "Ukraine",
        "Label2": "أوكرانيا"
      },
      {
        "Oid": "43",
        "SyncId": "9494d0b3-3ca8-4916-b062-2acf24d1d0a4",
        "Code": "GM",
        "Label1": "Gambie",
        "Label2": "غامبيا"
      },
      {
        "Oid": "44",
        "SyncId": "2ed8a206-da4e-4dce-a52a-2ca09f7d6423",
        "Code": "NL",
        "Label1": "Pays-bas",
        "Label2": "هولندا"
      },
      {
        "Oid": "45",
        "SyncId": "57237444-c3fb-49f1-b1b7-2e7a251fab32",
        "Code": "JP",
        "Label1": "Japo",
        "Label2": "اليابان"
      },
      {
        "Oid": "46",
        "SyncId": "de480f48-207f-4399-80ee-2e86a0bd1e78",
        "Code": "PH",
        "Label1": "Philippines",
        "Label2": "الفليبين"
      },
      {
        "Oid": "47",
        "SyncId": "753696cb-d10c-4a0e-8c07-2ee8e4ca11f8",
        "Code": "BE",
        "Label1": "Belgique",
        "Label2": "بلجيكا"
      },
      {
        "Oid": "48",
        "SyncId": "b5049f8e-3507-4f01-b665-2f920ae906d2",
        "Code": "PM",
        "Label1": "Saint-pierre-et-miquelo",
        "Label2": "سان بيار وميكلون"
      },
      {
        "Oid": "49",
        "SyncId": "bd4a0907-b5c9-4ad8-9793-310a94ec784c",
        "Code": "BW",
        "Label1": "Botswana",
        "Label2": "بوتسوانا"
      },
      {
        "Oid": "50",
        "SyncId": "6010825e-21ee-4b10-b924-3114447355cc",
        "Code": "MV",
        "Label1": "Maldives",
        "Label2": "المالديف"
      },
      {
        "Oid": "51",
        "SyncId": "841ffd3b-b597-4b6f-a3b0-3147948f5ccd",
        "Code": "IT",
        "Label1": "Italie",
        "Label2": "إيطاليا"
      },
      {
        "Oid": "52",
        "SyncId": "146ae308-bd64-41ca-8f9e-3287ec398590",
        "Code": "NP",
        "Label1": "Népal",
        "Label2": "نيبال"
      },
      {
        "Oid": "53",
        "SyncId": "34f239d2-8a91-4814-ae76-329abfc0c6ad",
        "Code": "MH",
        "Label1": "Marshall, îles",
        "Label2": "جزر مارشال"
      },
      {
        "Oid": "54",
        "SyncId": "e8d26111-7de3-4a29-ae0b-32a8ae544c88",
        "Code": "BM",
        "Label1": "Bermudes",
        "Label2": "جزر برمودا"
      },
      {
        "Oid": "55",
        "SyncId": "2519a3cd-e114-4a2c-be15-33e3e1e79e1c",
        "Code": "WF",
        "Label1": "Wallis et futuna",
        "Label2": "والس وفوتونا"
      },
      {
        "Oid": "56",
        "SyncId": "9b1a9f64-a5a8-445a-9c45-369f82f2ff06",
        "Code": "TT",
        "Label1": "Trinité-et-tobago",
        "Label2": "ترينيداد وتوباغو"
      },
      {
        "Oid": "57",
        "SyncId": "63d044fe-49c5-48ef-b267-37926b9eaabe",
        "Code": "LT",
        "Label1": "Lituanie",
        "Label2": "لتوانيا"
      },
      {
        "Oid": "58",
        "SyncId": "0742edaf-d518-448c-90ec-37bd4444f780",
        "Code": "PS",
        "Label1": "Palestinien occupé territoire",
        "Label2": "فلسطين‎ "
      },
      {
        "Oid": "59",
        "SyncId": "008c6be6-9085-401b-b9fc-386d44b8fcb3",
        "Code": "CN",
        "Label1": "Chine",
        "Label2": "الصين"
      },
      {
        "Oid": "60",
        "SyncId": "891735bb-91c5-46ae-bb6d-3ac6eacc6f02",
        "Code": "NR",
        "Label1": "Nauru",
        "Label2": "نورو"
      },
      {
        "Oid": "61",
        "SyncId": "8cccee13-ef6f-430b-819d-3db247474c6d",
        "Code": "EH",
        "Label1": "Sahara occidental",
        "Label2": "الصحراء الغربية"
      },
      {
        "Oid": "62",
        "SyncId": "2b05a617-0df7-4a35-96a0-3ea241509035",
        "Code": "BF",
        "Label1": "Burkina faso",
        "Label2": "بوركينا فاسو"
      },
      {
        "Oid": "63",
        "SyncId": "36ea80c1-20e1-48bd-8ef9-3ee3a8442a1f",
        "Code": "H",
        "Label1": "Honduras",
        "Label2": "هندوراس"
      },
      {
        "Oid": "64",
        "SyncId": "9a48d34c-9814-4b73-b576-40038e500815",
        "Code": "MD",
        "Label1": "Moldova, république de",
        "Label2": "مولدافيا"
      },
      {
        "Oid": "65",
        "SyncId": "b804dcf7-c854-47f0-90cc-409022ecfecc",
        "Code": "AL",
        "Label1": "Albanie",
        "Label2": "ألبانيا"
      },
      {
        "Oid": "66",
        "SyncId": "580402d4-ed5a-491d-90f6-464207562346",
        "Code": "SH",
        "Label1": "Sainte-hélène",
        "Label2": "سانت هيلينا"
      },
      {
        "Oid": "67",
        "SyncId": "bfb8895d-afba-410a-81cb-469a09682a17",
        "Code": "TV",
        "Label1": "Tuvalu",
        "Label2": "توفالو"
      },
      {
        "Oid": "68",
        "SyncId": "b7864f24-1090-4aa2-9dc0-47eb093f0615",
        "Code": "PE",
        "Label1": "Pérou",
        "Label2": "بيرو"
      },
      {
        "Oid": "69",
        "SyncId": "a4e35285-69f5-4070-8a6c-486929003931",
        "Code": "BY",
        "Label1": "Bélarus",
        "Label2": "روسيا البيضاء"
      },
      {
        "Oid": "70",
        "SyncId": "87f8e5a5-4e2f-458e-b171-48d05a1cff4e",
        "Code": "ET",
        "Label1": "Éthiopie",
        "Label2": "أثيوبيا"
      },
      {
        "Oid": "71",
        "SyncId": "01af6dab-1cb2-4169-9b79-495b0b073d51",
        "Code": "GQ",
        "Label1": "Guinée équatoriale",
        "Label2": "غينيا الاستوائية"
      },
      {
        "Oid": "72",
        "SyncId": "af28356f-218b-477d-b7bb-4bf1fd2ddb13",
        "Code": "LK",
        "Label1": "Sri lanka",
        "Label2": "سريلانكا"
      },
      {
        "Oid": "73",
        "SyncId": "5b9b5030-e134-4f37-af62-4ce65af58ab0",
        "Code": "I",
        "Label1": "Inde",
        "Label2": "الهند"
      },
      {
        "Oid": "74",
        "SyncId": "2d2da920-8448-4941-a08c-4d4d4c1a5677",
        "Code": "GT",
        "Label1": "Guatemala",
        "Label2": "غواتيمال"
      },
      {
        "Oid": "75",
        "SyncId": "fa1fcde8-6253-4903-b864-4da148f994f2",
        "Code": "CY",
        "Label1": "Chypre",
        "Label2": "قبرص"
      },
      {
        "Oid": "76",
        "SyncId": "151c6766-0ff3-49b1-b02e-4e1eea1cb5b2",
        "Code": "CI",
        "Label1": "Côte d'ivoire",
        "Label2": "ساحل العاج"
      },
      {
        "Oid": "77",
        "SyncId": "fbba4209-8735-45c4-8a69-4e82ff518f4f",
        "Code": "SR",
        "Label1": "Suriname",
        "Label2": "سورينام"
      },
      {
        "Oid": "78",
        "SyncId": "635cd5ff-499f-4523-9f43-4fb76ef7bcff",
        "Code": "AE",
        "Label1": "Émirats arabes unis",
        "Label2": "الإمارات العربية المتحدة"
      },
      {
        "Oid": "79",
        "SyncId": "ffafe166-26c3-47d6-a280-51a89f145bf1",
        "Code": "MC",
        "Label1": "Monaco",
        "Label2": "موناكو"
      },
      {
        "Oid": "80",
        "SyncId": "b0dc205d-a137-46b5-b701-550ccec898ea",
        "Code": "VE",
        "Label1": "Venezuela",
        "Label2": "فنزويلا"
      },
      {
        "Oid": "81",
        "SyncId": "f299d369-d441-4665-8d0c-55edf0299312",
        "Code": "SB",
        "Label1": "Salomon, îles",
        "Label2": "جزر سليمان"
      },
      {
        "Oid": "82",
        "SyncId": "fc239c98-1bfd-4809-af66-561a7d07c543",
        "Code": "BH",
        "Label1": "Bahreï",
        "Label2": "البحرين"
      },
      {
        "Oid": "83",
        "SyncId": "cbbdd7e6-e7b3-4db8-a5d1-569c66d4e0a6",
        "Code": "MZ",
        "Label1": "Mozambique",
        "Label2": "موزمبيق"
      },
      {
        "Oid": "84",
        "SyncId": "e5a9a869-f06d-4e2d-a610-56f64d00f601",
        "Code": "DJ",
        "Label1": "Djibouti",
        "Label2": "جيبوتي"
      },
      {
        "Oid": "85",
        "SyncId": "4ad10e89-22cd-4c7d-8b8f-5812426dd733",
        "Code": "TR",
        "Label1": "Turquie",
        "Label2": "تركيا"
      },
      {
        "Oid": "86",
        "SyncId": "8bed0a12-cb9a-41f5-b645-58178c2644e9",
        "Code": "SD",
        "Label1": "Souda",
        "Label2": "السودان"
      },
      {
        "Oid": "87",
        "SyncId": "fb33bfdb-92f5-4555-882e-5b405a3d7c6b",
        "Code": "KW",
        "Label1": "Koweït",
        "Label2": "الكويت"
      },
      {
        "Oid": "88",
        "SyncId": "60c78271-3206-4221-b36b-5b56e6c3ed1b",
        "Code": "TL",
        "Label1": "Timor-leste",
        "Label2": "تيمور الشرقية"
      },
      {
        "Oid": "89",
        "SyncId": "f3eff910-5322-4dfa-b659-5b7214c217bc",
        "Code": "AI",
        "Label1": "Anguilla",
        "Label2": "أنغويلا"
      },
      {
        "Oid": "90",
        "SyncId": "3896f961-f1e8-4063-aecf-5bc36dd4ba7e",
        "Code": "HK",
        "Label1": "Hong-kong",
        "Label2": "هونغ كونغ"
      },
      {
        "Oid": "91",
        "SyncId": "67842f5f-61f0-44a9-9660-5d4bbbbb13aa",
        "Code": "GI",
        "Label1": "Gibraltar",
        "Label2": "جبل طارق"
      },
      {
        "Oid": "92",
        "SyncId": "8478ae18-b7c4-4ce7-9e17-5e7d56455adb",
        "Code": "PF",
        "Label1": "Polynésie française",
        "Label2": "بولينيزيا الفرنسية"
      },
      {
        "Oid": "93",
        "SyncId": "365eebb4-c8bf-4c0a-bdfb-62a593e68474",
        "Code": "DK",
        "Label1": "Danemark",
        "Label2": "الدانمارك"
      },
      {
        "Oid": "94",
        "SyncId": "d4c51227-25c0-4fc5-8976-6319e1cb9be1",
        "Code": "JO",
        "Label1": "Jordanie",
        "Label2": "الأردن"
      },
      {
        "Oid": "95",
        "SyncId": "8d6128d6-e6e5-4646-b01e-665eb88e9bdd",
        "Code": "DZ",
        "Label1": "Algérie",
        "Label2": "الجزائر"
      },
      {
        "Oid": "96",
        "SyncId": "055e8d0d-7016-4548-be9f-67f63849e7a2",
        "Code": "DO",
        "Label1": "Dominicaine, république",
        "Label2": "دومينيكا"
      },
      {
        "Oid": "97",
        "SyncId": "5adfa451-a9e9-419a-9e78-6932093c3514",
        "Code": "BR",
        "Label1": "Brésil",
        "Label2": "البرازيل"
      },
      {
        "Oid": "98",
        "SyncId": "cbe1b293-cf38-4140-939b-6955cf198865",
        "Code": "TJ",
        "Label1": "Tadjikista",
        "Label2": "طاجيكستان"
      },
      {
        "Oid": "99",
        "SyncId": "cc5e0d11-786e-4dab-9001-6d46833ebe1d",
        "Code": "SI",
        "Label1": "Slovénie",
        "Label2": "سلوفينيا"
      },
      {
        "Oid": "100",
        "SyncId": "b0c8c4e4-6308-48be-99de-6d66dcd33d65",
        "Code": "IQ",
        "Label1": "Iraq",
        "Label2": "العراق"
      },
      {
        "Oid": "101",
        "SyncId": "443cd593-7dae-45c6-897b-6e96c937ea18",
        "Code": "BJ",
        "Label1": "Béni",
        "Label2": "بنين"
      },
      {
        "Oid": "102",
        "SyncId": "962f6aca-76fe-476f-ae59-6eb98ea7b705",
        "Code": "SL",
        "Label1": "Sierra leone",
        "Label2": "سيراليون"
      },
      {
        "Oid": "103",
        "SyncId": "35da7388-e271-4fb0-8ec1-6fd28edac04d",
        "Code": "SC",
        "Label1": "Seychelles",
        "Label2": "سيشيل"
      },
      {
        "Oid": "104",
        "SyncId": "adfb6795-0e12-4efc-a073-70d0623be5b4",
        "Code": "AZ",
        "Label1": "Azerbaïdja",
        "Label2": "أذربيجان"
      },
      {
        "Oid": "105",
        "SyncId": "43798b8c-a622-4bf2-a53f-711dbab2a135",
        "Code": "P",
        "Label1": "Pitcair",
        "Label2": "جزر بيتكيرن"
      },
      {
        "Oid": "106",
        "SyncId": "7199cdd7-3e11-454f-a265-71a262e620bd",
        "Code": "BA",
        "Label1": "Bosnie-herzégovine",
        "Label2": "البوسنة و الهرسك"
      },
      {
        "Oid": "107",
        "SyncId": "61c256cc-5797-400f-b43c-72a66928bfd5",
        "Code": "RO",
        "Label1": "Roumanie",
        "Label2": "رومانيا"
      },
      {
        "Oid": "108",
        "SyncId": "00261198-0763-4149-975a-73200a335cf6",
        "Code": "BS",
        "Label1": "Bahamas",
        "Label2": "الباهاماس"
      },
      {
        "Oid": "110",
        "SyncId": "a8a60ac7-c794-420e-8e18-78784fa34094",
        "Code": "SE",
        "Label1": "Suède",
        "Label2": "السويد"
      },
      {
        "Oid": "111",
        "SyncId": "08d10efe-bdb2-41ea-b291-78fa037ebd2c",
        "Code": "NE",
        "Label1": "Niger",
        "Label2": "النيجر"
      },
      {
        "Oid": "112",
        "SyncId": "9ffae94b-7ea3-47c8-b37c-7a02908b4258",
        "Code": "LY",
        "Label1": "Libyenne, jamahiriya arabe",
        "Label2": "ليبيا"
      },
      {
        "Oid": "113",
        "SyncId": "df4ce5eb-871a-46bc-a153-7a074303728d",
        "Code": "S",
        "Label1": "Sénégal",
        "Label2": "السنغال"
      },
      {
        "Oid": "114",
        "SyncId": "79354392-dadf-4a15-b51e-7af45e30b422",
        "Code": "CX",
        "Label1": "Christmas, île",
        "Label2": "جزيرة عيد الميلاد"
      },
      {
        "Oid": "115",
        "SyncId": "94e60524-f203-453e-973e-7b80449e2de3",
        "Code": "GH",
        "Label1": "Ghana",
        "Label2": "غانا"
      },
      {
        "Oid": "116",
        "SyncId": "ccfc0840-dfd1-4cc9-b405-7be1ed1d8f19",
        "Code": "KH",
        "Label1": "Cambodge",
        "Label2": "كمبوديا"
      },
      {
        "Oid": "117",
        "SyncId": "0c5f7d28-5634-46c0-b6cb-7d4d8e564d12",
        "Code": "AR",
        "Label1": "Argentine",
        "Label2": "الأرجنتين"
      },
      {
        "Oid": "118",
        "SyncId": "14940dca-51c6-4b22-b7ed-82991bdcd270",
        "Code": "TH",
        "Label1": "Thaïlande",
        "Label2": "تايلندا"
      },
      {
        "Oid": "119",
        "SyncId": "5f20619a-8605-4301-b964-83dfcb570679",
        "Code": "NZ",
        "Label1": "Nouvelle-zélande",
        "Label2": "نيوزيلندا"
      },
      {
        "Oid": "120",
        "SyncId": "dcc74e1f-6b0b-49a1-87e0-842d30328559",
        "Code": "AS",
        "Label1": "Samoa américaines",
        "Label2": "ساموا-الأمريكي"
      },
      {
        "Oid": "121",
        "SyncId": "c002652a-c4f6-4e3f-bcec-84f482284b75",
        "Code": "VA",
        "Label1": "Saint-siège (état de la cité du vatican)",
        "Label2": "الفاتيكان"
      },
      {
        "Oid": "122",
        "SyncId": "08fdb7cb-0ec7-4e62-a8e5-865882ad65cc",
        "Code": "GB",
        "Label1": "Royaume-uni",
        "Label2": "المملكة المتحدة"
      },
      {
        "Oid": "123",
        "SyncId": "b6bba331-bc6b-418a-9c80-899e60990060",
        "Code": "MW",
        "Label1": "Malawi",
        "Label2": "مالاوي"
      },
      {
        "Oid": "124",
        "SyncId": "f94bd586-27d4-4585-aae1-8acabe221a4b",
        "Code": "SG",
        "Label1": "Singapour",
        "Label2": "سنغافورة"
      },
      {
        "Oid": "125",
        "SyncId": "12aa90a7-8d71-4fd5-b5e3-8b1fb8cb2f02",
        "Code": "QA",
        "Label1": "Qatar",
        "Label2": "قطر"
      },
      {
        "Oid": "126",
        "SyncId": "a6863b31-6ee4-43d7-bef3-8b86ebf986fb",
        "Code": "CC",
        "Label1": "Cocos (keeling), îles",
        "Label2": "جزر كوكس"
      },
      {
        "Oid": "127",
        "SyncId": "b0d267b3-7bbb-4ac5-98bc-8c293327fd22",
        "Code": "GF",
        "Label1": "Guyane française",
        "Label2": "غويانا الفرنسية"
      },
      {
        "Oid": "128",
        "SyncId": "86966727-72d5-4a97-9b7f-8dc7446473be",
        "Code": "TD",
        "Label1": "Tchad",
        "Label2": "تشاد"
      },
      {
        "Oid": "129",
        "SyncId": "b8173161-bb69-4c60-8d85-905783a5389e",
        "Code": "GW",
        "Label1": "Guinée-bissau",
        "Label2": "غينيا-بيساو"
      },
      {
        "Oid": "130",
        "SyncId": "c31b1f7a-4503-4b6d-8c66-91c87eb445ca",
        "Code": "LR",
        "Label1": "Libéria",
        "Label2": "ليبيريا"
      },
      {
        "Oid": "131",
        "SyncId": "8e439339-5e52-4e06-99b7-9230cb466593",
        "Code": "A",
        "Label1": "Antilles néerlandaises",
        "Label2": "جزر الأنتيل الهولندي"
      },
      {
        "Oid": "132",
        "SyncId": "a4555e46-c1b4-45d8-b5e6-92563e1088f6",
        "Code": "FM",
        "Label1": "Micronésie, états fédérés de",
        "Label2": "مايكرونيزيا\t"
      },
      {
        "Oid": "133",
        "SyncId": "aa0d4ca7-a7b0-4cd5-90fe-942cfaf94349",
        "Code": "NI",
        "Label1": "Nicaragua",
        "Label2": "نيكاراجوا"
      },
      {
        "Oid": "134",
        "SyncId": "91c4fea4-d170-4042-98a8-95237b4923ff",
        "Code": "IE",
        "Label1": "Irlande",
        "Label2": "إيرلندا"
      },
      {
        "Oid": "135",
        "SyncId": "01c1185a-817e-4068-a0f6-9588b37aada8",
        "Code": "ML",
        "Label1": "Mali",
        "Label2": "مالي"
      },
      {
        "Oid": "136",
        "SyncId": "4453244f-280f-4c5c-85c3-96e266d48bef",
        "Code": "LU",
        "Label1": "Luxembourg",
        "Label2": "لوكسمبورغ"
      },
      {
        "Oid": "137",
        "SyncId": "a2e04525-63ac-4fba-95a2-98917234ef31",
        "Code": "FR",
        "Label1": "France",
        "Label2": "فرنسا"
      },
      {
        "Oid": "138",
        "SyncId": "18eadda9-c0c7-4194-9ac7-99d36a16b78b",
        "Code": "AU",
        "Label1": "Australie",
        "Label2": "أستراليا"
      },
      {
        "Oid": "139",
        "SyncId": "c553b9e2-ca18-47ca-bea3-99f803f9fe2a",
        "Code": "NA",
        "Label1": "Namibie",
        "Label2": "ناميبيا"
      },
      {
        "Oid": "140",
        "SyncId": "a168fae1-667f-4839-a777-9a10ffba1ded",
        "Code": "UG",
        "Label1": "Ouganda",
        "Label2": "أوغندا"
      },
      {
        "Oid": "141",
        "SyncId": "8214ebcb-7d3f-4847-9ca8-9b2108f73fd6",
        "Code": "IR",
        "Label1": "Iran, république islamique d'",
        "Label2": "إيران"
      },
      {
        "Oid": "142",
        "SyncId": "baa4f0ae-a977-4993-8cec-9eca6dca1845",
        "Code": "ER",
        "Label1": "Érythrée",
        "Label2": "إريتريا"
      },
      {
        "Oid": "143",
        "SyncId": "a98f8012-a55b-4812-b803-a08f919d34bf",
        "Code": "HT",
        "Label1": "Haïti",
        "Label2": "هايتي"
      },
      {
        "Oid": "144",
        "SyncId": "3c56c80c-094d-42f9-8d40-a19adfc1bf73",
        "Code": "SV",
        "Label1": "El salvador",
        "Label2": "إلسلفادور"
      },
      {
        "Oid": "145",
        "SyncId": "64f5188f-e153-4a5e-a534-a1c84133643e",
        "Code": "HR",
        "Label1": "Croatie",
        "Label2": "كرواتيا"
      },
      {
        "Oid": "146",
        "SyncId": "661fe340-6b93-4a9e-a8db-a23c6cc54964",
        "Code": "GL",
        "Label1": "Groenland",
        "Label2": "جرينلاند"
      },
      {
        "Oid": "147",
        "SyncId": "6eaf0931-0a0b-41b4-b3ff-a3f7fd108924",
        "Code": "M",
        "Label1": "Mongolie",
        "Label2": "منغوليا"
      },
      {
        "Oid": "148",
        "SyncId": "230837b3-c51a-4cd4-94e3-a4acd5c0cda1",
        "Code": "T",
        "Label1": "Tunisie",
        "Label2": "تونس"
      },
      {
        "Oid": "149",
        "SyncId": "59fc6884-9c4d-4cc6-8ffc-a5c67679bb36",
        "Code": "BZ",
        "Label1": "Belize",
        "Label2": "بيليز"
      },
      {
        "Oid": "150",
        "SyncId": "80894b09-bfdb-4b26-afae-a5cc06d50020",
        "Code": "YE",
        "Label1": "Yéme",
        "Label2": "اليمن"
      },
      {
        "Oid": "151",
        "SyncId": "79261f69-4d13-4055-973f-a72028fbe6ef",
        "Code": "ZM",
        "Label1": "Zambie",
        "Label2": "زامبيا"
      },
      {
        "Oid": "152",
        "SyncId": "aa36aacf-0a1a-4b82-b418-aa480f3d284f",
        "Code": "AD",
        "Label1": "Andorre",
        "Label2": "أندورا"
      },
      {
        "Oid": "153",
        "SyncId": "9edc1331-ce63-4fb6-8350-aac97c0157cd",
        "Code": "EG",
        "Label1": "Égypte",
        "Label2": "مصر"
      },
      {
        "Oid": "154",
        "SyncId": "4ebe5de3-8a09-4d91-9dc1-aad106577823",
        "Code": "BI",
        "Label1": "Burundi",
        "Label2": "بوروندي"
      },
      {
        "Oid": "155",
        "SyncId": "0c36fa96-b6f9-4534-98cc-abf79beec4a0",
        "Code": "FO",
        "Label1": "Féroé, îles",
        "Label2": "جزر فارو"
      },
      {
        "Oid": "156",
        "SyncId": "25161fea-7870-471d-82e1-aceaf72f726c",
        "Code": "CV",
        "Label1": "Cap-vert",
        "Label2": "الرأس الأخضر"
      },
      {
        "Oid": "157",
        "SyncId": "acb89c77-89d8-4b96-8c1f-aeeafc9ae4d3",
        "Code": "LB",
        "Label1": "Liba",
        "Label2": "لبنان"
      },
      {
        "Oid": "158",
        "SyncId": "d3080cbd-f4e4-492d-ade2-afba8d345463",
        "Code": "PA",
        "Label1": "Panama",
        "Label2": "بنما"
      },
      {
        "Oid": "159",
        "SyncId": "34423ef1-b8ea-475b-b23c-b199bc061188",
        "Code": "SK",
        "Label1": "Slovaquie",
        "Label2": "سلوفاكيا"
      },
      {
        "Oid": "160",
        "SyncId": "dc7507c5-ad32-4027-a9c1-b2009b3ba825",
        "Code": "MP",
        "Label1": "Mariannes du nord, îles",
        "Label2": "جزر ماريانا الشمالية"
      },
      {
        "Oid": "161",
        "SyncId": "406fba81-d114-4af7-be22-b33957665309",
        "Code": "TC",
        "Label1": "Turks et caïques, îles",
        "Label2": "جزر توركس وكايكوس"
      },
      {
        "Oid": "162",
        "SyncId": "06f909f5-3f4b-4389-ba75-b4725292b762",
        "Code": "LC",
        "Label1": "Sainte-lucie",
        "Label2": "سانت لوسيا"
      },
      {
        "Oid": "163",
        "SyncId": "2316eff1-c251-41a0-a1a2-b691b5f81f93",
        "Code": "NC",
        "Label1": "Nouvelle-calédonie",
        "Label2": "كاليدونيا الجديدة"
      },
      {
        "Oid": "164",
        "SyncId": "220b09a9-1ac9-45ed-9538-b85c65e98220",
        "Code": "SZ",
        "Label1": "Swaziland",
        "Label2": "سوازيلند"
      },
      {
        "Oid": "165",
        "SyncId": "d85fe821-cf41-4225-9014-b86c2b055df1",
        "Code": "ES",
        "Label1": "Espagne",
        "Label2": "إسبانيا"
      },
      {
        "Oid": "166",
        "SyncId": "c429ed93-2239-4725-bf0f-b8ce9f3cbaa3",
        "Code": "VC",
        "Label1": "Saint-vincent-et-les grenadines",
        "Label2": "سانت فنسينت والجرينادينز"
      },
      {
        "Oid": "167",
        "SyncId": "13f944e3-b03f-4288-9c76-bacaf2c45cf0",
        "Code": "MT",
        "Label1": "Malte",
        "Label2": "مالطا"
      },
      {
        "Oid": "168",
        "SyncId": "72788775-a4f3-4107-a993-bb1bc0a8a4c7",
        "Code": "TZ",
        "Label1": "Tanzanie, république-unie de",
        "Label2": "تنزانيا"
      },
      {
        "Oid": "169",
        "SyncId": "b0f7f5e8-5203-4e15-9389-bb7b4f61c62e",
        "Code": "PG",
        "Label1": "Papouasie-nouvelle-guinée",
        "Label2": "بابوا غينيا الجديدة"
      },
      {
        "Oid": "170",
        "SyncId": "eff19c57-1084-4bca-8222-bc8f401ce1b3",
        "Code": "LI",
        "Label1": "Liechtenstei",
        "Label2": "ليختنشتين"
      },
      {
        "Oid": "171",
        "SyncId": "9b4ae75a-c1f8-49e1-bb6d-bf4c3276a24b",
        "Code": "AT",
        "Label1": "Autriche",
        "Label2": "النمسا"
      },
      {
        "Oid": "172",
        "SyncId": "983d5d0b-9da9-4460-9dd8-bf8a9ff78ee7",
        "Code": "KM",
        "Label1": "Comores",
        "Label2": "جزر القمر"
      },
      {
        "Oid": "173",
        "SyncId": "9dadd14d-9346-4eee-a80b-bfead63d99c1",
        "Code": "MX",
        "Label1": "Mexique",
        "Label2": "المكسيك"
      },
      {
        "Oid": "174",
        "SyncId": "056ef1c9-06bd-4682-b975-c1e33b2ca304",
        "Code": "BB",
        "Label1": "Barbade",
        "Label2": "بربادوس"
      },
      {
        "Oid": "175",
        "SyncId": "29acd58b-c0b5-4039-b6d8-c20c8a16bd88",
        "Code": "UZ",
        "Label1": "Ouzbékista",
        "Label2": "أوزباكستان"
      },
      {
        "Oid": "176",
        "SyncId": "4ea303e3-e03b-4c33-a647-c411d08c75b2",
        "Code": "VU",
        "Label1": "Vanuatu",
        "Label2": "فانواتو"
      },
      {
        "Oid": "177",
        "SyncId": "65836f9b-3ba8-4fe3-9e1d-c424fcbd0a11",
        "Code": "NO",
        "Label1": "Norvège",
        "Label2": "النرويج"
      },
      {
        "Oid": "178",
        "SyncId": "29cde413-9446-48fd-ac45-c53546b15d81",
        "Code": "G",
        "Label1": "Guinée",
        "Label2": "غينيا"
      },
      {
        "Oid": "179",
        "SyncId": "2339dbfe-b145-47b5-8819-c54cdfbc177e",
        "Code": "GA",
        "Label1": "Gabo",
        "Label2": "الغابون"
      },
      {
        "Oid": "180",
        "SyncId": "4acd663b-ebad-4f86-b591-c7fbbca5de77",
        "Code": "AO",
        "Label1": "Angola",
        "Label2": "أنغولا"
      },
      {
        "Oid": "181",
        "SyncId": "fb8fbc29-14a6-4dcc-aef6-c9eda7262665",
        "Code": "CS",
        "Label1": "Serbie et monténégro",
        "Label2": "صربيا والجبل الأسود"
      },
      {
        "Oid": "182",
        "SyncId": "04dc4915-4706-47c8-8748-cb6905618716",
        "Code": "PT",
        "Label1": "Portugal",
        "Label2": "البرتغال"
      },
      {
        "Oid": "183",
        "SyncId": "fa6daa98-21a5-4146-a371-d065f94d5040",
        "Code": "VG",
        "Label1": "Îles vierges britanniques",
        "Label2": "الجزر العذراء البريطانية"
      },
      {
        "Oid": "184",
        "SyncId": "9f09e0de-93ba-4722-824b-d2fb23c93c26",
        "Code": "GE",
        "Label1": "Géorgie",
        "Label2": "جيورجيا"
      },
      {
        "Oid": "185",
        "SyncId": "3ae136a5-f6da-44e0-ae96-d36da052f5bd",
        "Code": "PW",
        "Label1": "Palaos",
        "Label2": "بالاو"
      },
      {
        "Oid": "186",
        "SyncId": "834b9814-e278-4245-8c96-d5fd5eb00355",
        "Code": "GS",
        "Label1": "Géorgie du sud et les îles sandwich du sud",
        "Label2": "جورجيا الجنوبية وجزر ساندويتش الجنوبية"
      },
      {
        "Oid": "187",
        "SyncId": "69b13d60-b18a-4c6c-9e81-d6341a868731",
        "Code": "SO",
        "Label1": "Somalie",
        "Label2": "الصومال"
      },
      {
        "Oid": "188",
        "SyncId": "76449729-40d7-423d-ae68-d6ba12fd641a",
        "Code": "KR",
        "Label1": "Corée, république de",
        "Label2": "كوريا الجنوبية"
      },
      {
        "Oid": "189",
        "SyncId": "de9690cb-d574-4f8c-83af-d6dc6eb5300c",
        "Code": "MA",
        "Label1": "Maroc",
        "Label2": "المغرب"
      },
      {
        "Oid": "190",
        "SyncId": "ba6386e6-3844-4d11-ac50-d76ba32fe7ec",
        "Code": "MU",
        "Label1": "Maurice",
        "Label2": "موريشيوس"
      },
      {
        "Oid": "191",
        "SyncId": "ff435c94-fb09-4802-b5d8-da327bb647f6",
        "Code": "ID",
        "Label1": "Indonésie",
        "Label2": "أندونيسيا"
      },
      {
        "Oid": "192",
        "SyncId": "7a642e56-866b-427e-a304-dede2ab638e5",
        "Code": "AG",
        "Label1": "Antigua-et-barbuda",
        "Label2": "أنتيغوا وبربودا\t"
      },
      {
        "Oid": "193",
        "SyncId": "71aa968d-5f91-4535-8265-deed4a9c645d",
        "Code": "CR",
        "Label1": "Costa rica",
        "Label2": "كوستاريكا"
      },
      {
        "Oid": "194",
        "SyncId": "6adaec70-40c5-4eb4-b175-df1e8c7ba480",
        "Code": "EC",
        "Label1": "Équateur",
        "Label2": "إكوادور"
      },
      {
        "Oid": "195",
        "SyncId": "460c595e-eb02-43ca-bc86-df8779cb2ad8",
        "Code": "GU",
        "Label1": "Guam",
        "Label2": "جوام"
      },
      {
        "Oid": "196",
        "SyncId": "5741fb4f-c854-4220-afdd-e06c81009f58",
        "Code": "MM",
        "Label1": "Myanmar",
        "Label2": "ميانمار"
      },
      {
        "Oid": "197",
        "SyncId": "a9a991d0-4455-42ee-9bd9-e0761e508726",
        "Code": "PY",
        "Label1": "Paraguay",
        "Label2": "باراغواي"
      },
      {
        "Oid": "198",
        "SyncId": "2174ba74-13bf-4190-a3cf-e0fac13a0206",
        "Code": "FJ",
        "Label1": "Fidji",
        "Label2": "فيجي"
      },
      {
        "Oid": "199",
        "SyncId": "1c021ce2-14c5-4113-adc1-e1d88f583cb1",
        "Code": "BD",
        "Label1": "Bangladesh",
        "Label2": "بنغلاديش"
      },
      {
        "Oid": "200",
        "SyncId": "48a0b497-2e0a-42c5-80c5-e3f4b65f1592",
        "Code": "MQ",
        "Label1": "Martinique",
        "Label2": "مارتينيك"
      },
      {
        "Oid": "201",
        "SyncId": "26f29641-b177-4076-9450-e431d585882f",
        "Code": "KY",
        "Label1": "Caïmans, îles",
        "Label2": "جزر كايمان"
      },
      {
        "Oid": "202",
        "SyncId": "15e9275c-4ed8-45db-8931-e668a49378b1",
        "Code": "BG",
        "Label1": "Bulgarie",
        "Label2": "بلغاريا"
      },
      {
        "Oid": "203",
        "SyncId": "3be5009c-88db-4ebc-aeb2-e67a22a3bbfe",
        "Code": "MY",
        "Label1": "Malaisie",
        "Label2": "ماليزيا"
      },
      {
        "Oid": "204",
        "SyncId": "6bfa8ef8-c766-47a3-82de-e6e691975ed2",
        "Code": "K",
        "Label1": "Saint-kitts-et-nevis",
        "Label2": "سانت كيتس ونيفس"
      },
      {
        "Oid": "205",
        "SyncId": "dd6fb8c3-53ca-4bb2-825d-e7e77d6e026d",
        "Code": "CG",
        "Label1": "Congo",
        "Label2": "جمهورية الكونغو"
      },
      {
        "Oid": "206",
        "SyncId": "a471a8b5-11e0-4b79-a45d-eb4ec348f0e4",
        "Code": "FI",
        "Label1": "Finlande",
        "Label2": "فنلندا"
      },
      {
        "Oid": "207",
        "SyncId": "8045f13c-59ab-4160-9619-ebe0d31c736a",
        "Code": "CL",
        "Label1": "Chili",
        "Label2": "شيلي"
      },
      {
        "Oid": "208",
        "SyncId": "007938c0-aa5d-4dfc-95f7-ec7374728993",
        "Code": "PK",
        "Label1": "Pakista",
        "Label2": "باكستان"
      },
      {
        "Oid": "209",
        "SyncId": "2f0b03a4-d565-46ef-9d4c-ee5f31fb133e",
        "Code": "SA",
        "Label1": "Arabie saoudite",
        "Label2": "المملكة العربية السعودية"
      },
      {
        "Oid": "210",
        "SyncId": "9caf1a58-51af-4b7b-b104-ef1b8d7625c1",
        "Code": "CU",
        "Label1": "Cuba",
        "Label2": "كوبا"
      },
      {
        "Oid": "211",
        "SyncId": "80dbaa34-d245-4581-8647-efa227944c7b",
        "Code": "NU",
        "Label1": "Niue",
        "Label2": "ني"
      },
      {
        "Oid": "212",
        "SyncId": "767e14e3-c03e-40cd-aa75-f3473ca5d16d",
        "Code": "PR",
        "Label1": "Porto rico",
        "Label2": "بورتو ريكو"
      },
      {
        "Oid": "213",
        "SyncId": "e5d67bc4-48e7-45c1-b95d-f38b3d8b253b",
        "Code": "MO",
        "Label1": "Macao",
        "Label2": "ماكاو"
      },
      {
        "Oid": "214",
        "SyncId": "586573c4-96c3-415c-8f46-f494464ee863",
        "Code": "TG",
        "Label1": "Togo",
        "Label2": "توغو"
      },
      {
        "Oid": "215",
        "SyncId": "2097a258-1321-4d1d-a7b5-f528aafa087c",
        "Code": "MK",
        "Label1": "Macédoine, l'ex-république yougoslave de",
        "Label2": "مقدونيا"
      },
      {
        "Oid": "216",
        "SyncId": "3708cf90-3715-466c-a384-f6d3b5516935",
        "Code": "HU",
        "Label1": "Hongrie",
        "Label2": "المجر"
      },
      {
        "Oid": "217",
        "SyncId": "ad0a446f-588a-4166-bb1a-f79d2cefb4e3",
        "Code": "GD",
        "Label1": "Grenade",
        "Label2": "غرينادا"
      },
      {
        "Oid": "218",
        "SyncId": "acee0375-c8bd-4e8f-ac2f-f891245b5221",
        "Code": "ZW",
        "Label1": "Zimbabwe",
        "Label2": "زمبابوي"
      },
      {
        "Oid": "219",
        "SyncId": "de6e7115-861d-417e-8351-f92ff7c45c8f",
        "Code": "ZA",
        "Label1": "Afrique du sud",
        "Label2": "جنوب أفريقيا"
      },
      {
        "Oid": "220",
        "SyncId": "00db0fdc-83a0-4fcb-9a41-fa08b20b7b9c",
        "Code": "GR",
        "Label1": "Grèce",
        "Label2": "اليونان"
      },
      {
        "Oid": "221",
        "SyncId": "f42d3293-cbb8-46cd-876e-fa2b30165f27",
        "Code": "TO",
        "Label1": "Tonga",
        "Label2": "تونغا"
      },
      {
        "Oid": "222",
        "SyncId": "6d6cf74c-d4bf-4050-ab09-fc167e1d72a5",
        "Code": "KE",
        "Label1": "Kenya",
        "Label2": "كينيا"
      },
      {
        "Oid": "223",
        "SyncId": "08bc163f-6cb0-40fb-84c4-fc4d351e064e",
        "Code": "UY",
        "Label1": "Uruguay",
        "Label2": "أورغواي"
      },
      {
        "Oid": "224",
        "SyncId": "2ba87722-cf97-4844-ac4d-fc8e73e62cae",
        "Code": "US",
        "Label1": "États-unis",
        "Label2": "الولايات المتحدة"
      },
      {
        "Oid": "225",
        "SyncId": "b34bbb98-483a-42ea-a1ce-fcdfe0bb9456",
        "Code": "CK",
        "Label1": "Cook, îles",
        "Label2": "جزر كوك"
      },
      {
        "Oid": "226",
        "SyncId": "b44ea908-00f6-4c1a-977c-fd8ef7bae78d",
        "Code": "AW",
        "Label1": "Aruba",
        "Label2": "أروبه"
      },
      {
        "Oid": "227",
        "SyncId": "cb43454f-bae0-444f-8278-ff664f5a6de0",
        "Code": "JM",
        "Label1": "Jamaïque",
        "Label2": "جمايكا"
      },
      {
        "Oid": "228",
        "SyncId": "279c4839-687c-4c6b-9196-ff800892d6d3",
        "Code": "CD",
        "Label1": "Congo, la république démocratique du",
        "Label2": "جمهورية الكونغو الديمقراطية"
      }
    ]

    const status = [
      { name: 'En attente', code: 0 },
      { name: 'Annulé', code: 1 },
      { name: 'Ramassé', code: 2, disabled: true },
      { name: 'En Examen', code: 3, disabled: true },
      { name: 'Réceptionné', code: 4, disabled: true },
      { name: 'En Transfert ', code: 5, disabled: true },
      { name: 'En Livraison', code: 6, disabled: true },
      { name: 'Livré', code: 7, disabled: true },
      { name: 'Retourné', code: 8, disabled: true },
      { name: 'Refusé', code: 9, disabled: true }
    ];


    const fillColisCodeList = () => {
      colisCodeList.push(parseInt(colis.Number.substring(13)));
        if (parseInt(colis.UnitsNumber) > 1) {
            for (var index in colis.SerialNumberParts) {
              colisCodeList.push(parseInt(colis.SerialNumberParts[index].Number.substring(13)))     
            }
            
        }
    }

    fillColisCodeList();
    console.log("dddddd "+colisCodeList.length)
    

    const listContent = colisCodeList.map((codeValue) =>
     <div style={{ size: "148mm 210mm" }}>
       <Content indexPartie={codeValue} colis={colis} commune={communes} wilayas={wilayas} pays={pays} status={status} />
        {//,pageBreakAfter:'always'
        console.log("index = "+colisCodeList.indexOf(codeValue)%2)}
       { colisCodeList.indexOf(codeValue)%2 === 1 ? <div style={{ pageBreakAfter:'always' }}></div> : null }
      </div>
    )

    return (
      <div>{listContent}</div>
    )
  }
}

export default ColisListPrint;

