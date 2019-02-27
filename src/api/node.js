import axios from 'axios';

function fDefault(res) {
    console.log(res);
}

export function postNodeIpNetworkGateway(url, ip, ip_new, ip_network, ip_gateway, fThen, fCatch){
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.post(url + '/node/ip', {ip:ip, ip_new:ip_new, ip_network:ip_network, ip_gateway:ip_gateway})
        .then(fThen)
        .catch(fCatch);
}

export function postNodeNameservers(url, ip, nameservers, fThen, fCatch){
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.post(url + '/node/nameservers', {ip:ip, nameservers:nameservers})
        .then(fThen)
        .catch(fCatch);
}

export function postNodeHostname(url, ip, hostname, fThen, fCatch) {
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.post(url + '/node/hostname', {ip: ip, hostname: hostname})
        .then(fThen)
        .catch(fCatch);
}

export function postNodeReboot(url, ip, fThen, fCatch) {
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.post(url + '/node/reboot', {ip: ip})
        .then(fThen)
        .catch(fCatch);
}

export function getNodesAll(url, fThen, fCatch) {
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    /* nodes/all can also be used as url*/
    axios.get(url + '/nodes')
        .then(fThen)
        .catch(fCatch);
}

export function getNodesMissing(url, fThen, fCatch){
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.get(url + '/nodes/missing')
        .then(fThen)
        .catch(fCatch);
}

export function getNodesExpected(url, fThen, fCatch){
    if (fThen == null)
        fThen = fDefault;
    if (fCatch == null)
        fCatch = fDefault

    axios.get(url + '/nodes/expected')
        .then(fThen)
        .catch(fCatch);
}