
$(document).ready(function() {
    
function rouge(){
 $("#textepierre").animate(
{opacity: 1},200);
}

function vert(){
 $("#textechloe").animate(
{opacity: 1},200);
}

function bleu(){
 $("#texterichard").animate(
{opacity: 1},200);
}

function disparition(){
 $("#textepierre").animate(
{opacity: 0},200);
 $("#textechloe").animate(
{opacity: 0},200);
 $("#texterichard").animate(
{opacity: 0},200);
}

$('#pierre').click(function (){
disparition();
rouge();
});

$('#chloe').click(function (){
disparition();
vert();
});

$('#richard').click(function (){
disparition();
bleu();
});

});