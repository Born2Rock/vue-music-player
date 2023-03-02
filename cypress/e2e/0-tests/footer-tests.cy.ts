import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('switchers tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('make 1st track favorite', () => {
    cy.get(selectByTestId('footer-switch-favorite')).click();
    cy.get(selectByTestId('footer-switch-favorite'))
      .find('.accent')
      .should('exist');

    cy.get(selectByTestId('view-switcher')).first().click();

    cy.get(selectByTestId('track-item'))
      .first()
      .find(selectByTestId('track-item-like-icon'))
      .should('have.class', 'is-active');
  });

  it('shuffle tracks', () => {
    cy.wait(1500);
    cy.get(selectByTestId('footer-switch-shuffle')).click();
    cy.get(selectByTestId('footer-switch-shuffle'))
      .find('.accent')
      .should('exist');

    cy.get(selectByTestId('view-switcher')).first().click();

    cy.wait(1500);

    cy.get(selectByTestId('track-info-title')).should(
      'not.have.text',
      'Watch Me Bust',
    );

    cy.get(selectByTestId('track-item'))
      .first()
      .find(selectByTestId('track-item-name'))
      .should('not.have.text', 'Watch Me Bust');
  });
});
export {};
