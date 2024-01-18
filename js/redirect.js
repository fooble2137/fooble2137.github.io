const urlParams = new URLSearchParams(window.location.search);
const destination = urlParams.get("url");

switch (destination) {
  case "discord": {
    window.location.replace("https://discord.com/users/1100806556574044260/");
    break;
  }
  case "github": {
    window.location.replace("https://github.com/fooble2137/");
    break;
  }
  case "status": {
    window.location.replace("https://fooble.instatus.com/");
    break;
  }
  default: {
    window.location.replace("/");
  }
}
