const form = document.querySelector("#the_form");
const submit_btn = document.querySelector("button");
const message_area = document.querySelector("#message-area");

async function onSubmit(e) {
  e.preventDefault();

  const formData = {
    input_name: document.querySelector("#name").value,
    input_email: document.querySelector("#email").value,
  };

  const res = await fetch("http://localhost:3000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  console.log(data);

  message_area.textContent = `${data.input_name} | ${data.input_email}`;

  alert("Submission successful!");

  form.reset();
}

form.addEventListener("submit", onSubmit);
