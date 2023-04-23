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
          "hero-title": "እግዚአብሔር ፍቅር ነው!",
          "hero-social-title": "ይከታተሉን",
          "content__buttons1":"ቀጣይ በአላቶች",
          "content__buttons2":"ስለ እኛ",
          "content__buttons3":"ምስሎች",
          "hero-social1":"ይከታተሉን",
          "hero-social2":"ፌስቡክ",
          "hero-social3":"ዮትዩብ",
          "hero-social4":"ኢንስታግራም", 
          "hero-social5":"ለተጨማሪ ወደታች ይሂዱ", 
          "about-content1":"እንኩዋን ወደ ዑራኤል የ ኢትዮጵያ ኦርቶዶክስ ተዋህዶ በተክርስቲያን በሰላም መጡ", 
          "about-content2":"የ ቤተ ክርስቲያናችን ተልእኮ", 
          "about-content3":"የደብረ ብርሃን ቅዱስ ዑራኤል ኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ተልእኮ የሰላም፣ የፍቅርና የአንድነት እምነት እና ሥርዓት ላይ የተመሰረተ፣ የተዋበች እና የተሟላ እና የእግዚአብሔርን ቃል ተግባራዊ በማድረግ ላይ ያተኮረ ነው።", 
          "about-content4":"የበለጠ መረጃ ስለ ቤተክርስቲያናችን", 

          "about-sched1":"እሁድ ቅዳሴ አገልግሎት",
          "about-sched2":"እሁድ - 5:00 AM - 11:00 AM                1144 Earl St, St Paul, MN 55106 US",
          "about-sched3":"የ ህጻናት ትምህርት",
          "about-sched4":"ቅዳሜ - 10:00 AM - 12:00 AM              1144 Earl St, St Paul, MN 55106 US",
          "about-sched5":"የ ኪዳን ጸሎት",   
          "about-sched6":"ቅዳሜ - 6:00 AM - 9:00 AM                1144 Earl St, St Paul, MN 55106 US",
          "about-sched7":"የ አርብ ጸሎት",
          "about-sched8":"አርብ -5:30 PM - 7:00 PM                  1144 Earl St, St Paul, MN 55106 US ",

          "connect-content0":"አባል ይሁኑ",
          "connect-content1":"አባል ሊሆኑ የሚችሉባቸው መንገዶች ",
          "connect-content2":"ፍላጎቱ አለኝ",
          "connect-content3":"ስለ ኦርቶዶክስ ተዋህዶ የመማርያ ገጽ",
          "connect-content4":"እዚህ ገጽ ላይ ስለ ሃይማኖታችን እና ስለ በተክርስቲያናችን የምንማርበት አና የምንጠይቅበት ነው",
          "connect-content5":"የበለጠ ይወቁ",

          "large-half-1":"የ እለቱ ጥቅስ",
          "large-half-2":"ለምኑ፥ ይሰጣችሁማል፤ ፈልጉ፥ ታገኙማላችሁ፤ መዝጊያን አንኳኩ፥ ይከፈትላችሁማል።",
          "large-half-3":"ማቴ 7:7",
          "large-half-4":"ምስሎችን ይመልከቱ ",
          "large-half-5":"መልክቶችን ያድምጡ",

          "content__subscribe":"ቅዳሴ እና ሌሎች የ ቤተ ክርስቲያናችን አገልግሎቶች እንዳያመልጥዎት የ ዩትዩብ ቻናላችንን ሰብስክራይብ ያድርጉ",


        },
        english: {
          // ... existing English translations ...
          "nav-home": "Home",
          "nav-about": "About",
          "nav-events": "Events",
          "nav-contact": "Contact",
          "hero-title": "GOD IS LOVE",
          "hero-social-title": "Follow Us",
          "content__buttons1":"Upcoming Events",
          "content__buttons2":"About Us",
          "content__buttons3":"Gallery",
          "hero-social1":"Follow Us",
          "hero-social2":"Facebook",
          "hero-social3":"YouTube",
          "hero-social4":"Instagram", 
          "hero-social5":"Scroll For More", 
          "about-content1":"Welcome to Uriel EOTC", 
          "about-content2":"mission of our church", 
          "about-content3":"Debre Berhan Saint Urael Church in Ethiopia Orthodox Tewahedo Church based on the belief and system of peace, love and unity, beautiful and complete and focusing on the application of the word of God.", 
          "about-content4":"More About Uriel EOTC", 

          "about-sched1":"Main Church Service",
          "about-sched2":"Sunday - 5:00 AM - 11:00 AM  1144 Earl St, St Paul, MN 55106 US",
          "about-sched3":"Kids Sunday School",
          "about-sched4":"Saturday - 10:00 AM - 12:00 AM   1144 Earl St, St Paul, MN 55106 US",
          "about-sched5":"Kidan Prayer",
          "about-sched6":"Saturday - 6:00 AM - 9:00 AM    1144 Earl St, St Paul, MN 55106 US",
          "about-sched7":"Friday Prayer",
          "about-sched8":"Friday -5:30 PM - 7:00 PM  1144 Earl St, St Paul, MN 55106 US ",

          "connect-content0":"Be A Memnber",
          "connect-content1":"Delectus distinctio fuga commodi quod temporibus consequatur. Voluptatem dolor vel impedit. Totam ut vel nihil ab. Nostrum ipsa necessitatibus. Iste voluptatibus qui velit et voluptatem laudantium ",
          "connect-content2":"I'm Interested",
          "connect-content3":"ORTHODOX TEWAHEDO RESOURCES",
          "connect-content4":"Here is where we learn and ask questions about our Religion and our Church.",
          "connect-content5":"Learn More",

          "large-half-1":"Verse Of The Day",
          "large-half-2":"Ask, and it shall be given you; seek, and you shall find; knock, and it shall be opened to you.",
          "large-half-3":"Matthew 7:7",
          "large-half-4":"Watch the Video",
          "large-half-5":"Listen To the Message",

          "content__subscribe":"Never missed KIDASE and all church Services. Subscribe to our YouTube.",







          
    







          


          
          

        },
      };
    
  });
  
// ... existing code ...


// ... existing code ...
