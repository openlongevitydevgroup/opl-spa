import getRequest from "../../../utils/functions/getRequest";

async function getAnnotations(id) {
    const url = process.env.REACT_APP_ANNOTATIONS_ENDPOINT
    // Request for theory 
    const theory = await getRequest(`${url}${id}/theory`);
    return {theory}
}

export default getAnnotations; 