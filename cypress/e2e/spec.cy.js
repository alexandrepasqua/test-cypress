describe('Cad-aesp-natura', () => {

  it('aesop', () => {
    //Visitar a pagina da VR
    cy.visit('https://www.aesop.com.br/') 

    cy.get('#onetrust-accept-btn-handler').click() //Aceite dos termos
    cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click() 
   
    cy.contains('Cadastrar-se').click()
    cy.contains('Primeiro nome')
      .next()
      .type('Alexandre')
    cy.contains('Sobrenome')
      .next()
      .type('APasqua')      
    cy.contains('E-mail')
      .next()
      .type('marina-de-sa1@tuamaeaquelaursa.com')   
    cy.contains('Senha')
      .next()
      .type('1234Teste!@') 
    cy.contains('Repita sua senha')
      .next()
      .type('1234Teste!@')     
    cy.contains('CPF')
      .next()
      .type('96992821008') 
    cy.contains('Masculino').click() 
    cy.contains('Data de nascimento (opcional)')
      .next()
      .type('15071985')
    cy.contains('Telefone')
      .next()
      .type('35992056996')
      cy.get('#receiveNewsLetter').check()
      cy.get('#infContOptIn').check()
      cy.get('#acceptedterms').check()
      cy.contains('Criar Conta').click()
    })
   })

  it('natura', () => {
    cy.visit('https://www.natura.com.br/') 
    
    cy.get('#onetrust-accept-btn-handler').click() //Aceite dos termos
    cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    cy.contains('Cadastrar-se').click()
    cy.contains('Primeiro nome')
      .next()
      .type('Alexandre')
    cy.contains('Sobrenome')
      .next()
      .type('APasqua')      
    cy.contains('E-mail')
      .next()
      .type('marina-de-sa1@tuamaeaquelaursa.com')   
    cy.contains('Senha')
      .next()
      .type('1234Teste!@') 
    cy.contains('Repetir senha')
      .next()
      .type('1234Teste!@')     
    cy.contains('CPF')
      .next()
      .type('96992821008')  
    cy.contains('Data de Nascimento (opcional)')
      .next()
      .type('15071985')
      cy.get('.MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click()
    cy.contains('Celular')
      .next()
      .type('35992056996')
    cy.contains('Desejo receber por WhatsApp novidades e promoções da Natura').click()  
    cy.contains('Número WhatsApp')
      .next()
      .type('35992056996')
   // cy.get('#infContOptIn').click()
    cy.get('#acceptedterms').click()
    cy.contains('Criar Conta').click()
  })
