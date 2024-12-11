import StudentProfile from './StudentProfile';

function Students() {
  const students = [
    { id: 1, name: 'Bahman' },
    { id: 2, name: 'Mykyta' },
    { id: 3, name: 'Naci' },
    { id: 4, name: 'Marcel' },
    { id: 5, name: 'Yakup' },
    { id: 6, name: 'André' },
  ];

  return (
    <div>
      <h1>WDG#020 Students</h1>
      {/* {students.map((student) => (
        <h2 key={student.id}>{student.name}</h2>
      ))} */}

      {students.map((student) => (
        <StudentProfile key={student.id} studentName={student.name} />
      ))}
    </div>
  );
}

export default Students;
