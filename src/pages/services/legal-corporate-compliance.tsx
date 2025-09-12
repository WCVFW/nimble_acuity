import React from "react";
import { 
  Image, 
  Video, 
  Layout, 
  FileText, 
  BookOpen, 
  Presentation, 
  Paintbrush, 
  User, 
  Home, 
  Heart, 
  Film 
} from "lucide-react";
import CSmainmenu from "./creative-design/CSmainmenu";

const CreativeDesignPage: React.FC = () => {
  const services = [
    { title: "Graphic Design Services", icon: <Image className="h-8 w-8 text-indigo-600" />, description: "Custom graphic designs for brochures, banners, flyers, and PR materials to consolidate brand identity." },
    { title: "Video Editing Services", icon: <Video className="h-8 w-8 text-indigo-600" />, description: "Comprehensive editing: rearranging footage, merging scenes, removing unwanted content, shot sequencing, and more." },
    { title: "Exhibition Design Services", icon: <Layout className="h-8 w-8 text-indigo-600" />, description: "Captivating exhibition designs to strengthen brand presence and cut through competition." },
    { title: "InDesign Services", icon: <FileText className="h-8 w-8 text-indigo-600" />, description: "Transform ideas into polished publications that stand out with versatile InDesign solutions." },
    { title: "Magazine Design Services", icon: <BookOpen className="h-8 w-8 text-indigo-600" />, description: "Engage readers, communicate effectively, and leave lasting impressions with magazine design." },
    { title: "PowerPoint Design Services", icon: <Presentation className="h-8 w-8 text-indigo-600" />, description: "Elevate presentations into visually compelling, engaging, and professional content." },
    { title: "Prepress Services", icon: <Paintbrush className="h-8 w-8 text-indigo-600" />, description: "Customized graphic production, print conversion, redesigns, and other prepress solutions." },
    { title: "Illustration Services", icon: <User className="h-8 w-8 text-indigo-600" />, description: "Expert custom illustrations including line art sketches, character sketches, and more." },
    { title: "Real Estate Video Editing", icon: <Home className="h-8 w-8 text-indigo-600" />, description: "Showcase properties professionally with cinematic-quality real estate video edits." },
    { title: "Wedding Video Editing", icon: <Heart className="h-8 w-8 text-indigo-600" />, description: "Preserve precious memories with expert wedding video editing in cinematic brilliance." },
    { title: "Animation Services", icon: <Film className="h-8 w-8 text-indigo-600" />, description: "High-quality 2D/3D animations, storyboards, caricatures, animatics, and webpage animations." },
    { title: "Artwork & DTP Services", icon: <Paintbrush className="h-8 w-8 text-indigo-600" />, description: "Print-ready files, flawless desktop publishing, and integrated layouts of text, images, and illustrations." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Comprehensive Creative Design Solutions
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-xl opacity-90">
          Retain your customers and stand out from competitors with innovative designs, videos, brochures, catalogs, and more from Nimble Auity.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 leading-relaxed text-2g">
          Are you losing customers due to unappealing graphics, boring catalogs, or poorly written content? Nimble Auity helps you creatively market your brand while allowing you to focus on your core business. With over 23 years of experience, our team of designers, animators, video editors, and illustrators delivers high-quality creative solutions globally.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Creative Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col gap-4">
              <div className="flex items-center gap-4">{service.icon}<h3 className="text-xl font-bold text-gray-800">{service.title}</h3></div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elevate Your Brand With Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          Outsource your creative design requirements to Nimble Auity and gain high-quality, professional solutions that engage your audience and increase leads.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CreativeDesignPage;
