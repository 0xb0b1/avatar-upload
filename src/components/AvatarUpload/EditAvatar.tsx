import Slider from 'rc-slider'
import { useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useImage } from '../../contexts/ImageContext'

export const EditAvatar = () => {
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
    <div className='bg-box-background-color relative rounded-xl p-8'>
      <div className='flex flex-col gap-8 items-center justify-center md:flex-row'>
        <div className='h-28 w-28 rounded-full flex items-center justify-center bg-white'>
          {image ? (
            <AvatarEditor
              ref={editorRef}
              className='bg-white'
              data-testid='canvas'
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
          ) : null}
        </div>

        <div className='w-3/6 flex flex-col'>
          <h2 className='font-light mb-2 text-gray-500'>Crop</h2>
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
            className='self-center rounded-2xl mt-4 py-2 px-12 bg-button-color text-gray-100 cursor-pointer hover:opacity-95 md:self-end'
            data-testid='save-image-btn'
            onClick={() => handleImageState('initial')}
          >
            Save
          </button>

          <button
            className='absolute right-4 top-6 cursor-pointer hover:scale-95'
            data-testid='close-avatar-edit'
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
