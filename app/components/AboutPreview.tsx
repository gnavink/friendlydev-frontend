import { Link } from "react-router";

const AboutPreview = () => {
    return (  
        <section className="mt-12 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
            <img src="/images/profile.jpg" alt="profile" 
            className="w-32 h-32 rounded-full object-cover border-4
                       border-blue-500 shadow-md" 
            />
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Hey I'm Navin 👋
              </h2>
              <p className="max-w-4xl text-gray-300 mb-4">
                I’m Navin — a self-taught developer and educator & freelance
                consultant passionate about building friendly digital experiences 
                and helping others grow into onfident modern devs.
              </p>
              <Link to='/about'
                 className="inline-block text-blue-500 hover:underline text-sm mb-4"
              >
                More About me
              </Link>
            </div>
        </section>
    );
}
 
export default AboutPreview;