import { studentData } from '../utils/studentData';
import { Grade } from '../utils/studentData';

const Student = () => {
  const grade = Grade();

  return (
    <div className='student-card'>
      <img
        className='student-picture'
        src={studentData.picture}
        alt={studentData.firstName}
      />
      <h2>
        {studentData.firstName} {studentData.lastName}
      </h2>
      <p>Age: {studentData.age}</p>
      <p>Course: 🖥️ {studentData.course}</p>
      <p>City: {studentData.city}</p>
      <p>Grade: {grade} </p>
      <p>Status: {studentData.graduate ? 'Graduate' : 'Student'}</p>
      {/* <p>Grade: {Grade()} </p> */}
    </div>
  );
};

export default Student;
