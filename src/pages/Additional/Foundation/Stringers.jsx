import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const Stringers = () => {
    const [oneNinetyStr, setOneNinetyStr] = useState(2400);
    const [oneFortyStr, setOneFortyStr] = useState('-');
    
    const StringerHandler = () => {
        const joistSpan = document.querySelector('#joistSpan').value;

        if(joistSpan == 2) {
            setOneNinetyStr(2400);
            setOneFortyStr('-');
        } else if(joistSpan == 3) {
            setOneNinetyStr(1600);
            setOneFortyStr(1600);
        } else if(joistSpan == 4) {
            setOneNinetyStr(1200);
            setOneFortyStr(1200);
        } else if(joistSpan == 5) {
            setOneNinetyStr(900);
            setOneFortyStr(900);
        } else if(joistSpan == 6) {
            setOneNinetyStr(800);
            setOneFortyStr(800);
        } else {
            setOneNinetyStr('error');
            setOneFortyStr('error');
        }

    }

    return (
        <div>
            <h4 className="h5 pl-10 fw-900 black">Stringers SG8</h4>
            <CardSmallalt>
                <div className="flex-row">
                    <p className="body black">Max Span Of Floor Joists</p>
                    <select className="select-sm label dark-gray" id="joistSpan" onChange={StringerHandler}>
                        <option value="2">2.0m</option>
                        <option value="3">3.0m</option>
                        <option value="4">4.0m</option>
                        <option value="5">5.0m</option>
                        <option value="6">6.0m</option>
                    </select>
                </div>
                <div className="mt-30">
                    <h5 className="h5-0mg fw-900 black mb-10">Available Options</h5>
                    <table className="table-sm text-center">
                        <thead>
                            <tr>
                                <th><p className="label__window fw-800">Size Nominal (mm)</p></th>
                                <th><p className="label__window fw-800">Max M12 bolt spacing (mm)</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p className="body bright-blue fw-800">140x45</p></td>
                                <td><p className="body bright-blue fw-800">{oneFortyStr}</p></td>
                            </tr>
                            <tr>
                                <td><p className="body bright-blue fw-800">190x45</p></td>
                                <td><p className="body bright-blue fw-800">{oneNinetyStr}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardSmallalt>
        </div>
    )
};

export default Stringers;