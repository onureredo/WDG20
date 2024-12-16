import Student from './components/Student';
import { students } from './utils/students';

function App() {
  const addStudent = () => {
    alert('something');
  };

  return (
    <>
      <button onClick={addStudent}>add</button>
      <input type='text' onChange={(e) => console.log(e.target.value)} />
      <div className='students'>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </>
  );
}

export default App;
