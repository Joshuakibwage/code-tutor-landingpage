import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa6"
const TryNow = () => {
  return (
    <div className="bg-black text-white py-20 ">
        <div className="primary-container ">
            <div className="flex flex-col md:flex-row justify-between gap-16">
                <div className="md:w-3/5">
                   <div>
                        <h2 className="text-4xl md:text-7xl font-bold mb-8 ">
                            Try it for <br />free
                        </h2>
                        <p className="text-xl mb-8 md:max-w-lg">
                        CodeTutor's AI tools elevate your web projects through contextual design  and
                        writing help, machine powered translation and more.
                        </p>
                        <Link className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-md
                                hover:bg-blue-700 transition-colors mt-8">
                            Get Started--<span>it's free</span>
                        </Link>
                   </div>
                </div>
                <div className="md:w-2/5 space-y-12">
                    <div>
                        <h3 className="text-lg md:text-xl leading-relaxed font-medium mb-4 ">
                            CodeTutor's AI tools elevate your web projects through contextual design  and
                            writing help, machine powered translation and more.
                        </h3>
                    </div>
                    <div className="space-y-3">
                        <h2 className="font-bold text-xl">
                            Contact Sales
                        </h2>
                        <p>
                            Interested in CodeTutor Enterprise? Get in touch with our sales team to 
                            receive a free personalized demo.
                        </p>
                         <Link to='/' className="flex items-center hover:translate-x-1 delay-200 ease-in-out
                                                transition-all hover:text-gray-300 hover:underline">
                            Discover AI at CodeTutor
                            <FaArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="space-y-3">
                        <h2 className="font-bold text-xl">
                            Hire a Certified Developer
                        </h2>
                        <p>
                            Interested in CodeTutor Enterprise? Get in touch with our sales team to 
                            receive a free personalized demo.
                        </p>
                         <Link to='/' className="flex items-center hover:translate-x-1 delay-200 ease-in-out
                                                transition-all hover:text-gray-300 hover:underline">
                            Discover AI at CodeTutor
                            <FaArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TryNow