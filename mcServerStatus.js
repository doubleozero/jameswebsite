MinecraftAPI.getServerStatus('135.84.96.24', {
    port: 25565
}, function (err, status) {
    if (err) {
        return document.querySelector('.server-status').innerHTML = 'Error loading status';
    }
    document.querySelector('.server-online').innerHTML = status.online ? 'up' : 'down';
});
