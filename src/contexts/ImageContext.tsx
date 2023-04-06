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
  setImageZoom: any
  setImageState: any
  setImageRawData: any
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

      setImageState('error')
      setImage(URL.createObjectURL(selectedImage))
    } catch {
      setImageState('error')
    }
  }

  return (
    <ImageContext.Provider
      value={{
        image,
        imageZoom,
        imageState,
        imageRawData,
        setImageZoom,
        setImageState,
        setImageRawData,
        handleFileChange,
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
