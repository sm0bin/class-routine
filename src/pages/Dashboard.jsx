
const Dashboard = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Day</th>
                            <th>Batch</th>
                            <th>09:05 - 10:00</th>
                            <th>10:05 - 11:00</th>
                            <th>11:05 - 12:00</th>
                            <th>12:05 - 01:00</th>
                            <th>01:05 - 02:00</th>
                            <th>02:05 - 3:00</th>
                            <th>03:05 - 4:00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="8">
                                Sun
                            </th>
                            <th>
                                1st Year Odd (2023)
                            </th>
                            {/* 
                            <th>
                                1st Year Even (2022)
                            </th>
                            <th>
                                2nd Year Even (2022)
                            </th>
                            <th>
                                3rd Year Odd (2022)
                            </th>
                            <th>
                                4th Year Odd (2022)
                            </th>
                            <th>
                                MSc/M 1st Sem (2020)
                            </th>
                            <th>
                                MSc/M 2nd Sem (2020)
                            </th>
                            <th>
                                MSc/M 3rd Sem (2020)
                            </th>
                             */}
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ICE 1121 RH/HK (403)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ICE 1111 RY/HH (403)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ENG 1111 NA (403)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    MATH 1111 MRH (403)
                                </button>
                            </th>
                        </tr>

                        {/* row 2*/}
                        <tr>
                            <th>
                                1st Year Even (2022)
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ICE 1211 HH/LN (403)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    STAT 1211 FH (403)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    PHY 1221 MRH/AI (403)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                </button>
                            </th>
                            <th colSpan="3">
                                <button className="btn btn-ghost btn-block">
                                    ICE 1212 BY AMAR, RUM, AI (233)
                                </button>
                            </th>

                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>
                                2nd Year Even (2022)
                            </th>
                            <th colSpan="3">
                                <button className="btn btn-ghost btn-block">
                                    ICE 2222 RY RUM, MI (227)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ICE 2211 (MRH/FZ) (437)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ICF 2221 RUM/MI (437)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    PHY 1221 MRH/AI (403)
                                </button>
                            </th>

                        </tr>

                        {/* row 4 */}
                        <tr>
                            <th>
                                3rd Year Odd (2022)
                            </th>

                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ICE 3111 RUM/FA-2 (440)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ICE 3131 DD/EH (440)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                    ICE 3151 AMAR/RUM (440)
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-block">
                                </button>
                            </th>

                        </tr>

                        {/* row 1 */}
                        {/* <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-block btn-xs">details</button>
                            </th>
                        </tr> */}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Dashboard;