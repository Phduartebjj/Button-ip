async function loadIpData() {

    try {

        const response =
            await fetch("https://ipapi.co/json/");

        const data =
            await response.json();

        document.getElementById("ip").textContent =
            data.ip;

        document.getElementById("country").textContent =
            data.country_name;

        document.getElementById("region").textContent =
            data.region;

        document.getElementById("city").textContent =
            data.city;

        document.getElementById("isp").textContent =
            data.org;

    } catch (error) {

        document.getElementById("ip").textContent =
            "Unavailable";
    }
}

function copyIp() {

    const ip =
        document.getElementById("ip").textContent;

    navigator.clipboard.writeText(ip);
}

loadIpData();
