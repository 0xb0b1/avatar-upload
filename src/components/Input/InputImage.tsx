interface FileChangeType {
  handleFileChange: (event: any) => void
  image: string
}

export const InputImage = ({ handleFileChange, image }: FileChangeType) => {
  return (
    <div className='relative border-2 border-dashed border-gray-300 rounded-md p-4'>
      <input
        type='file'
        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
        draggable='true'
        accept='image/*'
        onChange={handleFileChange}
      />
      <div className='flex gap-8 items-center justify-center text-center h-32'>
        {image ? (
          <img className='rounded-full w-24 h-24' src={image} alt='text' />
        ) : null}

        <div className=''>
          <div className='flex justify-center items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='#000000'
              viewBox='0 0 256 256'
            >
              <path d='M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z'></path>
            </svg>

            <p className='text-gray-600 font-medium'>Organization Logo</p>
          </div>
          <p className='mt-1 text-md text-gray-500'>
            Drop the image here or click to browse.
          </p>
        </div>
      </div>
    </div>
  )
}
