describe("Test constructor", () =>{
    beforeEach(function (){
        const testUrl = 'http://localhost:3000';
        cy.visit(testUrl);
        cy.viewport(1300, 800)
        cy.intercept('GET','api/ingredients',{fixture:'ingredient.json'});
        cy.intercept('POST','api/auth/register',{fixture:'registration.json'});
        cy.intercept('POST','api/orders',{fixture:'order.json'});
        cy.intercept('POST','api/auth/token',{fixture:'token.json'});
        cy.intercept('GET','api/auth/user',{fixture:'user.json'});

    })
    afterEach(function (){
        cy.clearLocalStorage();
    })
    const modal = '[class^=modal]';
    const modaldel = '[class^=modal_closeIcon]';
    const burger = '[class^=burger-constructor_burgerconstructor_]';
        
    it ('Open modal ingredient', () =>{   
         cy.get('a').contains('булка').click();
         cy.get(modal).contains("Детали ингредиента").should("exist");
         cy.get(modal).contains("Краторная булка").should("exist");
         cy.get(modaldel).click();

   });

   it ('Test draganddrop and order', () =>{   

        cy.get('a').contains('булка').trigger('dragstart');
        cy.get(burger).first().trigger('drop');
        cy.get(burger).contains("булка").should("exist");

        cy.get('a').contains('Люминесцентного').trigger('dragstart');
        cy.get(burger).first().trigger('drop');
        cy.get(burger).contains("Люминесцентного").should("exist");

        cy.get('button').contains('Оформить').click();

        cy.get('a').contains('Войти').click();
        cy.get('a').contains('Зарегистрироваться').click();

        cy.get(':nth-child(2) > .input').type('olga');
        cy.get(':nth-child(3) > .input').type('text@mail.ru');
        cy.get(':nth-child(4) > .input').type('1234');
        cy.get('button').contains('Зарегистрироваться').click();

        cy.get('button').contains('Оформить заказ').click();

        cy.get(modaldel,{ timeout: 25000 }).should("exist");
        cy.get(modal).contains("Идентификатор заказа").should("exist");

       cy.get(modaldel).click();
        
    }); 
    
});