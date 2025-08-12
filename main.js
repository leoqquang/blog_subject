 document.addEventListener("DOMContentLoaded", () => {
      const buttons = document.querySelectorAll(".tab button");
      const contents = document.querySelectorAll(".tabcontent");


      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-tab");
          contents.forEach(c => c.style.display = "none");
          buttons.forEach(b => b.classList.remove("active"));
          document.getElementById(target).style.display = "block";
          btn.classList.add("active");
        });
      });


      if (buttons.length > 0) buttons[0].click();
    });
