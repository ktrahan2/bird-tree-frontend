const queryParams = new URLSearchParams(window.location.search)
const birdId = queryParams.get('bird_id')

fetch(`http://localhost:3000/birds/${birdId}`)
    .then(response => response.json())
    .then(bird => {
        const birdCard = document.querySelector('.bird-card')
        
        const birdName = document.createElement('h2')
        birdName.innerHTML = bird.name

        const birdSpecies = document.createElement('p')
        birdSpecies.textContent = bird.species

        const treeCard = document.createElement('a')
        treeCard.textContent = bird.tree.name
        treeCard.href = `tree.html?tree_id=${bird.tree.id}`

        birdCard.append(birdName, birdSpecies, treeCard)
    })