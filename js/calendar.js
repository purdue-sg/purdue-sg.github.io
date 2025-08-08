// calendar.js

document.addEventListener('DOMContentLoaded', () => {
    // map of ISO dates → event names
    const events = {
      '2025-10-30': ['Quite Week is Loud\nKrach Lawn 12-4pm'],
      '2025-9-30': ['QuiteLoud\nKrach Lawn 12-4pm']
    };
  
    const monthNames = [
      'August','September','October','November','December'
    ];
    const startMonth = 8; // August is month index 7 (0-based)
    const monthsToShow = monthNames.length - 1;
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const year = new Date().getFullYear();
  
    const calendarContainer = document.getElementById('calendar');
    if (!calendarContainer) {
      console.error('❌ calendar container not found! Check your HTML.');
      return;
    }
    console.log('✅ Found calendar container, rendering for year', year);
  
    for (let m = 0; m <= monthsToShow; m++) {
      const monthIndex = startMonth + m;
      const firstDay   = new Date(year, monthIndex, 1).getDay();
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  
      // build month card
      const monthEl = document.createElement('div');
      monthEl.className = 'calendar-month';
  
      // header
      const hdr = document.createElement('header');
      hdr.textContent = `${monthNames[m]} ${year}`;
      monthEl.appendChild(hdr);
  
      // weekdays row
      const wdRow = document.createElement('div');
      wdRow.className = 'weekdays';
      weekdays.forEach(d => {
        const cell = document.createElement('div');
        cell.textContent = d;
        wdRow.appendChild(cell);
      });
      monthEl.appendChild(wdRow);
  
      // days grid
      const daysGrid = document.createElement('div');
      daysGrid.className = 'days';
  
      // leading empty cells
      for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'empty';
        daysGrid.appendChild(empty);
      }
  
      // day cells, with event toggle
      for (let d = 1; d <= daysInMonth; d++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = d;
  
        const isoDate = [
          year,
          String(monthIndex + 1).padStart(2, '0'),
          String(d).padStart(2, '0')
        ].join('-');
  
        if (events[isoDate]) {
          dayCell.classList.add('has-event');
          const ul = document.createElement('ul');
          ul.className = 'events';
          events[isoDate].forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
          });
          dayCell.appendChild(ul);
  
          dayCell.addEventListener('click', () => {
            dayCell.classList.toggle('active');
          });
        }
  
        daysGrid.appendChild(dayCell);
      }
  
      monthEl.appendChild(daysGrid);
      calendarContainer.appendChild(monthEl);
    }
  
    console.log('🎉 calendar render complete');
  });
  
  