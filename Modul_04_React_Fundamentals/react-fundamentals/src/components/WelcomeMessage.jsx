function WelcomeMessage({ isLoggedIn, userName }) {
  //   console.log(userName);
  //   console.log(isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <h2>Hello, {userName}!</h2> : <h2>Hello, guest</h2>}
    </div>
  );
}

export default WelcomeMessage;
