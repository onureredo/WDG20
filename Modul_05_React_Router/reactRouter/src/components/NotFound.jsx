import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>The page you are looking for, does not exist</p>
      <h1>404 NOT FOUND</h1>
      <a href='/'>GO BACK</a>
      <br />
      <Link to='/'>GO BACK via LINK</Link>
    </div>
  );
};

export default NotFound;
