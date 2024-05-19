import { username } from "../pc-name.js";
window.myname = username;
window.xTEXT = 60;
window.allowname = true;

export function createInputLayer(font) {
    const LINE1 = font.size * 20;
    const LINE2 = font.size * 21;
    const LINE3 = font.size * 22;
    const LINE4 = font.size * 23;

    return function drawDashboard(context) {
        // Print the prompt for the username
        let TEXT = '';
        let TEXT2 = '';
        let TEXT3 = '';
        xTEXT = 60;

        if (currentHost === 'default') {
            TEXT = 'ENTER YOUR NAME';
            xTEXT = 100;
        } else if (currentHost === 'server') {
            TEXT = 'THIS IS YOUR NAME';
            xTEXT = 100;
        } else if (currentHost === 'local') {
            TEXT = 'NAME THE HUMAN';
            xTEXT = 100;
        } else if (currentHost === 'site') {
            TEXT = 'THIS IS YOUR NAME';
            xTEXT = 100;
        } else {
            TEXT = 'A NAME HAS ALREADY BEEN CHOSEN.';
            xTEXT = 40;
        }
        allowname = true;

        if (!(!myname)) {
            if (myname.length > 3) {
                if (myname.toUpperCase() === 'ILLEG@L STRING'){
                    TEXT2 = 'I AM WATCHING YOU';
                } else if (myname.toUpperCase() === 'MARK') {
                    TEXT2 = 'THE TRUE PLAYER';
                } else if (myname.toUpperCase().includes('LESBI') || myname.toUpperCase().includes('GAY')) {
                    TEXT2 = 'GET OUT!';
                    allowname = false;
                } else if (myname.toUpperCase().includes('PENI') || myname.toUpperCase().includes('VAGI')) {
                    TEXT2 = 'IM GLAD TO HEAR YOU LIKE';
                    TEXT3 = 'GENITALIA. BUT DONT DO THAT';
                    allowname = false;
                } else if (myname.toUpperCase() === 'YOSH'){
                    TEXT2 = 'HEY! GET YOUR OWN NAME';
                    allowname = false;
                } else if (myname.toUpperCase() === 'FALLENSTAR'){
                    TEXT2 = 'OH NO YOU DONT!';
                    allowname = false;
                } else if (myname.toUpperCase() === 'ELEDLOW') {
                    TEXT2 = 'I SHALL BE A UNIQUELY';
                    TEXT3 = 'NAMED PEEING FOX.';
                    allowname = false;
                } else if (myname.toUpperCase() === 'UNDEFINED') {
                    TEXT2 = 'YOU CANNOT.';
                    allowname = false;
                } else if (myname.toUpperCase() === 'MATING') {
                    TEXT2 = 'JIM AND LISA LOVE DOING THAT.';
                    TEXT3 = 'SO GO RIGHT AHEAD.';
                    allowname = true;
                } else if (myname.toUpperCase().includes('EJAC')) {
                    TEXT2 = 'NO. THAT IS A ACTION';
                    TEXT3 = 'NOT A NAME.';
                    allowname = false;
                } else if (myname.toUpperCase() === 'ERROR' || myname.toUpperCase().includes('AAAA') || myname.toUpperCase().includes('SUSSY')) {
                    TEXT2 = 'YOU ARE REALLY BAD AT';
                    TEXT3 = 'NAMES MY FRIEND';
                    allowname = true;
                } else if (myname.toUpperCase() === 'NULL') {
                    TEXT2 = 'ReferenceError. Permission'.toUpperCase();
                    TEXT3 = 'denied by Null the fox'.toUpperCase();
                    allowname = false;
                } else {
                    TEXT2 = 'PRESS ENTER TO PROCEED.';
                }
            } else {
                allowname = false;
                if (myname.toUpperCase() === 'SAM') {
                TEXT2 = 'THE TRUE NAME';
                allowname = true;
                } else if (myname.toUpperCase() === 'SEX') {
                    TEXT2 = 'NO.';
                    TEXT3 = 'YOU CANT DO THAT';
                    allowname = false;
                } else if (myname.toUpperCase().includes('GAY')) {
                    TEXT2 = 'GET OUT!';
                    allowname = false;
                } else if (myname.toUpperCase() === 'PEE') {
                    TEXT2 = 'IF YOU ARE AN ANIMAL LIKE ME';
                    TEXT3 = 'GO RIGHT AHEAD. PEE';
                    allowname = true;
                } else {
                    allowname = false;
                }
            }
        } else {
            allowname = false;
        }

        font.print(TEXT.toUpperCase(), context, xTEXT, LINE1);
        if (!(!myname)) {
            font.print(myname.toUpperCase(), context, 115, LINE2);
        }
        font.print(TEXT2.toUpperCase(), context, 100, LINE3);
        font.print(TEXT3.toUpperCase(), context, 100, LINE4);
        if (myname.toUpperCase() === 'NULL') {
            requestpermissionfrom(null)
        }
    }
}

// Set username function
export function setUsername(newUsername) {
    myname = newUsername;
}

// Listen for keydown events
window.addEventListener('keydown', function(event) {
    event.preventDefault();

    // Ignore arrow keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        return;
    }

    // If the backspace key was pressed, remove the last character from the username
    if (event.key === 'Backspace') {
        if (!myname) {
            return;
        }
        if (xTEXT === 40) {
            myname = localStorage.getItem('username');
        } else if (xTEXT === 100) {
            myname = myname.slice(0, -1);
        } else {
            // do nothing
        }
    } 

    // Otherwise, add the key pressed to the username, but only if it would not make the username longer than 10 characters
    else if (myname.length < 10 && /^[a-zA-Z@]$/.test(event.key) && xTEXT !== 40) {
        if (xTEXT === 40) {
            setUsername(localStorage.getItem('username'))
        } else if (xTEXT === 100) {
            setUsername(myname + event.key);
        } else {
            // do nothing
        }
    }
});
