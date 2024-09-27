import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Quan Nguyen</p>
      <p>
        <Link href="https://github.com/AndyNg555" target="_blank">
        My GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
