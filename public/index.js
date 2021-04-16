if (typeof location !== 'undefined') {
  // global.window = {}

init();

async function init() {
  const workout = await API.getLastWorkout();
  console.log(workout);
  if (location.search.split("=")[1] === undefined) {
    
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}
}
