# Use a imagem base do Ollama
FROM ollama/ollama

# Exponha a porta 11434 para o servidor
EXPOSE 11434

# Crie o volume persistente para os dados do Ollama
VOLUME /root/.ollama

# Execute o Ollama ao iniciar o contêiner
CMD ["ollama", "serve"]
