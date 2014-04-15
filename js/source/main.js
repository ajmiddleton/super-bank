(function(){
'use strict';

$(document).ready(initialize);

var feeAmount = 50;


function initialize(){
  $('#deposit').click(deposit);
  $('#withdraw').click(withdraw);
  updateDisplay();
}

function deposit(){
  var $td1 = $('<td>').addClass('fee');
  var $td2 = $('<td>').addClass('deposit');
  var $td3 = $('<td>').addClass('withdraw');
  var $td4 = $('<td>');
  var $tr = $('<tr>');
  var x = $('#input').val() * 1;
  var currentBal = unWrap($('#display').text()) * 1;
  currentBal += x;

  $td2.text(x);
  currentBal = wrap(currentBal);
  $td4.text(currentBal);

  $tr.append($td1, $td2, $td3, $td4);
  $('#ledger').append($tr);

  updateDisplay();
}

function withdraw(){
  //debugger;
  var $td1 = $('<td>').addClass('fee');
  var $td2 = $('<td>').addClass('deposit');
  var $td3 = $('<td>').addClass('withdraw');
  var $td4 = $('<td>');
  var $tr = $('<tr>');
  var x = $('#input').val() * 1;
  var currentBal = $('#display').text();
  currentBal = unWrap(currentBal);
  currentBal *= 1;
  currentBal -= x;

  if(currentBal < 0){
    $td1.text(feeAmount);
    currentBal -= feeAmount;
  }
  $td3.text(x);
  currentBal = wrap(currentBal);
  $td4.text(currentBal);

  $tr.append($td1, $td2, $td3, $td4);
  $('#ledger').append($tr);

  updateDisplay();
}

function wrap(str){
  //debugger;
  var num = str * 1;

  if(num < 0){
    str *= -1;
    return '$(' + str + ')';
  }
  return '$' + str;
}

function unWrap(str){
  str = str.substring(1);
  if(str.indexOf('(') === 0){
    str = str.substring(1, str.length -1);
    return '-' + str;
  }
  return str;
}

function updateDisplay(){
  var $lastCell = $('td').last();

  $('#display').text($lastCell.text());
}
})();
