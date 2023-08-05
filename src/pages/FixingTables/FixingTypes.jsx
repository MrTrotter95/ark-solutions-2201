import React from "react";
import CardMedium from "../../components/CardMedium";
import CardSmall from "../../components/CardSmall";
import CardLarge from "../../components/CardLarge";
import FixingTypeBody from "./FixingTypeBody";

const FixingTableData = [
    {
        type: "A",
        description: "2 / 90 x 3.15 end nails",
        alternate: "0.7"
    },
    {
        type: "B",
        description: "2 / 90 x 3.15 end nails + 2 wire dogs",
        alternate: "4.7"
    },
    {
        type: "C",
        description: "2 / 90 x 3.15 end nails + strap fixing (see figure 8.12)",
        alternate: "8.5"
    },
    {
        type: "D",
        description: "4 / 90 x 3.15 end nails + 2 strap fixing (double stud)",
        alternate: "16.0"
    },
    {
        type: "E",
        description: "2 / 90 x 3.15 skew nails + 2 wire dogs",
        alternate: "4.7"
    },
    {
        type: "F",
        description: "2 / 90 x 3.15 skew nails + strap fixing (see figure 10.6)",
        alternate: "7.0"
    },
    {
        type: "G",
        description: "10 / 90 x 3.15 nails (5 each side)",
        alternate: "4.7"
    },
    {
        type: "H",
        description: "1 / M12 bolt",
        alternate: "8.5"
    },
    {
        type: "I",
        description: "2 / M12 bolts",
        alternate: "16.0"
    },
    {
        type: "J",
        description: "2 / M16 bolts",
        alternate: "24.0"
    },
    {
        type: "K",
        description: "6 / 90 x 3.15 nails",
        alternate: "3.0"
    },
    {
        type: "L",
        description: "2 / M12 bolts",
        alternate: "9.8"
    },
    {
        type: "M",
        description: "2 / M16 bolts",
        alternate: "13.0"
    },
    {
        type: "N",
        description: "6 / 100 x 4.0 HDG nails (hand driven)",
        alternate: "4.7"
    },
    {
        type: "O",
        description: "2 / M12 bolts (see figure 9.3 (C))",
        alternate: "6.8"
    },
    {
        type: "P",
        description: "2 HDG 'flat' straps (see figure 9.3 (B))",
        alternate: "13.7"
    },
    {
        type: "Q",
        description: "2 HDG 'tee' straps (see figure 9.3 (A))",
        alternate: "25.5"
    },
    {
        type: "R",
        description: "1 / 90 x 3.15 nail",
        alternate: "0.55"
    },
    {
        type: "S",
        description: "2 / 90 x 3.15 nails",
        alternate: "0.8"
    },
    {
        type: "T",
        description: "1 / 10g self-drilling screw, 80mm long",
        alternate: "2.4"
    },
    {
        type: "U",
        description: "1 / 14g self-drilling Type 17 screw, 100mm long",
        alternate: "5.5"
    },
]

const FixingTypes = () => {
    return(
        <div>
            <h4 className="h5 blue pl-10 fw-700">Table 2.2: Fixing Type And Capacity</h4>
            <CardLarge>
                <div>
                    <table className="table-md text-center">
                        <thead>
                            <tr>
                                <th className="table-md__head"><p className="label__window fw-700">Fixing Type</p></th>
                                <th className="table-md__head"><p className="label__window fw-700">Description</p></th>
                                <th className="table-md__head"><p className="label__window fw-700">Alternate Fixing Capacity (kN)</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {FixingTableData.map((item) => (
                                <FixingTypeBody
                                type={item.type}
                                description={item.description}
                                alternate={item.alternate}
                                />
                            ))}
                        </tbody>

                    </table>
                </div>
            </CardLarge>
        </div>
    )
};

export default FixingTypes;