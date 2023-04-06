import { render, fireEvent } from '@testing-library/react'
import { InputImage } from './InputImage'

describe('InputImage', () => {
  it('should call onChange handler with selected file', () => {
    const onChange = jest.fn()
    const { getByTestId } = render(<InputImage handleFileChange={onChange} />)

    const file = new File(['foo'], 'test-image.png', { type: 'image/png' })
    const input = getByTestId('upload-avatar')

    fireEvent.change(input, { target: { files: [file] } })
    expect(onChange).toHaveBeenCalledWith(file)
  })
})
