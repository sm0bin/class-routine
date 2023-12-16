import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { set } from "react-hook-form";

const Dashboard = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const response = await fetch('data2.json');
            const data = await response.json();
            setClasses(data);
        }
        fetchClasses();
    }, []);

    console.log(classes);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
    const batches = ['1st Odd', '1st Even', '2nd Even', '3rd Odd', '4th Odd'];
    // const batches = ['1st Odd (2023)', '1st Even (2022)', '2nd Even (2022)', '3rd Odd (2022)', '4th Odd (2022)'];

    return (
        <section className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl my-8 min-h-screen">
            <Helmet>
                <title>Class Routine | Dashboard</title>
            </Helmet>

            <div className="grid grid-cols-9 grid-rows-[25] gap-2 mb-2">
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">Day</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">Batch</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">09:00 - 10:00</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">10:00 - 11:00</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">11:00 - 12:00</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">12:00 - 01:00</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">01:00 - 02:00</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">02:00 - 03:00</div>
                <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg">03:00 - 04:00</div>


                <div className="grid grid-cols-2 gap-2 col-span-2">
                    {days.map((day, index) => (
                        <>
                            <div className="bg-indigo-100 p-2 rounded-md text-center font-semibold text-lg flex items-center justify-center">{day}</div>
                            <div key={index} className="grid grid-cols-1 gap-2">
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
                    {classes.map((item, index) => (
                        <div key={index} className="bg-indigo-100 p-2 rounded-md text-center text-base">
                            {item.course.slice(0, 8)}
                        </div>
                    ))}

                </div>
            </div>



        </section>
    );
};

export default Dashboard;