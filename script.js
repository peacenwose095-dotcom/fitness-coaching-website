const MESSAGES = {
  fatloss: `
    <h3>FAT LOSS PLAN</h3>
    <p class="message-tagline">Build healthier habits. Feel stronger. Move better.</p>
    <p>This plan focuses on sustainable fitness habits rather than extreme diets or quick fixes. You'll learn how to stay active, build strength, improve your everyday nutrition, and create routines you can actually maintain.</p>
    <h4>What's Included</h4>
    <ul>
      <li><i class="fa-solid fa-check"></i> Beginner-friendly workouts</li>
      <li><i class="fa-solid fa-check"></i> Strength and movement sessions</li>
      <li><i class="fa-solid fa-check"></i> Balanced nutrition guidance</li>
      <li><i class="fa-solid fa-check"></i> Recovery and rest strategies</li>
      <li><i class="fa-solid fa-check"></i> Habit-building support</li>
    </ul>
    <p class="message-closing">No crash diets. No extreme routines. Just consistent habits that support a healthier, stronger you.</p>
  `,
  nutrition: `
    <h3>NUTRITION PLAN</h3>
    <p class="message-tagline">Fuel your body. Eat better. Feel your best.</p>
    <p>Good nutrition isn't about eating as little as possible. It's about giving your body the energy and nutrients it needs to support your goals, workouts, recovery, and everyday life.</p>
    <h4>What's Included</h4>
    <ul>
      <li><i class="fa-solid fa-check"></i> Balanced meal guidance</li>
      <li><i class="fa-solid fa-check"></i> Protein, carbohydrates, healthy fats, and fiber</li>
      <li><i class="fa-solid fa-check"></i> Hydration habits</li>
      <li><i class="fa-solid fa-check"></i> Simple meal ideas</li>
      <li><i class="fa-solid fa-check"></i> Smart snack options</li>
      <li><i class="fa-solid fa-check"></i> Practical tips for eating consistently</li>
    </ul>
    <p class="message-closing">Build a healthy relationship with food while learning how to make choices that support your lifestyle.</p>
  `,
  muscle: `
    <h3>MUSCLE BUILDING</h3>
    <p class="message-tagline">Build strength. Move with confidence.</p>
    <p>This plan is designed to help you develop strength and muscle through structured training, proper nutrition, and consistent recovery. The goal is steady progress—not extreme workouts or unrealistic expectations.</p>
    <h4>What's Included</h4>
    <ul>
      <li><i class="fa-solid fa-check"></i> Progressive strength workouts</li>
      <li><i class="fa-solid fa-check"></i> Full-body and targeted training</li>
      <li><i class="fa-solid fa-check"></i> Beginner-friendly exercise guidance</li>
      <li><i class="fa-solid fa-check"></i> Nutrition fundamentals for training</li>
      <li><i class="fa-solid fa-check"></i> Recovery and rest strategies</li>
      <li><i class="fa-solid fa-check"></i> Progress-tracking guidance</li>
    </ul>
    <p class="message-closing">Train with purpose, recover well, and build strength one session at a time.</p>
  `,
  transformation: `
    <h3>TRANSFORMATION PLAN</h3>
    <p class="message-tagline">Your journey. Your progress. Your transformation.</p>
    <p>A complete approach for building healthier habits, improving your fitness, and becoming more consistent. This plan brings training, nutrition, recovery, and mindset together so you can focus on sustainable progress.</p>
    <h4>What's Included</h4>
    <ul>
      <li><i class="fa-solid fa-check"></i> Personalized fitness guidance</li>
      <li><i class="fa-solid fa-check"></i> Strength and movement workouts</li>
      <li><i class="fa-solid fa-check"></i> Balanced nutrition strategies</li>
      <li><i class="fa-solid fa-check"></i> Recovery and rest guidance</li>
      <li><i class="fa-solid fa-check"></i> Habit and consistency support</li>
      <li><i class="fa-solid fa-check"></i> Progress-tracking tools</li>
    </ul>
    <p class="message-closing">No overnight promises. Just a structured path to becoming stronger, healthier, and more confident in your everyday life.</p>
  `,
};

const VIEW_ALL_PROGRAMS_MESSAGE = `
  <h3>Find the program that fits your goals.</h3>
  <p>Whether you want to build strength, improve your nutrition, create healthier habits, or follow a complete fitness journey, there's a program designed to help you get started.</p>
  <h4>Explore Our Programs</h4>
  <ul>
    <li><i class="fa-solid fa-check"></i> <strong>Fat Loss Plan</strong> — Build sustainable fitness and nutrition habits.</li>
    <li><i class="fa-solid fa-check"></i> <strong>Nutrition Plan</strong> — Learn how to fuel your body with balanced, practical choices.</li>
    <li><i class="fa-solid fa-check"></i> <strong>Muscle Building</strong> — Develop strength through structured training and recovery.</li>
    <li><i class="fa-solid fa-check"></i> <strong>Transformation Plan</strong> — Combine fitness, nutrition, and healthy habits into one complete journey.</li>
  </ul>
  <p class="message-closing">Choose your starting point and take the next step toward a stronger, healthier you.</p>
`;

