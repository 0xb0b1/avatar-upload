import { useState } from 'react'
import Slider from 'rc-slider'

export const Crop = ({ image, setImageState, setImage }: any) => {
  const [value, setValue] = useState<any>(10)

  const handleCloseCrop = () => {
    setImage('')
    setImageState('initial')
  }

  return (
    <div className='relative border-0 border-gray-300 rounded-md p-8'>
      <div className='flex gap-8 items-center'>
        <img className='rounded-full w-24 h-24' src={image} />
        <div className='flex flex-col w-full'>
          <h2 className='font-light text-gray-600'>Crop</h2>
          <Slider
            min={0}
            max={100}
            defaultValue={value}
            value={value}
            onChange={(event) => setValue(event)}
          />
          <button
            className='self-end rounded-2xl bg-gray-800 mt-4 py-2 px-8 text-gray-100 cursor-pointer'
            onClick={() => setImageState('initial')}
          >
            Save
          </button>

          <button
            className='absolute right-4 top-6 cursor-pointer'
            onClick={handleCloseCrop}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='#8d8d99'
              viewBox='0 0 256 256'
            >
              <path d='M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z'></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
