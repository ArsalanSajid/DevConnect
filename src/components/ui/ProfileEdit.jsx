import SkillList from "./SkillList";

function ProfileEdit({
  name,
  bio,
  skill,
  setName,
  setBio,
  setSkill,
  handleSave,
  handleSkill,
  handleCancel,
  skills,
  onRemove,
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Edit Profile
      </h2>

      {/* INPUTS */}

      <div className="space-y-3">

        <input
          type="text"
          placeholder="Name"
          value={name}
          className="w-full border rounded-lg p-2"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Bio"
          value={bio}
          className="w-full border rounded-lg p-2"
          onChange={(event) => {
            setBio(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Add skill"
          value={skill}
          className="w-full border rounded-lg p-2"
          onChange={(event) => {
            setSkill(event.target.value);
          }}
        />

      </div>

      {/* BUTTONS */}

      <div className="flex gap-3 mt-4">

        <button
          onClick={handleSave}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Save Profile
        </button>

        <button
          onClick={handleSkill}
          className="px-4 py-2 rounded-lg bg-green-600 text-white"
        >
          Add Skill
        </button>

        <button
          onClick={handleCancel}
          className="px-4 py-2 rounded-lg border"
        >
          Cancel
        </button>

      </div>

      {/* SKILLS */}

      <h3 className="text-lg font-semibold mt-6 mb-3">
        Your Skills
      </h3>

      <SkillList
        skills={skills}
        onRemove={onRemove}
        isEditing={true}
      />
    </div>
  );
}

export default ProfileEdit;