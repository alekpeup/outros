document.getElementById("translateButton").addEventListener("click", () => {
  const content = document.querySelector(".content").innerHTML;

  fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: content, // Texto para traduzir
      source: "pt-br", // Idioma original (substitua se necessário)
      target: "en", // Idioma alvo
      format: "html" // Use 'html' se precisar preservar tags
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }
      return response.json();
    })
    .then(data => {
      // Atualiza o conteúdo da página com o texto traduzido
      document.querySelector(".content").innerHTML = data.translatedText;
    })
    .catch(error => {
      console.error("Erro:", error);
    });
});
