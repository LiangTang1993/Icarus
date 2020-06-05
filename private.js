var host = window.location.host

export default {
    remote: {
        API_SERVER: '//' + host,
        WS_SERVER: 'ws://' + host + '/ws'
    }
}
