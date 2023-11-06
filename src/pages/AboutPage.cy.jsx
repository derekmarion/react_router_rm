import React from 'react'
import AboutPage from './AboutPage'

describe('<AboutPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutPage />)
  })
})