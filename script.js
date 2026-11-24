// Controle do menu mobile (com suporte a tecla Escape) e filtro da galeria com sincronização de URL
document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu mobile acessível
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#nav-menu");

  const closeMenu = () => {
    if (!nav || !menuBtn) return;
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  };

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        menuBtn.focus();
      }
    });
  }

  // 2. Filtro da galeria com aria-pressed, anúncio para leitor de tela e estado no query param (?estilo=...)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const galleryStatus = document.querySelector("#gallery-status");
  const filterLabels = {
    todos: "Todos",
    floral: "Florais e clássicos",
    vintage: "Vintage e pérolas",
    tematico: "Temáticos e brigadeiros",
  };

  const applyFilter = (targetFilter, updateUrl = true, announce = false) => {
    filterBtns.forEach((b) => {
      const isMatch = b.getAttribute("data-filter") === targetFilter;
      b.classList.toggle("active", isMatch);
      b.setAttribute("aria-pressed", String(isMatch));
    });

    let visibleCount = 0;
    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (targetFilter === "todos" || category === targetFilter) {
        item.removeAttribute("hidden");
        visibleCount += 1;
      } else {
        item.setAttribute("hidden", "");
      }
    });

    if (announce && galleryStatus) {
      const label = filterLabels[targetFilter] || targetFilter;
      galleryStatus.textContent = `Exibindo ${visibleCount} ${visibleCount === 1 ? "modelo" : "modelos"} na categoria ${label}.`;
    }

    if (updateUrl && window.history && window.history.replaceState) {
      const url = new URL(window.location.href);
      if (targetFilter === "todos") {
        url.searchParams.delete("estilo");
      } else {
        url.searchParams.set("estilo", targetFilter);
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyFilter(btn.getAttribute("data-filter"), true, true);
    });
  });

  // Inicializa filtro caso a URL traga ?estilo=floral|vintage|tematico
  const initialFilter = new URLSearchParams(window.location.search).get("estilo");
  if (initialFilter && ["todos", "floral", "vintage", "tematico"].includes(initialFilter)) {
    applyFilter(initialFilter, false, false);
  }

  // 3. Conversão Google Ads em cliques no WhatsApp (todos os botões wa.me)
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((waLink) => {
    waLink.addEventListener("click", () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-18592602842/aj_6CI6Gpr4dENq10qFF",
          value: 1.0,
          currency: "BRL",
        });
      }
    });
  });
});
