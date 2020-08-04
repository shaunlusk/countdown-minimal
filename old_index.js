import { Countdown } from "./src/Countdown";

if (typeof window !== 'undefined' && window) {
  window.SLCM = window.SLCM || {};
  window.SLCM.Countdown = Countdown;
}