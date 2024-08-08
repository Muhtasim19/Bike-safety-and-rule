// Modal functionality for statistics page
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("moreStatsModal");
    const btn = document.getElementById("moreStatsBtn");
    const span = document.getElementsByClassName("closeBtn")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
