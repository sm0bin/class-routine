import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [routine, setRoutine] = useState([])
    useEffect(() => {
        fetch('/test5.json')
            .then(res => res.json())
            .then(data => setRoutine(data))
    }, [])

    const sunday11 = routine.filter(r => r.batch === "11-2023" && r.day === "sunday");
    const sunday12 = routine.filter(r => r.batch === "12-2023" && r.day === "sunday");
    const sunday13 = routine.filter(r => r.batch === "13-2023" && r.day === "sunday");
    const sunday14 = routine.filter(r => r.batch === "14-2023" && r.day === "sunday");

    const monday11 = routine.filter(r => r.batch === "11-2023" && r.day === "monday");
    const monday12 = routine.filter(r => r.batch === "12-2023" && r.day === "monday");
    const monday13 = routine.filter(r => r.batch === "13-2023" && r.day === "monday");
    const monday14 = routine.filter(r => r.batch === "14-2023" && r.day === "monday");

    const tuesday11 = routine.filter(r => r.batch === "11-2023" && r.day === "tuesday");
    const tuesday12 = routine.filter(r => r.batch === "12-2023" && r.day === "tuesday");
    const tuesday13 = routine.filter(r => r.batch === "13-2023" && r.day === "tuesday");
    const tuesday14 = routine.filter(r => r.batch === "14-2023" && r.day === "tuesday");

    const wednesday11 = routine.filter(r => r.batch === "11-2023" && r.day === "wednesday");
    const wednesday12 = routine.filter(r => r.batch === "12-2023" && r.day === "wednesday");
    const wednesday13 = routine.filter(r => r.batch === "13-2023" && r.day === "wednesday");
    const wednesday14 = routine.filter(r => r.batch === "14-2023" && r.day === "wednesday");

    const thursday11 = routine.filter(r => r.batch === "11-2023" && r.day === "thursday");
    const thursday12 = routine.filter(r => r.batch === "12-2023" && r.day === "thursday");
    const thursday13 = routine.filter(r => r.batch === "13-2023" && r.day === "thursday");
    const thursday14 = routine.filter(r => r.batch === "14-2023" && r.day === "thursday");



    const handleShowModal = (classString) => {
        console.log(classString, typeof classString);
        classString !== "undefined" ?
            document.getElementById('classModal1').showModal() :
            document.getElementById('classModal2').showModal();

    }
    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl">

            <div className="grid grid-cols-4">
                <div className="bg-indigo-100 p-2 m-2 rounded-md text-center">Day</div>
                <div className="bg-indigo-100 p-2 m-2 rounded-md text-center">09:00</div>
                <div className="bg-indigo-100 p-2 m-2 rounded-md text-center">10:00</div>
                <div className="bg-indigo-100 p-2 m-2 rounded-md text-center">11:00</div>
            </div>

            <div className="grid grid-cols-4">
                <div className="col-span-1 grid grid-cols-1">
                    <div className="bg-indigo-100 p-2 m-2 rounded-md text-center col-span-4">Sunday</div>
                    <div className="bg-indigo-100 p-2 m-2 rounded-md text-center col-span-4">Monday</div>
                    <div className="bg-indigo-100 p-2 m-2 rounded-md text-center col-span-4">Tuesday</div>
                    <div className="bg-indigo-100 p-2 m-2 rounded-md text-center col-span-4">Wednesday</div>
                    <div className="bg-indigo-100 p-2 m-2 rounded-md text-center col-span-4">Thursday</div>
                </div>

                <div className="grid grid-cols-3 col-span-3">

                    {
                        sunday11.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        sunday12.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        sunday13.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        sunday14.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }

                    {
                        monday11.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        monday12.map((r, i) => <div key={i + 10} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        monday13.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        monday14.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }

                    {
                        tuesday11.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        tuesday12.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        tuesday13.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}>{r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        tuesday14.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }

                    {
                        wednesday11.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        wednesday12.map((r, i) => <div key={i + 10} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        wednesday13.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        wednesday14.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }

                    {
                        thursday11.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        thursday12.map((r, i) => <div key={i + 10} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        thursday13.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                    {
                        thursday14.map((r, i) => <div key={i} className="bg-gray-100 p-2 m-2 rounded-md text-center" onClick={() => handleShowModal(r.courseDetails.course)}> {r.courseDetails.course} {r.courseDetails.section} {r.courseDetails.teacher} {r.courseDetails.room}</div>)
                    }
                </div>
            </div>
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