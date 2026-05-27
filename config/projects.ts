/**
 * projects.ts
 * ─────────────────────────────────────────────────────────────
 * All projects shown in the Projects window.
 * Split into two lists: `personal` (side projects) and `client`
 * (paid / contracted work). Both use the same ProjectItem shape.
 *
 *  - `tech`   → array of tags rendered beneath the description.
 *  - `stars`  → optional — shown next to the title if present.
 *  - `status` → optional — rendered as a pill (e.g. "Paused").
 * ─────────────────────────────────────────────────────────────
 */

export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  status?: string
  stars?: number
  link: string
  longDescription?: string
  features?: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface ProjectsConfig {
  personal: ProjectItem[]
  client: ProjectItem[]
}

export const projects: ProjectsConfig = {
  personal: [
    {
      title: "Talk2Database",
      description: "Developed a sophisticated AI agent that empowers users to query SQL databases using natural language, significantly reducing data retrieval complexity.",
      tech: ["LangGraph", "FastAPI", "Docker", "AWS", "GitHub Actions"],
      link: "https://github.com/kshitijkumrawat20/Talk2Database",
      githubUrl: "https://github.com/kshitijkumrawat20/Talk2Database",
      liveUrl: "https://talk2database-by-kshitij.vercel.app/",
      longDescription: "Talk2Database is an interactive AI Agent app designed to let users query SQL databases using natural language. Under the hood, it converts natural language text to SQL queries, executes them, and returns readable conversational answers.",
      features: [
        "Developed a sophisticated AI agent that empowers users to query SQL databases using natural language, significantly reducing data retrieval complexity.",
        "Engineered the application's backend with LangGraph, FastAPI and LLM to create an agentic system, ensuring highly accurate translation of conversational language into precise SQL queries.",
        "Automated the entire CI/CD pipeline and deployed the scalable application on AWS using Docker and GitHub Actions."
      ]
    },
    {
      title: "ClariDoc - Professional Document Q/A Platform",
      description: "Developed a Q&A platform to solve the critical business challenge of extracting precise information from dense, domain-specific documents (e.g., legal, insurance, IT).",
      tech: ["LangChain", "FastAPI", "Pinecone", "LangSmith", "Docker", "AWS", "GitHub Actions"],
      link: "https://claridoc-self.vercel.app/",
      githubUrl: "https://github.com/kshitijkumrawat20/Talk2Database", // keeping as is in your configuration
      liveUrl: "https://claridoc-self.vercel.app/",
      longDescription: "ClariDoc is an enterprise-grade Document Q&A platform built to solve factual lookup errors in long and complex PDF documentation. By utilizing advanced chunking strategies and semantic search, it enhances text retrieval precision.",
      features: [
        "Developed a Q&A platform to solve the critical business challenge of extracting precise information from dense, domain-specific documents (e.g., legal, insurance, IT).",
        "Engineered and implemented a novel hybrid RAG search strategy that boosted information retrieval accuracy by over 20% through advanced metadata filtering. Leveraged Pinecone vector database for high-speed semantic search and utilized LangSmith to rigorously evaluate and fine-tune the RAG pipeline's performance.",
        "Automated the entire CI/CD pipeline and deployed the scalable application on AWS using Docker and GitHub Actions."
      ]
    },
    {
      title: "ElevateCV",
      description: "AI-Powered Career Preparation Assistant that helps job seekers optimize their resumes and analyze skill gaps.",
      tech: ["Streamlit", "Python", "LangChain", "IBM Granite"],
      link: "https://elevatecv.streamlit.app/",
      githubUrl: "https://github.com/kshitijkumrawat20/Elevate-CV",
      liveUrl: "https://elevatecv.streamlit.app/",
      longDescription: "ElevateCV is an AI career optimization tool. Job seekers upload their resume PDFs and input a target job description; the tool parses the resume, compares skill matches, and outputs optimization tips, cover letters, and interview preps.",
      features: [
        "Extracts structured resume contents using PDF parser workflows.",
        "Analyzes skill gaps, formatting issues, and keyword matching using IBM Granite LLM API.",
        "Built on a Streamlit frontend providing a fast and interactive dashboard for job hunters.",
        "Generates customized resume improvement summaries and tailors cover letters.",
      ]
    },
    {
      title: "Agentic Patent Analysis",
      description: "Real-time AI-Powered Patent Analysis fetching live patent data to provide structured insights.",
      tech: ["Agentic RAG", "LangGraph", "Streamlit"],
      link: "https://patent-analysis20.streamlit.app/",
      githubUrl: "https://github.com/kshitijkumrawat20/Agentic-Patent-analysis-app",
      liveUrl: "https://patent-analysis20.streamlit.app/",
      longDescription: "Agentic Patent Analysis is an autonomous patent researcher application. It fetches live data from global patent registries, parses long claims sections, and validates conflicts, novelty, and technological prior art.",
      features: [
        "Orchestrates an autonomous Agentic RAG pipeline using LangGraph to perform search refinement.",
        "Fetches and parses raw XML/PDF patent records dynamically from open API registries.",
        "Performs automated patent claim maps to highlight independent vs dependent claims and potential infringements.",
        "Streamlit application built for patent lawyers and engineers to review technical disclosures.",
      ]
    },
    {
      title: "Diamond Price Prediction",
      description: "End-to-end machine learning model to predict diamond prices with 97% accuracy using KNN Regression.",
      tech: ["Python", "scikit-learn", "NumPy", "pandas", "AWS", "CI/CD"],
      link: "https://github.com/kshitijkumrawat20/MLProject_Diamond_price_prediction",
      githubUrl: "https://github.com/kshitijkumrawat20/MLProject_Diamond_price_prediction",
      longDescription: "An end-to-end supervised machine learning regression project to predict diamond valuation based on structural attributes (carat, cut, color, clarity, dimensions) using a 97% accurate K-Nearest Neighbors (KNN) model.",
      features: [
        "Implements full exploratory data analysis (EDA), outlier handling, and target scaling preprocessing pipelines.",
        "Compares multiple regression models (Linear, Ridge, Lasso, Decision Tree, Random Forest, KNN).",
        "KNN model achieved optimal performance metrics (R-squared of 0.97).",
        "Configured continuous model serialization (pickle) and automated deployment.",
      ]
    },
    {
      title: "Shield",
      description: "Built an end-to-end Machine Learning solution for real-time phishing detection, achieving 94.2% model accuracy.",
      tech: ["FastAPI", "Docker", "MLflow", "DagsHub"],
      link: "https://github.com/kshitijkumrawat20/MLOPS_project_network_Security_system",
      githubUrl: "https://github.com/kshitijkumrawat20/MLOPS_project_network_Security_system",
      longDescription: "Shield is an end-to-end machine learning solution for real-time phishing URL detection. It extracts URL features (length, special characters, domain age, security tokens) and classifies them as safe or suspicious in real time.",
      features: [
        "Built an end-to-end Machine Learning solution for real-time phishing detection, achieving 94.2% model accuracy.",
        "Deployed a FastAPI, Docker–based system with MLflow and Dagshub tracking, gaining hands-on experience in MLOps.",
        "Delivered a low latency(<100ms) scalable REST API, strengthening skills in real-world AI deployment."
      ]
    },
    {
      title: "Wine Quality",
      description: "MLOps pipeline for wine quality prediction, including automated data ingestion, validation, and model tracking.",
      tech: ["Python", "scikit-learn", "Docker", "FastAPI", "MLflow", "DagsHub"],
      link: "https://github.com/kshitijkumrawat20/Wine-Quality-Prediction---MLOps-project",
      githubUrl: "https://github.com/kshitijkumrawat20/Wine-Quality-Prediction---MLOps-project",
      longDescription: "Wine Quality is an MLOps-driven project focusing on deploying a robust regression model to predict wine quality grades from chemical properties. It integrates production-grade tracking and continuous deployment patterns.",
      features: [
        "Built automated modular pipelines for data ingestion, validation, transformation, model training, and evaluation.",
        "Implements MLflow runs tracking with DagsHub repository backend configuration.",
        "Features containerized deployment running FastAPI microservices on cloud servers.",
      ]
    },
    {
      title: "GPT-2 From Scratch",
      description: "Step-by-step implementation of GPT-2 architecture including tokenization, attention, and fine-tuning.",
      tech: ["PyTorch", "Transformers", "Hugging Face"],
      link: "https://github.com/kshitijkumrawat20/LLM-from-scratch",
      githubUrl: "https://github.com/kshitijkumrawat20/LLM-from-scratch",
      longDescription: "An educational deep learning repository containing a step-by-step implementation of the GPT-2 decoder-only transformer architecture in raw PyTorch, focusing on understanding inner operations like attention mechanism, positional embedding, and causal masking.",
      features: [
        "Implements Byte-Pair Encoding (BPE) tokenizers and vocab mapping loaders.",
        "Constructs Multi-Head Causal Self-Attention, feed-forward networks, and residual connection blocks.",
        "Supports loading pre-trained weights from Hugging Face's official GPT-2 checkpoints and executing text generation.",
      ]
    },
    {
      title: "IMDB Sentiment Analysis",
      description: "Sentiment analysis model for IMDB movie reviews using Simple Recurrent Neural Network (RNN) in Streamlit.",
      tech: ["Python", "TensorFlow", "Keras", "NLP", "RNN", "Streamlit"],
      link: "https://github.com/kshitijkumrawat20/ImdbMovieReviewSentimentAnalysisUsingRNN",
      githubUrl: "https://github.com/kshitijkumrawat20/ImdbMovieReviewSentimentAnalysisUsingRNN",
      longDescription: "A natural language processing application training a Simple Recurrent Neural Network (RNN) on the IMDB Movie Reviews dataset to classify review sentiment as positive or negative, complete with a clean UI.",
      features: [
        "Performs text preprocessing, vocabulary tokenization, and sentence padding utilizing Keras preprocessing libraries.",
        "Constructs and trains a Keras Sequential model featuring Embedding, SimpleRNN, and Dense layers.",
        "Exposes the model on an interactive Streamlit dashboard allowing users to input custom reviews for inference.",
      ]
    },
    {
      title: "Customer Churn Classification",
      description: "Artificial Neural Network (ANN) classification model to predict customer churn with interactive UI.",
      tech: ["Python", "TensorFlow", "Keras", "ANN", "Streamlit"],
      link: "https://github.com/kshitijkumrawat20/CustomerChurnClassificationByANNproject",
      githubUrl: "https://github.com/kshitijkumrawat20/CustomerChurnClassificationByANNproject",
      longDescription: "An artificial neural network classification project predicting the probability of customer churn based on demographic and banking behavior data. Built with TensorFlow and Keras.",
      features: [
        "Executes data encoding, feature scaling, and train-test splits on banking records.",
        "Trains a deep artificial neural network featuring Dropout layers to prevent overfitting.",
        "Deploys a Streamlit application rendering churn probabilities and customer risk profiles.",
      ]
    },
    {
      title: "Diabetes Prediction",
      description: "End-to-end binary classification model using logistic regression to predict diabetes, deployed with Flask on AWS EC2.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Flask", "AWS EC2"],
      link: "https://github.com/kshitijkumrawat20/ML_project_diabetes_prediction",
      githubUrl: "https://github.com/kshitijkumrawat20/ML_project_diabetes_prediction",
      longDescription: "An end-to-end medical classification project building a Logistic Regression model to predict the presence of diabetes based on diagnostic measurements. Deployed as a web service on AWS.",
      features: [
        "Processes health records, handles missing feature imputations, and conducts correlation analysis.",
        "Achieved a highly interpretable Logistic Regression classification model for clinical metrics.",
        "Built a Flask web application that serves predictions and deployed it on an AWS EC2 instance.",
      ]
    },
    {
      title: "Forest Fire Prediction",
      description: "ML risk assessment model predicting Forest Weather Index (FWI) using Ridge Regression and meteorology parameters.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Flask", "AWS EC2"],
      link: "https://github.com/kshitijkumrawat20/ML_project_diabetes_prediction",
      githubUrl: "https://github.com/kshitijkumrawat20/ML_project_diabetes_prediction",
      longDescription: "A machine learning regression project designed to predict the Forest Weather Index (FWI) — a key indicator of forest fire risk — using meteorological observations like temperature, relative humidity, wind speed, and rain.",
      features: [
        "Trained on historical Algerian forest fire meteorological records.",
        "Compares Simple Linear, Lasso, and Ridge regressions, selecting Ridge Regression for production due to superior generalization.",
        "Integrated inside a Flask application running predictions on AWS EC2 servers.",
      ]
    },
  ],

  client: [],
}

/** Résumé-only condensed project highlights (short names + long descriptions). */
export interface ResumeProjectItem {
  name: string
  desc: string
}

export const resumeProjects: ResumeProjectItem[] = [
  {
    name: "Talk2Database",
    desc: "Interactive AI agent using LangGraph and Gemini LLM to chat with SQL databases. Deployed as a web app using FastAPI and Docker.",
  },
  {
    name: "ClariDoc",
    desc: "Enterprise-grade RAG platform extracting precise answers from dense documents, improving factual retrieval by 20% using Pinecone and Gemini.",
  },
  {
    name: "ElevateCV",
    desc: "AI career preparation assistant that helps job seekers optimize resumes and analyze skill gaps using IBM Granite, LangChain, and Streamlit.",
  },
  {
    name: "Agentic Patent Analysis",
    desc: "Autonomous patent analysis system executing real-time data ingestion, summarization, and claim validation using LangGraph agents.",
  },
]
