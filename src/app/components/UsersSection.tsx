import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function UsersSection() {
  const userTypes = [
    {
      title: "Developers & Engineers",
      description: "Building intelligent, scalable tools.",
      icon: "/users-icons/display.svg",
      color: "bg-purple-500",
    },
    {
      title: "AI Researchers",
      description: "Exploring novel architectures, prompts, and agents.",
      icon: "/users-icons/searchIcon.svg",
      color: "bg-purple-500",
    },
    {
      title: "Creative technologists",
      description: "Pushing boundaries in design, storytelling, and media.",
      icon: "/users-icons/Palette.svg",
      color: "bg-purple-500",
    },
    {
      title: "Founders & Startups",
      description: "Launching AI-first ventures.",
      icon: "/users-icons/Send.svg",
      color: "bg-purple-500",
    },
    {
      title: "Enterprises",
      description: "Integrating AI workflows and products.",
      icon: "/users-icons/Chart.svg",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`ml-4 mb-16 ${poppins.className}`}>
          <div className="flex items-center gap-105 mb-8">
            <h2 className="text-[32px] font-bold text-gray-900">
              Who it's for?
            </h2>
            <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-md font-medium">
              Users
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2  items-center">
          {/* Left Side - SVG Illustration */}
          <div className="flex justify-center">
            <div className="w-full">
              <Image
                src="/users-icons/usersLeft.svg"
                alt="User types illustration"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="space-y-8">
            {userTypes.map((userType, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="flex w-18 h-16 p-6 justify-center items-center aspect-square rounded-[20px] bg-[#FCFCFC] shadow-[0px_4px_0px_0px_#FFF_inset,0px_11.005px_22.01px_0px_rgba(0,0,0,0.12)]">
                    <Image
                      src={userType.icon}
                      alt={userType.title + " icon"}
                      width={45}
                      height={45}
                    />
                  </div>
                  {index < userTypes.length - 1 && (
                    <div className="w-px h-9 bg-gray-200 mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {userType.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {userType.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
