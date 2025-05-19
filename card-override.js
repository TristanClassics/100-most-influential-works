// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for React to render the original content
  setTimeout(function() {
    // Find the table element that contains the works list
    const tableContainer = document.querySelector('.overflow-auto');
    
    if (tableContainer) {
      // Create our new grid container
      const worksGrid = document.createElement('div');
      worksGrid.className = 'works-grid';
      
      // Sample data for our cards (first 10 works)
      const works = [
        {
          title: "The Bible",
          author: "Various authors",
          year: "~8th century BCE - 2nd century CE",
          score: 205
        },
        {
          title: "Information Management: A Proposal",
          author: "Tim Berners-Lee",
          year: "1989",
          score: 187.5
        },
        {
          title: "A Protocol for Packet Network Intercommunication",
          author: "Vinton Cerf & Robert Kahn",
          year: "1974",
          score: 185
        },
        {
          title: "The Communist Manifesto",
          author: "Karl Marx & Friedrich Engels",
          year: "1848",
          score: 177.25
        },
        {
          title: "Das Kapital",
          author: "Karl Marx",
          year: "1867",
          score: 173.75
        },
        {
          title: "On the Origin of Species",
          author: "Charles Darwin",
          year: "1859",
          score: 173.3
        },
        {
          title: "The Quran",
          author: "Unknown",
          year: "7th century CE",
          score: 188.75
        },
        {
          title: "Analects of Confucius",
          author: "Compiled by followers",
          year: "~5th-3rd century BCE",
          score: 170
        },
        {
          title: "First Draft of a Report on the EDVAC",
          author: "John von Neumann",
          year: "1945",
          score: 166.2
        },
        {
          title: "The Wealth of Nations",
          author: "Adam Smith",
          year: "1776",
          score: 165.2
        }
      ];
      
      // Generate cards for each work
      works.forEach((work, index) => {
        const card = document.createElement('div');
        card.className = 'work-card';
        
        card.innerHTML = `
          <div class="rank-badge">#${index + 1}</div>
          <div class="card-content">
            <h3 class="work-title">${work.title}</h3>
            <div class="work-author">${work.author}</div>
            <div class="work-year">${work.year}</div>
            <div class="score-display">
              <span class="score-label">Influence Score:</span>
              <span class="score-value">${work.score}</span>
            </div>
          </div>
        `;
        
        worksGrid.appendChild(card);
      });
      
      // Replace the table with our grid
      tableContainer.innerHTML = '';
      tableContainer.appendChild(worksGrid);
    }
  }, 1000); // Wait 1 second for React to render
});
