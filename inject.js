const injectMenu = () => {
  console.log("injecting html");

  // Create a new nav element
  const navElement = document.createElement("nav");
  navElement.className = "menu-wrapper";

  // Set the inner HTML of the nav element
  navElement.innerHTML = `   
    <nav class="menu-wrapper">
    <ol>
      <li class="menu-item" id="about-andiyah">
        <button class="x-btn">
          <span onclick="toggleMenu()">&#10005;</span>
        </button>
        <p>About Andiyah</p>
      </li>
      <li class="menu-item" id="casa-del-mar">
        <p>Casa Del Mar</p>
      </li>
      <li class="menu-item" id="the-spiral">
        <p>The Spiral</p>
      </li>
      <li class="menu-item" id="byredo">
        <p>Byredo</p>
      </li>
      <li class="menu-item" id="Waldorf-part-1">
        <p>Waldorf Astoria New York 1</p>
      </li>
      <li class="menu-item" id="mti">
        <p>Mti Mti in Denim</p>
      </li>
      <li class="menu-item" id="the-cove">
        <p>The Cove</p>
      </li>
      <li class="menu-item" id="sound-view">
        <p>The Sound View Greenport</p>
      </li>
      <li class="menu-item" id="moxy">
        <p>Moxy Hotels</p>
      </li>
      <li class="menu-item" id="Waldorf-part-2">
        <p>Waldorf Astoria New York 2</p>
      </li>
      </nav
  `;

  // Append the new nav element to the body
  const targetElement = document.querySelector("body");
  targetElement.appendChild(navElement);
};
