describe("Color changes", ()=>{ 

    it("starts with blue shoe",()=>{ 
        cy.visit("/");
        cy.get("#C__D__shoe1").should("be.visible");
    });

    it("Verifys if color gradient banner initial are blue",()=>{
        cy.get("#card__product__background__original").should("have.css", "backgroundImage", "linear-gradient(45deg, rgb(2, 0, 36) 0%, rgb(1, 55, 174) 0%, rgb(34, 170, 249) 100%)");
    });

    it("Changes color gradient banner to red",()=>{
        cy.get("#color__button2").click();
        cy.get("#card__product__background__original").should("have.css", "backgroundImage", "linear-gradient(45deg, rgb(2, 0, 36) 0%, rgb(184, 50, 35) 0%, rgb(212, 85, 82) 100%)");
    });

    it("Changes color gradient banner to green",()=>{
        cy.get("#color__button3").click();
        cy.get("#card__product__background__original").should("have.css", "backgroundImage", "linear-gradient(45deg, rgb(2, 0, 36) 0%, rgb(49, 133, 123) 0%, rgb(98, 206, 94) 100%)");
    });

    it("Changes color gradient banner to orange",()=>{
        cy.get("#color__button4").click();
        cy.get("#card__product__background__original").should("have.css", "backgroundImage", "linear-gradient(45deg, rgb(2, 0, 36) 0%, rgb(219, 64, 31) 0%, rgb(220, 162, 44) 100%)");
    });  

    it("Changes color gradient banner to black",()=>{  
        cy.get("#color__button5").click();
        cy.get("#card__product__background__original").should("have.css", "backgroundImage", "linear-gradient(45deg, rgb(2, 0, 36) 0%, rgb(15, 15, 15) 0%, rgb(89, 89, 89) 100%)");
   
    });

    it("Active color buttons and change color of shoes and size buttons",()=>{ 
        cy.get("#color__button1").click();
        cy.get("#C__D__shoe1").should("be.visible");
        cy.get("#size__button3").should("have.css", "backgroundColor" , "rgb(30, 154, 239)");
        
        cy.wait(1000);
        cy.get("#color__button2").click();
        cy.get("#C__D__shoe2").should("be.visible");
        cy.get("#size__button3").should("have.css", "backgroundColor" , "rgb(248, 72, 72)");
        
        cy.wait(1000);
        cy.get("#color__button3").click();
        cy.get("#C__D__shoe3").should("be.visible");
        cy.get("#size__button3").should("have.css", "backgroundColor" , "rgb(41, 184, 100)");

        cy.wait(1000);
        cy.get("#color__button4").click();
        cy.get("#C__D__shoe4").should("be.visible");
        cy.get("#size__button3").should("have.css", "backgroundColor" , "rgb(255, 85, 33)");

        cy.wait(1000);
        cy.get("#color__button5").click();
        cy.get("#C__D__shoe5").should("be.visible");
        cy.get("#size__button3").should("have.css", "backgroundColor" , "rgb(68, 68, 68)");
    });

});
