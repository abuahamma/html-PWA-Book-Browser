
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((error) => console.error("Service Worker Registration Failed:", error));
  }
  

  const container = document.querySelector(".container");
  
  const books = [
    {
      title: "1984",
      author: "George Orwell",
      image: ".//1984.jpeg",
      description: "A dystopian novel set in a totalitarian society.",
      details: "Published in 1949, this classic explores themes of government surveillance and societal control."
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: ".//To_Kill_a_Mockingbird.jpg",
      description: "A story of racial injustice in the Deep South.",
      details: "Published in 1960, this Pulitzer Prize-winning book explores racial inequality and moral growth."
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: ".//The_Great_Gatsby.jpg",
      description: "A classic novel about the American dream.",
      details: "Published in 1925, this book delves into wealth, love, and societal expectations."
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: ".//Pride_and_Prejudice.jpg",
      description: "A romantic novel that critiques societal norms.",
      details: "Published in 1813, this novel explores themes of love, class, and family dynamics."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      image: ".//The_Catcher_in_the_Rye.jpg",
      description: "A tale of teenage rebellion and alienation.",
      details: "Published in 1951, this novel follows Holden Caulfield's experiences with adulthood."
    },
  ];
  
  const showBooks = () => {
    let output = "";
    books.forEach(({ title, author, image, description }, index) => {
      output += `
        <div class="card" id="book-${index}">
          <img class="card--avatar" src=${image} alt="${title}" />
          <h1 class="card--title">${title}</h1>
          <p class="card--author">by ${author}</p>
          <p class="card--description">${description}</p>
          <button class="card--link" onclick="markAsRead(${index})">Read More</button>
          <div class="card--details" style="display: none;"></div>
        </div>
      `;
    });
    container.innerHTML = output;
  };
  
  const markAsRead = (index) => {
    const card = document.getElementById(`book-${index}`);
    const detailsDiv = card.querySelector(".card--details");
  
    if (detailsDiv.style.display === "none") {
      detailsDiv.style.display = "block";
      detailsDiv.innerHTML = `<p>${books[index].details}</p>`;
      card.querySelector(".card--link").innerText = "Hide Details";
    } else {
      detailsDiv.style.display = "none";
      card.querySelector(".card--link").innerText = "Read More";
    }
  };
  
  document.addEventListener("DOMContentLoaded", showBooks);
  
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  