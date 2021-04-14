context('Import / Export', () => {
  beforeEach(() => {
    cy.visit('http://ivis.cs.bilkent.edu.tr/');
    // click to dismiss button
    cy.get('a#dismissButton').click();
    // click to hide 
    cy.get('body').click(10, 10);
  });

  function fileImport(btnSelector, btnTxt, inpSelector, inpFile, waitMs = 1000) {
    cy.get('a.dropdown-toggle').contains('File').click();
    cy.contains('a.dropdown-toggle', 'Import').realHover();
    cy.contains(btnSelector, btnTxt).should('be.visible').click();
    cy.get(inpSelector).attachFile(inpFile);
    cy.wait(waitMs);
  }

  function loadSample(name, waitMs = 1000) {
    cy.get('a.dropdown-toggle').contains('File').click();
    cy.contains('a.dropdown-toggle', 'Samples').realHover();
    cy.contains('a.dropdown-toggle', 'Samples').realHover();
    cy.contains('a', name).should('be.visible').click();
    cy.wait(waitMs);

    cy.window().then((win) => {
      expect(win.cy.nodes().length > 0).to.eq(true);
    });
  }

  function fileExport(btnSelector, btnTxt, waitMs = 1000) {
    cy.get('a.dropdown-toggle').contains('File').click();
    cy.contains('a.dropdown-toggle', 'Export').realHover();
    cy.contains(btnSelector, btnTxt).should('be.visible').click();
    cy.wait(waitMs);

    cy.get('button#file-save-accept').contains('Save').click();
    cy.wait(waitMs);
  }

  it('TC1: File -> Import -> Simple AF', () => {
    fileImport('a#import-simple-af-file', 'Simple AF', 'input#simple-af-file-input', 'Newt_AF_sample_input.txt');

    cy.window().then((win) => {
      expect(win.cy.nodes().length > 0).to.eq(true);
    });
  });

  it('TC2: File -> Import -> SIF', () => {
    fileImport('a#import-sif-file', 'SIF', 'input#sif-file-input', 'causative.sif');

    let bg1 = 'asd';
    let posX1 = 'asd';
    cy.window().then((win) => {
      // check if nodes and edges are loaded
      expect(win.cy.nodes().length > 0).to.eq(true);
      bg1 = win.cy.nodes("[label='GAB1']").style('background-color');
      posX1 = win.cy.nodes("[label='GAB1']").position().x;
    });

    fileImport('a#import-sif-style', 'SIF Style', 'input#sif-style-input', 'causative.format');

    cy.window().then((win) => {
      const bg2 = win.cy.nodes("[label='GAB1']").style('background-color');
      // check if background color changed
      expect(bg1 != bg2).to.eq(true);
    });

    fileImport('a#import-sif-layout', 'SIF Layout', 'input#sif-layout-input', 'causative.txt');

    cy.window().then((win) => {
      const posX2 = win.cy.nodes("[label='GAB1']").position().x;
      // check if position changed
      expect(posX2 != posX1).to.eq(true);
    });
  });

  it('TC3: File -> Import -> SBML', () => {
    fileImport('a#import-SBML-file', 'SBML', 'input#sbml-file', 'activated_stat1alpha_induction_of_the_irf1_gene.sbml', 2000);

    cy.window().then((win) => {
      expect(win.cy.nodes().length > 0).to.eq(true);
    });
  });

  // CellDesigner import currently doesn’t work!
  // it('TC4: File -> Import -> CellDesigner', () => {
  //   fileImport('a#import-celldesigner-file', 'CellDesigner', 'celldesigner-file-input', 'cellDesigner.xml', 2000);

  //   cy.window().then((win) => {
  //     expect(win.cy.nodes().length > 0).to.eq(true);
  //   });
  // });

  it('TC5: File -> Export -> SBGN-ML Plain', () => {
    loadSample('Neuronal muscle signaling');
    fileExport('a#export-as-sbgnml-plain-file', 'SBGN-ML Plain');
  });


});