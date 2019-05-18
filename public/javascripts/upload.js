const btnUpload = document.getElementById("sendbtn");

btnUpload.addEventListener("click", ()=> {
    let form = document.getElementById("upload_image");
    let img = document.getElementById("profile");
    let data = new FormData();
    data.append("img", img.files[0]);

    let request = new XMLHttpRequest();
        request.open('POST', "/upload/save", true);
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText)
            }
        }
        request.send(data);
});