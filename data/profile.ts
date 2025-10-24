export const profile = {
  name: "Vamsi Krishna Chirala",
  title: "Software Engineer — Distributed Systems & Data Platforms",
  tagline: "I build systems that make data move intelligently with precision, performance, and elegant design.",
  location: "Sacramento, CA",
  email: "VkCh051298@gmail.com",
  phone: "+1 (916) 696-0476",
  links: {
    github: "https://github.com/vamsi051298",
    linkedin: "https://www.linkedin.com/in/vssvamsikrishnachirala",
    leetcode: "https://leetcode.com/vamsi051298"
  },
  summary: [
    "3+ years across full-stack apps, microservices, and cloud-native platforms using Java, Spring Boot, Node.js, React, AWS, and Kubernetes.",
    "Focus on resilient architectures, distributed data pipelines, RBAC, and CI/CD automation with measurable impact."
  ],
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
        "Built DataBridge (Spring Boot + Node.js + PostgreSQL + Redis) with RBAC, dataset versioning, retention policies for 50+ researchers.",
        "Developing QueryScope (Elasticsearch + Kibana) on Kubernetes with Kafka ingestion and Terraform infrastructure, achieving 75% faster queries.",
        "Designed Redis LFU/TTL caching and automated CI/CD with GitHub Actions, Helm, Gradle/Maven; reduced release cycles from a week to 30 minutes.",
        "Co-built Python ETL and Django/FastAPI dashboards for reproducible analytics and lightweight REST endpoints."
      ],
      metrics: [
        { label: "Researchers", value: "50+" },
        { label: "Query speedup", value: "75%" },
        { label: "Release cycle", value: "→ 30 min" }
      ]
    },
    {
      role: "Software Development Engineer",
      org: "BNP Paribas",
      period: "Jul 2020 – Jun 2022",
      points: [
        "Split a legacy monolith into Spring Boot and Node.js microservices with circuit breakers and load-balanced APIs; scaled to 5,000+ sessions at sub-second latency.",
        "Built async KYC workflows on Kafka with Redis; cut manual checks by 60%.",
        "Implemented RBAC with OAuth2/JWT/SSO, added token verifiers and policy evaluators to secure APIs and ensure compliance.",
        "Containerized services on AWS with Docker/Kubernetes; autoscaling and Terraform monitoring for 99.9% uptime.",
        "Compliance logging pipeline with Elasticsearch and Redis; tuned queries to cut audit lookups by 70% and mentored new hires on Kafka/ES/K8s."
      ],
      metrics: [
        { label: "Sessions", value: "5,000+" },
        { label: "Manual checks", value: "−60%" },
        { label: "Uptime", value: "99.9%" }
      ]
    }
  ],
  projects: [
    {
      name: "Cloud-Native E-Commerce Platform",
      tech: ["Spring Boot", "Node.js/TypeScript", "AWS Lambda", "Saga", "JWT", "K8s"],
      bullets: [
        "Backend microservices for orders, payments, inventory; sustained 99.9% uptime under flash-sale workloads.",
        "Saga-based transactions with idempotent retries and compensations; cut double-charge failures by 40%.",
        "Partition-aware load balancing for checkout APIs; aligned hot SKUs across shards to keep latency low."
      ],
      metrics: [{ label: "Double-charge", value: "−40%" }, { label: "Uptime", value: "99.9%" }]
    },
    {
      name: "Distributed Event Processing System",
      tech: ["Kafka", "Redis LFU/TTL", "Kubernetes", "Prometheus", "Grafana"],
      bullets: [
        "Partitioned topics and consumer groups; sustained 1M+ messages/sec without loss.",
        "Hot-message buffering with Redis LFU/TTL; reduced processing latency by 60%.",
        "Deployed with HPA; instrumented and stress-tested with Prometheus/Grafana."
      ],
      metrics: [{ label: "Throughput", value: "1M+/s" }, { label: "Latency", value: "−60%" }]
    },
    {
      name: "Indexing and Query Optimizer",
      tech: ["PostgreSQL", "Redis", "Elasticsearch", "TPC-H"],
      bullets: [
        "Adaptive indexing that restructures B-trees under skewed workloads; doubled join and aggregation performance.",
        "Hybrid caching with Redis + Elasticsearch to minimize redundant I/O.",
        "Benchmarked and tuned buffers/plans for a consistent 2× speedup."
      ],
      metrics: [{ label: "Perf", value: "2×" }]
    }
  ],
  skills: {
    programming: ["Java", "TypeScript", "JavaScript", "SQL", "Python", "C++", "Go"],
    frameworks: ["Spring Boot", "Node.js", "React", "FastAPI", "GraphQL", "REST", "WebSockets"],
    cloudDevOps: ["AWS (EC2, RDS, S3, Lambda, API GW, CloudWatch)", "Kubernetes", "Docker", "GitHub Actions", "Jenkins"],
    data: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "Elasticsearch"],
    design: ["Microservices", "Event-Driven Architecture", "Caching", "RBAC", "CI/CD", "Terraform", "Gradle", "Maven"],
    testing: ["JUnit", "Mockito", "Jest", "Postman", "Swagger", "Splunk", "Prometheus", "Grafana", "Git"]
  },
  education: [
    { school: "California State University, Sacramento", degree: "M.S. in Computer Science", period: "Aug 2022 – Dec 2024", gpa: "3.5" },
    { school: "Sathyabama Institute of Science and Technology", degree: "B.Tech in Information Technology", period: "Aug 2016 – May 2020", gpa: "3.68" }
  ]
};
