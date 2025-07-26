# Secret Friend (Amigo Secreto)

This project is a simple web application to organize a **Secret Friend** (also known as "Secret Santa") draw. It allows you to enter participant names, display them in a list, and randomly select a secret friend from the list.

## Features

- **Add friends:** Enter each participant's name and add it to the list.
- **View the list:** All entered names are displayed in a list on the screen.
- **Draw a secret friend:** Click the "Draw friend" button to randomly select a name from the list and display the result.
- **Validation:** Prevents adding empty names.

## File Structure

- `index.html`: Main page with the HTML structure.
- `style.css`: Styles for the interface (should be in the project root).
- `app.js`: JavaScript logic for managing the list and the draw.
- `/assets`: Folder with images used in the interface.

## How it works

1. Type a friend's name in the input field.
2. Click "Add" to add the name to the list.
3. Repeat for all participants.
4. Click "Draw friend" to randomly select a secret friend.

## HTML Integration

Make sure your `index.html` includes the JavaScript file at the end of the `<body>`:

```html
<script src="app.js" defer></script>
```

The HTML must have the following elements with the corresponding IDs:

- `<input id="friend">` for entering names.
- `<ul id="listFriends">` to display the list of friends.
- `<ul id="secretFriend">` to display the draw result.

## Recommended Development Setup

It is recommended to use the **Live Server** extension in Visual Studio Code to run the project locally and see real-time updates.

To use it:

1. Install the "Live Server" extension from the VS Code marketplace.
2. Right-click on `index.html` and select **"Open with Live Server"**.
3. Your browser will open automatically, showing the app and updating every time you save changes.

---

Enjoy organizing your Secret Friend draw quickly