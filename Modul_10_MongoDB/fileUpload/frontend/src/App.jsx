import { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploaded, setUploaded] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const fileToSave = e.target.files[0];
    const previewToSave = URL.createObjectURL(fileToSave);
    setPreview(previewToSave);
    setFile(fileToSave);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('img', file);
    try {
      const res = await fetch('http://localhost:8080/file-upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      setUploaded(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='bg-sky-950 min-h-screen text-sky-100'>
        <div className='w-76 min-h-20  mx-auto py-5 '>
          {uploaded ? (
            <>
              <h2>UPLOADED</h2>
              {/* <img src={uploaded} className='w-full h-full object-cover border border-green-500' /> */}
            </>
          ) : preview ? (
            <>
              <h2>PREVIEW</h2>
              <img
                src={preview}
                className={`w-full h-full object-cover border border-red-500 ${loading ? 'animate-pulse' : ''}`}
              />
            </>
          ) : (
            <h1 className='text-center p-4 text-xl'>Upload images with Multer</h1>
          )}
        </div>
        <form onSubmit={handleSubmit} className='mx-auto w-76 border-2 border-red-500 p-4'>
          <label className='cursor-pointer'>
            Select an image:
            <input type='file' className='cursor-pointer' onChange={handleChange} />
          </label>
          <button disabled={loading} className='cursor-pointer disabled:cursor-not-allowed'>
            Upload
          </button>
        </form>
      </div>
      <img src={uploaded} alt='' />
    </>
  );
}

export default App;
