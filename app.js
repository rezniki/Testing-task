function showContent(category) {
    let cards = document.querySelectorAll('.product__cards');
    cards.forEach(function(card) {
        card.style.display = 'none';
    });

    let selectedCards = document.querySelectorAll('.product__cards .' + category);
    selectedCards.forEach(function(card) {
        card.parentNode.style.display = 'block';
    });
}
