function showDetails(coupon) {
    var details = document.getElementById(coupon + "Details");
    var computedStyle = window.getComputedStyle(details);
    if (computedStyle.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

function showAllOffers() {
    var allOffers = document.getElementById("allOffers");
    var computedStyle = window.getComputedStyle(allOffers);
    if (computedStyle.display === "none") {
        allOffers.style.display = "block";
    } else {
        allOffers.style.display = "none";
    }
}
function showDetails(coupon) {
    var details = document.getElementById(coupon + "Details");
    var computedStyle = window.getComputedStyle(details);
    if (computedStyle.getPropertyValue('display') === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function showAllOffers() {
    var allOffers = document.getElementById("allOffers");
    var computedStyle = window.getComputedStyle(allOffers);
    if (computedStyle.getPropertyValue('display') === 'none') {
        allOffers.style.display = 'block';
    } else {
        allOffers.style.display = 'none';
    }
}
