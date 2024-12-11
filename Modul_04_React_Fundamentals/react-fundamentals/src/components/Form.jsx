function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('The form was submitted');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className='something'>FORM</h2>
        <label htmlFor='text'>Text:</label>
        <input id='text' onChange={(e) => console.log(e.target.value)} />
        <button onClick={() => console.log('Loggin in')} type='submit'>
          LOGIN
        </button>
      </form>

      {/* <button
        onClick={() => {
          console.log('second button clicked');
          alert('more action');
        }}
      >
        click me
      </button> */}
    </>
  );
}

export default Form;
