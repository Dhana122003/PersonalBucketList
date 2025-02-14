function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();
    if (itemText === '') {
        alert('Please enter an item.');
        return;
    }

    const itemList = document.getElementById('bucketList');
    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.onclick = function() {
        itemList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    itemList.appendChild(listItem);

    itemInput.value = '';
}