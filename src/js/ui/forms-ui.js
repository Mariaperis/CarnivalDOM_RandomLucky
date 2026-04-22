const form = document.getElementById("nameForm");
const input = document.getElementById("nameInput");
const list = document.getElementById("nameList");
const clearBtn = document.getElementById("clearBtn");

export function getFormElements() {
  return { form, input, list, clearBtn };
}

export function renderParticipants(players) {
  list.innerHTML = "";

  players.forEach(player => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="dot gold"></span>
      <span class="${player.eliminated ? "crossed" : ""}">
        ${player.name}
      </span>
    `;

    list.appendChild(li);
  });
}

export function resetInput() {
  input.value = "";
}