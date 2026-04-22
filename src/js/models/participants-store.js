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

  getActive() {
    return participants.filter(p => !p.eliminated);
  },

  add(name) {
    participants.push({
      name,
      eliminated: false
    });

    save();
  },

  eliminate(name) {
    const player = participants.find(p => p.name === name);

    if (player) {
      player.eliminated = true;
      save();
    }
  },

  clear() {
    participants = [];
    save();
  },

  count() {
    return participants.length;
  },

  activeCount() {
    return this.getActive().length;
  }
};