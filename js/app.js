const buttonShowIp = document.querySelector("#btn-show-ip")
const buttonCopyIp = document.querySelector("#btn-copy");

buttonCopyIp.style.opacity = "0.7"
buttonCopyIp.disabled = true

buttonShowIp.addEventListener("click",()=>{
    loadIpData()
    buttonCopyIp.disabled = false
    buttonCopyIp.style.opacity = "1"


})


async function loadIpData() {
  try {
    const response = await fetch("https://ipapi.co/json/");

    const data = await response.json();

    document.getElementById("ip").textContent = data.ip;

    document.getElementById("country").textContent = data.country_name;

    document.getElementById("region").textContent = data.region;

    document.getElementById("city").textContent = data.city;

    document.getElementById("isp").textContent = data.org;
  } catch (error) {
    console.error(error);

    document.getElementById("ip").textContent = "Unavailable";
  }
}

function copyIp() {
  const ip = document.getElementById("ip").textContent;

  navigator.clipboard.writeText(ip);

  button.textContent = "Copied!";

  setTimeout(() => {
    button.textContent = "Copy IP";
  }, 2000);
}

function loadBrowserInfo() {
  const userAgent = navigator.userAgent;

  let browser = "Unknown";

  if (userAgent.includes("Firefox")) {
    browser = "Firefox";
  } else if (userAgent.includes("Edg")) {
    browser = "Microsoft Edge";
  } else if (userAgent.includes("Chrome")) {
    browser = "Google Chrome";
  } else if (userAgent.includes("Safari")) {
    browser = "Safari";
  }

  document.getElementById("browser").textContent = browser;
}

function loadOperatingSystem() {
  const userAgent = navigator.userAgent;

  let os = "Unknown";

  if (userAgent.includes("Windows")) {
    os = "Windows";
  } else if (userAgent.includes("Android")) {
    os = "Android";
  } else if (userAgent.includes("iPhone")) {
    os = "iOS";
  } else if (userAgent.includes("Mac")) {
    os = "macOS";
  } else if (userAgent.includes("Linux")) {
    os = "Linux";
  }

  document.getElementById("os").textContent = os;
}

loadBrowserInfo();
loadOperatingSystem();
