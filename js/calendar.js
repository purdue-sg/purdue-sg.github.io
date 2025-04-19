// calendar.js

document.addEventListener('DOMContentLoaded', () => {
    // ■ your events map here ■
    const events = {
      '2025-04-30': ['🐶 Pet a Puppy']
    };
  
    const monthNames = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const year = new Date().getFullYear();
  
    const calendarContainer = document.getElementById('calendar');
    if (!calendarContainer) {
      console.error('❌ calendar container not found! Make sure <div id="calendar"> is in your HTML.');
      return;
    }
    console.log('✅ Found calendar container, rendering for year', year);
  
    for (let m = 0; m < 12; m++) {
      const firstDay   = new Date(year, m, 1).getDay();
      const daysInMonth = new Date(year, m + 1, 0).getDate();
  
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
  
      // empty slots
      for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'empty';
        daysGrid.appendChild(empty);
      }
  
      // day numbers + events
      for (let d = 1; d <= daysInMonth; d++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = d;
  
        // build ISO date string
        const isoDate = [
          year,
          String(m + 1).padStart(2, '0'),
          String(d).padStart(2, '0')
        ].join('-');
  
        if (events[isoDate]) {
          console.log('→ adding events for', isoDate, events[isoDate]);
          const ul = document.createElement('ul');
          ul.className = 'events';
          events[isoDate].forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
          });
          dayCell.appendChild(ul);
        }
  
        daysGrid.appendChild(dayCell);
      }
  
      monthEl.appendChild(daysGrid);
      calendarContainer.appendChild(monthEl);
    }
  
    console.log('🎉 calendar render complete');
  });
  
  