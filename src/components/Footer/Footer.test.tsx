import { render } from '@testing-library/react'
import footerLinks from './Content'
import Footer from './Footer'
import '@testing-library/jest-dom/extend-expect'

describe('Footer', () => {
	it('should render the logo', () => {
		const { getByAltText } = render(<Footer />)
		expect(getByAltText('logo')).toBeInTheDocument()
	})

	it('should render the phone number', () => {
		const { getByText } = render(<Footer />)
		expect(getByText('+7 (495) 984 25 13')).toBeInTheDocument()
	})

	it('should render the email address', () => {
		const { getByText } = render(<Footer />)
		expect(getByText('info@neoflex.ru')).toBeInTheDocument()
	})

	it('should render the footer links', () => {
		const { getByText } = render(<Footer />)
		footerLinks.forEach((link) => {
			expect(getByText(link)).toBeInTheDocument()
		})
	})

	it('should render the cookies message', () => {
		const { getByText } = render(<Footer />)
		expect(
			getByText(/We use cookies to personalize our services/i)
		).toBeInTheDocument()
	})
})
