# 🔌 USB Inspector

A desktop USB monitoring tool built with **Electron** and **Node.js**.

This project was created as a learning journey to understand how software can interact with real hardware devices through the operating system.

---

# 📌 About The Project

USB Inspector is a lightweight desktop application that detects connected USB storage devices and displays information about them.

The main goal of this project was not only building a tool, but learning the connection between:

```
Hardware Device
        ↓
Operating System
        ↓
System APIs
        ↓
Node.js
        ↓
Electron Desktop Application
```

---

# 🧠 What I Learned

During the development of this project, I explored several concepts:

## 1. Software and Hardware Interaction

Before this project, most of my experience was focused on web development.

This project helped me understand that applications can communicate with physical devices through operating system APIs.

I learned the difference between:

- Normal frontend development
- Hardware-aware programming
- Embedded programming

This project is in the category of:

```
Hardware-aware Software Development
```

---

# 🛠️ Development Journey

## Step 1 - Creating the Desktop Application

Instead of creating a web application, I used Electron to build a desktop application.

Tech stack:

- Electron
- Node.js
- HTML
- CSS
- JavaScript

---

## Step 2 - First Challenge: Accessing USB Devices

The first idea was using a Node.js package:

```
drivelist
```

to detect USB drives.

However, this package required native compilation and caused problems because of:

- Node.js version compatibility
- node-gyp
- Visual Studio C++ build tools

Instead of adding unnecessary complexity, I changed the approach.

---

## Step 3 - Using Windows APIs

I used PowerShell commands from Node.js:

```
Node.js
    ↓
child_process
    ↓
PowerShell
    ↓
Windows Storage API
```

Example:

```powershell
Get-Volume | Where-Object {$_.DriveType -eq "Removable"}
```

This allowed the application to detect removable USB storage devices.

---

# 🔍 Current Features

✅ Detect USB storage devices

✅ Display drive information

✅ Show:

- Drive letter
- File system
- Total capacity
- Used space
- Free space
- Health status

✅ Modern dark desktop UI

---

# 🏗️ Project Structure

```
USB-inspector/

├── main.js
├── index.html
├── render.js
├── style.css
├── package.json
└── README.md
```

---

# 🚀 Future Roadmap

## Hardware Level Improvements

- [ ] Detect all USB devices
- [ ] Read Vendor ID and Product ID
- [ ] Support WiFi/Bluetooth USB dongles
- [ ] Detect USB connect/disconnect events
- [ ] Display installed drivers

## Application Improvements

- [ ] Storage usage visualization
- [ ] USB history
- [ ] Device cards UI
- [ ] Custom animated mascot
- [ ] Hardware monitoring dashboard

---

# 📚 Key Concepts Learned

Through this project I learned:

- How Electron applications work
- How Node.js can access system features
- How operating systems expose hardware information
- Difference between hardware programming and hardware-aware software
- Why native Node packages sometimes require C++ compilation
- How software interacts with physical devices

