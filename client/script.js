const form = document.querySelector("#the_form");
const message_area = document.querySelector("#message-area");

async function onSubmit(e) {
  e.preventDefault();

  try {
    const formData = {
      input_name: document.querySelector("#name").value,
      input_email: document.querySelector("#email").value,
    };

    const res = await fetch("https://form-backend.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    message_area.textContent = `${data.data.input_name} | ${data.data.input_email}`;

    alert("Submission successful!");
    form.reset();
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
}
