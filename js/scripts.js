$(document).ready(function() {
  $("form#date").submit(function() {

    var nameok = false;
    var emailok = false;

    var name = $("input#name").val();
    var email = $("input#email").val();

    if (name) {
      nameok = true;
    }

    if(email) {
      emailok = true;
    }

    if (nameok && emailok) {
      // alert("if: nameok=" + nameok + ", emailok=" + emailok);
    } else {
      alert("else: nameok=" + nameok + ", emailok=" + emailok);

    }

    if ($('input[id="#male"]:checked').val()) {
      alert("male");
    } else if ($('input[id="#female"]:checked').val());{
      alert("female");
    } else if ($('input[name="gender",id="#genderneutral"]:checked').val()) {
      alert("neutral")
    }
  });
});
