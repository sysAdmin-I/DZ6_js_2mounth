const input = document.getElementById("input");
const createBtn = document.getElementById("create_button");
const textList = document.getElementById("text_list");

const createText = () => {
  const text = input.value.trim();
  if (!text) return alert("Enter text...");

  const text1 = text.split("").reverse().join("");

  const div = document.createElement("div");
  div.setAttribute("class", "block_text");


  const textElement = document.createElement("h3");
  textElement.textContent = text1;

  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit_button");
  editButton.textContent = "Edit";

  editButton.addEventListener("click", () => {
    const text2 = prompt("enter new text...", text);
    if (text2) {
      const text3 = text2.split("").reverse().join("");
      textElement.textContent = text3;
    }
  });

  /*Использовал для этого кода ранее созданный код Todo_list ,
  и на его основе написал этот код , который автоматически
  будет переворачивать и вводить текст, немного изменил стиль*/

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete_button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    textList.removeChild(div);
  });

  div.append(textElement);
  div.append(editButton);
  div.append(deleteButton);
  textList.append(div);

  input.value = "";
};

createBtn.addEventListener("click", createText);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") createText();
});