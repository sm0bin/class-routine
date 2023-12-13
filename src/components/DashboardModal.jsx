import { toast } from "react-hot-toast";

const DashboardModal = ({ showModal, setShowModal }) => {

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        document.getElementById('classModal1').close();


        const state = form.state.value;
        const time = form.time.value;
        const room = form.room.value;

        console.log({ state, time, room });

        // axios.put(`${import.meta.env.VITE_API_URL}/classes`, {
        //     state,
        //     time,
        //     room
        // }).then(res => console.log(res.data))
        //     .catch(err => console.log(err))
        setShowModal(false);

        toast.success('Class Updated Successfully');
    }


    return (
        { showModal } &&
        <dialog className="">
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
                            <option value="09:05 - 10:00">09:00 - 10:00</option>
                            <option value="10:05 - 11:00">10:00 - 11:00</option>
                            <option value="11:05 - 12:00">11:00 - 12:00</option>
                            <option value="12:05 - 01:00">12:00 - 01:00</option>
                            <option value="01:05 - 02:00">01:00 - 02:00</option>
                            <option value="02:05 - 03:00">02:00 - 03:00</option>
                            <option value="03:05 - 04:00">03:00 - 04:00</option>
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
    );
};

export default DashboardModal;