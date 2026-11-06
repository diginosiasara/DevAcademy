/* STORE: única responsabilidad, persistir el progreso del alumno (localStorage con tolerancia a fallos). */
const KEY = "devacademy:done";
export const getDone = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
export const isDone = (id) => getDone().includes(id);
export function toggleDone(id) {
  const list = getDone(), i = list.indexOf(id);
  i < 0 ? list.push(id) : list.splice(i, 1);
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  return i < 0;
}
