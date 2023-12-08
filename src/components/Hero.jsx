import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url("hero-banner.png")' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl text-center flex flex-col items-center">
                    <h1 className="mb-5 text-5xl font-bold max-w-lg">Let&apos;s Make Class Rescheduling Easy </h1>
                    <p className="mb-5">This website will make department or college class scheduling and rescheduling a breeze, providing an easy way to maintain and update the class schedule.</p>

                    <div className="space-x-4">
                        <button onClick={() => navigate("/login")} className="btn btn-neutral btn-outline btn-lg bg-white">Login</button>

                        <button onClick={() => navigate("/signup")} className="btn btn-info btn-lg">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;