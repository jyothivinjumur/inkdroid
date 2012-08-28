function main() {
  var card = $("<span>"); //.addClass('delicious').addClass("card");
  var x = Math.round(Math.random() * canvas_width());
  var y = Math.round(Math.random() * canvas_height());
  /*card.dx = d();*/
  /*card.dy = d();*/
  /*card.css({position: 'fixed', left: x, top: y});*/
  /*card.append($("<a>").attr({href: '/foo', title: 'foo'}).text('foo'));*/
  card.text("foo");
  $("#canvas").append(card.html());
  $("#canvas").append('bar');
}

function draw(cards) {
  for (i in cards) {
    $('#canvas').append(cards[i]);
  }
}

function move(cards) {
  width = canvas_width();
  height = canvas_height();

  for (i in cards) {
    card = cards[i];
    pos = next_pos(card);

    /*
    if (card.attr('class').split(' ').indexOf('frozen') != -1) {
      continue;
    }
    */

    if (pos[0] < 0 || pos[0] > width || pos[1] < 0 || pos[1] > height) {
      card.dx = d();
      card.dy = d();
    }

    card.css({left: pos[0], top: pos[1]})
  }

}

function delicious() {
  cards = [];
  width = canvas_width();
  height = canvas_height();
  for (i in Delicious.posts) {
    cards.push(
      make_card(
        Delicious.posts[i].d, 
        Delicious.posts[i].u, 
        'delicious'
      )
    );
  }
  return cards;
}

function make_card(text, url, klass) {
  width = canvas_width();
  height = canvas_height();
  short_text = text.substr(0,20);
  if (short_text.length == 20) {short_text += '...';}

  var card = $("<span>").addClass(klass).addClass("card");
  var x = Math.round(Math.random() * width);
  var y = Math.round(Math.random() * height);
  card.dx = d();
  card.dy = d();
  card.css({position: 'fixed', left: x, top: y});
  card.append($("<a>").attr({href: url, title: text}).text(short_text));
  card.hover(
    function (){$(this).toggleClass('frozen')},
    function (){$(this).toggleClass('frozen')}
  );
  return card;
}

function d() {
  return Math.random() * 10 - 5;
}

function next_pos(card)
{
  x = parseInt(card.css('left')); 
  y = parseInt(card.css('top'));
  return [(x+card.dx), (y+card.dy)];
}

function canvas_width() {
  return parseInt($("#canvas").width());
}

function canvas_height() {
  return parseInt($("#canvas").height());
}

$('document').ready(main);
