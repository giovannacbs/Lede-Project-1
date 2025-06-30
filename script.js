// D3 image update logic
d3.select("#step0").on('stepin', function () {
  d3.select("#scrollyPhoto").attr("src", "Map-Images/route.jpeg");
});

d3.select("#step1").on('stepin', function () {
  d3.select("#scrollyPhoto").attr("src", "Map-Images/all.jpeg");
});

d3.select("#step2").on('stepin', function () {
  d3.select("#scrollyPhoto").attr("src", "Map-Images/transports_red.jpeg");
});

d3.select("#step3").on('stepin', function () {
  d3.select("#scrollyPhoto").attr("src", "Map-Images/transports.jpeg");
});

// Scrollama configuration
const scroller = scrollama();

scroller
  .setup({
    step: "#scrolly .scrolly-overlay .step",
    offset: 0.5,
    debug: false
  })
  .onStepEnter(function ({ element, index, direction }) {
    const event = new CustomEvent('stepin', { detail: { direction: direction } });
    element.dispatchEvent(event);
  })
  .onStepExit(function ({ element, index, direction }) {
    const event = new CustomEvent('stepout', { detail: { direction: direction } });
    element.dispatchEvent(event);
  });

window.addEventListener("resize", scroller.resize);
