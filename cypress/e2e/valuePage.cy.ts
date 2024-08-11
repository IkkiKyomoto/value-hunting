describe('Value Hunting Selection Page Tests', () => {
    beforeEach(() => {
      // ページのURLにアクセス
      cy.visit('http://localhost:3000/value?values=%E7%A4%BE%E4%BC%9A%E8%B2%A2%E7%8C%AE&values=%E4%BA%BA%E3%81%A8%E3%81%AE%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3&values=%E8%87%AA%E5%B7%B1%E6%88%90%E9%95%B7&values=%E3%83%81%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF&values=%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%82%B7%E3%83%83%E3%83%97&values=%E5%95%8F%E9%A1%8C%E8%A7%A3%E6%B1%BA%E8%83%BD%E5%8A%9B&values=%E8%B2%AC%E4%BB%BB%E6%84%9F'); // 実際のページURLに置き換えてください
    });
  
    it('checks for the main elements on the page', () => {
      // タイトルの存在確認
      cy.contains('Value Hunting').should('be.visible');
      // 説明文の存在確認
      cy.contains('あなたにとって重要な価値を最大3つ選択しましょう').should('be.visible');
    });
  
    it('checks that checkboxes can be selected', () => {
      // いくつかのチェックボックスを選択
      cy.get('.checkbox').eq(0).click();
        cy.get('.checkbox').eq(1).click();
        cy.get('.checkbox').eq(2).click();
      // 最大3つ選択されることを確認
      cy.get('input[type="checkbox"]:checked').should('have.length', 3);
    });

    it('checks that the submit button show error'), () => {
        // 送信ボタンをクリック
        cy.contains('送信する').click();
        // エラーメッセージの存在を確認
        cy.get('#error').should('be.visible');
    }
  
    it('checks that the submit button works', () => {
      // 送信ボタンをクリック（必要に応じて実際の動作を記述）
      cy.get('.checkbox').eq(0).click();
      cy.get('.checkbox').eq(1).click();
      cy.get('.checkbox').eq(2).click();

      cy.contains('送信する').click();
  
      // 送信後に起こるべきことを確認（例：リダイレクト、メッセージ表示など）
      // 例: cy.url().should('include', '/next-page-url');
      // 例: cy.contains('送信が完了しました').should('be.visible');
    });
  });