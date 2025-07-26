# Secret Friend (Amigo Secreto)

This project is a simple web application to organize a **Secret Friend** draw. It allows you to enter participant names, display them in a list, and randomly select a secret friend from the list.

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

<video src="/how-it-works-demo.mp4" controls width="100%">
  Your browser does not support the video tag.
</video>

## Detailed Explanation of the Main Functions

### 1. `addFriend()`

This function is triggered when the user clicks the "Add" button.  

- It retrieves the value from the input field (`newFriendName.value`).
- If the input is empty, it shows an alert asking the user to enter a name.
- If the input is valid, it adds the name to the `friends` array, clears the input field, and calls `updateFriendList()` to refresh the displayed list.

### 2. `updateFriendList()`

This function updates the list of friends shown on the page.

- It first clears the current list by setting `listAddedFriends.innerHTML = ""`.
- Then, it iterates over the `friends` array and creates a `<li>` element for each name.
- Each `<li>` is appended to the `<ul>` with the ID `listFriends`, ensuring the displayed list matches the current state of the array.

### 3. `drawFriend()`

This function is triggered when the user clicks the "Draw friend" button.

- It checks if there are any friends in the list. If not, it alerts the user to add friends first.
- If there are friends, it clears any previous result from the `secretFriend` list.
- It generates a random index to select a name from the `friends` array.
- It creates a `<li>` element displaying the randomly selected friend and appends it to the `<ul>` with the ID `secretFriend`.

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
2. Right-click on `index.html` and select **"Open with Live Server"** (you can use the follow commands also: Alt+L Alt+O).
3. Your browser will open automatically, showing the app and updating every time you save changes.

---

Enjoy organizing your Secret Friend draw quickly and easily!
