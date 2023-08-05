import React from "react";
import CardLarge from "../../components/CardLarge";

const DurabilityFixings = () => {
    return (
        <div>
        <h4 className="h5 blue pl-10 fw-700" style={{minwidth: 320, maxWidth: 700}}>Table 4.1: Protection required for steel fixings and fastenings excluding nails and screws</h4>
        <CardLarge>
            <div>
                <table className="table-md text-center">
                    <thead>
                        <tr>
                            <th className="table-md__head"><p className="label__window fw-700">Zones</p></th>
                            <th className="table-md__head"><p className="label__window fw-700">Fixing Fastening</p></th>
                            <th className="table-md__head" colSpan={2}><p className="label__window fw-700">Environment</p></th>
                            <th className="table-md__head"><p className="label__window fw-700">Material</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-md__data" rowSpan={3}><p className="body-bold fw-700">All Zones</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Nail Plates</p></td>
                            <td className="table-md__data" rowSpan={2} colSpan={2}><p className="body dark-gray">Closed And Roof Spaces</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Continuously Coated Galvanized Steel</p></td>
                        </tr>
                        <tr>
                            <td className="table-md__data"><p className="body dark-gray">Wire Dogs & Bolts</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Hot-dipped Galvanized Steel</p></td>
                        </tr>
                        <tr>
                            <td className="table-md__data"><p className="body dark-gray">All Other Structural Fixings</p></td>
                            <td className="table-md__data" colSpan={2}><p className="body dark-gray">Closed</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Mild-steel (uncoated, non-galvanized)</p></td>
                        </tr>
                        <tr>
                            <td className="table-md__data"><p className="body-bold fw-700">Zone D</p></td>
                            <td className="table-md__data"><p className="body dark-gray">All Structural Fixings</p></td>
                            <td className="table-md__data" colSpan={2}><p className="body dark-gray">Sheltered And Exposed</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Type 304 Stainless Steel</p></td>
                        </tr>
                        <tr>
                            <td className="table-md__data" rowSpan={4}><p className="body-bold fw-700">Zone B & C</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Treated timber pile connections more than 600 mm from
                            the ground and all subfloor connections</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Subfloors vented 7000 mm2 or less</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Sheltered</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Hot-dipped Galvanized Steel</p></td>
                        </tr>
                        <tr>
                            <td className="table-md__data"><p className="body">Treated timber pile connections within 600 mm of the ground</p></td>
                            <td className="table-md__data" colSpan={2}><p className="body dark-gray">Sheltered And Exposed</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Type 304 Stainless Steel</p></td>
                        </tr>
                        <tr>
                            <td className="table-md__data" rowSpan={2}><p className="body">All other structural fixings, except fabricated brackets</p></td>
                            <td className="table-md__data" colSpan={2}><p className="body dark-gray">Sheltered</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Hot-dipped Galvanized Steel</p></td>
                        </tr>
                        <tr>
                            <td className="table-md__data" colSpan={2}><p className="body dark-gray">Exposed</p></td>
                            <td className="table-md__data"><p className="body dark-gray">Type 304 Stainless Steel</p></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </CardLarge>
    </div>
    )
}

export default DurabilityFixings;