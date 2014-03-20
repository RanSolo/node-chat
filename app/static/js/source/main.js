/* global io:true */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    initializeSocketIO();
    $('button').click(sendMessage);
  }
  var socket;

  function initializeSocketIO(){
    socket = io.connect('/app');
    socket.on('online', function(data){console.log(data);});
    socket.on('message', addMessage);
  }

  function addMessage(data){
    var $div = $('div');
    $div = data.text;
    var $br = $('<br>');
    $('#messages').append($div);
    $('#messages').append($br);
    var textArea = $('textarea');
    textArea.val('');
  }

  function sendMessage(){
    var a = {};
    a.text = $('textarea').val();
    socket.emit('newMessage', a);
  }



})();
