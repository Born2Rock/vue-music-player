import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('initial tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('app loads', () => {
    cy.get(selectByTestId('player')).first().should('exist');
    cy.get(selectByTestId('track-list')).first().should('exist');
    cy.get(selectByTestId('footer')).first().should('exist');
  });

  it('preloader has been displayed', () => {
    cy.get(selectByTestId('player-preloader')).first().should('exist');
  });

  it('track-list has been loaded', async () => {
    cy.get(selectByTestId('track-list')).first().should('exist');
    cy.get(selectByTestId('track-item'))
      .wait(500)
      .should('exist')
      .should('have.length.greaterThan', 4);
  });
});
export {};
