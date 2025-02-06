const checkEmailIsValid = (email) => {
    let emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailReg.test(email);
  };
  
  document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await setEmail();
    });
  
  });
  
  async function setEmail() {
    const responseText = document.getElementById("response-text");
    const email = document.getElementById("Email").value.trim();
    const message = document.getElementById("Message").value.trim();
    const emailUrl = "https://script.google.com/macros/s/AKfycbwJj8H1BxwR6jshPkx_dwXpZjrSFpNANE23NEqHBU0PB-rXEwfA-GGNoDYPSRRkJzK0jg/exec";
  
    if (!email || !message) {
      responseText.innerText = "Please fill both the fields.";
      return;
    }
  
    if (!checkEmailIsValid(email)) {
      responseText.innerText = "Enter a valid email address.";
      return;
    }
  
    const formData = new FormData();
    formData.set("Name", "@PORTFOLLIO");
    formData.set("Email", email);
    formData.set("Request", message);
  
    responseText.innerText = "Sending...";
  
    try {
      const response = await fetch(emailUrl, {
        method: "POST",
        body: formData,
      }).catch((error) => {
        throw error; // throw a text
      });
  
      const result = await response.json();
  
      responseText.innerText = `${JSON.stringify(result)}`;
  
      setTimeout(resetTheForm, 2000);
    } catch (error) {
      responseText.innerText = "Something went wrong, try again. " + error;
    }
  }
  
  function resetTheForm() {
    document.getElementById("response-text").innerText = "";
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
  }