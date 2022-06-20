import CSS from "./loader.module.css";
function Loader() {
  return (
    <div class={`${CSS.spinner} w-50 m-auto mt-5`}>
      <div class={`${CSS.dot}`}></div>
      <div class={`${CSS.dot}`}></div>
      <div class={`${CSS.dot}`}></div>
      <div class={`${CSS.dot}`}></div>
      <div class={`${CSS.dot}`}></div>
    </div>
  );
}

export default Loader;
