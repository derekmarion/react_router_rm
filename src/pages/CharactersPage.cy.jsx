import React from 'react'
import CharactersPage from './CharactersPage'

describe('<CharactersPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CharactersPage />)
  })
})