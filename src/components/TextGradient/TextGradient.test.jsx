import { expect, it, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextGradient } from './index.jsx'

describe('Testing TextGradient component', () => {
  const title = 'Test'
  const className = 'testClassName testClassName2'

  beforeEach(() => {
    render(<TextGradient text={title} className={className}/>)
  })

  it('should render title correctly', () => {
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('should add className prop to children', () => {
    expect(screen.getByText('Test')).toHaveClass('testClassName')
    expect(screen.getByText('Test')).toHaveClass('testClassName2')
  })
})
