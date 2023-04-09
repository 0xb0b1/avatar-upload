import { describe, expect, it, vi } from 'vitest'
import { screen, render, fireEvent, cleanup } from '@testing-library/react'
import { UploadError } from './UploadError'
import { ImageContext } from '../../contexts/ImageContext'

describe('Upload Image Error', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    render(<UploadError />)

    expect(screen.queryByTestId('upload-error')).toBeInTheDocument()
  })

  it('should display an error message', () => {
    render(<UploadError />)

    expect(screen.queryByRole('heading')).toBeInTheDocument()
    expect(screen.queryByRole('heading')).toHaveTextContent(
      'Sorry, the upload failed.',
    )
  })

  it('should not contain an image', () => {
    render(<UploadError />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('should have a button to try again and restart the upload', () => {
    const handleCancelEdit = vi.fn()
    render(
      <ImageContext.Provider value={{ handleCancelEdit }}>
        <UploadError />
      </ImageContext.Provider>,
    )

    const tryAgainButton = screen.queryByTestId(
      'restart-upload',
    ) as HTMLButtonElement

    fireEvent.click(tryAgainButton)

    expect(tryAgainButton).toBeInTheDocument()
    expect(handleCancelEdit).toBeCalled()
  })

  it('should close edit section when clicking the X', () => {
    const handleCancelEdit = vi.fn()
    render(
      <ImageContext.Provider value={{ handleCancelEdit }}>
        <UploadError />
      </ImageContext.Provider>,
    )

    const cancelEditButton = screen.getByTestId('close-edit-avatar')

    fireEvent.click(cancelEditButton)

    expect(handleCancelEdit).toHaveBeenCalled()
  })
})
