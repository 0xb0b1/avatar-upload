import { AvatarUpload } from './components/AvatarUpload'
import { ImageProvider } from './contexts/ImageContext'

function App() {
  return (
    <>
      <ImageProvider>
        <AvatarUpload />
      </ImageProvider>
    </>
  )
}

export default App
