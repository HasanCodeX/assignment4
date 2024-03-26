function showDetails(coupon) {
    var details = document.getElementById(coupon + "Details");
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

  function showAllOffers() {
    var allOffers = document.getElementById("allOffers");
    if (allOffers.style.display === "none") {
      allOffers.style.display = "block";
    } else {
      allOffers.style.display = "none";
    }
  }