const wishListForm = document.getElementById('wish-list-form');
const sentConfirmation = document.getElementById('sent-confirmation');

wishListForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Send the form data to Santa (pretend API call)
  // ...

  // Show the success message and decorations
  sentConfirmation.style.display = 'block';
  wishListContainer.style.display = 'none';

  // Add some festive snowflakes!
  const snowflakeContainer = document.getElementById('snowflakes');
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflakeContainer.appendChild(snowflake);
  }

  // Animate the snowflakes falling
  animateSnowflakes(snowflakeContainer);
});

function animateSnowflakes(container) {
  const snowflakes = container.querySelectorAll('.snowflake');

  snowflakes.forEach(snowflake => {
    snowflake.style.top = Math.random() * window.innerHeight + 'px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';

    setInterval(() => {
      snowflake.style.top = `${parseInt(snowflake.style.top, 10) + 1}px`;
    }, 100);
  });
}