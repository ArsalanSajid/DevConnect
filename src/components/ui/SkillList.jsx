function SkillList({ skills, onRemove, isEditing }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center gap-2 px-3 py-1 rounded-full border"
        >
          <span>{skill}</span>

          {isEditing && (
            <button
              onClick={() => onRemove(skill)}
              className="text-sm"
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default SkillList;