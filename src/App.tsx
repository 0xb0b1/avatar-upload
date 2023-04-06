import { AvatarUpload } from './components/Input/AvatarUpload'
import { ImageProvider } from './contexts/ImageContext'

function App() {
  return (
    <ImageProvider>
      <div className='m-auto mt-12 mb-12 pt-4 pb-4  rounded-xl'>
        <AvatarUpload />
      </div>
    </ImageProvider>
  )
}

export default App
