window.onload = function() {
  const letterButtonsContainer = document.getElementById('letterButtons');
  const characterList = document.getElementById('characterList');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  let currentPage = 1;
  let currentLetter = 'A';
  const charactersPerPage = 50;
  let names = []; // Variable to hold character names

  function generateCharacterList() {
    // Clear the character list
    characterList.innerHTML = '';

    // Filter and sort the names based on the current letter
    const filteredNames = names.filter(name => name.startsWith(currentLetter));
    const sortedNames = filteredNames.sort();

    // Calculate the start and end indexes for the current page
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;

    // Display names for the current page
    const namesForPage = sortedNames.slice(startIndex, endIndex);
    namesForPage.forEach(name => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = name;
      link.href = `ch/character.html#${name.toLowerCase()}`; // Set the link to the character.html page with the character's name as an ID
      listItem.appendChild(link);
      characterList.appendChild(listItem);
    });

    // Update pagination buttons
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = endIndex >= sortedNames.length;
  }

  function changeLetter(event) {
    currentLetter = event.target.textContent;
    currentPage = 1;
    generateCharacterList();
  }

  // Generate letter buttons from A to Z
  for (let i = 65; i <= 90; i++) {
    const letterButton = document.createElement('button');
    letterButton.textContent = String.fromCharCode(i);
    letterButton.classList.add('letterButton');
    letterButton.addEventListener('click', changeLetter);
    letterButtonsContainer.appendChild(letterButton);
  }

  function fetchCharacterData() {
    // Simulated API request to fetch character data from a JSON file
    fetch('ch/characterData.json')
      .then(response => response.json())
      .then(data => {
        names = data.characters; // Store character names in the names variable
        generateCharacterList();
      })
      .catch(error => console.log('Error:', error));
  }

  // Initial fetch for character data on page load
  fetchCharacterData();

  // Pagination functionality
  prevButton.addEventListener('click', function() {
    currentPage--;
    generateCharacterList();
  });

  nextButton.addEventListener('click', function() {
    currentPage++;
    generateCharacterList();
  });
};
