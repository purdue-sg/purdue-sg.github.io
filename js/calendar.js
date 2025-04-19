// calendar.js

(function() {
    const monthNames = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const year = new Date().getFullYear();
    const calendarContainer = document.getElementById('calendar');
  
    for (let m = 0; m < 12; m++) {
      const firstDay = new Date(year, m, 1).getDay();
      const daysInMonth = new Date(year, m + 1, 0).getDate();
  
      // Build month container
      const monthEl = document.createElement('div');
      monthEl.className = 'calendar-month';
  
      // Header
      const hdr = document.createElement('header');
      hdr.textContent = `${monthNames[m]} ${year}`;
      monthEl.appendChild(hdr);
  
      // Weekday labels
      const wdRow = document.createElement('div');
      wdRow.className = 'weekdays';
      weekdays.forEach(d => {
        const dCell = document.createElement('div');
        dCell.textContent = d;
        wdRow.appendChild(dCell);
      });
      monthEl.appendChild(wdRow);
  
      // Days grid
      const daysGrid = document.createElement('div');
      daysGrid.className = 'days';
  
      // Empty slots
      for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'empty';
        daysGrid.appendChild(empty);
      }
      // Day numbers
      for (let d = 1; d <= daysInMonth; d++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = d;
        daysGrid.appendChild(dayCell);
      }
  
      monthEl.appendChild(daysGrid);
      calendarContainer.appendChild(monthEl);
    }
  })();
  