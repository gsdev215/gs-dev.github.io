window.onload = function() {
  var readMoreButton = document.getElementById("readMoreButton");
  readMoreButton.addEventListener("click", function() {
    alert("This is just a sample action. You can replace it with your own functionality.");
  });

  var searchForm = document.getElementById("searchForm");
  var searchInput = document.getElementById("searchInput");
  var loadingIcon = document.getElementById("loadingIcon");

  searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var searchText = searchInput.value.trim();
    if (searchText !== "") {
      loadingIcon.style.display = "inline-block";
      searchInput.disabled = true;
      simulateSearchRequest(searchText);
    }
  });

  function simulateSearchRequest(searchText) {
    // Simulate an asynchronous search request
    setTimeout(function() {
      // Perform search request here
      // Replace the setTimeout function with your actual search implementation
      displaySearchResults(searchText);
    }, 2000);
  }

  function displaySearchResults(searchText) {
    // Display search results or perform other actions here
    loadingIcon.style.display = "none";
    searchInput.disabled = false;
    searchInput.value = "";
    alert("Search results for: " + searchText);
  }
};
