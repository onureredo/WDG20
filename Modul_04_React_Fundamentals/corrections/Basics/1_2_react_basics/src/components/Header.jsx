import Navbar from './Navbar';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <h1>WDG20</h1>
      <Navbar />
    </header>
  );
};

export default Header;
