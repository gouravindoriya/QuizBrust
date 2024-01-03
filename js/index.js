window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
          if (window.innerWidth  <= 500) {
            headerbtn.innerHTML = `<i class="ri-menu-4-line"></i>`;
            tab1.style.display = "none";
            tab2.style.display = "none";
          }
         
        });
    }
}

function SwitchPage(page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}


const headerbtn = document.getElementById("headerbtn");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");

let isClosed = false; // Track the current state

headerbtn.onclick = () => {
    if (isClosed) {
        headerbtn.innerHTML = `<i class="ri-close-line"></i>`;
        tab1.style.display = "block";
        tab2.style.display = "block";

    } else {
        // Change to the previous content you want
        headerbtn.innerHTML = `<i class="ri-menu-4-line"></i>`;
        tab1.style.display = "none";
        tab2.style.display = "none";
    }

    isClosed = !isClosed; // Toggle the state
}

// home js code for animation
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);