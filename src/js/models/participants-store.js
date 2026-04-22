const STORAGE_KEY = "randomLuckyParticipants";

let participants = load();

function load() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
}

export const ParticipantsStore = {
  getAll() {
    return [...participants];
  },

  add(name) {
    participants.push(name);
    save();
  },

  clear() {
    participants = [];
    save();
  },

  count() {
    return participants.length;
  }
};