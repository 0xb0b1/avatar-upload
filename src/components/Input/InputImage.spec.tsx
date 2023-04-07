import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ImageProvider } from '../../contexts/ImageContext'
import { InputImage } from './InputImage'

let wrapper: any

describe('Image Uploader', () => {
  beforeEach(() => {
    wrapper = ({ children }: any): JSX.Element => (
      <ImageProvider>{children}</ImageProvider>
    )
  })

  it('should render InputImage component correctly', () => {
    render(<InputImage />)

    const element = screen.getByText('Drop the image here or click to browse.')
    expect(element).toBeInTheDocument()
  })

  it('should have an input of type file', () => {
    render(<InputImage />)

    const uploadAvatarInput: any = screen.getByTestId('upload-avatar')
    expect(uploadAvatarInput.type).toBe('file')
  })

  it('should be able to add an image by clicking on the input', async () => {
    const file = new File(['image'], 'image.png', { type: 'image/png' })

    render(<InputImage />)

    const uploadAvatarInput: any = screen.getByTestId('upload-avatar')

    fireEvent.change(uploadAvatarInput, { target: { files: [file] } })

    expect(uploadAvatarInput.files[0]).toStrictEqual(file)
  })

  it('should be able to add an image by drag and drop', () => {
    render(<InputImage />)

    const file = new File(['image'], 'image.png', { type: 'image/png' })
    const uploadAvatarInput: any = screen.getByTestId('upload-avatar')

    fireEvent.drop(uploadAvatarInput, {
      target: {
        files: [file],
      },
    })

    expect(uploadAvatarInput.files[0]).toStrictEqual(file)
  })
})
