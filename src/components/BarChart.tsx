import React from 'react';


const mainstyles = {
  display: "flex"
}

const pageStyles = {
    height: "200px",
    maxwidth: "300px",
    margin: "50 auto",
    padding: "10px",
  }

const IndexPage = () => {
  return (
    <>
    <main style={mainstyles} >
      {/* <h1>Bar Chart</h1> */}
      <div>
        <table className="charts-css column" style={pageStyles}>
          <p> Front End Developer Salary </p>

          <tbody>
            <tr>
              <td style={{ '--size': 'calc( 40 / 100 )' }}> $40K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 60 / 100 )' }}> $60K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 75 / 100 )' }}> $75K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 90 / 100 )' }}> $90K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 85 / 100 )' }}> $100K </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="charts-css column" style={pageStyles}>
          <p> Back End Developer Salary </p>

          <tbody>
            <tr>
              <td style={{ '--size': 'calc( 40 / 100 )' }}> $40K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 80 / 100 )' }}> $60K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 75 / 100 )' }}> $75K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 90 / 100 )' }}> $90K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 30 / 100 )' }}> $100K </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="charts-css column" style={pageStyles}>
          <p> DevOps Salary </p>

          <tbody>
            <tr>
              <td style={{ '--size': 'calc( 40 / 100 )' }}> $40K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 80 / 100 )' }}> $60K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 75 / 100 )' }}> $75K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 60 / 100 )' }}> $90K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 80 / 100 )' }}> $100K </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
    
    </>
  );
};

export default IndexPage;