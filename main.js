'use strict';

// Pop up cards

// Close pop-up by clicking outside of box
// Make everything look nicer

document.getElementById('cardButtonOne').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('#projectOnePopup').style.display = 'flex';
});

document.getElementById('exitOneX').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('#projectOnePopup').style.display = 'none';
});

document.getElementById('cardButtonTwo').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('#projectTwoPopup').style.display = 'flex';
});

document.getElementById('exitTwoX').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('#projectTwoPopup').style.display = 'none';
});

document.getElementById('cardButtonThree').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('#projectThreePopup').style.display = 'flex';
});

document.getElementById('exitThreeX').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('#projectThreePopup').style.display = 'none';
});

document.getElementById('backgroundModalMode').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('.popUp').style.display = 'none';
});