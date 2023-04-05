import { useState } from 'react'
import { Crop } from './Crop'
import { InputImage } from './InputImage'
import { UploadError } from './UploadError'

export const AvatarUpload = () => {
  const [image, setImage] = useState('')
  const [imageState, setImageState] = useState('initial')

  const handleFileChange = (event: any) => {
    try {
      const selectedImage = event.target.files[0]

      setImageState('crop')
      setImage(URL.createObjectURL(selectedImage))
    } catch {
      setImageState('error')
    }
  }

  const ImageStateComponents: any = {
    initial: <InputImage handleFileChange={handleFileChange} image={image} />,
    crop: (
      <Crop image={image} setImageState={setImageState} setImage={setImage} />
    ),
    error: <UploadError />,
  }

  return (
    <div className='bg-gray-100 m-24'>{ImageStateComponents[imageState]}</div>
  )
}
