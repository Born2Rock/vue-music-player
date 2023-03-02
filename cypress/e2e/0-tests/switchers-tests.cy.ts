import {selectByTestId} from "cypress/helpers/selectByTestId";

describe('switchers tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('change theme', () => {
    cy.get(selectByTestId('theme-switcher')).first().should('exist').click().end();
    cy.get(selectByTestId('page')).first().should('have.class', 'app_light_theme');
    cy.get(selectByTestId('theme-switcher')).first().click().end();
    cy.get(selectByTestId('page')).first().should('not.have.class', 'app_light_theme');
  });

  it('change playlis view', () => {
    cy.get(selectByTestId('view-switcher')).first().should('exist').click().end();
    cy.get(selectByTestId('player')).first().should('have.class', 'playlist-visible');
    cy.get(selectByTestId('view-switcher')).first().should('exist').click().end();
    cy.get(selectByTestId('player')).first().should('not.have.class', 'playlist-visible');
  });
});
export {};
