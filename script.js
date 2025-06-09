  // 1. Get references HTML elements that will display the width and height  
      let windowWidth = document.getElementById("width")
      let windowHeight = document.getElementById("height")

        // 2. Create a function to update the display and color
        function updateSize() {
            // Get window size
           const width = window.innerWidth;
           const height = window.innerHeight;
            // Update size display
            windowWidth.textContent = width;
            windowHeight.textContent = height;
            // Change background color based on width
            
      
 }
        // 3. Add event listener for window resize
        window.addEventListener('resize', updateSize)
        // 4. Call the function once to set initial values
        updateSize();


       const resumeButton = document.getElementById("resume");

       
        resumeButton.addEventListener("click", function() {
            window.location.href = "https://glitch.com/edit/#!/connections-project?path=index.html%3A1%3A0"; // Replace with your resume URL
        });
  
