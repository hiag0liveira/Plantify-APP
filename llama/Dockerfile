# Base image for Ollama
FROM ollama/ollama:latest

# Set environment variables (optional)
ENV OLLAMA_HOME=/root/.ollama
WORKDIR /root

# Expose the port for the web interface
EXPOSE 11434

# Run the entrypoint to ensure the application runs on start
ENTRYPOINT ["ollama"]
