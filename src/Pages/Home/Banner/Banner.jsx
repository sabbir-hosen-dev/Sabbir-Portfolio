import CoadBox from '../../../Components/CodeBox/CodeBox';
import BannerLeft from './BannerLeft';

function Banner() {
  return (
    <banner className=' min-h-[60vh] lg:min-h-[calc(100vh-80.1px)] flex justify-center items-center'>
      <div
        className="wrap h-full gap-5 grid grid-cols-1 lg:grid-cols-2   ">
        <div className="">
          <BannerLeft />
        </div>
        <div className="">
          <CoadBox />
        </div>
      </div>
    </banner>
  );
}

export default Banner;
