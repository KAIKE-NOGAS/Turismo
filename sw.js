const CACHE_NAME = "explorer-v1"

// Iniciar o processo de instalação
self.addEventListener("install", event => {
    // Espera o aplicaitivo instalar
    event.waitUntil(
      caches.open(CACHE_NAME).then(cahce => {
        return cache.addAll([
            "/",
            "index.html",
            "style.css",
            "script.js"
        ]);
      })  
    );
})