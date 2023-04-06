import { Crop } from './Crop'
import { InputImage } from './InputImage'
import { UploadError } from './UploadError'

import { useImage } from '../../contexts/ImageContext'

import 'rc-slider/assets/index.css'

export const AvatarUpload = () => {
  const { imageState } = useImage()

  const ImageStateComponents: any = {
    initial: <InputImage />,
    crop: <Crop />,
    error: <UploadError />,
  }

  return (
    <div className='max-w-screen-md m-auto'>
      <div className='rounded-xl m-24 flex flex-col gap-4'>
        {ImageStateComponents[imageState]}
      </div>
    </div>
  )
}
