import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router"
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

 

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu)
    };

    const menuItems = {
        platform: {
          title: 'Platform',
          sections: [
            {
              title: 'BUILD',
              items: [
                { name: 'Design', desc: 'Build high-performing sites' },
                { name: 'Edit mode', desc: 'Empower your content team' },
                { name: 'Interactions', desc: 'Craft immersive experiences' },
                { name: 'Page building', desc: 'Launch simple landing pages quickly', isNew: true },
              ]
            },
            {
              title: 'MANAGE',
              items: [
                { name: 'CMS', desc: 'Manage content at scale' },
                { name: 'Hosting', desc: 'Host and scale your site without the hassle' },
                { name: 'Localization', desc: 'Customize your site for a worldwide audience' },
                { name: 'Security', desc: 'Ensure your site stays safe' },
              ]
            },
            {
              title: 'OPTIMIZE',
              items: [
                { name: 'Analyze', desc: 'Understand how your site performs', isNew: true },
                { name: 'Optimize', desc: 'Maximize conversions with testing', isNew: true },
                { name: 'SEO', desc: 'Grow your reach with fine-tuned controls' },
              ]
            },
          ]
        },
        solutions: {
          title: 'Solutions',
          items: [
            { name: 'For Enterprise', desc: 'Scale your business' },
            { name: 'For Startups', desc: 'Move faster with CodeTutor' },
            { name: 'For Agencies', desc: 'Win more clients' },
            { name: 'For Marketing', desc: 'Drive more growth' },
          ]
        },
        resources: {
          title: 'Resources',
          items: [
            { name: 'Showcase', desc: 'Get inspired by the community' },
            { name: 'Blog', desc: 'Read latest news and articles' },
            { name: 'Documentation', desc: 'Learn from our resources' },
            { name: 'Community', desc: 'Join the conversation' },
          ]
        }
      };
    
    
  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10">

      {/* Desktop menu */}
        <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 ">

                {/* logo */}
                <div>
                    <Link to='/' className="text-xl font-bold">
                        <span className="text-blue-500">CodeTutor</span> UI
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                    {Object.keys(menuItems).map((key, idx) => (
                        <div 
                            key={idx}
                            className="relative"
                        >
                            <button 
                                onClick={() => toggleDropdown(key)} 
                                className="flex items-center hover:text-gray-300 transition delay-200 
                                        cursor-pointer ease-in-out px-3 py-2 rounded-md text-sm font-medium "
                            >
                                {menuItems[key].title}
                                <MdKeyboardArrowDown
                                    className={`ml-2 h-5 w-5 transition-transform ${
                                        activeDropdown === key ? 'transform rotate-180' : ''
                                    } `}
                                />
                            </button>

                            {/* menu dropdown */}

                            {
                                activeDropdown === key && (
                                  <div className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md
                                  shadow-md py-1 text-black">
                                    <div className="">
                                      {
                                        key === 'platform' ? 
                                        (
                                          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-4 ">
                                            {
                                              menuItems[key].sections.map((section, idx) => (
                                                <div key={idx}>
                                                  <h3 
                                                    className="text-xs font-semibold text-gray-900 mb-2
                                                    tracking-wider"
                                                  >
                                                    {section.title}
                                                  </h3>

                                                  <div className="">
                                                    {
                                                      section.items.map((item, itemIdx) => (
                                                        <Link 
                                                          key={itemIdx} 
                                                          to={`/${key}/${item.name.toLowerCase()}`}
                                                          className="group flex items-start p-2 rounded-lg 
                                                          hover:bg-gray-100"
                                                        >
                                                          <div className="px-4">
                                                            <p className="text-sm font-medium text-gray-900
                                                            flex items-center">
                                                              {item.name}
                                                              {
                                                                item.isNew
                                                                   && 
                                                                <span className="ml-2 inline-flex px-2 py-0.5
                                                                items-center rounded text-xs font-medium
                                                                bg-blue-100 text-blue-800"> 
                                                                  NEW
                                                                </span>
                                                              }
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                              {item.desc}
                                                            </p>
                                                          </div>
                                                        </Link>
                                                      ))
                                                    }
                                                  </div>
                                                </div>
                                              ))
                                            }
                                          </div>
                                        ) 
                                          : 
                                        (
                                          <div className="space-y-4">
                                            {
                                              menuItems[key].items.map((item, idx) => (
                                                <Link 
                                                  key={idx} 
                                                  to={`/${key}/${item.name.toLowerCase()}`}
                                                  className="group flex items-start p-2 rounded-lg 
                                                  hover:bg-gray-100"
                                                >
                                                  <div className="px-4">
                                                    <p className="text-sm font-medium text-gray-900">
                                                      {item.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                      {item.desc}
                                                    </p>
                                                  </div>
                                                </Link>
                                              ))
                                            }
                                          </div>
                                        )
                                      }
                                    </div>
                                  </div>
                                )
                            }

                        </div>
                        
                    ))}
                    <Link 
                        to='/enterprise' 
                        className="hover:text-gray-300 transition delay-200 ease-in-out font-medium text-sm
                        "
                    >
                        Enterprise
                    </Link>
                    <Link 
                        to='/pricing' 
                        className="hover:text-gray-300 transition delay-200 ease-in-out font-medium text-sm
                        "
                    >
                        Pricing
                    </Link>
                </div>

                {/* auth buttons */}
                <div className="md:flex space-x-4 items-center hidden">

                  <Link 
                    to='/login'
                    className="hover:text-gray-300 transition delay-200 ease-in-out "
                  >
                    LogIn
                  </Link>

                  <Link 
                    to='/contact'
                    className="hover:text-gray-300 transition delay-200 ease-in-out "
                  >
                    Contact Sales
                  </Link>

                  <Link 
                    to='/get-started'
                    className="hover:text-gray-300 transition delay-200 ease-in-out px-4 bg-blue-600 py-2
                     rounded-md hover:bg-blue-700 "
                  >
                    Get Started - it's free
                  </Link>
                </div>

                {/* mobile menu */}
                <div className=" md:hidden" >
                    <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2
                    rounded-md hover:text-gray-300 hover:bg-gray-700">
                      {
                        !isMenuOpen ? (
                          <FaBarsStaggered  size={25}/>
                        ) : (
                          <IoCloseSharp  size={25}/>
                        )
                      }
                    </button>
                </div>

            </div>
        </div>

      {/* Mobile menu */}
        <div>
          
        </div>
    </nav>
  )
}

export default Navbar