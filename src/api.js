import axios from 'axios'

function fDefault(res) {
    console.log(res);
}

export function setNodeHostname(url, ip, hostname, fThen, fCatch) {
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.post(url + '/node/hostname', {
            ip: ip,
            hostname: hostname
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}

export function rebootNode(url, ip, fThen, fCatch) {
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.post(url + '/node/reboot', {
            ip: ip
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
export function getNodes(url, fThen, fCatch) {
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.get(url + '/nodes')
        .then(fThen)
        .catch(fCatch);
}