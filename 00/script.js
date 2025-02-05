// Import Chart.js
import Chart from "chart.js"

// Market chart
const ctx = document.getElementById("marketChart").getContext("2d")
new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Food & Beverage", "Retail", "E-commerce", "Agriculture", "Others"],
    datasets: [
      {
        data: [35, 25, 20, 10, 10],
        backgroundColor: ["#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Target Market Distribution",
      },
    },
  },
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()
  alert("Thank you for your message. We will get back to you soon!")
  this.reset()
})

// Intersection Observer for fade-in effect
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  },
  { threshold: 0.1 },
)

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})