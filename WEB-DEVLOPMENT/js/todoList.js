let action = prompt("HI! enter the action");

// Ensure the user enters a valid action initially
while (!((action === "new") || (action === "list") || (action === "delete") || (action === "quit"))) {
    action = prompt("Please choose your action from these: new, list, delete, quit");
}

let list = [];

while (action !== "quit") {
    switch (action) {
        case "new": {
            let addElement = prompt("Enter the task that needs to be done:");
            if (addElement) {
                list.push(addElement);
                console.log(`${addElement} added to the list`);
            } else {
                console.log("No task entered.");
            }
            break;
        }

        case "list": {
            if (list.length === 0) {
                console.log("The list is empty for now.");
            } else {
                console.log("Current TODO List:");
                for (let i = 0; i < list.length; i++) {
                    console.log(`${i}: ${list[i]}`);
                }
            }
            break;
        }

        case "delete": {
            if (list.length === 0) {
                console.log("The list is empty. Nothing to delete.");
            } else {
                let index = parseInt(prompt("Enter the index of the task to delete:"));
                if (!isNaN(index) && index >= 0 && index < list.length) {
                    let deleted = list.splice(index, 1);
                    console.log(`${deleted} has been deleted.`);
                } else {
                    console.log("Invalid index. Please try again.");
                }
            }
            break;
        }

        default: {
            console.log("Invalid action. Please choose again.");
            break;
        }
    }

    // Prompt for the next action after processing the current one
    action = prompt("Enter your next action (new, list, delete, quit):");
}

console.log("You have quit the app. Goodbye!");
