import { AvatarUpload } from './components/AvatarUpload'
import { ImageProvider } from './contexts/ImageContext'

function App() {
  return (
    <div className='m-auto mt-12 mb-12 pt-4 pb-4  rounded-xl'>
      <ImageProvider>
        <AvatarUpload />
      </ImageProvider>
    </div>
  )
}

export default App
