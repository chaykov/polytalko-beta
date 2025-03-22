"use client";

import { useState } from "react";
import { updateUserEditProfile } from "@/lib/actions/users";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [otherLanguages, setOtherLanguages] = useState("");
  const [bio, setBio] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🔍 Wysyłane dane:", {
      name,
      country,
      age,
      nativeLanguage,
      otherLanguages,
      bio,
    });

    const result = await updateUserEditProfile({
      name,
      age,
      country,
      nativeLanguage,
      otherLanguages,
      bio,
    });

    if (result.success) {
      setSuccess(true);
    } else {
      console.error("❌ Błąd:", result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <div>
        <label className="block font-medium">Imię:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <label className="block font-medium">Wiek:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="w-full border rounded px-3 py-2"
        />

        <label className="block font-medium">Kraj:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <label className="block font-medium">Język ojczysty:</label>
        <input
          type="text"
          value={nativeLanguage}
          onChange={(e) => setNativeLanguage(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <label className="block font-medium">Inne języki:</label>
        <input
          type="text"
          value={otherLanguages}
          onChange={(e) => setOtherLanguages(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <label className="block font-medium">Bio:</label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Zapisz
      </button>

      {success && (
        <p className="text-green-600 font-medium">✅ Zaktualizowano profil!</p>
      )}
    </form>
  );
}
