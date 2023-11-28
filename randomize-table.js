document.addEventListener('DOMContentLoaded', function() {
  var table = document.querySelector('.wp-block-table'); // Adjust the selector based on your table's class
  var tbody = table.querySelector('tbody');
  var rows = Array.from(tbody.getElementsByTagName('tr'));

  // Randomize the order of name and name meaning columns
  rows.forEach(function(row) {
    var nameCell = row.querySelector('td:nth-child(2)');
    var meaningCell = row.querySelector('td:nth-child(3)');

    // Save the original content
    var originalName = nameCell.textContent.trim();
    var originalMeaning = meaningCell.textContent.trim();

    // Generate a random order (1 or -1)
    var order = Math.random() < 0.5 ? 1 : -1;

    // Set the content in random order
    nameCell.textContent = order === 1 ? originalName : originalMeaning;
    meaningCell.textContent = order === 1 ? originalMeaning : originalName;
  });
});