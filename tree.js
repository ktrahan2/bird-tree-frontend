const queryParams = new URLSearchParams(window.location.search)
const treeId = queryParams.get('tree_id')

fetch(`http://localhost:3000/trees/${treeId}`)
    .then(resp => resp.json())
    .then(tree => {
        const treeCard = document.querySelector('.tree-card')

        const treeName = document.createElement('h2')
        treeName.textContent = tree.name
        
        treeCard.append(treeName)

        const birdList = document.createElement('ul')
        birdList.classList.add('bird-list')
        treeCard.append(birdList)
        
        
        tree.birds.forEach(bird => {
            let birdCard = document.createElement('a')
            birdCard.classList.add('bird-link')
            birdCard.textContent = bird.species
            birdCard.href = `bird.html?bird_id=${bird.id}`
            birdList.append(birdCard)
        })
        
    })