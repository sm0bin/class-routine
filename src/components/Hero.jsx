
const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url("hero-banner.png")' }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Let&apos;s Make Class Rescheduling Easy </h1>
                    <p className="mb-5">This website will make department or college class scheduling and rescheduling a breeze, providing an easy way to maintain and update the class schedule.</p>
                    <button className="btn btn-neutral">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;