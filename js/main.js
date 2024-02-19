let seatCount = 40;
let addCount = 0;
let sum = 0;

// scroll function
document.getElementById("buyTickets").addEventListener("click", function () {
  const paribahanInfo = document.getElementById("paribahan-info");
  paribahanInfo.scrollIntoView({ behavior: "smooth" });
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// seats
const seats = document.getElementsByClassName("seat-btn");
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
  // 4 ticket buy disable all button
 if (addCount === 4) {
  for (const seat of seats) {
    seat.setAttribute("disabled", true);
    alert("You don't Purchase More Then 4 Tickets")
    return;
  }
}
    // button target
    const selectSeat = e.target;
    const selectSeatId = e.target.id;
    selectSeat.style.backgroundColor = "#1DD100";
    selectSeat.setAttribute("disabled", true);


    // left seat
    const leftSeats = document.getElementById("left-seats");
    seatCount = seatCount - 1;
    leftSeats.innerText = seatCount;



    // seat add
    const addSeat = document.getElementById("add-seat");
    addCount = addCount + 1;
    addSeat.innerText = addCount;




    // set container & append
    const seatContainer = document.getElementById("seat-list-container");
    const ticketPrice = document.getElementById("ticket-price").innerText;
    const convertTicketPrice = parseInt(ticketPrice);
    const div = document.createElement("div");
    const seat = document.createElement("p");
    const busClass = document.createElement("p");
    const price = document.createElement("p");
    seat.innerText = selectSeatId;
    busClass.innerText = "Economy";
    price.innerText = convertTicketPrice;
    div.appendChild(seat);
    div.appendChild(busClass);
    div.appendChild(price);
    seatContainer.appendChild(div);
    // total price update
    const totalPrice = document.getElementById("total-price");
    sum = sum + convertTicketPrice;
    totalPrice.innerText = sum;
    // grand total price update
    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = sum;
  });
}
// discount
document.getElementById("discount-btn").addEventListener("click", function () {
  const discountInput = document.getElementById("discount-input").value;
  const couponContainer = document.getElementById("coupon-container");
  if (discountInput === "NEW15") {
    const discount = (sum * 15) / 100;
    const grandTotal = document.getElementById("grand-total");
    const discountPrice = document.getElementById('discount-price');
    discountPrice.innerText = discount;
    const afterDiscountTotal = sum - discount;

    grandTotal.innerText = afterDiscountTotal;
    couponContainer.classList.add("hidden");
  } else if (discountInput === "Couple 20") {
    const discount = (sum * 20) / 100;
    const grandTotal = document.getElementById("grand-total");
    const discountPrice = document.getElementById('discount-price');
    discountPrice.innerText = discount;
    const afterDiscountTotal = sum - discount;
    grandTotal.innerText = afterDiscountTotal;
    couponContainer.classList.add("hidden");
  } else {
    alert("Invalid Coupon Code");
  }
});
// modal
function showModel(e) {
  event.preventDefault();
  const model = document.getElementById("model");
  model.classList.remove("hidden");
}
document.getElementById("closeBtn").addEventListener("click", function () {
  const model = document.getElementById("model");
  model.classList.add("hidden");
});


//  input fields
document.addEventListener("keyup", function () {
  const passengerName = document.getElementById("passenger-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const emailId = document.getElementById("email-id").value;
  const nextBtn = document.getElementById("next-btn");

// Check if both seat is selected and phone number is inputted
  if (addCount > 0 && phoneNumber.trim() !== "") {
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", "disabled");
  }
});
// reload window
document.getElementById('closeBtn').addEventListener('click', function() {
  setTimeout(() => {
    location.reload();
  },1000);
});
