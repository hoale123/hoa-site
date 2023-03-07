import React from 'react';

const Resume = () => {
  return (
    <div>
      <iframe
        title="Resume"
        src={process.env.PUBLIC_URL + '/Hoa-Resume.pdf'}
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
};

export default Resume;