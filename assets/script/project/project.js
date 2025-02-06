var dataJson = [
  {
    "img": "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    "title": "Online Electronic Store: Online Electronics Store",
    "paragraph": "The Online Electronic Store is a web application built with Java SE, Java EE, JSP, Servlets, HTML, CSS, and CRUD operations. It features an Admin Panel for managing products and orders, and a Customer Panel for browsing and purchasing electronics.",
    "url": ""
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/5806/5806364.png",
    "title": "Shayari App:",
    "paragraph": "A mobile app developed in Android Studio using Kotlin, allowing users to browse and share beautiful poetry.",
    "url": "https://github.com/javedcodez/Shayari-app"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
    "title": "Text to Speech Converter",
    "paragraph": "A web application that converts written text into speech. Users can input text, select a voice type, and listen to the conversion. Built using HTML, CSS, and JavaScript, it offers a simple and intuitive interface for text-to-speech functionality.",
    "url": "https://github.com/javedcodez/TextToVoice-Converter"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/2156/2156009.png",
    "title": "Marks Percentage Calculator & Download Result.",
    "paragraph": "HTML, CSS, Js (lib- jspdf, html2canvas)",
    "url": ""
  }
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content; cursor: pointer;
    "
    >
    <div
      style="padding: 12px; height: 200px;"
      class="project-card progress mb-5 align-items-center">
      <div class="mt-3 ms-3 row">
    
        <h2 style="color: txt-color; font-size: medium"><b>${item.title}</b></h2>
        <p style="color: txt-color; font-size: small">
        ${item.paragraph}
        </p>
        <a
        rel="noopener"
        href="${item.url}"
        target="_blank"
        title="${item.title}">
        <button type="button" class="btn btn-secondary">
          View
        </button></a>
      </div>
    </div>
    </div>`;
})
document.getElementById('project-container').innerHTML = raw_html;