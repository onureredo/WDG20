import WelcomeMessage from './WelcomeMessage';

function Navbar() {
  const isLoggedIn = true;
  const userName = 'Bahman Pour';

  return (
    <div>
      <h2>NAVBAR</h2>
      <WelcomeMessage isLoggedIn={isLoggedIn} userName={userName} />
    </div>
  );
}

export default Navbar;
