import Marquee from 'react-fast-marquee';
import Heading from '../../../Components/Heading/Heading';
import skills from '../../../Data/SkillsData.json';

function Skills() {
  return (
    <section>
      <div className='wrap'>
        <Heading title="Skills" />
        <Marquee
        pauseOnHover="true"
        >
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center gap-3 p-6 bg-boxB m-3 rounded-md w-[200px] h-[150px]">
                <div className="w-[60px]">
                  <img
                    alt={skill.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-lg"
                    src={skill.img}
                    style={{ color: 'transparent' }}
                  />
                </div>
                <p className="text-white text-sm sm:text-lg">{skill.title}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;
