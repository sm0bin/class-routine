import { useEffect, useState } from "react";

const Dashboard = () => {
    const [routine, setRoutine] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRoutine(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <h2 className="text-center text-3xl font-bold my-12">Class Routine</h2>
                <div className="flex justify-center gap-8 my-12">
                    <button className="btn btn-neutral">Only Tomorrow</button>
                    <button className="btn btn-neutral">Only Specific Day</button>
                    <button className="btn btn-neutral">Only Specific Batch</button>
                </div>
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="text-center text-xl">
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            {/* <th>Day</th> */}
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
                    <tbody className="border-t-2 border-gray-300">









                        {
                            routine.map((day) => (
                                <>
                                    <tr key={day.id}>
                                        <th colSpan="9" className="text-center text-3xl py-4 bg-gray-700 text-white">
                                            {day.name}
                                        </th>
                                    </tr>
                                    {
                                        day.batches.map((batch, index) => (
                                            <tr key={index}>
                                                <th>
                                                    {batch.name}
                                                </th>
                                                <td>
                                                    <button className="btn btn-ghost btn-block">
                                                        {batch.schedule["09:05 - 10:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block">
                                                        {batch.schedule["10:05 - 11:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block">
                                                        {batch.schedule["11:05 - 12:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block">
                                                        {batch.schedule["12:05 - 01:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block">
                                                        {batch.schedule["01:05 - 02:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block">
                                                        {batch.schedule["02:05 - 03:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block">
                                                        {batch.schedule["03:05 - 04:00"]}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </>
                            ))
                        }






                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Dashboard;