const BLOG_MESSAGE = `
  <h3>Learn. Grow. Stay motivated.</h3>
  <p>Explore practical fitness, nutrition, wellness, and lifestyle insights designed to help you make better choices and stay consistent on your journey.</p>
  <h4>What You'll Discover</h4>
  <ul>
    <li><i class="fa-solid fa-check"></i> Fitness tips and workout guidance</li>
    <li><i class="fa-solid fa-check"></i> Nutrition and healthy eating insights</li>
    <li><i class="fa-solid fa-check"></i> Recovery and wellness advice</li>
    <li><i class="fa-solid fa-check"></i> Habit-building strategies</li>
    <li><i class="fa-solid fa-check"></i> Motivation and mindset tips</li>
    <li><i class="fa-solid fa-check"></i> Beginner-friendly fitness education</li>
  </ul>
  <p class="message-closing">Small changes can create lasting results. Keep learning, keep moving, and keep growing.</p>
`;
const NAV_MESSAGES = {
  home: "Welcome to Fuel Fitness! Scroll down to explore everything we offer.",
  about: "Meet James Carter, your certified fitness coach, just below.",
  coaching:
    "Explore our coaching programs below to find the plan that's right for you.",
  programs: "Here are our coaching programs — take a look below.",
  transformations: "See real results from real Fuel Fitness clients below.",
  blog: BLOG_MESSAGE,
  contact: "Ready to get started? Book your free consultation call below.",
};
const PLANS = {
  coaching: {
    title: "1:1 COACHING",
    meta: "ONGOING &bull; MONTHLY",
    whoFor:
      "For anyone who wants personal, one-on-one guidance rather than a standard program.",
    included: [
      "One-on-one coaching",
      "Personalized workout guidance",
      "Nutrition & healthy-habit guidance",
      "Weekly progress check-ins",
      "Goal-setting sessions",
      "Workout adjustments",
      "Accountability support",
      "Questions & feedback between check-ins",
      "Monthly progress review",
      "100% online format",
    ],
    price: "$99/month",
    cta: "Get Coached",
  },
};
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");

const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalWhoFor = document.getElementById("modalWhoFor");
const modalIncluded = document.getElementById("modalIncluded");
const modalPrice = document.getElementById("modalPrice");
const modalCta = document.getElementById("modalCta");
const modalClose = document.getElementById("modalClose");

const messageOverlay = document.getElementById("messageOverlay");
const messageText = document.getElementById("messageText");
const messageClose = document.getElementById("messageClose");

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
function openPlanModal(planKey) {
  const plan = PLANS[planKey];
  if (!plan) return;

  modalTitle.textContent = plan.title;
  modalMeta.innerHTML = plan.meta;
  modalWhoFor.textContent = plan.whoFor;
  modalPrice.textContent = plan.price;
  modalCta.textContent = plan.cta;

  modalIncluded.innerHTML = "";
  plan.included.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;
    modalIncluded.appendChild(li);
  });

  modalOverlay.classList.add("active");
}

function closePlanModal() {
  modalOverlay.classList.remove("active");
}

modalClose.addEventListener("click", closePlanModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closePlanModal();
});
function openMessage(html) {
  messageText.innerHTML = html;
  messageOverlay.classList.add("active");
}

function closeMessage() {
  messageOverlay.classList.remove("active");
}

messageClose.addEventListener("click", closeMessage);
messageOverlay.addEventListener("click", (e) => {
  if (e.target === messageOverlay) closeMessage();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePlanModal();
    closeMessage();
  }
});
document.querySelectorAll(".plan-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const plan = link.dataset.plan;

    if (MESSAGES[plan]) {
      openMessage(MESSAGES[plan]);
    } else if (PLANS[plan]) {
      openPlanModal(plan);
    }
  });
});
document.querySelectorAll(".nav-link:not(.btn)").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    e.preventDefault();

    if (
      link.closest(".dropdown") &&
      link.classList.contains("nav-link") &&
      window.innerWidth <= 700
    ) {
      dropdown.classList.toggle("active");
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    if (NAV_MESSAGES[targetId]) {
      openMessage(NAV_MESSAGES[targetId]);
    }

    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
document.getElementById("viewPlansBtn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
  openMessage(VIEW_ALL_PROGRAMS_MESSAGE);
});
document.getElementById("viewAllProgramsBtn").addEventListener("click", () => {
  document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
  openMessage(VIEW_ALL_PROGRAMS_MESSAGE);
});
document.getElementById("finalCtaBtn").addEventListener("click", () => {
  openMessage(
    "Thanks for your interest! Booking isn't connected yet, but this is where you'd schedule your free call.",
  );
});
const testimonialCards = document.querySelectorAll(".testimonial-card");
let currentTestimonial = 0;

function updateTestimonialHighlight() {
  testimonialCards.forEach((card, i) => {
    card.classList.toggle("active", i === currentTestimonial);
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonialCards.length) %
    testimonialCards.length;
  updateTestimonialHighlight();
  testimonialCards[currentTestimonial].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
  updateTestimonialHighlight();
  testimonialCards[currentTestimonial].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
});

updateTestimonialHighlight();
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const value = newsletterEmail.value.trim();

  if (!emailPattern.test(value)) {
    newsletterEmail.classList.add("invalid");
    return;
  }

  newsletterEmail.classList.remove("invalid");
  newsletterForm.reset();
  openMessage(
    "You're subscribed! Keep an eye out for fitness tips and offers.",
  );
});

newsletterEmail.addEventListener("input", () => {
  newsletterEmail.classList.remove("invalid");
});
