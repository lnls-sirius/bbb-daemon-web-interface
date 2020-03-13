import axios from 'axios';

function fDefault(res) {
    console.log(res);
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
