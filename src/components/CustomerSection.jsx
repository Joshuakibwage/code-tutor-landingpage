import { HiArrowLeft, HiArrowRight } from "react-icons/hi"
import { useState, useRef } from 'react';
import { BsPlayFill, BsPauseFill } from "react-icons/bs";


const customerData = [
    {
      id: 'techs-tart',
      logo: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff7808fef2aeecfff1b_Outliant.svg',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/lattice.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa88e83cdb12efc5b3_lattice-bg.webp',
      stat: '94%',
      statDesc: 'job placement rate',
      quote: "CodeTutor's platform revolutionized how we train our junior developers. The AI-powered guidance and interactive exercises have significantly accelerated our onboarding process.",
      author: 'Sarah Chen — CTO',
      link: '/customers/techs-tart'
    },
    {
      id: 'edu-tech',
      logo: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8ace31b63debbf4d9_Jasper.svg',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/outliant.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp',
      stat: '85%',
      statDesc: 'completion rate',
      quote: "CodeTutor has transformed our computer science curriculum. Students are more engaged and show better understanding of complex programming concepts thanks to the interactive learning approach.",
      author: 'Dr. Michael Torres — Department Head',
      link: '/customers/edu-tech'
    },
    {
      id: 'dev-academy',
      logo: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8a7ffdf748142d329_Fivetran.svg',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/fivetran.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp',
      stat: '3x',
      statDesc: 'faster learning',
      quote: "Our students consistently report that CodeTutor's personalized learning paths and AI assistance help them grasp programming concepts three times faster than traditional methods.",
      author: 'Rachel Kim — Lead Instructor',
      link: '/customers/dev-academy'
    }
  ];



const CustomerSection = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const sliderRef = useRef(null)

    //previous slide
    const handlePrevSlide = () => {
        setCurrentSlide((prev) => prev === 0 ? customerData.length - 1 : prev - 1)
    }

    //next slide
    const handleNextSlide = () => {
        setCurrentSlide((prev) => prev === customerData.length - 1 ? 0 : prev + 1)
    }

    //play pause button
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);

        const video = document.querySelector(`video[data-customer="${customerData[currentSlide].id}"]`)

        if(video) {
            isPlaying ? video.pause() : video.play()
        }
    }

    
  return (
    <section className="py-24 bg-gray-200 overflow-hidden">

        <div className="primary-container">
            {/* header */}
            <div className="flex justify-between items-center">
                <div className="max-w-[34rem] ">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        The best startup companies build on here
                    </h2>
                </div>
                <div className="space-x-8">
                    <button 
                        onClick={handlePrevSlide}
                        className="p-4 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400
                        transition-colors delay-200 ease-in shadow-md"
                    >
                        <HiArrowLeft size={24}/>
                    </button>
                    <button 
                        onClick={handleNextSlide}
                        className="p-4 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400
                        transition-colors delay-200 ease-in"
                    >
                        <HiArrowRight size={24}/>
                    </button>
                </div>
                
            </div>

            {/* video */}
            <div className="relative overflow-hidden">

                <div ref={sliderRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{transform: `translateX(-${ 
                        currentSlide * 100
                    }%)`}}
                >
                  {
                    customerData.map((customer) => (
                        <div key={customer.id} className="w-full shrink-0 relative">
                          <div className="relative aspect-video overflow-hidden rounded-lg">
                            <video 
                                data-customer={customer.id}
                                src={customer.video}
                                poster={customer.poster}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="absolute inset-0 bg-black/40"> </div>
                    
                            {/* content */}
                            <div className="absolute inset-0 p-8 flex flex-col">
                                <img 
                                    src={customer.logo} 
                                    alt="" 
                                    className="h-12 w-auto mb-auto"
                                />

                                <div className="sm:grid sm:grid-cols-2 hidden items-end gap-8 text-white ">
                                    <div>
                                        <p className="text-6xl font-bold mb-2">{customer.stat}</p>
                                        <p className="text-lg">{customer.statDesc}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xl mb-4 text-white">{customer.quote}</p>
                                    <div>
                                        <div className="text-lg text-white">{customer.author}</div>
                                        <button 
                                        onClick={togglePlayPause}
                                        className="p-4 rounded-full bg-gray-200 hover:bg-gray-300">
                                            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                          </div> 
                        </div>
                    ))
                  }
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomerSection