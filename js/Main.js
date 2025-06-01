

function copiarTexto() {
      const texto = document.getElementById('textoACopiar').innerText;
      navigator.clipboard.writeText(texto)
        .then(() => {
          const msg = document.getElementById('copiadoMsg');
          msg.style.display = 'inline';
          setTimeout(() => msg.style.display = 'none', 1500);
        })
        .catch(err => console.error('Error al copiar:', err));
    }