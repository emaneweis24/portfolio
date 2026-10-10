// دالة التبديل بين وضع الداتا ووضع الفرونت إند
function togglePortfolioMode() {
    const dataView = document.getElementById('data-portfolio-view');
    const frontendView = document.getElementById('frontend-portfolio-view');
    const switcherText = document.getElementById('switcher-text');

    if (dataView.classList.contains('active')) {
        dataView.classList.remove('active');
        frontendView.classList.add('active');
        switcherText.textContent = "Switch to Data Analyst View 📊";
        window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
        frontendView.classList.remove('active');
        dataView.classList.add('active');
        switcherText.textContent = "Switch to Front-End View 💻";
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
}

// دالة تفعيل وتوسيع شريط الفرونت إند
function openPanel(selectedPanel) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.classList.remove('active'));
    selectedPanel.classList.add('active');
}