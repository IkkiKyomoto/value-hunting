describe('Value Hunting Page Tests', () => {
    beforeEach(() => {
      // Cypressテストの前にページを訪問
      cy.visit('http://localhost:3000'); // 実際のページURLに置き換えてください
    });
  
    it('checks for the main elements on the page', () => {
      // ページタイトルの存在を確認
      cy.get('h1').contains('Value Hunting').should('be.visible');
      // サブタイトルの存在を確認
      cy.get('h2').contains('経験を入力').should('be.visible');
    });
  
    it('checks the functionality of the add search button', () => {
      // 「検索を追加」ボタンをクリック
      cy.get('#add-input').click();
      // クリック後の期待される動作をテスト（例: フォームの追加など）
      // この部分は実際の動作に応じて具体的なテストを記述
      // 例: 新しい入力フィールドが表示されるか
      cy.get('input[type="text"]').should('have.length', 2); // 仮の検証
    });

    it('checks the error message when the form is submitted without input', () => {
        // フォームを送信
        cy.get('button[type="submit"]').click();
        // エラーメッセージの存在を確認
        cy.get('#error').should('be.visible');
    });

    it('checks the functionality of the submit button', () => {
        // 「検索を追加」ボタンをクリック
        cy.get('#add-input').click();
        // フォームに値を入力
        cy.get('input[type="text"]').eq(0).type('経験1');
        cy.get('input[type="text"]').eq(1).type('経験2');
        // フォームを送信
        cy.get('button[type="submit"]').click();
        // 期待される動作をテスト（例: ページ遷移など）
        // この部分は実際の動作に応じて具体的なテストを記述
        // 例: ページ遷移後のURLを確認
        cy.url().should('include', '/value'); // 仮の検証
        }
    );
  });