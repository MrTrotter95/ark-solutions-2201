import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const VerandahBeams = () => {
    return (
        <div>
            <h4 className="h5 pl-10 dt-blue fw-800">Verandah Beams SG8</h4>
            <CardSmallalt>
                <div className="flex-row mb-20">
                    <p className="body dt-gray">Roof Weight</p>
                    <select className="select-sm label">n
                        <option value="Light">Light</option>
                        <option value="Heavy">Heavy</option>
                    </select>
                </div>
                <div className="flex-row mb-20">
                    <p className="body dt-gray">Loaded Dimension Of Beam</p>
                    <select className="select-sm label">
                        <option value="0.9">0.9</option>
                        <option value="1.4">1.4</option>
                        <option value="1.8">1.8</option>
                        <option value="2.1">2.1</option>
                    </select>
                </div>
                <div className="flex-row mb-20">
                    <p className="body dt-gray">Desired Rafter Size</p>
                    <select className="select-sm label">
                        <option value="140x45">140x45mm</option>
                        <option value="190x45">190x45mm</option>
                        <option value="240x45">240x45mm</option>
                        <option value="290x45">290x45mm</option>
                        <option value="140x90">140x90mm</option>
                        <option value="190x90">190x90mm</option>
                        <option value="240x90">240x90mm</option>
                        <option value="290x90">290x90mm</option>
                    </select>
                </div>
                <div className="mb-20 mt-30">
                    <h5 className="h5-0mg dt-white fw-800 mb-10">Maximum Span: <span className="result-text_md dt-blue fw-800 mb-10">5.2m</span> </h5>
                    <h5 className="h5-0mg dt-white fw-800 mb-10">Required Fixing Type: <span className="result-text_md dt-blue fw-800 mb-10">Q</span> </h5>
                </div>
                <div className="mb-30">
                    <p className="label dt-white fw-500">Fixing to resist uplift</p>
                    <p className="label dt-gray">2 / HDG ‘tee’ straps (see figure 9.3 (A)) 3604:2011</p>
                    <p className="label dt-white fw-500 mt-10">Alternate fixing capacity (kN)</p>
                    <p className="label dt-gray">25.5</p>
                </div>
                <p className="label dt-white fw-700 mt-20">Note:</p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(1)</span> This calculator includes provision for the rafters
                cantilevering a maximum of 750mm beyond the verandah beam to support a soffit.</p>
                <p className="label dt-gray mt-20"><span className="label fw-800">(2)</span> Fixing type for continuous spans shall have a
                double capacity to that listed in the table.</p>
                <p className="label dt-gray mt-20"><span className="label fw-800">(3)</span> Members 70mm and 90mm thick may be substituted 
                with built-up members sized and nailed in accordance with 2.4.4.7</p>
            </CardSmallalt>
        </div>
    )
};

export default VerandahBeams;