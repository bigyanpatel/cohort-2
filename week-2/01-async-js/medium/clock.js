// Function to format time to HH:MM:SS format
function formatTimeHHMMSS(date) {
  // Extract hours, minutes, and seconds from the date object and pad them to ensure a consistent format
  // padStart ensures the stirng to maintain the length of 2 here by adding leading 0.
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  // Return formatted time as HH:MM:SS
  return `${hours}:${minutes}:${seconds}`;
}

// Function to format time to HH:MM:SS AM/PM format
function formatTimeHHMMSSAMPM(date) {
  let hours = date.getHours();

  // Determine if it's AM or PM based on hours
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format and ensure a consistent two-digit representation
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12 for AM/PM format
  const formattedTime = `${hours.toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

  // Return formatted time as HH:MM:SS AM/PM
  return `${formattedTime} ${ampm}`;
}

// Function to display the machine time in the specified formats
function displayClock() {
  const currentTime = new Date();

  // Format time as HH:MM:SS
  const timeHHMMSS = formatTimeHHMMSS(currentTime);

  // Format time as HH:MM:SS AM/PM
  const timeHHMMSSAMPM = formatTimeHHMMSSAMPM(currentTime);

  // Display current time in both formats
  console.log(`Current time (HH:MM:SS): ${timeHHMMSS}`);
  console.log(`Current time (HH:MM:SS AM/PM): ${timeHHMMSSAMPM}`);
}

// Update the clock every second
setInterval(displayClock, 1000);
