export default function generateIdForRecord() {
  return Math.random().toString(32).slice(2).substr(0, 5);
}
