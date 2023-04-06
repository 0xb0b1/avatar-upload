import { ReactNode, createContext, useContext, useState } from 'react'

interface ImageContextProviderProps {
  children: ReactNode
}

type ImageStateType = 'initial' | 'crop' | 'error'

interface ImageContextType {
  image: string
  imageZoom: number
  imageState: ImageStateType
  imageRawData: string | null
  imagePosition: { x: number; y: number }
  handleFileChange: (event: any) => void
  handleImageZoom: (event: any) => void
  handleRemoveImage: () => void
  handleImageState: (state: ImageStateType) => void
  handleImageRawData: (ref: any) => void
  handleImagePosition: (event: any) => void
}

export const ImageContext = createContext({} as ImageContextType)

export const ImageProvider = ({ children }: ImageContextProviderProps) => {
  const [image, setImage] = useState('')
  const [imageZoom, setImageZoom] = useState(1)
  const [imageState, setImageState] = useState<ImageStateType>('initial')
  const [imageRawData, setImageRawData] = useState(null)
  const [imagePosition, setImagePosition] = useState({ x: 0.5, y: 0.5 })

  const handleFileChange = (event: any) => {
    try {
      const selectedImage = event.target.files[0]

      const imageTypeRegex = /^image\/(jpe?g|png|gif|bmp|svg\+xml)$/i

      if (!imageTypeRegex.test(selectedImage.type)) throw 'Upload failed'

      setImageState('crop')
      setImage(URL.createObjectURL(selectedImage))
    } catch (e) {
      console.log(e)
      setImageState('error')
    }
  }

  const handleImageState = (state: ImageStateType) => {
    setImageState(state)
  }

  const handleRemoveImage = () => {
    setImage('')
  }

  const handleImageZoom = (event: any) => {
    setImageZoom(event)
  }

  const handleImageRawData = (ref: any) => {
    if (ref.current) setImageRawData(ref.current.getImage().toDataURL())

    return
  }

  const handleImagePosition = (event: any) => {
    setImagePosition(event)
  }

  return (
    <ImageContext.Provider
      value={{
        image,
        imageZoom,
        imageState,
        imageRawData,
        imagePosition,
        handleImageZoom,
        handleFileChange,
        handleImageState,
        handleRemoveImage,
        handleImageRawData,
        handleImagePosition,
      }}
    >
      {children}
    </ImageContext.Provider>
  )
}

export const useImage = () => {
  const context = useContext(ImageContext)

  return context
}
