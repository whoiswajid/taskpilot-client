

const Banner = () => {
    return (
        
        <div>
            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/f9s4VXD/2112-i511-027-S-m009-c13-reminder-people-business-flat-set.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Task Pilot</h1>
                        <p className="mb-5">Keep track off your work with Task Pilot</p>
                        <button className="btn bg-fuchsia-600 border-0 text-white hover:text-fuchsia-600">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;