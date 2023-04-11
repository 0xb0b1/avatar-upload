import AvatarEditor from 'react-avatar-editor'
import { useImage } from '../../contexts/ImageContext'

export const InputImage = () => {
  const { image, imageZoom, imagePosition, handleFileChange } = useImage()

  const justifyWithImage = !image ? 'justify-center' : ''
  const heightWithImage = image ? 'h-[300px]' : 'h-auto'

  return (
    <div
      className={`${heightWithImage} bg-box-background-color relative border-2 border-dashed border-dotted-border-color rounded-md p-8 py-4 md:h-[177px]`}
    >
      <input
        type='file'
        name='upload-avatar'
        aria-label='file input'
        data-testid='upload-avatar-input'
        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
        draggable='true'
        accept='image/*'
        onChange={handleFileChange}
      />
      <div
        className={`flex flex-col gap-8 items-center ${justifyWithImage} text-center h-32 md:flex-row`}
      >
        {image ? (
          <div
            data-testid='avatar'
            className='rounded-full flex items-center justify-center md:h-28 w-28'
          >
            <AvatarEditor
              className='bg-white'
              data-testid='uploaded-avatar'
              color={[241, 245, 249, 1]}
              image={image}
              scale={imageZoom}
              position={imagePosition}
              borderRadius={100}
              width={110}
              height={110}
            />
          </div>
        ) : null}

        <div className=''>
          <div className='flex justify-center items-center gap-2'>
            <svg
              width='22'
              height='22'
              viewBox='0 0 16 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.99 5.99002C12.54 5.99002 12.99 5.54002 12.99 4.99002C12.99 4.44002 12.54 3.99002 11.99 3.99002C11.44 3.99002 10.99 4.44002 10.99 4.99002C10.99 5.54002 11.44 5.99002 11.99 5.99002ZM14.99 0.990021H0.990036C0.440036 0.990021 -0.00996399 1.44002 -0.00996399 1.99002V11.99C-0.00996399 12.54 0.440036 12.99 0.990036 12.99H14.99C15.54 12.99 15.99 12.54 15.99 11.99V1.99002C15.99 1.44002 15.54 0.990021 14.99 0.990021ZM13.99 9.99002L8.99004 6.99002L7.99004 8.99002L4.99004 4.99002L1.99004 9.99002V2.99002H13.99V9.99002Z'
                fill='#495567'
              />
            </svg>

            <p className='text-title-color font-medium'>Organization Logo</p>
          </div>
          <p className='mt-1 text-md text-gray-800'>
            Drop the image here or click to browse.
          </p>
        </div>
      </div>
    </div>
  )
}
