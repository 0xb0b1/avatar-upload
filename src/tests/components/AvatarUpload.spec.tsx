import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { ImageContext } from '../../contexts/ImageContext'
import { AvatarUpload } from '../../components/AvatarUpload'

describe('Avatar Upload', () => {
  const avatarUploadContextWrapper = ({ ...providerProps }) => {
    return render(
      <ImageContext.Provider value={providerProps}>
        <AvatarUpload />
      </ImageContext.Provider>,
    )
  }

  afterEach(() => {
    cleanup()
  })

  it('should render properly', () => {
    render(<AvatarUpload />)

    expect(screen.getByTestId('avatar-upload-container'))
  })

  it('should have an input of type=file', () => {
    const imageState = 'initial'

    avatarUploadContextWrapper({ imageState })

    expect(screen.getByTestId('upload-avatar-input')).toHaveAttribute(
      'type',
      'file',
    )
  })

  it('should be able to select an image from input', () => {
    const imageState = 'initial'
    const handleFileChange = vi.fn()

    const file = new File(['image'], 'image.png', { type: 'image/png' })

    avatarUploadContextWrapper({ imageState, handleFileChange })

    const uploadAvatarInput: any = screen.getByTestId(
      'upload-avatar-input',
    ) as HTMLInputElement

    fireEvent.change(uploadAvatarInput, { target: { files: [file] } })

    expect(handleFileChange).toHaveBeenCalled()
    expect(uploadAvatarInput.files[0]).toStrictEqual(file)
  })

  it('should have an avatar to edit', async () => {
    const imageState = 'edit'
    const image =
      'data:image/png;base64,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'

    avatarUploadContextWrapper({ image, imageState })

    // console.log(screen.findByTestId('canvas', ))

    expect(await screen.findByTestId('canvas')).toBeInTheDocument()
  })

  it('should be able to add an image by drag and drop', () => {
    const imageState = 'initial'
    const handleFileChange = vi.fn()

    avatarUploadContextWrapper({ imageState, handleFileChange })

    const file = new File(['image'], 'image.png', { type: 'image/png' })

    const uploadAvatarInput: any = screen.getByTestId(
      'upload-avatar-input',
    ) as HTMLInputElement

    fireEvent.drop(uploadAvatarInput, {
      target: {
        files: [file],
      },
    })

    expect(uploadAvatarInput.files[0]).toStrictEqual(file)
  })

  it('should show an saved image if the user saved the image', async () => {
    const imageState = 'initial'
    const image =
      'data:image/png;base64,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'

    avatarUploadContextWrapper({ image, imageState })

    const uploadedAvatarElement = await screen.findByTestId('uploaded-avatar')

    expect(uploadedAvatarElement).toBeInTheDocument()
  })

  it('should not render an image if no image context is passed', () => {
    const imageState = 'initial'

    avatarUploadContextWrapper({ imageState })

    expect(screen.queryByTestId('uploaded-avatar')).not.toBeInTheDocument()
  })

  it('should be able to save the edited avatar', () => {
    const imageState = 'edit'
    const handleImageState = vi.fn()
    const image =
      'data:image/png;base64,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'

    avatarUploadContextWrapper({ image, imageState, handleImageState })

    const saveImageButton = screen.getByTestId('save-image-btn')

    fireEvent.click(saveImageButton)
    expect(handleImageState).toHaveBeenCalledOnce()
  })

  it('should close edit by clicking on the X button to restart the process', () => {
    const handleCancelEdit = vi.fn()
    const imageState = 'edit'

    avatarUploadContextWrapper({ imageState, handleCancelEdit })

    const cancelEditButton = screen.getByTestId(
      'close-avatar-edit',
    ) as HTMLButtonElement

    fireEvent.click(cancelEditButton)
    expect(handleCancelEdit).toHaveBeenCalledOnce()
  })

  it('should show an error message if image upload failed', () => {
    const imageState = 'error'

    avatarUploadContextWrapper({ imageState })

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Sorry, the upload failed',
    )
  })

  it('should have a Try again button to restart the process', () => {
    const imageState = 'error'
    const handleCancelEdit = vi.fn()

    avatarUploadContextWrapper({ imageState, handleCancelEdit })

    const tryAgainButton = screen.getByTestId(
      'restart-upload',
    ) as HTMLButtonElement

    expect(tryAgainButton).toBeInTheDocument()

    fireEvent.click(tryAgainButton)
    expect(handleCancelEdit).toHaveBeenCalledOnce()
  })

  it('should be able to zoom the image with slider', () => {
    const imageState = 'edit'
    const imageZoom = 1
    const handleImageZoom = vi.fn()

    avatarUploadContextWrapper({
      imageState,
      imageZoom,
      handleImageZoom,
    })

    const sliderInput = document.querySelector('.rc-slider')

    fireEvent.mouseDown(sliderInput, {
      clientX: 1.2,
    })

    expect(handleImageZoom).toHaveBeenCalled()
  })

  it('should be able to change the image position with the mouse', async () => {
    const imageState = 'edit'
    const image =
      'data:image/png;base64,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'

    const imagePosition = { x: 0.5, y: 0.5 }
    const handleImagePosition = vi.fn()

    avatarUploadContextWrapper({
      image,
      imageState,
      imagePosition,
      handleImagePosition,
    })

    const imageCanvas = await screen.findByTestId('canvas')

    fireEvent.mouseEnter(imageCanvas)
    fireEvent.mouseDown(imageCanvas, {
      clientX: 0.5,
      clientY: 0.5,
    })
    fireEvent.mouseUp(imageCanvas)

    // expect(handleImagePosition).toHaveBeenCalled()
  })
})
