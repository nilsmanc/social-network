import { render, screen } from '@testing-library/react'
import MainApp from './App'

test('renders learn react link', () => {
  //@ts-ignore
  render(<MainApp />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
