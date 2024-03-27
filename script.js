window.onload = function () {
  var rows = document.querySelectorAll(".row");

  rows.forEach((row) => {
    var cols = row.querySelectorAll(".col");
    var totalCols = cols.length;
    console.log(totalCols);
    var calculatedGridTemplate = "";

    cols.forEach((col) => {
      var colClass = col.classList[0];
      var colSpan = parseInt(colClass.split("-")[1]);

      colunasOcupadas = totalCols / colSpan;
      console.log(totalCols);
      col.style.gridColumn = "span " + colunasOcupadas;

      //   calculatedGridTemplate += "calc(100vw / " + (totalCols + 1) + ")";
    });

    row.style.gridTemplateColumns = calculatedGridTemplate.trim();
  });
};
