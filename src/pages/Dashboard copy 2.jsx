import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [routine, setRoutine] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRoutine(data))
    }, [])


    const handleShowModal = (classString) => {
        console.log(classString, typeof classString);
        classString !== "undefined" ?
            document.getElementById('classModal1').showModal() :
            document.getElementById('classModal2').showModal();

    }
    return (
        <div>
            <Helmet>
                <title>Class Routine | Dashboard</title>
            </Helmet>
            <div className="overflow-x-auto">
                {/* <div className="flex justify-center gap-8 my-12">
                    <button className="btn btn-neutral">Only Tomorrow</button>
                    <button className="btn btn-neutral">Only Specific Day</button>
                    <button className="btn btn-neutral">Only Specific Batch</button>
                </div> */}
                <div className="flex justify-between items-center my-8 mx-4">
                    <h2 className="text-center text-3xl font-bold my-8">Class Routine</h2>
                    {/* <h3 className="font-bold text-2xl">Class Routine</h3> */}
                    <div className="join">
                        <button className="btn join-item">Only Tomorrow</button>
                        <button className="btn join-item">Only My Classes</button>
                        <select className="select select-bordered join-item">
                            <option disabled selected>Specific Day</option>
                            {/* Sunday = associated with the Sun
                        Monday = associated with the Moon
                        Tuesday = from the god Tiw, associated with Mars
                        Wednesday = from Germanic god Odin
                        Thursday = from Germanic god of thunder Thor
                        Friday = from Germanic goddess Frigga associated with Venus
                        Saturday = associated with Saturn */}
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="">Everyday</option>
                        </select>
                        <select className="select select-bordered join-item">
                            <option disabled selected>Specific Batch</option>
                            <option value="1st Year Odd (2023)">1st Year Odd (2023)</option>
                            <option value="1st Year Even (2022)">1st Year Even (2022)</option>
                            <option value="2nd Year Even (2022)">2nd Year Even (2022)</option>
                            <option value="3rd Year Odd (2022)">3rd Year Odd (2022)</option>
                            <option value="4th Year Odd (2022)">4th Year Odd (2022)</option>
                            <option value="MSc/M 1st Sem (2020)">MSc/M 1st Sem (2020)</option>
                            <option value="MSc/M 2nd Sem (2020)">MSc/M 2nd Sem (2020)</option>
                            <option value="MSc/M 3rd Sem (2020)">MSc/M 3rd Sem (2020)</option>
                        </select>
                        <button className="btn join-item btn-neutral">View</button>
                    </div>
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
                                        <th colSpan="9" className="text-center text-3xl py-4 bg-gray-800 text-white">
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
                                                    <button className="btn btn-ghost btn-block" onClick={() => handleShowModal(`${batch.schedule["09:05 - 10:00"]}`)}>
                                                        {batch.schedule["09:05 - 10:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block" onClick={() => handleShowModal(`${batch.schedule["10:05 - 11:00"]}`)}>
                                                        {batch.schedule["10:05 - 11:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block" onClick={() => handleShowModal(`${batch.schedule["11:05 - 12:00"]}`)}>
                                                        {batch.schedule["11:05 - 12:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block" onClick={() => handleShowModal(`${batch.schedule["12:05 - 01:00"]}`)}>
                                                        {batch.schedule["12:05 - 01:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block btn-disabled" onClick={() => handleShowModal(`${batch.schedule["01:05 - 02:00"]}`)}>
                                                        {batch.schedule["01:05 - 02:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block" onClick={() => handleShowModal(`${batch.schedule["02:05 - 03:00"]}`)}>
                                                        {batch.schedule["02:05 - 03:00"]}
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-ghost btn-block" onClick={() => handleShowModal(`${batch.schedule["03:05 - 04:00"]}`)}>
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
            <dialog id="classModal1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* <h3 className="font-bold text-lg mb-2">Change Class State</h3>
                    <form>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Class State</option>
                            <option selected>Will Happen</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                        </select>

                    </form> */}

                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class State</span>
                            </label>
                            {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
                            <select className="select select-bordered w-full">
                                <option disabled selected>Class State</option>
                                <option selected>Will Happen</option>
                                <option>Pending</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Change Time with Available Slots</span>
                            </label>
                            {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                            <select className="select select-bordered w-full">
                                {/* <option disabled selected>Class State</option> */}
                                <option selected disabled>Will Happen</option>
                                <option value="09:05 - 10:00">09:05 - 10:00</option>
                                <option value="10:05 - 11:00">10:05 - 11:00</option>
                                <option value="11:05 - 12:00">11:05 - 12:00</option>
                                <option value="12:05 - 01:00">12:05 - 01:00</option>
                                <option value="01:05 - 02:00">01:05 - 02:00</option>
                                <option value="02:05 - 03:00">02:05 - 03:00</option>
                                <option value="03:05 - 04:00">03:05 - 04:00</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room No</span>
                            </label>
                            {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                            <select className="select select-bordered w-full">
                                <option disabled selected>Class Room</option>
                                {/* <option selected disabled>Will Happen</option> */}
                                <option value="427">427</option>
                                <option value="433">433</option>
                                <option value="220">220</option>

                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Update</button>
                        </div>
                    </form>
                </div>
            </dialog>
            <dialog id="classModal2" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-2">Assign Class</h3>
                    <form>
                        <select className="select select-bordered w-full max-w-xs">
                            {/* <option disabled selected>Class State</option> */}
                            <option selected>Will Happen</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                        </select>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;