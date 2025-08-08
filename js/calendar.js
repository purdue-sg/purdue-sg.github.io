// // calendar.js

// calendar.js
document.addEventListener('DOMContentLoaded', () => {
  // map of ISO dates → event names (zero-padded!)
  const events = {
    '2025-08-30': ['Quiet Week is Loud\nKrach Lawn 12-4pm'],
    '2025-09-30': ['QuietLoud\nKrach Lawn 12-4pm'],
    '2025-10-30': ['Quiet Week is Loud\nKrach Lawn 12-4pm']
  };

  const monthNames = ['August','September','October','November','December'];
  const startMonth = 7;            // August (0-based)
  const monthsToShow = monthNames.length; // 5 months
  const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const year = new Date().getFullYear();

  const calendarContainer = document.getElementById('calendar');
  if (!calendarContainer) return;

  for (let m = 0; m < monthsToShow; m++) {
    const monthIndex = startMonth + m;
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const monthEl = document.createElement('div');
    monthEl.className = 'calendar-month';

    const hdr = document.createElement('header');
    hdr.textContent = `${monthNames[m]} ${year}`;
    monthEl.appendChild(hdr);

    const wdRow = document.createElement('div');
    wdRow.className = 'weekdays';
    weekdays.forEach(d => {
      const cell = document.createElement('div');
      cell.textContent = d;
      wdRow.appendChild(cell);
    });
    monthEl.appendChild(wdRow);

    const daysGrid = document.createElement('div');
    daysGrid.className = 'days';

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'empty';
      daysGrid.appendChild(empty);
    }

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
});
