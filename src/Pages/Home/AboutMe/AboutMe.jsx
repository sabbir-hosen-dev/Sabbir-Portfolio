import Heading from '../../../Components/Heading/Heading';
import { aboutMe } from '../../../Data/TextData';
import mypic from '../../../assets/mypicture.png';

function AboutMe() {
  return (
    <section>
      <div className="wrap">
        <Heading title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Who I am?
            </p>
            <p className="text-gray-200 text-sm lg:text-lg">{aboutMe}</p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative flex justify-center items-center">
              {/* Decorative Border Wrapper */}
              <div className="bg-gradient-to-r to-violet-600  from-pink-500   p-[1px]  transition-all duration-400 hover:to-pink-500 hover:from-violet-600">
                {/* Inner Wrapper */}
                <div className="bg-gray-900 p-1 rounded-lg overflow-hidden">
                  <img
                    alt="Sabbir Hosen"
                    loading="lazy"
                    width="280"
                    height="280"
                    decoding="async"
                    className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                    src={mypic}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
