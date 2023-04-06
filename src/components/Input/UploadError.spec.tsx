import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UploadError } from './UploadError'

test('render upload failed', async () => {
  render(<UploadError />)

  await userEvent.click(screen.getByText('Sorry, the upload failed.'))
  // await screen.findByRole('heading')

  expect(screen.getByRole('heading')).toHaveTextContent(
    'Sorry, the upload failed.',
  )
})
