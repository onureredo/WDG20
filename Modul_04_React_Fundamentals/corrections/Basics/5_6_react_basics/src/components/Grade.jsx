const Grade = ({ gpa }) => {
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

export default Grade;
