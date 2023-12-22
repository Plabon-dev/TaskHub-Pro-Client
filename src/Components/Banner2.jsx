import { Link } from "react-router-dom";

const Banner2 = () => {
    return (
        <div>
            <div className="space-y-16 my-16">
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row gap-16">
                        <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/support_globe.png" className="max-w-md w-full rounded-lg " />
                        <div>
                            <h1 className="text-2xl md:text-5xl font-bold text-gray-700">Streamline your path to goals with customizable dashboards</h1>
                            <p className="py-6">Gain a comprehensive insight into your organization through dashboards that can be tailored to your specific needs. Make informed decisions with confidence and effortlessly adapt workflows to accommodate your evolving requirements..</p>
                            <Link to={'/dashboard'}>
                                <button className="btn hover:bg-[#515fdd] bg-[#4f65e0] text-white rounded-full px-8 py-2">Let's Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>



                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                        <img src="https://images.pexels.com/photos/8581034/pexels-photo-8581034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm w-full rounded-2xl object-cover" />
                        <div>
                            <h1 className="text-2xl md:text-5xl font-bold text-gray-700">All the essentials for every type of workflow.</h1>
                            <p className="py-6">Effortlessly construct your preferred workflow </p>
                            <Link to={'/dashboard'}>
                                <button className="btn hover:bg-[#515fdd] bg-[#4f65e0] text-white rounded-full px-8 py-2">Let's Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;