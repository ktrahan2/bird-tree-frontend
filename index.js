fetch('http://localhost:3000/birds')
    .then(response => response.json())
    .then(birds => {
        const birdsSection = document.querySelector('#bird-section')
        
        birds.forEach(bird => {
            
            const birdCard = document.createElement('div')
            birdCard.classList.add('bird-card')

            const birdName = document.createElement('h2')
            birdName.innerHTML = `<a href="bird.html?bird_id=${bird.id}">${bird.name}</a>`

            const birdSpecies = document.createElement('p')
            birdSpecies.textContent = bird.species

            const treeCard = document.createElement('a')
            treeCard.textContent = bird.tree.name
            treeCard.href = `tree.html?tree_id=${bird.tree.id}`

            birdsSection.append(birdCard)
            birdCard.append(birdName, birdSpecies, treeCard)
        })
    })

fetch('http://localhost:3000/trees')
    .then(resp => resp.json())
    .then(trees => {
        const treeDropdown = document.querySelector('#tree-field')

        trees.forEach(tree => {
            const treeOption = document.createElement('option')

            treeOption.textContent = tree.name
            treeOption.value = tree.id

            treeDropdown.appendChild(treeOption)
        })

    })