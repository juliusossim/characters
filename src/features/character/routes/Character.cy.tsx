import React from 'react'
import { Character } from './Character'

describe('<Character />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Character />)
  })
})