const links = document.querySelectorAll(".nav-link");

const dynamicContent =
  document.getElementById("dynamic-content");

/* =========================================
   CARGAR TEMAS
========================================= */

async function loadPage(page){

  if(page === "inicio"){

    dynamicContent.innerHTML = "";

    return;

  }

  try{

    const response =
      await fetch(`temas/${page}.html`);

    const data = await response.text();

    dynamicContent.innerHTML = data;

    initializeCopyButtons();

    initializeRevealAnimations();

    initializeAccordions();

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  }catch(error){

    dynamicContent.innerHTML = `

      <div class="error-box">

        <h2>
          Error cargando contenido
        </h2>

        <p>
          Verifica que la carpeta y archivos
          estén correctamente ubicados.
        </p>

      </div>

    `;

  }

}

/* =========================================
   BOTONES COPIAR
========================================= */

function initializeCopyButtons(){

  const buttons =
    document.querySelectorAll(".copy-btn");

  buttons.forEach(button=>{

    button.addEventListener("click",()=>{

      const code =
        button.parentElement
          .nextElementSibling
          .innerText;

      navigator.clipboard.writeText(code);

      const originalText =
        button.innerText;

      button.innerText = "Copiado";

      setTimeout(()=>{

        button.innerText = originalText;

      },2000);

    });

  });

}

/* =========================================
   ANIMACIONES
========================================= */

function initializeRevealAnimations(){

  const elements = document.querySelectorAll(
    ".content-card, .challenge-card, .output-container, .accordion"
  );

  const observer = new IntersectionObserver(

    entries=>{

      entries.forEach(entry=>{

        if(entry.isIntersecting){

          entry.target.classList.add(
            "show-element"
          );

        }

      });

    },

    {
      threshold:0.1
    }

  );

  elements.forEach(element=>{

    element.classList.add(
      "hidden-element"
    );

    observer.observe(element);

  });

}

/* =========================================
   ACCORDIONS
========================================= */

function initializeAccordions(){

  const accordions =
    document.querySelectorAll(".accordion");

  accordions.forEach(accordion=>{

    const header =
      accordion.querySelector(
        ".accordion-header"
      );

    header.addEventListener("click",()=>{

      accordion.classList.toggle(
        "accordion-open"
      );

    });

  });

}

/* =========================================
   NAVEGACIÓN
========================================= */

links.forEach(link=>{

  link.addEventListener("click",(e)=>{

    e.preventDefault();

    links.forEach(item=>{

      item.classList.remove("active");

    });

    link.classList.add("active");

    const page =
      link.dataset.page;

    loadPage(page);

  });

});

/* =========================================
   INICIO
========================================= */

initializeRevealAnimations();