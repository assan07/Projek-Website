
function toggleMenu(){
    const menuToggle = document.querySelector('.menu-toggle')
    
    menuToggle.classList.toggle('active')
  }
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '10px') {
      sidebar.style.right = '-50vh';
    } else {
      sidebar.style.right = '10px';
    }
  });

  // end click in outside of side bar
  document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.container-side .side-bar');
    const openSidebarButton = document.querySelector('.menu-toggle');
    const mainContent = document.querySelector('.main-content');
  
    function closeSidebar(event) {
      if (!sidebar.contains(event.target) && !openSidebarButton.contains(event.target)) {
        sidebar.classList.add('hidden');
      }
    }
  
    function openSidebar() {
      sidebar.classList.remove('hidden');
    }
  
    document.addEventListener('click', closeSidebar);
    openSidebarButton.addEventListener('click', function(event) {
      openSidebar();
      event.stopPropagation(); // Prevent the click event from closing the sidebar immediately
    });
  
    sidebar.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevents the click event from bubbling up to the document
    });
  });
  
  