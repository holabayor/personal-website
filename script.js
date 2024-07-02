function updateTime() {
  const now = new Date();
  const utcHours = now.getUTCHours().toString().padStart(2, '0');
  const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
  const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
  const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  document.getElementById('utcTime').textContent = utcTime;
  document.getElementById('currentDay').textContent = days[now.getUTCDay()];
}

setInterval(updateTime, 1000);
