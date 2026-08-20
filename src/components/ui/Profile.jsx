import { useState } from "react";
import SkillList from "./SkillList";
import ProfileEdit from "./ProfileEdit";

function Profile() {


  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const [savedName, setSavedName] = useState("");
  const [savedBio, setSavedBio] = useState("");

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [savedSkills, setSavedSkills] = useState([]);

  const [isEditing, setIsEditing] = useState(false);

 

  function handleSave() {
    setSavedName(name);
    setSavedBio(bio);
    setSavedSkills(skills);

    setIsEditing(false);
  }

  // =========================
  // ADD SKILL
  // =========================

  function handleSkill() {
    if (skill.trim() === "") {
      return;
    }

    setSkills([...skills, skill]);
    setSkill("");
  }

  // =========================
  // REMOVE SKILL
  // =========================

  function removeSkill(skillToRemove) {
    setSkills(
      skills.filter((skill) => skill !== skillToRemove)
    );
  }

  // =========================
  // CANCEL EDITING
  // =========================

  function handleCancel() {
    setName(savedName);
    setBio(savedBio);
    setSkills(savedSkills);

    setIsEditing(false);
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">

      <h1 className="text-3xl font-bold mb-6">
        Profile
      </h1>

      {/* =================================
          EDIT MODE
          ================================= */}

      {isEditing ? (
        <ProfileEdit
    name={name}
    bio={bio}
    skill={skill}
    setName={setName}
    setBio={setBio}
    setSkill={setSkill}
    handleSave={handleSave}
    handleSkill={handleSkill}
    handleCancel={handleCancel}
    skills={skills}
    onRemove={removeSkill}
  />
      ) : (

        /* =================================
           VIEW MODE
           ================================= */

        <div>

          <h2 className="text-2xl font-bold mt-6">
            {savedName || "Your Name"}
          </h2>

          <p className="text-gray-600 mt-2">
            {savedBio || "Tell people something about yourself."}
          </p>

          {/* SAVED SKILLS */}

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Skills
          </h3>

          <SkillList skills={savedSkills} />

          {/* EDIT BUTTON */}

          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white mt-6"
          >
            Edit Profile
          </button>

        </div>
      )}

    </div>
  );
}

export default Profile;