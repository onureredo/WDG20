import { useState } from 'react';

function State3() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: 1968,
    color: 'red',
  });

  const updateCar = () => {
    setCar((prev) => ({
      ...prev,
      year: 2022,
      color: 'black',
    }));
  };

  return (
    <div>
      <p>Updating an Object</p>
      <p>
        I have a {car.brand} {car.model} in {car.color} from {car.year}
      </p>
      <button onClick={updateCar}>Update car</button>
    </div>
  );
}

export default State3;
