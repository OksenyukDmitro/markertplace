const COLORS = ['red', '#2e5750', 'blue', '#688500', '#700270'];
export default function randomColor() {
   
    return COLORS[Math.floor(Math.random() * COLORS.length)];
};