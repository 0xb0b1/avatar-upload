import { useImage } from '../../contexts/ImageContext'

export const UploadError = () => {
  const { handleCancelEdit } = useImage()

  return (
    <div
      data-testid='upload-error'
      className='bg-box-background-color relative rounded-xl p-8 h-[177px]'
    >
      <div className='flex gap-8 items-center  center'>
        <div className='z-50 h-28 w-28 rounded-full flex items-center justify-center bg-gray-300'>
          <svg
            width='28'
            height='28'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.9875 -0.0124969C4.4625 -0.0124969 -0.0124969 4.4625 -0.0124969 9.9875C-0.0124969 15.5125 4.4625 19.9875 9.9875 19.9875C15.5125 19.9875 19.9875 15.5125 19.9875 9.9875C19.9875 4.4625 15.5125 -0.0124969 9.9875 -0.0124969ZM11.2375 16.2375H8.7375V13.7375H11.2375V16.2375ZM11.2375 12.4875H8.7375V3.7375H11.2375V12.4875Z'
              fill='white'
            />
          </svg>
        </div>

        <div className='flex flex-col w-3/6'>
          <h2 className='font-light text-orange-700'>
            Sorry, the upload failed.
          </h2>
          <button
            data-testid='restart-upload'
            className='self-start'
            onClick={handleCancelEdit}
          >
            <span className='underline font-medium cursor-pointer'>
              Try again
            </span>
          </button>

          <button
            className='absolute right-4 top-6 cursor-pointer'
            data-testid='close-edit-avatar'
            onClick={handleCancelEdit}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='#677489'
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
