// Save the reference to text-field into a variable. | <input type="text">
var itemInput = document.getElementById('itemInput');

// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
var addItemButton = document.getElementById('addItemButton');

// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
var itemList = document.getElementById('itemList');

// Save the reference to paragraph for feedback | <p class="feedback"></p>
var feedbackMessage = document.querySelector('.feedback');

// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    // Check if user entered the value in input text-field.
    // If so:
    if (itemInput.value.trim() !== '') {

        var listItem = document.createElement('li');

        // Use textContent property on created list-item
        // and assign it with the value of the text written in the text-field
        listItem.textContent = itemInput.value;

        // Append list item to unordered list.
        itemList.appendChild(listItem);

        // Clear a feedback-message.
        feedbackMessage.textContent = '';

        // Clear the text-field.
        itemInput.value = '';

        // Put the cursor back to text-field
        itemInput.focus();
        // End if.

        // Otherwise:
    } else {
        // Print the message nothing entered in the paragraph "feedback"
        feedbackMessage.textContent = 'Nothing entered!';
    }
    // End otherwise.
}
// End function addItem.

// Register your function addItem for click event on the button.
addItemButton.addEventListener('click', addItem);
