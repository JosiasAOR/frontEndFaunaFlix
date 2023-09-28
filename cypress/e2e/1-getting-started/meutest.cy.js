describe('Sistema da petFlix deve', () => {
  it('Exibir a home ', () => {
      cy.visit('http://localhost:5173/movies')
  })

  it('selecionar o video', () => {
      cy.visit('http://localhost:5173/movies')
      cy.get('.video-card').eq(0).click();
  })
  it('Executar o video', () => {
      cy.visit('http://localhost:5173/movies/')
      cy.get('.video-card').eq(0).click();
      cy.get('.video').eq(0).click();
  })
  it('Ampliar a tela do video', () => {
    cy.visit('http://localhost:5173/movies/')
    cy.get('.video-card').eq(0).click();
    cy.get('.video').eq(0).dblclick();
})
  
})