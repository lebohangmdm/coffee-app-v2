const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div>
      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`w-4`}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
