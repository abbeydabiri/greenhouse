import axios from 'axios';

var basicAuth = 'Basic ' + btoa('user:pass');
export const HTTP = axios.create({
  baseURL: ``,
  headers: {
    Authorization: basicAuth
  }
})

export function uploadFileCSV(event, app, field) {
  var reader = new FileReader();
  var selectedFile = event.target.files[0];
  event.target.value = '';
  reader.readAsDataURL(selectedFile);
  reader.onload = function () {
    if (selectedFile.size > 10240000) {
      app.fileError = "file must be less than 10mb";
    } else {
      console.log(selectedFile.type);
      switch (selectedFile.type) {
        default:
        app[field] = {
            "uuid": app[field].uuid,
            "filename": selectedFile.name,
            "file": reader.result
          }
          // app.fileError = "file must be a csv";
          break
      }
    }
  };
  reader.onerror = function (error) {
    app.fileError = "error:" + error;
  };
}
