import { useState } from 'react';
import axios from 'axios';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return alert('Please enter a prompt!');

    setLoading(true);
    setImageUrl('');

    try {
      const response = await axios.post(
        'http://localhost:5050/api/v1/images/generations',
        {
          prompt,
          n: 1,
          size: '1024x1024',
        },
        {
          headers: {
            // 'Content-Type': 'application/json',
            provider: 'open-ai',
            mode: 'production',
          },
        }
      );
      //   console.log(response);
      const generatedImageUrl = response.data[0].url;
      if (generatedImageUrl) {
        setImageUrl(generatedImageUrl);
      } else {
        alert('Failed to generate image!');
      }
    } catch (error) {
      console.error(
        'Error generating image:',
        error.response?.data || error.message
      );
      alert('Something went wrong while generating the image!');
    } finally {
      setLoading(false);
      setPrompt('');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-zinc-900 text-white'>
      <h2 className='text-4xl text-center text-white font-bold pb-8'>
        🖼️ Image Generator
      </h2>
      <div className='w-full max-w-lg bg-zinc-800 rounded-lg shadow-lg p-4'>
        <input
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') generateImage();
          }}
          placeholder='Enter a prompt for the image...'
          className='w-full p-3 bg-zinc-900 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 mb-4'
        />
        <button
          onClick={generateImage}
          className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50'
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
        {imageUrl && (
          <div className='mt-6'>
            <h2 className='text-lg font-bold mb-4'>Generated Image:</h2>
            <img src={imageUrl} alt='Generated' className='w-full rounded-lg' />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
