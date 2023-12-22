import { FaBuilding, FaUserDoctor } from "react-icons/fa6";
import { PiBankLight, PiStudentFill } from "react-icons/pi";
import { GoCodeReview } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";

const Benefits = () => {
    return (
        <div>
            <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Task Pilot </h2>
                    <p className="dark:text-gray-400">is Used by Many people</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                    <GoCodeReview />
                        <h3 className="my-3 text-3xl font-semibold">Programer</h3>
                        <div className="space-y-1 leadi">

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                    <PiStudentFill />

                        <h3 className="my-3 text-3xl font-semibold">Students</h3>
                        <div className="space-y-1 leadi">

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <PiBankLight />
                        <h3 className="my-3 text-3xl font-semibold">Bankers</h3>
                        <div className="space-y-1 leadi">

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                    <GiTeacher />
                        <h3 className="my-3 text-3xl font-semibold">Teachers</h3>
                        <div className="space-y-1 leadi">

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                    <FaBuilding />
                        <h3 className="my-3 text-3xl font-semibold">Builders</h3>
                        <div className="space-y-1 leadi">

                        </div>
                    </div>
                    <div className="flex flex-col items-center  p-4">
                        <FaUserDoctor />
                        <h3 className="my-3 text-3xl font-semibold">Doctors</h3>
                        <div className="space-y-1 leadi">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefits;