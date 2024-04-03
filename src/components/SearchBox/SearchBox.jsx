import css from "./SearchBox.module.css";

export default function SearchBox({ inputValue, handleChange }) {
  return (
    <div className={css.inputBlock}>
      <label className={css.description}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
