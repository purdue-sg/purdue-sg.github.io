// calendar.js

(function() {
    const container = document.getElementById('calendar');
    const year = new Date().getFullYear();
    const monthNames = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  
    // Build each month
    for (let m = 0; m < 12; m++) {
      const firstDay = new Date(year, m, 1).getDay();
      const numDays = new Date(year, m + 1, 0).getDate();
  
      // Month container
      const monthDiv = document.createElement('div');
      monthDiv.className = 'calendar-month';
  
      // Header with month name
      const header = document.createElement('header');
      header.textContent = `${monthNames[m]} ${year}`;
      monthDiv.appendChild(header);
  
      // Weekday labels
      const weekdaysRow = document.createElement('div');
      weekdaysRow.className = 'weekdays';
      weekdays.forEach(d => {
        const dDiv = document.createElement('div');
        dDiv.textContent = d;
        weekdaysRow.appendChild(dDiv);
      });
      monthDiv.appendChild(weekdaysRow);
  
      // Days grid
      const daysGrid = document.createElement('div');
      daysGrid.className = 'days';
  
      // Empty slots before 1st
      for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'empty';
        daysGrid.appendChild(empty);
      }
      // Day numbers
      for (let d = 1; d <= numDays; d++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = d;
        daysGrid.appendChild(dayDiv);
      }
  
      monthDiv.appendChild(daysGrid);
      container.appendChild(monthDiv);
    }
  })();
  