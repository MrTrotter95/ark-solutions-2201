import React from "react";
import CardSmall from "../../components/CardSmall";
import './WindZone.css';

import questionMark from "../../assets/images/icons/question-mark-green.png";
import WindRegionImg from "../../assets/images/windZoneImages/windRegions.jpg";
import groundRoughnessImg from "../../assets/images/windZoneImages/groundRoughness.jpg";
import siteExposureImg from "../../assets/images/windZoneImages/siteExposure.jpg";
import topographyImg from "../../assets/images/windZoneImages/topographicClass.jpg";

const WindZone = () => {
  return (
    <div className="container-sm" style={{marginTop: 75}}>
      <h4 className="h5 blue fw-700">Wind Zone Determination</h4>
      <CardSmall>
        <table className="table-sm" onChange={windZoneCalculation}>
          <tbody className="table-sm">
            <tr className="table-row">
              <td>
                <p className="body dark-gray">Wind Region</p>
              </td>
              <td>
                <img className="question-mark-primary" src={questionMark} alt="question mark" onClick={windRegionImgOpen} />
              </td>
              <td className="text-end">
                <select className="select-sm label" name="windRegion" id="windRegion">
                  <option value="A">A</option>
                  <option value="W">W</option>
                </select>
              </td>
            </tr>

            <tr className="table-row">
              <td><p className="body dark-gray">Lee Zone</p></td>
              <td></td>
              <td className="text-end">         
                <select className="select-sm label" name="leeZone" id="leeZone">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </td>
            </tr>

            <tr className="table-row">
              <td><p className="body dark-gray">Ground Roughness</p></td>
              <td>
                <img className="question-mark-primary" src={questionMark} alt="question mark" onClick={groundRoughnessImgOpen}/>
                </td>
              <td className="text-end">         
                <select className="select-sm label" name="groundRoughness" id="groundRoughness">
                  <option value="Urban">Urban</option>
                  <option value="Open">Open</option>
                </select>
              </td>
            </tr>

            <tr className="table-row">
              <td><p className="body dark-gray">Site Exposure</p></td>
              <td><img className="question-mark-primary" src={questionMark} alt="question mark" onClick={siteExposureImgOpen} /></td>
              <td className="text-end">         
                <select className="select-sm label" name="siteExposure" id="siteExposure">
                  <option value="Sheltered">Sheltered</option>
                  <option value="Exposed">Exposed</option>
                </select>
              </td>
            </tr>

            <tr className="table-row">
              <td><p className="body dark-gray">Topography</p></td>
              <td><img className="question-mark-primary" src={questionMark} alt="question mark" onClick={topographicImgOpen} /></td>
              <td className="text-end">         
                <select className="select-sm label" name="topography" id="topography">
                  <option value="T1">T1</option>
                  <option value="T2">T2</option>
                  <option value="T3">T3</option>
                  <option value="T4">T4</option>
                </select>
              </td>
            </tr>

            <tr className="table-row">
              <td><p className="h5-0mg fw-700">Result</p></td>
              <td></td>
              <td>
                <h5 className="result-text_md ml-0 fw-800 windZoneResult text-center blue">Low</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </CardSmall>

      <div className="windRegionImageParentContainer" onClick={windRegionImgClose}>
        <div className="windRegionImageChildContainer">
          <img src={WindRegionImg} alt="Wind Region" className="windRegionImage" />
        </div>
      </div>

      <div className="groundRoughnessParentContainer" onClick={groundRoughnessImgClose}>
        <div className="groundRoughnessChildContainer">
          <img src={groundRoughnessImg} alt="Ground Roughness" className="groundRoughnessImage" />
        </div>
      </div>

      <div className="siteExposureParentContainer" onClick={siteExposureImgClose}>
        <div className="siteExposureChildContainer">
          <img src={siteExposureImg} alt="Site Exposure" className="siteExposureImage" />
        </div>
      </div>

      <div className="topographicParentContainer" onClick={topographicImgClose}>
        <div className="topographicChildContainer">
          <img src={topographyImg} alt="Topographic Class" className="topographicImage" />
        </div>
      </div>
    </div>
  );
};

export default WindZone;

function windZoneCalculation() {
  const result = document.querySelector('.windZoneResult')
  const windRegion = document.getElementById('windRegion').value
  const leeZone = document.getElementById('leeZone').value
  const groundRoughness = document.getElementById('groundRoughness').value
  const siteExposure = document.getElementById('siteExposure').value
  const topography = document.getElementById('topography').value
  
      if(windRegion === "A") {
          if(groundRoughness === "Urban") {
              if(topography === "T1") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No"){
                          result.innerHTML = "Low"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "High"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Medium"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "Very High"
                      }
                  }
              }
              else if(topography === "T2") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "Medium"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "Very High"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T3"){
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T4"){
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
          }
          else if(groundRoughness === "Open"){
              if(topography === "T1") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "Medium"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "Very High"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T2") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T3") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T4") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Extra High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
               }
           }
      }
      else if(windRegion === "W"){
          if(groundRoughness === "Urban") {
              if(topography === "T1") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "Medium"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "Very High"
                      }
                  }
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T2") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T3") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T4") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "Extra High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Extra High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
          }
          else if(groundRoughness === "Open") {
              if(topography === "T1") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T2") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Extra High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T3") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "Very High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "Extra High"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
              else if(topography === "T4") {
                  if(siteExposure === "Sheltered"){
                      if(leeZone === "No") {
                          result.innerHTML = "SED"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  } 
                  else if(siteExposure === "Exposed"){
                      if(leeZone === "No") {
                          result.innerHTML = "SED"
                      }
                      else if(leeZone === "Yes"){
                          result.innerHTML = "SED"
                      }
                  }
              }
          }
      }
  }

const windRegionImgOpen = () => {
  const windRegionContainer = document.querySelector('.windRegionImageParentContainer')
  windRegionContainer.style.display = "block"
}

const windRegionImgClose = () => {
  const windRegionContainer = document.querySelector('.windRegionImageParentContainer')
  windRegionContainer.style.display = "none"
}

const groundRoughnessImgOpen = () => {
    const groundRoughnessContainer = document.querySelector('.groundRoughnessParentContainer')
    groundRoughnessContainer.style.display = "block"
}
  
  const groundRoughnessImgClose = () => {
    const groundRoughnessContainer = document.querySelector('.groundRoughnessParentContainer')
    groundRoughnessContainer.style.display = "none"
}

const siteExposureImgOpen = () => {
    const groundRoughnessContainer = document.querySelector('.siteExposureParentContainer')
    groundRoughnessContainer.style.display = "block"
}
  
  const siteExposureImgClose = () => {
    const siteExposureContainer = document.querySelector('.siteExposureParentContainer')
    siteExposureContainer.style.display = "none"
}

const topographicImgOpen = () => {
    const topographicContainer = document.querySelector('.topographicParentContainer')
    topographicContainer.style.display = "block"
}
  
  const topographicImgClose = () => {
    const topographicContainer = document.querySelector('.topographicParentContainer')
    topographicContainer.style.display = "none"
}
