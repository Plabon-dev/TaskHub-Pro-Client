import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className=" hero min-h-screen bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1989821/pexels-photo-1989821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="hero-content text-center ">

                    <div className="flex flex-col">
                        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">Elevate Your Productivity with <span className="text-[#3550c5] font-bold">TaskHub Pro</span></h2>

                       <Link to='/dashboard'><button className="btn hover:bg-[#515fdd] bg-[#4f65e0] text-white rounded-full px-8 py-2 mt-8">Let's Explore</button></Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;