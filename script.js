$(".slick-end").slick({
slidesToShow: 3,  // Exibe 1 slide por vez
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplay: true,  // Ativa o autoplay
      autoplaySpeed: 5000, // Tempo entre transições automáticas
      dots: false, // Não exibe os indicadores de navegação personalizados
      arrows: true, // Mantém as setas de navegação
      infinite: true, // Loop infinito ativado
      cssEase: 'linear', // Suaviza a transição
      arrows: false,
});

$(".slick-slides").slick({
slidesToShow:1,  // Exibe 1 slide por vez
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplay: true,  // Ativa o autoplay
      autoplaySpeed: 5000, // Tempo entre transições automáticas
      dots: false, // Não exibe os indicadores de navegação personalizados
      arrows: true, // Mantém as setas de navegação
      infinite: true, // Loop infinito ativado
      cssEase: 'linear', // Suaviza a transição
      arrows: false,
});

document.addEventListener("DOMContentLoaded", () => {

  // Esconde todos os modais
  document.querySelectorAll(".slide-modal").forEach(modal => {
    modal.classList.add("hide");
  });

  document.addEventListener("click", (e) => {
    const target = e.target;

    // ABRIR
    if (target.matches(".slick-slide img[role='button']")) {
      const slide = target.closest(".slick-slide");
      const modal = slide.querySelector(".slide-modal");

      if (modal) {
        modal.classList.remove("hide");
      }
    }

    // FECHAR
    if (target.matches(".slide-modal img[role='button']")) {
      const modal = target.closest(".slide-modal");

      if (modal) {
        modal.classList.add("hide");
      }
    }
  });
});

$(document).ready(function(){
    // 1. Mapeie os textos que você deseja para cada slide (0, 1, 2, 3...)
    const textosPorSlide = {
        0: "",
        1: "Preto²⁵",
        2: "Prata Titânio²⁵",
        3: "Azul²⁵"
    };

    // 2. Selecione o seu slider (use a classe ou ID correto)
    const $slider = $('.slick-slider');
    const $targetText = $('.div582 .xm-text'); // Onde o texto vai mudar

    // 3. Escute o evento 'afterChange'
    $slider.on('afterChange', function(event, slick, currentSlide){
        // slick: objeto do slider
        // currentSlide: o index do slide atual (0, 1, 2...)
        
        const novoTexto = textosPorSlide[currentSlide];
          $targetText.html(novoTexto);
    });
});