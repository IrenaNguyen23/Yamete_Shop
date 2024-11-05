import axios from "axios";
let API_URL = "http://localhost:8080/api";
function callApi(endpoint, method = "GET", body) {
    return axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((e) => {
        console.log(e)
    });
}
export function GET_ALL(endpoint) {
    return callApi(endpoint, "GET");
}
export function GET_PAGE(endpoint, page = 0, size = 10, categoryId = null) {
    let url = `${endpoint}?page=${page}&size=${size}`;
    
    if (categoryId !== null) {
        url += `&categoryId=${categoryId}`;
    }
    return callApi(url, "GET");
}
export function GET_ID(endpoint, id) {
    return callApi(endpoint + "/" + id, "GET")
}
export function POST_ADD(endpoint, data) {
    return callApi(endpoint, "PUT", data);
}
export function PUT_EDIT(endpoint, data) {
    return callApi(endpoint, "PUT", data);
}
export function DELETE_ID(endpoint) {
    return callApi(endpoint, "DELETE");
}