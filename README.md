# Task List Application

A simple, interactive Task List application that allows users to add, mark, and remove tasks. Designed with a modern, clean interface and smooth animations for a seamless user experience.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Code Structure](#code-structure)
- [Usage](#usage)
- [Customization](#customization)

## Features

- **Add Tasks**: Enter a task name and click "Add" or press `Enter` to add a new task to the list.
- **Mark as Completed**: Click the checkbox next to each task to mark it as completed. Completed tasks are visually distinguished with a strikethrough effect.
- **Clear Completed Tasks**: Click the "Clear Completed" button to remove all tasks marked as completed from the list.
- **Overflow Management**: If tasks exceed the viewable area, the list becomes scrollable with a custom scrollbar style.

## Demo

![Demo of the Task List application]
https://muneermiller.github.io/Task-List-Application/

## Installation

1. Clone the repository:
   ```bash
   https://github.com/MuneerMiller/Task-List-Application.git

2. Navigate into the project directory:
   ```bash
   cd task-list-app
   ```

3. Open index.html in a web browser.

No additional dependencies are required; the app is built using HTML, CSS, and vanilla JavaScript.

## Code Structure

- **index.html**: Contains the HTML structure, including the input fields, buttons, and task list container.
- **assets/styles/style.css**: Defines the styling for the app, including colors, layouts, hover effects, and animations.
- **assets/js/script.js**: Handles all JavaScript functionality, such as adding, updating, and deleting tasks, as well as managing UI effects.

## Usage

1. Add a Task: Type in the task description and either press Enter or click the "Add" button.
2. Complete a Task: Click the checkbox next to a task to mark it as complete. The task text will have a strikethrough to indicate its status.
3. Delete a Task: Click the trash icon on a task to delete it individually.
4. Clear Completed Tasks: Click "Clear Completed" to remove all tasks marked as completed

## Customization
To customize the styles, edit assets/styles/style.css. For example, you can:

Change colors by modifying the button background, task item, and checked task styles.
Adjust task list dimensions to fit your design needs.
