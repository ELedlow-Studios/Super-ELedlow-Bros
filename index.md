# Super ELedlow Bros. v7.5.2

To download the latest application version, please visit the official [GitHub repository](https://github.com/ELedlow-Studios/Super-ELedlow-Bros).

**Requirements to Play:**
- Visual Studio Code (VsCode) with Ritwickey LiveServer extension.
- Node.js with Express.
- Electron or Electron Forge for desktop app support.

**Setup Instructions:**

### VsCode
1. Install VsCode.
2. Install Ritwickey LiveServer extension.
3. Open the `index.html` file from the `public` directory and start the server.

### Node.js
Replace the existing `main.js` code with the following to set up a server using Express:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Super ELedlow Bros. running at http://localhost:${port}`);
});
```

### Electron
Update the `main.js` file in the main directory with:
```javascript
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  win.loadFile('index.html');  // Pointing to the game's entry file 'index.html'
}

app.whenReady().then(createWindow);
```

### Electron Forge
For those interested in using Electron Forge, here's a basic setup:
```javascript
// Please refer to the Electron Forge documentation for detailed setup instructions.
```

**ChangeLog for v7.5.2:**
- Resolved the keyboard loading issue.
- Updated FULL credits for ELedlow Studios and Nintendo.
- Introduced Mobile controls (currently disabled).
- Implemented unique styles.
- Enhanced game textures.
- Redesigned the title screen.
- Temporarily removed the Darkworld palette. 📂
- Implemented a feature to retrieve the user's PC name based on the file structure. ⚠️❎
- Added customizable settings feature.
- Enabled saving settings to localStorage. ✖️
