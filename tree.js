const queryParams = new URLSearchParams(window.location.search)
const treeId = queryParams.get('tree_id')

fetch(`http://localhost:3000/trees/${treeId}`)
    .then(resp => resp.json())
    .then(tree => {
        const treeCard = document.querySelector('.tree-card')

        const treeName = document.createElement('h2')
        treeName.textContent = tree.name

        const birdCard = document.createElement('a')
        tree.birds.forEach(bird => {
            birdCard.textContent = bird.species
            birdCard.href = `bird.html?bird_id=${bird.id}`
        })
        
        treeCard.append(treeName, birdCard)
    })