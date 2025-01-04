

import PropTypes from 'prop-types';

const Heading = ({ title }) => {
  return (
    <div className="w-max mb-8 mx-auto flex flex-col items-end">
      <h4 className="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center">
        {title}
      </h4>
      <div className="w-[50%] h-[3px] bg-primaryP"></div>
      <div className="w-[70%] h-[3px] bg-pink-500 mt-1"></div>
    </div>
  );
}
Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;

