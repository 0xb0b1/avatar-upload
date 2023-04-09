import { ReactNode, createContext, useContext, useState } from 'react'

interface ImageContextProviderProps {
  children: ReactNode
}

type ImageStateType = 'initial' | 'edit' | 'error'

interface ImageContextType {
  image: string | undefined
  imageZoom: number
  imageState: ImageStateType
  imageRawData: string | null
  imagePosition: { x: number; y: number }
  handleFileChange: (event: any) => void
  handleImageZoom: (event: any) => void
  handleImageState: (state: ImageStateType) => void
  handleImageRawData: (ref: any) => void
  handleImagePosition: (event: any) => void
  handleCancelEdit: () => void
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
      const selectedImage: any = event.target.files[0]

      const imageTypeRegex = /^image\/(jpe?g|gif|png|bmp|svg\+xml)$/i

      if (!imageTypeRegex.test(selectedImage.type))
        throw 'File should be an image'

      setImageState('edit')
      setImage(URL.createObjectURL(selectedImage))
    } catch (e) {
      console.error(e)
      setImageState('error')
    }
  }

  const handleImageState = (state: ImageStateType) => {
    setImageState(state)
  }

  const handleCancelEdit = () => {
    setImage('')
    setImageState('initial')
  }

  const handleImageZoom = (event: any) => {
    setImageZoom(event)
  }

  const handleImageRawData = (ref: any) => {
    if (!ref.current) return

    setImageRawData(ref.current.getImage().toDataURL())
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
        handleImageRawData,
        handleImagePosition,
        handleCancelEdit,
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
