import { EditAvatar } from './EditAvatar'
import { InputImage } from './InputImage'
import { UploadError } from './UploadError'

import { useImage } from '../../contexts/ImageContext'

import 'rc-slider/assets/index.css'

export const AvatarUpload = () => {
  const { imageState } = useImage()

  const ImageStateComponents: any = {
    initial: <InputImage />,
    edit: <EditAvatar />,
    error: <UploadError />,
  }

  return (
    <div className='max-w-[580px] m-auto' data-testid='avatar-upload-container'>
      <div className='rounded-xl mt-24 mx-4 flex flex-col gap-4'>
        {ImageStateComponents[imageState]}
      </div>
    </div>
  )
}
