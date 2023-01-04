$(document).ready(function () {
  const hour9 = $("#hour-9");
  const hour10 = $("#hour-10");
  const hour11 = $("#hour-11");
  const hour12 = $("#hour-12");
  const hour13 = $("#hour-13");
  const hour14 = $("#hour-14");
  const hour15 = $("#hour-15");
  const hour16 = $("#hour-16");
  const hour17 = $("#hour-17");
  var timeDisplayEl = $("#time-display");
  const saveBtn = $(".saveBtn");

  function displayTime() {
    var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplayEl.text(rightNow);
  }

  const hourIds = [
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17",
  ];

  setInterval(() => {
    hourIds.forEach((id) => {
      const currentHour = dayjs().hour();
      const hour = id.split("-")[1];

      const element = document.getElementById(id);

      element.classList.remove("past", "present", "future");

      if (hour < currentHour) {
        element.classList.add("past");
      } else if (hour > currentHour) {
        element.classList.add("future");
      } else {
        element.classList.add("present");
      }
    });
  }, 1000);

  $(document).ready(function () {
    const hourElements = [
      $("#hour-9"),
      $("#hour-10"),
      $("#hour-11"),
      $("#hour-12"),
      $("#hour-13"),
      $("#hour-14"),
      $("#hour-15"),
      $("#hour-16"),
      $("#hour-17"),
    ];

    hourElements.forEach(function (hourElement) {
      const id = hourElement.attr("id");
      const savedValue = localStorage.getItem(id);
      if (savedValue) {
        hourElement.find(".description").val(savedValue);
      }
    });
  });

  saveBtn.on("click", function () {
    const description = $(this).siblings(".description").val();
    const id = $(this).parent().attr("id");
    localStorage.setItem(id, description);
    alert("Your imput has been saved to local storage.");
  });

  displayTime();
  setInterval(displayTime, 1000);
});
