document.addEventListener("DOMContentLoaded", function () {
    let langs = document.querySelector(".langs"),
      link = document.querySelectorAll(".lang-link"),
      translatableElements = document.querySelectorAll("[data-lang-key]");
  
    link.forEach((el) => {
      el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");
  
        let attr = el.getAttribute("language");
        updateTranslations(attr);
      });
    });
  
    function updateTranslations(lang) {
      translatableElements.forEach((element) => {
        const key = element.getAttribute("data-lang-key");
        element.textContent = data[lang][key];
      });
    }
  
    let data = {
        amharic: {
          // ... existing Amharic translations ...
          "nav-home": "ቀዳሚ ገጽ",
          "nav-about": "ማንነታችን",
          "nav-events": "ክስተቶች",
          "nav-contact": "ግንኙነት",
          "nav-donate": "መባ",
          "hero-title": "እኛ የምንኖርበት እግዚአብሔርን አክብርና ደቀ መዛሙርት እናፍቅር",
          "hero-social-title": "ይከታተሉን"

        },
        english: {
          // ... existing English translations ...
          "nav-home": "Home",
          "nav-about": "About",
          "nav-events": "Events",
          "nav-contact": "Contact",
          "hero-title": "We Exist To Honor God And Make Disciples",
          "hero-social-title": "Follow Us"

        },
      };
    
  });
  
// ... existing code ...


// ... existing code ...
