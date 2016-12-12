(function() {
  // サイドバーの表示をトグルするボタンにイベントを設定
  document.addEventListener('DOMContentLoaded', function() {
    ['.flyoutToggle', '.flyoutBackground'].forEach(selector => document.querySelector(selector).addEventListener('click', function() {
      document.querySelector('.flyoutWrap').classList.toggle('hidden');
      document.querySelector('.flyoutToggle').classList.toggle('hidden');
    }));
  });
})();