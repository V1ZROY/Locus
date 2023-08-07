let wordArray = ["tell", "very", "even", "back", "any", "good", "woman", "through", "life", "child", "work", "down", "may", "after", "should", "call", "world", "over", "school", "still", "try", "last"
]

let newListButton = document.getElementById('new-list')
let newListModal = document.getElementById('new-list-modal')
let newListCloseButton = document.getElementById('new-list-close-button')
let modalOverlay = document.getElementById('modal-overlay')
let listsContainer = document.getElementById('lists-container')
let playRandomListButton = document.getElementById('play-random-list')

newListButton.addEventListener('click', showNewListForm)
modalOverlay.addEventListener('click', hideNewListForm)
newListCloseButton.addEventListener('click', hideNewListForm);

playRandomListButton.addEventListener('click', saveNewList)

function showNewListForm() {
    newListModal.classList.remove('modal-closed');
    modalOverlay.classList.remove('modal-closed');
}

function hideNewListForm() {
    newListModal.classList.add('modal-closed');
    modalOverlay.classList.add('modal-closed');
}


function saveNewList() {
    let newItemContainer = document.createElement("div")
    listsContainer.appendChild(document.createElement("div"))
    newItemContainer.classList.add('red')
}

  