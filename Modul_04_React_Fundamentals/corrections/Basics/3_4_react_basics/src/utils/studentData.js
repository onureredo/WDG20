export const studentData = {
  firstName: 'Testy',
  lastName: 'McTest',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
  gpa: 50,
  graduate: false,
};

export const Grade = () => {
  const gpa = studentData.gpa;

  if (gpa >= 90) {
    return 'A';
  } else if (gpa >= 80) {
    return 'B';
  } else if (gpa >= 70) {
    return 'C';
  } else if (gpa >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};
