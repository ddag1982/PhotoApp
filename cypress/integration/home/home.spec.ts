import { inputId, noResultPhoto } from 'cypress/support/home/home.po';

describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('should not display error image', () => {
    noResultPhoto().should('not.exist');
  });

  it('should display error image', () => {
    inputId().type('-1', {force: true});
    noResultPhoto().should('exist');
  });
});
