let wordArray = ["tell", "very", "even", "back", "any", "good", "woman", "through", "life", "child", "work", "down", "may", "after", "should", "call", "world", "over", "school", "still", "try", "last"
]

let newListButton = document.getElementById('new-list')
let newListModal = document.getElementById('new-list-modal')
let newListCloseButton = document.getElementById('new-list-close-button')
let modalOverlay = document.getElementById('modal-overlay')
let listsContainer = document.getElementById('lists-container')
let playRandomListButton = document.getElementById('play-random-list')
let newListForm = document.getElementById('new-list-form')

newListButton.addEventListener('click', showNewListForm)
modalOverlay.addEventListener('click', hideNewListForm)
newListCloseButton.addEventListener('click', hideNewListForm);


function showNewListForm() {
    newListModal.classList.remove('modal-closed');
    modalOverlay.classList.remove('modal-closed');
}

function hideNewListForm() {
    newListModal.classList.add('modal-closed');
    modalOverlay.classList.add('modal-closed');
}

// Attempting to make a contructor function to store each list as an object
class List {
    listName = "";
    identifier = "" + Date().toLocaleString();
    length = 0;
    contents = []
    populateList(count){
        let newListItem
        while (count >= 1) {
            newListItem = document.createElement("li")
            newListContents.appendChild(newListItem)
            newListItem.textContent = wordArray[Math.floor(Math.random()*wordArray.length)]
            count --
        };
    };
}


let newListNameTest = new List();
console.log(newListNameTest)

function saveNewList(newListForm) {
    /*New list content*/
    let newItemContainer = document.createElement("div")
    let newListHeader = document.createElement("div")
    let newListContents = document.createElement("ul")

    /*New list header content*/
    let newListName = document.createElement('h3')
    let newListPlayButton = document.createElement('button')

    /*Adding textcontent to new nodes*/
    newListName.textContent = document.querySelector('input[name="new-list-name"]').value
    document.querySelector('input[name="new-list-name"]').value = "";
    newListPlayButton.textContent = 'Play'

    /*adding classes to new nodes*/
    newItemContainer.classList.add('item-container')
    newListHeader.classList.add('list-header')
    newListContents.classList.add('list-contents')
    newListPlayButton.classList.add('play-list-button')

    /*Adding new nodes to DOM*/
    listsContainer.appendChild(newItemContainer).appendChild(newListHeader)
    newItemContainer.appendChild(newListContents)
    newListHeader.appendChild(newListName)
    newListHeader.appendChild(newListPlayButton)

    /*Call function to populate list*/
    populateList(document.querySelector('input[name="new-list-length"]').value, newListContents)

    /*Close new List modal after list is made*/
    hideNewListForm()
}

function populateList(count, newListContents) {
    let newListItem
    while (count >= 1) {
        newListItem = document.createElement("li")
        newListContents.appendChild(newListItem)
        newListItem.textContent = wordArray[Math.floor(Math.random()*wordArray.length)]
        count --
    }
    document.querySelector('input[name="new-list-length"]').value = "";
}