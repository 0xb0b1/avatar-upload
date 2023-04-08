import Slider from 'rc-slider'
import { useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useImage } from '../../contexts/ImageContext'

export const Crop = () => {
  const {
    image,
    imageZoom,
    imagePosition,
    handleImageZoom,
    handleImageState,
    handleImageRawData,
    handleImagePosition,
    handleCancelEdit,
  } = useImage()

  const editorRef = useRef(null)

  return (
    <div className='bg-box-background-color relative rounded-xl p-8 h-[177px]'>
      <div className='flex gap-8 items-center  center'>
        <div className='z-50 h-28 w-28 rounded-full flex items-center justify-center bg-white'>
          <AvatarEditor
            ref={editorRef}
            className='bg-white'
            data-testid='uploaded-avatar'
            color={[241, 245, 249, 1]}
            image={image || ''}
            scale={imageZoom}
            borderRadius={100}
            width={110}
            height={110}
            position={imagePosition}
            onPositionChange={handleImagePosition}
            onImageChange={() => {
              handleImageRawData(editorRef)
            }}
          />
        </div>

        <div className='flex flex-col w-3/6'>
          <h2 className='font-light text-gray-500'>Crop</h2>
          <Slider
            min={0}
            max={10}
            step={0.2}
            data-testid='zoom-slider'
            defaultValue={imageZoom}
            value={imageZoom}
            onChange={handleImageZoom}
          />
          <button
            className='self-end rounded-2xl bg-gray-800 mt-4 py-2 px-8 text-gray-100 cursor-pointer'
            data-testid='save-image-btn'
            onClick={() => handleImageState('initial')}
          >
            Save
          </button>

          <button
            className='absolute right-4 top-6 cursor-pointer'
            data-testid='close-image-edit'
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
