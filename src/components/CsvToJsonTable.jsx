import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import csvtojson from "csvtojson";

function CsvToJsonTable() {
  const [jsonData, setJsonData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  function handleChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  async function handleUpload() {
    const csvData = await selectedFile.text();
    const jsonObj = await csvtojson().fromString(csvData);
    setJsonData(jsonObj);
  }

  return (
    <div>
      <h1>CSV To JSON</h1>
      <input type="file" onChange={handleChange} />
      <button type="button" class="btn btn-dark" onClick={handleUpload}>Upload</button>
      {/* <button onClick={handleUpload}>Upload</button> */}
      {jsonData.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              {Object.keys(jsonData[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jsonData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Please select a CSV file to upload.</p>
      )}
    </div>
  );
}

export default CsvToJsonTable;
