document.addEventListener('DOMContentLoaded', ()=>{

    const userGrid = document.querySelector('.grid-user');
    const cpuGrid = document.querySelector('.grid-cpu');
    const displayGrid = document.querySelector('.grid-display');

    const ships = document.querySelectorAll('.ship');

    const destroyer = document.querySelector('.destroyer-container');
    const submarine = document.querySelector('.submarine-container');
    const crusier = document.querySelector('.crusier-container');
    const battleship = document.querySelector('.battleship-container');
    const carrier = document.querySelector('.carrier-container');

    const startButton = document.querySelector('#start');
    const rotarButton = document.querySelector('#rotate');
    const turnDisplay = document.querySelector('#turn');
    const infoDisplay = document.querySelector('#info');

    const setupButtons = document.getElementById('setup-buttons');

    let isGameOver = false;
    let ready = false;
    let enemyReady = false;
    let allShipsPlaced = false;
    let playerNum = 0;
    let shotsFired = -1;
    let currentPlayer = 'user';
    let isHorizontal = true;




})