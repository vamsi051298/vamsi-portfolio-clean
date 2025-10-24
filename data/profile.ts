export const profile = {
  name: "Vamsi Krishna Chirala",
  title: "Software Engineer",
  tagline: "Building scalable systems with measurable impact",
  location: "Sacramento, CA",
  email: "VkCh051298@gmail.com",
  phone: "+1 (916) 696-0476",
  links: {
    github: "https://github.com/vamsi051298",
    linkedin: "https://www.linkedin.com/in/vssvamsikrishnachirala",
    leetcode: "https://leetcode.com/vamsi051298"
  },
  summary: "Software Engineer with 3+ years of experience delivering full-stack applications, microservices, and cloud-native platforms using Java Spring Boot, Node.js, React, AWS, and Kubernetes. Skilled in high-performance APIs, distributed data pipelines, and resilient architectures. Recognized for ownership in building systems with measurable impact.",
  principles: [
    { title: "Precision", text: "Every design starts with measurable clarity." },
    { title: "Scalability", text: "Build once, scale infinitely." },
    { title: "Empathy", text: "Good systems serve both machines and people." },
    { title: "Curiosity", text: "Every project begins with a thoughtful what-if." },
    { title: "Ownership", text: "End-to-end accountability for outcomes." }
  ],
  experience: [
    {
      role: "Software Engineer (Research)",
      org: "California State University, Sacramento",
      period: "Jan 2025 – Present",
      points: [
        "Built DataBridge, a Spring Boot and Node.js platform packaged via Gradle on PostgreSQL and Redis with RBAC, dataset versioning and retention policies, enabling 50+ researchers to securely share and reuse data.",
        "Developing QueryScope, an Elasticsearch and Kibana dashboard on Kubernetes with Kafka ingestion and Terraform-based infrastructure for AI-driven analytics, achieving 75% faster queries.",
        "Designed a Redis LFU/TTL caching layer and automated CI/CD with GitHub Actions, Helm and Gradle/Maven, reducing release cycles from one week to 30 minutes.",
        "Co-built Python ETL pipelines and a Django/FastAPI dashboard, normalizing research logs into schemas for reproducible analytics and lightweight REST endpoints."
      ]
    },
    {
      role: "Software Development Engineer",
      org: "BNP Paribas",
      period: "Jul 2020 – Jun 2022",
      points: [
        "Re-architected the Client Onboarding Platform into Spring Boot and Node.js microservices with circuit breakers and load-balanced APIs, scaled to 5,000+ sessions at sub-second latency.",
        "Built asynchronous KYC workflows on Kafka pipelines with an in-memory Redis store, eliminating blocking calls and cutting manual checks by 60%.",
        "Implemented RBAC with OAuth2, JWT and SSO to secure APIs and ensure compliance.",
        "Containerized services with Docker and Kubernetes on AWS, configured autoscaling and Terraform-based monitoring to sustain 99.9% uptime.",
        "Developed a compliance logging pipeline using Elasticsearch and Redis, tuning queries to cut audit lookups by 70%, and mentored new hires on Kafka, Elasticsearch and Kubernetes."
      ]
    },
    {
      role: "Associate Software Development Engineer",
      org: "BNP Paribas",
      period: "Jan 2020 – Jun 2020",
      points: [
        "Refactored the onboarding frontend into React.js and Spring MVC, modularized UI and optimized state management, cut client journey time by 30%.",
        "Rewrote backend controllers in Java and TypeScript, consolidated duplicated logic and streamlined API calls, improving responsiveness and reducing technical debt.",
        "Enhanced error handling in Spring Boot with custom exception resolvers and validation layers, lowered input errors by 30%, and mentored interns with Postman collections and debug scripts."
      ]
    }
  ],
  projects: [
    {
      name: "Cloud-Native E-Commerce Platform",
      tech: ["Spring Boot", "Node.js/TypeScript", "AWS Lambda", "Saga", "JWT", "K8s"],
      bullets: [
        "Built backend microservices with Spring Boot, Node.js/TypeScript and AWS Lambda for orders, payments and inventory, sustaining 99.9% uptime under flash-sale workloads.",
        "Designed saga-based transactions with idempotent retries and compensating actions, cutting double-charge failures by 40% and ensuring reliable settlements.",
        "Implemented partition-aware load balancing for checkout APIs, aligning hot SKUs across shards to sustain low-latency transactions at peak."
      ]
    },
    {
      name: "High-Throughput Distributed Event Processing System",
      tech: ["Kafka", "Redis LFU/TTL", "Kubernetes", "Prometheus", "Grafana"],
      bullets: [
        "Designed a Kafka pipeline with partitioned topics and consumer groups tuned to sustain 1 million+ messages/sec without loss.",
        "Added a Redis LFU/TTL caching layer for hot-message buffering, cutting consumer lag and reducing processing latency by 60%.",
        "Deployed on Kubernetes with HPA and integrated Prometheus and Grafana to stress-test and monitor throughput at production scale."
      ]
    },
    {
      name: "Next-Gen Database Indexing and Query Optimizer",
      tech: ["PostgreSQL", "Redis", "Elasticsearch", "TPC-H"],
      bullets: [
        "Built adaptive PostgreSQL indexing extensions that restructured B-trees under skewed workloads, doubling performance on joins and aggregations.",
        "Integrated hybrid caching with Redis and Elasticsearch, serving results from memory or inverted indices to minimize redundant I/O.",
        "Benchmarked against TPC-H datasets, tuning query plans and buffers for a consistent 2× speedup on enterprise workloads."
      ]
    }
  ],
  skills: {
    programming: ["Java", "TypeScript", "JavaScript (ES6+)", "SQL", "Python", "C++", "Go"],
    frameworks: ["Spring Boot", "Node.js", "React.js", "D3.js", "Chart.js", "FastAPI", "GraphQL", "REST", "WebSockets"],
    cloudDevOps: ["AWS (EC2, RDS, S3, Lambda, API Gateway, CloudWatch)", "Kubernetes", "Docker", "GitHub Actions", "Jenkins"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "Elasticsearch"],
    systemDesign: ["Microservices", "Event-Driven Architecture", "Caching", "Gradle", "Maven", "IaC (Terraform)", "RBAC", "CI/CD Pipelines"],
    testing: ["JUnit", "Mockito", "Jest", "Postman", "Swagger", "Splunk", "Prometheus", "Grafana", "Git"]
  },
  education: [
    { school: "California State University, Sacramento", degree: "M.S. in Computer Science", period: "Aug 2022 – Dec 2024", gpa: "3.5" },
    { school: "Sathyabama Institute of Science and Technology", degree: "B.Tech in Information Technology", period: "Aug 2016 – May 2020", gpa: "3.68" }
  ]
};
