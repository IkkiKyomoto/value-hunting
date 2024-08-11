describe("Value Hunting Form", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:3000/value/result?criteria=%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E3%82%BF%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86%E8%83%BD%E5%8A%9B&criteria=%E8%A4%87%E6%95%B0%E3%81%AE%E9%81%B8%E6%8A%9E%E8%82%A2%E3%82%92%E8%A9%95%E4%BE%A1%E3%81%99%E3%82%8B%E6%9F%94%E8%BB%9F%E6%80%A7&criteria=%E7%8A%B6%E6%B3%81%E3%81%AB%E5%BF%9C%E3%81%98%E3%81%9F%E5%84%AA%E5%85%88%E9%A0%86%E4%BD%8D%E4%BB%98%E3%81%91%E3%81%AE%E3%82%B9%E3%82%AD%E3%83%AB",
    );
  });

  it("displays an error message when the name field is empty and submit is clicked", () => {
    // 対象のページを訪問

    // 送信ボタンをクリック
    cy.get("button").contains("送信する").click();

    // エラーメッセージが表示されることを確認
    cy.contains("表示名を入力してください").should("be.visible");
  });

  it("disables the submit button and shows completion message when a name is entered and submit is clicked", () => {
    // 対象のページを訪問

    // 名前フィールドに入力
    cy.get('input[name="username"]').type("テストユーザー"); // input要素のname属性を適宜変更してください

    // 送信ボタンをクリック
    cy.get("button").contains("送信する").click();

    // ボタンが無効化されることを確認
    cy.get("button").contains("送信する").should("be.disabled");

    // 送信完了のメッセージが表示されることを確認
    cy.contains("投稿しました").should("be.visible");
  });
});
