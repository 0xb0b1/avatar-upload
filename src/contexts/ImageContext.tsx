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
  handleFileChange: (event: any) => void
  handleImageZoom: (event: any) => void
  handleRemoveImage: () => void
  handleImageState: (state: ImageStateType) => void
  handleImageRawData: (ref: any) => void
}

export const ImageContext = createContext({} as ImageContextType)

export const ImageProvider = ({ children }: ImageContextProviderProps) => {
  const [image, setImage] = useState('')
  const [imageZoom, setImageZoom] = useState(1)
  const [imageState, setImageState] = useState<ImageStateType>('initial')
  const [imageRawData, setImageRawData] = useState(null)

  const handleFileChange = (event: any) => {
    try {
      const selectedImage = event.target.files[0]

      setImageState('crop')
      setImage(URL.createObjectURL(selectedImage))
    } catch {
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

  return (
    <ImageContext.Provider
      value={{
        image,
        imageZoom,
        imageState,
        imageRawData,
        handleImageZoom,
        handleFileChange,
        handleImageState,
        handleRemoveImage,
        handleImageRawData,
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
