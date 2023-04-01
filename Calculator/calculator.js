function getSelectValue() {
  document.getElementById("list").value;
}
function CalAmt(v) {
  var index = $(v).parent().parent().index();

  var rate = document.getElementsByName("rate")[index].value;
  var amt = rate;
  document.getElementsByName("amt")[index].value = amt;

  GetTotal();
}
function BtnAdd(v) {
  var v = $("#TRow").clone().appendTo("#TBody");
  $(v).find("input").val("");
  $(v).removeClass("d-none");

  getSelectValue();
}
function BtnDel(v) {
  $(v).parent().parent().remove();
  GetTotal();
}
function GetTotal() {
  var amount = document.getElementsByName("amt");
  var sum = 0;

  for (let index = 0; index < amount.length; index++) {
    var amtin = amount[index].value;
    sum = +sum + +amtin;
  }

  document.getElementById("Ftotal").value = sum;
}

$(document).ready(function () {
  $(".dropdown-toggle").click(function () {
    $(this).next(".dropdown-menu").slideToggle();
  });
});

// $('#myDropdown').on('show.bs.dropdown', function  () {
//     // do something…
//     if(this.value == "Credit"){
//         CalAmt(value)
//     }

//   })
