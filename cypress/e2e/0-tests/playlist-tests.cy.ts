import { selectByTestId } from 'cypress/helpers/selectByTestId';
describe('playlist tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('favorite swap', () => {
    cy.get(selectByTestId('view-switcher')).first().should('exist').click().end();
    cy.get(selectByTestId('playlist-segmented-buttons'))
      .last()
      .should('exist')
      .click()
      .should('have.class', 'active')
      .end();
    cy.get(selectByTestId('track-item')).find('.is-active').should('have.length', 3);
  });

  it('lazy load works', () => {
    cy.get(selectByTestId('view-switcher')).first().should('exist').click().end();
    cy.wait(500);
    cy.get(selectByTestId('track-list')).scrollTo('bottom');
    cy.get(selectByTestId('track-list')).find(selectByTestId('track-item-skeleton')).should('exist');
    cy.wait(500);
    cy.get(selectByTestId('track-item')).should('have.length', 16);
  });

  it('like works', () => {
    cy.get(selectByTestId('view-switcher')).first().should('exist').click().end();
    cy.wait(500);
    cy.get(selectByTestId('track-item-like-button')).first().click().end();
    cy.get(selectByTestId('track-item-like-icon')).first().should('have.class', 'is-active');
  });
});
export {};
