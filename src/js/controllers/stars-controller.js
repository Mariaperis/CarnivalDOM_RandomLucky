import { renderStars } from "../ui/stars-ui.js";

export function initStars() {
  const total =
    window.innerWidth < 768 ? 25 : 42;

  renderStars(total);
}