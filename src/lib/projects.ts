export const projects = [
  {
    title: "Devpulse",
    description:
      "An AI-powered personalized assistant that uses user input metrics to generate real-time, data-driven recommendations.",
    purpose:
      "The system collects user-provided telemetry such as coding duration, workload patterns, stress indicators, and current user state. These metrics are processed through a predefined rule-based retrieval system before being incorporated into a context-aware prompt for Gemini. This approach keeps the AI response grounded in the user's actual data instead of relying on generic assumptions.",
    image: "/projects/hassist.jpg",

    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Gemini",
      "Prisma",
    ],

    features: [
      "Processes 4+ developer telemetry signals—including coding duration, workload, stress indicators, and user state—to generate personalized wellness recommendations",
      "Uses a 2-stage recommendation flow: rule-based telemetry retrieval first, followed by Gemini-powered contextual reasoning.",
      "Built as a full-stack Next.js application with 3 core layers: Server Actions, Prisma, and PostgreSQL, with session-isolated conversations.",
      "Automated CI/CD through GitHub Actions with 4 validation steps: dependency installation, Prisma generation, Jest tests, and production build.",
    ],

    documentation:
      "https://www.notion.so/DevPluse-AI-35e8bd3daece80b39e33e7b092a21c58?source=copy_link",
    live: "https://main.d32a0gc1jhgn6.amplifyapp.com/",
    repo: "https://github.com/sammythedeveloper/hassistance",
  },

  {
    title: "Booking",
    description:
      "A modern booking platform built to provide a smooth reservation experience.",

    purpose:
      "A full-stack luxury accommodation platform built with Node.js and Express, combining property discovery, booking workflows, authentication, reviews, interactive maps, weather data, transactional email, and live customer support.",

    image: "/projects/booker.png",

    techStack: ["HTML", "CSS", "Node.js", "Express", "MongoDB", "EJS"],

    features: [
      "Uses an MVC-style Node.js + Express backend with EJS server-side rendering, separating routing, middleware, database operations, and presentation",
      "Models relationships between 4 key entities—users, properties, bookings, and reviews—using MongoDB and Mongoose",
      "Combines interactive maps, destination weather, automated booking emails, and live customer support into one connected accommodation experience",
      "Integrates 6 services and libraries across the platform, including MongoDB Atlas, Leaflet, OpenWeather, Nodemailer, Tawk.to, and AOS(Animate On Scroll).",
    ],

    documentation:
      "https://mixed-gull-24c.notion.site/Booking-System-Engineering-Case-Study-3bc8bd3daece806d9a3bce998cb7027b?source=copy_link",
    live: "https://booking-pcmm.onrender.com/listings",
    repo: "https://github.com/sammythedeveloper/Booking",
  },

  {
    title: "Slate",
    description:
      "Saas style infrastructure intelligence platform designed to bridge the gap between complex backend services and actionable user analytics",

    purpose:
      "Slate is a production-grade SaaS infrastructure intelligence platform that connects subscriber management, service monitoring, billing, and administrative oversight through a unified control plane",

    image: "/projects/slate.png",

    techStack: ["Next.js", "TypeScript", "Express.js", "Node.js", "PostgreSQL"],

    features: [
      "Provides two dedicated dashboards: a user dashboard for monitoring service instances and subscriptions, and an admin control plane for platform-wide user, financial, and operational management.",
      "Implements role-based access control (RBAC) to separate standard subscriber access from elevated administrative capabilities and protected infrastructure operations",
      "Uses a signature-verified Stripe webhook architecture to securely synchronize billing events with platform state while reducing race conditions and preventing unverified financial updates",
      "Admin Control Plane",
      "Built with React, Tailwind, shadcn/ui, Node.js, Express, and PostgreSQL to deliver a data-heavy SaaS interface with persistent relational state and real-time operational visibility.",
    ],

    documentation:
      "https://www.notion.so/Slate-39a8bd3daece80b78818ce543a883d8c?source=copy_link",
    live: "https://slate-fawn-one.vercel.app/",
    repo: "https://github.com/sammythedeveloper/Slate_backend/tree/main/membership-server",
  },
  {
    title: "Finance",
    description:
      "A financial dashboard designed to visualize and manage personal finances.",

    purpose:
      "A full-stack personal finance management application built with Vue.js and ASP.NET Core, designed to demonstrate secure authentication, transaction management, spending categorization, relational data persistence, and a production-style cloud deployment workflow.",

    image: "/projects/finance.jpg",

    techStack: [
      "Vue.js",
      "TypeScript",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT",
      "Railway",
      "Vercel",
    ],

    features: [
      "Implements secure JWT-based authentication with ASP.NET Core Identity's PasswordHasher for protected user accounts and password storage.",
      "Provides a complete financial transaction workflow, allowing users to create, manage, and categorize transactions to organize and analyze spending activity.",
      "Uses PostgreSQL with Entity Framework Core migrations for structured relational data management and repeatable database schema changes.",
      "Built a RESTful ASP.NET Core API that separates business logic and data access from the Vue.js frontend, creating a clean client-server architecture.",
      "RESTful API built with ASP.NET Core.",
      "Deployed across Railway and Vercel, with the ASP.NET Core backend and PostgreSQL database hosted on Railway and the responsive Vue.js financial dashboard deployed on Vercel."
    ],

    documentation: "",
    live: "https://finflow-client-one.vercel.app/",
    repo: "https://github.com/sammythedeveloper/finflow_client",
  },

  {
    title: "Ecommerce",
    description:
      "A modern ecommerce platform demonstration of shopping experience end-to-end features.",

    purpose:
      "A full-stack e-commerce demonstration built to showcase the architecture and workflows of a modern online store, including product discovery, authentication, cart management, cloud data persistence, Stripe checkout, and order history.",

    image: "/projects/ecommerce.jpg",

    techStack: ["	React", "FirebaseAuth", "React Router", "Tailwind CSS"],

    features: [
      "Demonstrates a complete e-commerce workflow from product discovery and cart management to authentication, checkout, and order history.",
      "Implements shared application state with React Context API, keeping cart and authenticated-user data synchronized across the application.",
      "Uses Firebase Authentication + Firestore to demonstrate user accounts, product data, and persistent order management in a cloud-backed architecture.",
      "Integrates Stripe checkout to demonstrate a real payment workflow without building payment processing infrastructure from scratch.",
    ],

    documentation:
      "https://mixed-gull-24c.notion.site/Nova-Shop-3bc8bd3daece80579602fb3f09ab3783?source=copy_link",
    live: "https://sammythedeveloper.github.io/Nova-shop/",
    repo: "https://github.com/sammythedeveloper/Nova-shop",
  },

  {
    title: "Stacky",
    description:
      "Utilizes modern frameworks for both frontend reactivity and backend robustness",

    purpose: "A full-stack community platform built to demonstrate a production-style client-server architecture, combining React, Node.js, Express, MySQL, JWT authentication, and cloud deployment across Vercel, Railway, and Aiven.",

    image: "/projects/redddit.png",

    techStack: ["React", "MySQL", "Tailwind CSS", "Framer liberaries"],

    features: [
      "Implements a full-stack community application architecture with React and Tailwind CSS on the frontend and a RESTful Node.js + Express backend.",
      "Uses JWT authentication and password hashing to demonstrate secure user registration, login, session authorization, and protected API resources.",
      "Connects to a cloud-hosted MySQL database on Aiven using SSL-secured connections and mysql2 promise-based connection pooling",
      "Demonstrates a clean client-server separation with environment-based configuration, authentication middleware, relational data management, and responsive UI architecture.",
    ],

    documentation:
      "https://www.notion.so/Stacky-36e8bd3daece80ab90c5d6823b2fa655?source=copy_link",
    live: "https://stacky-omega.vercel.app/",
    repo: "https://github.com/sammythedeveloper/Stacky",
  },

 
];
