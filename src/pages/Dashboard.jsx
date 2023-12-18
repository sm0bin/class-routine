import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import useLoadData from "../hooks/useLoadData";

const Dashboard = () => {
    // const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState({});
    const [classes, isPendingClasses, refetchClasses] = useLoadData('/classes', 'classes');

    const stateColor = (state) => {
        if (state === 'active') {
            return 'bg-green-50';
        } else if (state === 'pending') {
            return 'bg-yellow-100';
        } else if (state === 'canceled') {
            return 'bg-red-100';
        } else if (state === 'break') {
            return 'bg-orange-100';
        }
    }

    const openModal = (id) => {
        document.getElementById('classModal1').showModal();
        // console.log(id);
        setSelectedClass(id);
    }


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        document.getElementById('classModal1').close();
        // console.log(form.state.value);

        // const state = form.state.value;
        // const time = form.time.value;
        // const room = form.room.value;

        // console.log(state, time, room);
        axios.put(`${import.meta.env.VITE_API_URL}/classes/${selectedClass}`, {
            state: form.state.value,
        }).then(res => {
            console.log(res.data)
            toast.success('Class Updated Successfully');
            refetchClasses();
        })
            .catch(err => console.log(err))

        // alert('Class Updated Successfully');
    }

    // useEffect(() => {
    //     const fetchClasses = async () => {
    //         const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`);
    //         // const response = await fetch('data2.json');
    //         const data = await response.json();
    //         setClasses(data);
    //     }
    //     fetchClasses();
    // }, []);

    if (isPendingClasses) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                {/* <progress className="progress w-56"></progress> */}
                <span className="loading loading-ball loading-lg"></span>
            </div>
        )
    }



    console.log(classes);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
    const batches = ['1st Odd', '1st Even', '2nd Even', '3rd Odd', '4th Odd'];
    const headlines = ['Day', 'Batch', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 01:00', '01:00 - 02:00', '02:00 - 03:00', '03:00 - 04:00'];
    // const batches = ['1st Odd (2023)', '1st Even (2022)', '2nd Even (2022)', '3rd Odd (2022)', '4th Odd (2022)'];

    return (
        <section className=" mx-4 md:mx-8 lg:mx-12 my-8 min-h-screen">
            <Helmet>
                <title>Class Routine | Dashboard</title>
            </Helmet>
            <div className="overflow-x-auto">


                <div className="grid grid-cols-9 grid-rows-[25] gap-2 mb-2 min-w-max">

                    {
                        headlines?.map((headline, index) => (
                            <div key={index} className="bg-indigo-100 p-2 rounded-md text-center font-bold text-base">{headline}</div>
                        ))
                    }

                    <div className="grid grid-cols-2 gap-2 col-span-2">
                        {days?.map((day) => (
                            <>
                                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg flex items-center justify-center">{day}</div>

                                <div className="grid grid-cols-1 gap-2">
                                    {batches.map((batch, batchIndex) => (
                                        <div key={batchIndex} className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">
                                            {batch}
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 grid-rows-[24] gap-2 col-span-7">
                        {classes?.map((item, index) => (
                            <div key={index} onClick={() => openModal(item._id)} className={`${stateColor(item.state)} bg-indigo-100 p-2 rounded-md text-center text-base cursor-pointer`}>
                                {item.course.slice(0, 8) + ' ' + item.course.slice(10, 12)}
                            </div>
                        ))}
                    </div>

                </div>
            </div>




            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
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
                                <option value='active' selected>Will Happen</option>
                                <option value='pending'>Pending</option>
                                <option value='canceled'>Cancel</option>
                            </select>
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Class Slots</span>
                            </label>
                            <select name="time" className="select select-bordered w-full">
                                <option disabled selected>Class State</option> 
                                <option selected disabled>Change Class Time</option>
                                <option value="09:05 - 10:00">09:05 - 10:00</option>
                                <option value="10:05 - 11:00">10:05 - 11:00</option>
                                <option value="11:05 - 12:00">11:05 - 12:00</option>
                                <option value="12:05 - 01:00">12:05 - 01:00</option>
                                <option value="01:05 - 02:00">01:05 - 02:00</option>
                                <option value="02:05 - 03:00">02:05 - 03:00</option>
                                <option value="03:05 - 04:00">03:05 - 04:00</option>
                            </select>
                        </div> */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room No</span>
                            </label>
                            <select name='room' className="select select-bordered w-full">
                                <option disabled selected>Change Room</option>
                                <option selected disabled>Will Happen</option>
                                <option value="427">427</option>
                                <option value="433">433</option>
                                <option value="220">220</option>

                            </select>
                        </div> */}
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Update</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </section>
    );
};

export default Dashboard;