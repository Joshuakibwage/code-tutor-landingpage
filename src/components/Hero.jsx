import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";
import video from "../assets/banner-video.mp4";
import bannerLeft from "../assets/banner-left.avif";
import bannerRight from "../assets/banner-right.png";

const Hero = () => {
    return (
        <div className="pt-24 bg-black text-white md:pt-32 relative">
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
                {/* subtitle */}

                <div className="mb-6 ">
                    <span className="text-[#999999] tracking-[0.2em] text-sm font-medium mb-4">
                        MORE THAN A WEBSITE BUILDER
                    </span>
                    {/* Main heading */}

                    <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 
                    leading-[1.1] tracking-[-0.02em] md:mb-16 mt-4">
                        your site should do more than look good
                    </h1>

                    {/* paragraph and buttons */}

                    <div className="flex md:flex-row items-center flex-col justify-between gap-8 ">
                        <p className="text-[#999999] md:text-xl mb-8 md:md-0 leading-relaxed md:w-3/5">
                            As the first-ever website experience platform, CodeTutor makes marketers, designers
                            and developers come together to build, manage and optimize web experiences that 
                            get results.
                        </p>

                        <div className="flex flex-row shrink-0 flex-wrap gap-8">
                            <Link to='/start-building' className="bg-[#4353FF] hover:bg-blue-700 px-8 
                            py-4 rounded-md text-lg font-medium transition-colors duration-200">
                                Start Building
                            </Link>

                            <Link to='/start-building' className="px-8 py-4 rounded-md text-lg font-medium 
                            transition-colors duration-200 hover:text-white/20 flex items-center group
                            border border-neutral-400">
                                Contact Sales
                                < GoArrowRight
                                    className="ml-2 w-5 h-5 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* video banner */}

                <div className="w-full h-full relative mt-16">

                    <video 
                        src={video}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute top-1/2 xl:-left-20 md:left-0 z-20 xl:block hidden">
                        <img 
                            src={bannerLeft}
                            alt="banner image" 
                            className="h-20 md:h-24 lg:h-32 w-fit object-cover"
                        />
     
                    </div>

                    <div className="absolute bottom-1/5 xl:-right-20 md:right-0 z-20 xl:block hidden">
                        <img 
                            src={bannerRight}
                            alt="banner image" 
                            className="h-20 md:h-24 lg:h-32 w-fit object-cover"
                        />
     
                    </div>
                </div>

                    {/* overlay */}

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black z-10
                to-transparent">

                </div>
            </div>
        </div>
    )
};

export default Hero;