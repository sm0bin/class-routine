import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import useLoadData from "../hooks/useLoadData";
import useAxiosPublic from "../hooks/useAxiosPublic";
// import { classBackgroundColor, dayColor, stateColor } from "../utils/Utils";
import { classBackgroundColor, dayBatchBackgroundColor } from "../utils/Utils";

const Dashboard = () => {
    const teacherCode = 'HK';
    const axiosPublic = useAxiosPublic();
    const [selectedClass, setSelectedClass] = useState({});
    const [classes, isPendingClasses, refetchClasses] = useLoadData('/classes', 'classes');

    const state = [
        { id: 1, name: 'active' },
        { id: 2, name: 'pending' },
        { id: 3, name: 'canceled' },
    ]
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
    const batches = ['1st Odd', '1st Even', '2nd Even', '3rd Odd', '4th Odd'];
    const headlines = ['Day', 'Batch', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 01:00', '01:00 - 02:00', '02:00 - 03:00', '03:00 - 04:00'];
    // const batches = ['1st Odd (2023)', '1st Even (2022)', '2nd Even (2022)', '3rd Odd (2022)', '4th Odd (2022)'];

    const openModal = async (id) => {
        const res = await axiosPublic(`/classes/${id}`);
        if (res.data) {
            document.getElementById('classModal1').showModal();
            setSelectedClass(res.data);
            console.log(selectedClass);

        }
        // setSelectedClass(id);
    }


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        document.getElementById('classModal1').close();

        axios.put(`${import.meta.env.VITE_API_URL}/classes/${selectedClass?._id}`, {
            state: form.state.value,
        }).then(res => {
            console.log(res.data)
            toast.success('Class Updated Successfully');
            refetchClasses();
        })
            .catch(err => console.log(err))
    }

    if (isPendingClasses) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                {/* <progress className="progress w-56"></progress> */}
                <span className="loading loading-ball loading-lg"></span>
            </div>
        )
    }


    return (
        <section className=" mx-4 md:mx-8 lg:mx-12 my-8 min-h-screen">

            <Helmet>
                <title>Class Routine | Dashboard</title>
            </Helmet>


            <div className="overflow-x-auto">
                <div className="grid grid-cols-9 grid-rows-[25] gap-2 mb-2 min-w-max">

                    {
                        headlines?.map((headline, index) => (
                            <div key={index} className="bg-indigo-50 p-2  rounded-md text-center font-bold text-base">{headline}</div>
                        ))
                    }


                    <div className="grid grid-cols-2 gap-2 col-span-2">
                        {days?.map((day) => (
                            // <>
                            //     <div
                            //         className={`p-2 rounded-md text-center font-semibold text-lg flex items-center justify-center`}>{day}</div>

                            //     <div className="grid grid-cols-1 gap-2">
                            //         {batches.map((batch, batchIndex) => (
                            //             <div key={batchIndex} className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">
                            //                 {batch}
                            //             </div>
                            //         ))}
                            //     </div>
                            // </>
                            <div
                                key={day}
                                className="col-span-2 row-span-5 grid grid-cols-2 grid-rows-5 gap-2">
                                <div
                                    className={`
                                    ${dayBatchBackgroundColor(day)}
                                    p-2 rounded-md text-center font-semibold text-lg flex items-center justify-center row-span-5`}>{day}</div>

                                {/* <div className="grid grid-cols-1 grid-rows-5 gap-2"> */}
                                {batches.map((batch, batchIndex) => (
                                    <div key={batchIndex}
                                        className={`
                                        ${dayBatchBackgroundColor(day)}
                                        p-2 rounded-md text-center font-semibold text-lg`}>
                                        {batch}
                                    </div>
                                ))}
                                {/* </div> */}
                            </div>

                        ))}
                    </div>

                    <div className="grid grid-cols-7 grid-rows-[24] gap-2 col-span-7">
                        {classes?.map((item, index) => (

                            <button
                                disabled={item.state === 'break' || item.course.slice(10, 12) !== teacherCode}
                                key={index}
                                onClick={() => openModal(item._id)}
                                className={`
                                ${classBackgroundColor(item)}
                                ${item.course.slice(10, 12) === teacherCode ? 'border-green-400 cursor-pointer' : 'border-transparent cursor-not-allowed'} 
                                border-2 bg-gray-100 p-2 rounded-md text-center text-base`}>
                                {item.course.slice(0, 8) + ' ' + item.course.slice(10, 12)}
                            </button>
                        ))}
                    </div>

                </div>
            </div>



            {/* Modal */}
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
                            <select name="state" className="select select-bordered w-full">
                                {
                                    state.map((item, index) => (
                                        <option key={index} value={item.name} selected={selectedClass.state === item.name}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
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