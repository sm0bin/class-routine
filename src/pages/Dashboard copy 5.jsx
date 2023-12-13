import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

const Dashboard = () => {

    const [routine, setRoutine] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes`)
            .then(res => res.json())
            .then(data => setRoutine(data))
    }, [])


    const batchName = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        document.getElementById('classModal1').close();


        const state = form.state.value;
        const time = form.time.value;
        const room = form.room.value;

        // axios.put(`${import.meta.env.VITE_API_URL}/classes`, {
        //     state,
        //     time,
        //     room
        // }).then(res => console.log(res.data))
        //     .catch(err => console.log(err))

        toast.success('Class Updated Successfully');
    }


    const handleShowModal = () => {
        // console.log(classString, typeof classString);
        // classString !== "undefined" ?
        //     document.getElementById('classModal1').showModal() :
        //     document.getElementById('classModal2').showModal();
        document.getElementById('classModal1').showModal();
    }

    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl my-8">
            <Helmet>
                <title>Class Routine | Dashboard</title>
            </Helmet>

            <div className="grid grid-cols-5 gap-2 mb-2">
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-xl">Day</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-xl">Batch</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-xl">09:00</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-xl">10:00</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-xl">11:00</div>
            </div>

            <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid grid-cols-1 gap-2">
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Sunday</div>
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Monday</div>
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Tuesday</div>
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Wednesday</div>
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Thursday</div>
                </div>
                <div className="col-span-1 grid grid-cols-1 gap-2">
                    {/* <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Sunday</div>
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Monday</div>
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Tuesday</div>
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Wednesday</div>
                    <div className="bg-indigo-100 p-2 rounded-md text-center col-span-4 flex justify-center items-center font-bold text-2xl">Thursday</div> */}

                    {
                        batchName.map((b, i) => (
                            <div key={i} className="bg-indigo-100 p-2 rounded-md text-center col-span-4 font-semibold text-lg">{b}</div>
                        ))
                    }
                    {
                        batchName.map((b, i) => (
                            <div key={i} className="bg-indigo-100 p-2 rounded-md text-center col-span-4 font-semibold text-lg">{b}</div>
                        ))
                    }
                    {
                        batchName.map((b, i) => (
                            <div key={i} className="bg-indigo-100 p-2 rounded-md text-center col-span-4 font-semibold text-lg">{b}</div>
                        ))
                    }
                    {
                        batchName.map((b, i) => (
                            <div key={i} className="bg-indigo-100 p-2 rounded-md text-center col-span-4 font-semibold text-lg">{b}</div>
                        ))
                    }
                    {
                        batchName.map((b, i) => (
                            <div key={i} className="bg-indigo-100 p-2 rounded-md text-center col-span-4 font-semibold text-lg">{b}</div>
                        ))
                    }
                </div>

                <div className="grid grid-cols-3 col-span-3 gap-2">
                    {
                        routine.map((r, i) => (
                            <div onClick={handleShowModal} key={i} className="bg-gray-100 p-2 rounded-md text-center">
                                {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher}  {r.courseDetails.room}
                            </div>
                        ))
                    }

                </div>
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

                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Change Class State</span>
                            </label>
                            {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
                            <select name="state" className="select select-bordered w-full">
                                <option disabled selected>Change Class State</option>
                                <option selected>Will Happen</option>
                                <option>Pending</option>
                                <option>Cancel</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Class Slots</span>
                            </label>
                            {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                            <select name="time" className="select select-bordered w-full">
                                {/* <option disabled selected>Class State</option> */}
                                <option selected disabled>Change Class Time</option>
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
                            <select name='room' className="select select-bordered w-full">
                                <option disabled selected>Change Room</option>
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
                            <option selected>Default</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                            <option>Changed</option>
                        </select>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;


// {
//     "batch": "11-2023",
//     "day": "sunday",
//     "time": "09:00",
//     "duration": "1:00",
//     "status": "active",
//     "courseDetails": {
//       "course": "ICE1211",
//       "section": "A",
//       "teacher": "HH",
//       "room": "232"
//     }
//   }